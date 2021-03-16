/**
 * 构造函数，相当于vue
 * @param {*} options 配置对象
 */
function MVVM(options) {
  // beforeCreated执行位置
  /*
  实参options
  {
    el: "#app",
    data: {
      msg: "hello MVVM",
    },
  }
  */

  // 给实例对象vm添加$options，值是配置对象
  this.$options = options || {};
  // 给实例对象vm添加_data（原数据），值就是配置对象中data数据
  // 定义变量data，值就是配置对象中data数据
  var data = this._data = this.$options.data;
  // var data = (this._data = this.$options.data);
  // var data = (this._data = (this.$options.data));
  // var data = this.$options.data; this._data=this.$options.data;




  // 缓存this，为了后面函数可以使用
  var me = this;

  // 重点一:
  // 数据代理：将data中数据代理到this上
  // 遍历data数据提取所有key，对其数据代理
  // Object.keys(data)=>["msg"]
  Object.keys(data).forEach(function (key) {
    // 数据代理的方法
    me._proxyData(key);
    // vm._proxyData("msg");
  });

  // 代理计算属性
  this._initComputed();

  //重点二:
  // 数据劫持（数据绑定）：将data数据（_data, 原数据）重新定义，定义成响应式
  observe(data, this);
  //created执行位置


  // observe(vm._data, vm);
  // 模板解析：
  // 1. 将插值语法/指令语法解析
  // 2. new Watcher建立dep和watcher建立联系，才能变成响应式
  // 注意:vue1和vue2的区别:
  //  vue1没传入el,会默认绑定body(没传也会在页面上显示)
  //  vue2没传入el,不会挂载(没传不会在页面上显示)
  this.$compile = new Compile(options.el || document.body, this);
  // vm.$compile = new Compile("#app", vm);
}

// 构造函数的原型对象
MVVM.prototype = {
  constructor: MVVM,
  $watch: function (key, cb, options) {
    new Watcher(this, key, cb);
  },
  // 数据代理的方法：将data数据代理到vm上
  _proxyData: function (key, setter, getter) {
    // vm._proxyData("msg"); 隐式调用
    // key => "msg" setter, getter都是undefined
    // this._proxyData(key) 所以_proxyData的this指向vm
    var me = this;
    setter =
      setter ||
      // 将data数据代理到vm上
      Object.defineProperty(me, key, {
        configurable: false, // 不能重新配置和删除 
        enumerable: true, // 可以被枚举
        get: function proxyGetter() {
          // 代理属性的读方法
          // 实际上返回是原数据的值
          return me._data[key];
        },
        set: function proxySetter(newVal) {
          // 代理属性的写方法
          // 实际上更新原数据的值
          me._data[key] = newVal;
        },
      });

      // 元属性,访问描述符
      // Object.defineProperty(vm, "msg", {
      //   configurable: false, // 不能重新配置和删除 
      //   enumerable: true, // 可以被枚举
      //   get: function proxyGetter() {
      //     // 代理属性的读方法
      //     // 实际上返回是原数据的值
      //     return vm._data["msg"];
      //   },
      //   set: function proxySetter(newVal) {
      //     // 代理属性的写方法
      //     // 实际上更新原数据的值
      //     vm._data["msg"] = newVal;
      //   },
      // });
  },

  _initComputed: function () {
    var me = this;
    var computed = this.$options.computed;
    if (typeof computed === "object") {
      Object.keys(computed).forEach(function (key) {
        Object.defineProperty(me, key, {
          get:
            typeof computed[key] === "function"
              ? computed[key]
              : computed[key].get,
          set: function () {},
        });
      });
    }
  },
};
