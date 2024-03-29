function Watcher(vm, expOrFn, cb) {
  
  // new Watcher(vm, "msg", function (value, oldValue) {
  //   textUpdater && textUpdater(node, value, oldValue);
  // });

  // this=>watcher实例
  // 更新用户界面的函数
  this.cb = cb;
  this.vm = vm;
  this.expOrFn = expOrFn;
  // 保存dep的容器
  this.depIds = {};

  if (typeof expOrFn === "function") {
    this.getter = expOrFn;
  } else {
    this.getter = this.parseGetter(expOrFn.trim());
    // this.getter = this.parseGetter("msg");
    // this.getter=function getter(obj) {
    //   for (var i = 0, len = exps.length; i < len; i++) {
    //     if (!obj) return;
    //     // 读取属性 --> 触发数据代理的get --> 触发数据劫持的get
    //     obj = obj[exps[i]];
    //     第一次循环:obj = vm["msg"]; obj._data.msg
    //     第二次循环:obj = vm["msg"]['a'];
    //   }
    //   return obj;
    // };
  }

  // 得到当前表达式的值，存在this.value(代表上一次的值)
  // 建立dep和watcher之间的关系
  this.value = this.get();
}

Watcher.prototype = {
  constructor: Watcher,
  update: function () {
    this.run();
  },
  run: function () {
    // 得到当前表达式的值，存在this.value(代表上一次的值)
    // 建立dep和watcher之间的关系（如果已经建立了，就不会了）
    var value = this.get();
    // 上一次表达式的值
    var oldVal = this.value;
    if (value !== oldVal) {
      // 更新值
      this.value = value;
      // 更新用户界面
      this.cb.call(this.vm, value, oldVal);
    }
  },
  addDep: function (dep) {
    // 1. 每次调用run()的时候会触发相应属性的getter
    // getter里面会触发dep.depend()，继而触发这里的addDep
    // 2. 假如相应属性的dep.id已经在当前watcher的depIds里，说明不是一个新的属性，仅仅是改变了其值而已
    // 则不需要将当前watcher添加到该属性的dep里
    // 3. 假如相应属性是新的属性，则将当前watcher添加到新属性的dep里
    // 如通过 vm.child = {name: 'a'} 改变了 child.name 的值，child.name 就是个新属性
    // 则需要将当前watcher(child.name)加入到新的 child.name 的dep里
    // 因为此时 child.name 是个新值，之前的 setter、dep 都已经失效，如果不把 watcher 加入到新的 child.name 的dep中
    // 通过 child.name = xxx 赋值的时候，对应的 watcher 就收不到通知，等于失效了
    // 4. 每个子属性的watcher在添加到子属性的dep的同时，也会添加到父属性的dep
    // 监听子属性的同时监听父属性的变更，这样，父属性改变时，子属性的watcher也能收到通知进行update
    // 这一步是在 this.get() --> this.getVMVal() 里面完成，forEach时会从父级开始取值，间接调用了它的getter
    // 触发了addDep(), 在整个forEach过程，当前wacher都会加入到每个父级过程属性的dep
    // 例如：当前watcher的是'child.child.name', 那么child, child.child, child.child.name这三个属性的dep都会加入当前watcher

    // 判断watcher中有没有保存过dep，没有保存才执行
    if (!this.depIds.hasOwnProperty(dep.id)) {
      // 在dep中保存watcher
      // 有什么用？将来数据发生变化，能通过dep找到所有watcher从而更新
      dep.addSub(this);
      // dep.addSub(watcher);
      // 在watcher中保存dep
      // 有什么用？ 防止dep重复保存watcher
      this.depIds[dep.id] = dep;
    }
  },
  get: function () {
    // 将Dep.target赋值为当前watcher
    Dep.target = this;
    // 每次调用get会重新收集dep和watcher之间的关系
    
    // Dep.target = watcher;
    
    var value = this.getter.call(this.vm, this.vm);
    
    Dep.target = null;
    return value;
  },

  parseGetter: function (exp) {
    // this.getter = this.parseGetter("msg");
    // "msg$a"
    if (/[^\w.$]/.test(exp)) return;
    // exp person.name
    // exps ['person', 'name']
    var exps = exp.split(".");

    // 就是this.getter
    // 类似于 this._getVMVal() 得到表达式的值
    return function getter(obj) {
      for (var i = 0, len = exps.length; i < len; i++) {
        if (!obj) return;
        // 读取属性 --> 触发数据代理的get --> 触发数据劫持的get
        obj = obj[exps[i]];
      }
      return obj;
    };
  },
};
