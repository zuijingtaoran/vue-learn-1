# vue-learn-1

绑定 value

对于单选按钮，勾选框及选择框选项，v-model 绑定的 value 通常是静态字符串（对于勾选框是逻辑值）：

<!-- 当选中时，`picked` 为字符串 "a" -->
<input type="radio" v-model="picked" value="a">

<!-- `toggle` 为 true 或 false -->
<input type="checkbox" v-model="toggle">

<!-- 当选中时，`selected` 为字符串 "abc" -->
<select v-model="selected">
  <option value="abc">ABC</option>
</select>
但是有时我们想绑定 value 到 Vue 实例的一个动态属性上，这时可以用 v-bind 实现，并且这个属性的值可以不是字符串。

Checkbox

<input
  type="checkbox"
  v-model="toggle"
  v-bind:true-value="a"
  v-bind:false-value="b">
// 当选中时
vm.toggle === vm.a
// 当没有选中时
vm.toggle === vm.b
Radio


// 当选中时
vm.pick === vm.a
Select Options

<select v-model="selected">
  <!-- 对象字面量 -->
  <option v-bind:value="{ number: 123 }">123</option>
</select>
// 当选中时
typeof vm.selected // -> 'object'
vm.selected.number // -> 123
参数特性

lazy

在默认情况下，v-model 在input 事件中同步输入框值与数据，可以添加一个特性 lazy，从而改到在 change 事件中同步：

<!-- 在 "change" 而不是 "input" 事件中更新 -->
<input v-model="msg" lazy>
number

如果想自动将用户的输入转为 Number 类型（如果原值的转换结果为 NaN 则返回原值），可以添加一个特性 number：

<input v-model="age" number>
debounce

debounce 设置一个最小的延时，在每次敲击之后延时同步输入框的值与数据。如果每次更新都要进行高耗操作（例如在输入提示中 Ajax 请求），它较为有用。

<input v-model="msg" debounce="500">
edit sjdksdkmckdm

edit sjdksdkmckdm
注意 debounce 参数不会延迟 input 事件：它延迟“写入”底层数据。因此在使用 debounce 时应当用 vm.$watch() 响应数据的变化。若想延迟 DOM 事件，应当使用 debounce 过滤器。

http://cn.vuejs.org/guide/forms.html#绑定-value
