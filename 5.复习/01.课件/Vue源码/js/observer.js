function Observer(data) {
    // return new Observer(vm._data);
    // this=>Observer的实例对象,不是vm!!!
    // 保存原data数据到this上
    this.data = data;
    this.walk(data);
    // this.walk(vm._data);
}

Observer.prototype = {
    constructor: Observer,
    walk: function(data) {
        // ob.walk(vm._data); data=>vm._data
        var me = this;
        // 遍历data数据 
        // ["msg"]
        Object.keys(data).forEach(function(key) {
            me.convert(key, data[key]);
            // ob.convert("msg", "hello MVVM");
        });
    },
    convert: function(key, val) {
        // ob.convert("msg", "hello MVVM");
        this.defineReactive(this.data, key, val);
        // this.defineReactive(vm._data, "msg", "hello MVVM");
    },

    // 将属性定义成响应式数据的方法
    defineReactive: function(data, key, val) {
        // this.defineReactive(vm._data, "msg", "hello MVVM");
        // data=>vm._data key=>"msg"  val=>"hello MVVM"
        // 每一个响应式属性（data中的数据）
        // 都通过闭包的方式保存了一个dep
        var dep = new Dep();
        // 递归遍历
        // 如果当前val是一个对象数据，也要变成响应式
        // 先将里面属性变成响应式，在将外面属性变成响应式
        var childObj = observe(val);
        // var childObj = observe("hello MVVM");

        // 将data的数据重新定义，定义成响应式
        Object.defineProperty(data, key, {
            enumerable: true, // 可枚举
            configurable: false, // 不能再define
            get: function() {
                if (Dep.target) {
                    // 建立dep和watcher的关系
                    dep.depend();
                }
                return val;
            },
            set: function(newVal) {
                if (newVal === val) {
                    return;
                }
                // 更新data数据
                val = newVal;
                // 新的值是object的话，进行监听
                // 新的数据劫持
                childObj = observe(newVal);
                // 通知订阅者
                // 通知数据的dep对应所有的watcher，调用cb来更新用户界面
                dep.notify();
            }
        });

        // 定义属性描述符的时候,value和get/set是互斥的
        // this._data.msg=>"hello MVVM",将msg属性重新定义,丢掉原来的value,
        // 但其实在外层函数已经通过闭包缓存value了
        // Object.defineProperty(vm._data, "msg", {
        //     enumerable: true, // 可枚举
        //     configurable: false, // 不能再define
        //     get: function() {
        //         if (Dep.target) {
        //             // 建立dep和watcher的关系
        //             dep.depend();
        //         }
        //         return val;
        //     },
        //     set: function(newVal) {
            //      如果更新的数据与原来的相同,就不会触发update阶段的
        //         if (newVal === val) {
        //             return;
        //         }
        //         // 更新data数据
        //         val = newVal;
        //         // 新的值是object的话，进行监听
        //         // 新的数据劫持
        //              每次对响应式属性进行赋值,对象内部的结果都会是响应式
        //          this.msg.a=123新增属性(不是响应式)
        //          this.msg={...this.msg,a:123}(a就是响应式)
        //         childObj = observe(newVal);
        //         // 通知订阅者
        //         // 通知数据的dep对应所有的watcher，调用cb来更新用户界面
        //         dep.notify();
        //     }
        // });
    }
};

function observe(value, vm) {
    // observe(vm._data, vm); value=>vm._data vm=>vm
    if (!value || typeof value !== 'object') {
        return;
    }

    return new Observer(value);
    // return new Observer(vm._data);
};


var uid = 0;

function Dep() {
    // 唯一id
    this.id = uid++;
    // 保存watcher的容器
    this.subs = [];
}

Dep.prototype = {
    addSub: function(sub) {
        // dep.addSub(watcher);
        this.subs.push(sub);
        // dep.subs.push(watcher);
    },

    depend: function() {
        // Dep.target 是 watcher
        // watcher.addDep(dep)
        Dep.target.addDep(this);
        // watcher.addDep(dep);
    },

    removeSub: function(sub) {
        var index = this.subs.indexOf(sub);
        if (index != -1) {
            this.subs.splice(index, 1);
        }
    },

    notify: function() {
        // 遍历watcher
        this.subs.forEach(function(sub) {
            // 调用watcher.update
            sub.update();
        });
    }
};

Dep.target = null;