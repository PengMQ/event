1: 事件的三个阶段：
 1: 捕获（主流浏览器支持，低版本的IE(IE9 以前版本)不支持）
 2: 目标
 3: 冒泡（主流浏览器也支持，IE当然支持）

 1，捕获：用户单击一个元素，事件触发顺序由外到内：父级－>自己
 2，冒泡，用户单击一个元素，事件触发顺序由里到外：自己－> 父级 

 W3C在这个斗争中，明智地做出了选择：任何发生在W3C事件模型中的事件，进入的阶段是：
 捕获－> 到达目标元素－> 冒泡

 在实际开发的时候，你可以选择配置到底是在哪个阶段处理，通过：
 document.addEventListener(event, function, useCapture)， 
 useCapture 
  1: true －> 表示在捕获阶段执行事件绑定程序
  2: false －> 表示在冒泡阶段执行事件绑定程序

2: Event 对象在 DOM Modle 和IE Model下的区别
 1: 在DOM Model中，Event对象实例是作为第一个参数传入到处理程序中的
 2: 在IE Model中，则是通过全局上下文（window.event）的event属性来获取的。
 但是让事情更糟糕的事，在这两个模型中，Event实例的内容是不相同的：
 
  1: target － 表示事件原始源 ｜ IE：srcElement
  2: relatedTarget -事件触发时的关联元素（如 mouseover 或者 mouseout）IE：toElement 和 fromElement
  3: preventDefault －该属性在IE中时不存在的，其阻止事件的默认浏览器行为。IE：需要将函数返回值设置为false： return false。
  4: stopPropagation，阻止冒泡。IE：cancelBubble ＝ true。
  5: pageX, pageY - 这两个属性在IE 中不存在， 用于获取鼠标相对于整个文档的位置。IE：clientX／Y 提供鼠标相对于窗口的位置，而scrollTop／Left则
     给出了文档滚动的位置，并且clientTop／Left给出了文档的偏移量。综合这三组变量，可以计算出IE下的 pageX和pageY。
  6: which － 键盘事件时所按的键盘码。在IE：可以通过charCode 和 keyCode属性获取。
  7: button － 鼠标事件发生时，用户单击的鼠标按键（0， 1， 2）， 在IE中对应于：1，4，2，对应实际情况的 left， middle， right。

3: 事件的委托／代理
 原理： 利用事件的冒泡机制，把事件处理程序绑在真正的目标源头的祖先元素，而不是本身。
 优点好处： 
  1: 可以大量节省内存占用，减少事件注册，比如在table上代理所有td的click事件。
  2: 可以实现当新增子对象时无需再次对其绑定事件，对于动态内容部分尤为合适
 但是，这里又出现一个问题，那就是在老版本的IE中，submit 和 change 事件根本没有冒泡。
 但是，对于submit事件可以通过如下方式进行触发：
 1: 触发type＝submit的input元素或者button元素，或者type＝image的图像元素。这些元素可以通过单击，或者有焦点时候的回车或者空格键进行触发。
 2: 在文本或者密码框里，按回车键进行触发。
 所以，可以获取click和keypress两个触发事件来获取submit事件的冒泡。

