# CodeMirror-Package
在线编辑器（将CodeMirror再次封装，避免过度配置，开箱即用）  
>基于CodeMirror
>>版本 5.42.2  
>>[官方地址](https://codemirror.net/)  
>>[官方Api](https://codemirror.net/doc/manual.html)


## 封装方法调用
```js
```

# CodeMirror介绍
CodeMirror是一个用JavaScript实现的多功能文本编辑器。它专门用于编辑代码，并带有许多语言模式和插件 ，可实现更高级的编辑功能。  
丰富的编程API和CSS 主题系统可用于自定义CodeMirror以适合您的应用程序，并使用新功能扩展它  

 这是CodeMirror   
```html
<link rel="stylesheet" href="lib/codemirror.css">
<script src="lib/codemirror.js"></script>
<script>
  var editor = CodeMirror.fromTextArea(myTextarea, {
    lineNumbers: true
  });
</script>
```
## 特点
 支持超过100种语言的开箱即用

功能强大，可组合的语言模式系统

自动完成（XML）

代码折叠

可配置的键绑定

Vim，Emacs和Sublime Text绑定

搜索和替换界面

支架和标签匹配

支持拆分视图

Linter集成

混合字体大小和样式

各种主题

能够调整大小以适应内容

内联小部件

可编程格式

使文本具有样式、只读或原始性的范围

双向文本支持

许多其他方法和插件......  

## 浏览器兼容
>Firefox	版本4及以上  

>Chrome	任何版本  

>Safari	版本5.2及以上  

>Internet Explorer/Edge  版本8及更高版本  

>Opera	版本9及以上

## 用户手册和参考指南
 CodeMirror是一个代码编辑器组件，可以嵌入到Web页面中。  
 核心库仅提供编辑器组件，不提供伴随按钮，自动完成或其他IDE功能。   
 它确实提供了丰富的API，在此基础上可以直接实现此类功能。   
 有关额外功能的可重用实现，请参阅分发中包含的[插件](https://codemirror.net/doc/manual.html#addons)和[外部托管插件列表](https://github.com/codemirror/CodeMirror/wiki/CodeMirror-addons)  
 
 CodeMirror使用特定于语言的模式。模式是JavaScript程序，可帮助用给定语言编写的文本颜色（以及可选地缩进）。该发行版有许多模式（参见 [mode](https://codemirror.net/mode/)/directory），并且为其他语言[编写新模式](https://codemirror.net/doc/manual.html#modeapi)( write new ones)并不困难  
### 基本用法
使用CodeMirror的最简单方法是简单地加载分发中lib /下的脚本和样式表，以及来自其中一个模式/目录的模式脚本  
```html
<script src="lib/codemirror.js"></script>
<link rel="stylesheet" href="lib/codemirror.css">
<script src="mode/javascript/javascript.js"></script>
```  
完成此操作后，可以像这样创建编辑器实例  
```js
var myCodeMirror = CodeMirror(document.body);
```
编辑器将被附加到文档主体，开始时为空，并使用我们加载的模式。为了更好地控制新编辑器，可以将配置对象作为第二个参数传递给CodeMirror  
```js
var myCodeMirror = CodeMirror(document.body, {
  value: "function myScript(){return 100;}\n",
  mode:  "javascript"
});
```
这将使用已经在编辑器中的代码初始化编辑器，并显式地告诉编辑器使用JavaScript模式(当加载多个模式时，该模式非常有用)。  


如果您不想将编辑器附加到元素，并且需要更多地控制它的插入方式，则CodeMirror函数的第一个参数也可以是一个函数，当给定DOM元素时，将其插入到 某处的文件。 例如，这可以用于用真正的编辑器替换textarea：  
```js
var myCodeMirror = CodeMirror(function(elt) {
  myTextArea.parentNode.replaceChild(elt, myTextArea);
}, {value: myTextArea.value});
```  
但是，对于此用例，这是使用CodeMirror的常用方法，该库提供了更强大的快捷方式  
```js
var myCodeMirror = CodeMirror.fromTextArea(myTextArea);
```  
除其他外，这将确保在提交表单（如果它是表单的一部分）时，使用编辑器的内容更新textarea的值  
有关此方法的完整描述，请参阅[API](https://codemirror.net/doc/manual.html#fromTextArea)参考资料  

### 模块加载器
CodeMirror分发中的文件包含用于在AMD或CommonJS环境中加载它们（及其依赖项）的填充程序。 如果变量exports和module存在且具有type对象，则将使用CommonJS-style require。 如果没有，但是存在一个定义了amd属性的函数，将使用AMD风格（RequireJS）。  

可以使用Browserify或类似工具使用CodeMirror静态构建模块。 或者，使用RequireJS在运行时动态加载依赖项。 这两种方法都具有以下优点：它们不使用全局命名空间，因此可以执行诸如将多个版本的CodeMirror并排加载之类的操作。  


下面是一个使用RequireJS加载CodeMirror的简单例子  
```js
require([
  "cm/lib/codemirror", "cm/mode/htmlmixed/htmlmixed"
], function(CodeMirror) {
  CodeMirror.fromTextArea(document.getElementById("code"), {
    lineNumbers: true,
    mode: "htmlmixed"
  });
});
```  
它将自动加载混合HTML模式所依赖的模式(XML、JavaScript和CSS)。不要使用RequireJS的paths选项来配置CodeMirror的path，因为它会破坏通过相对路径加载子模块。改为使用包配置选项，如  
```js
require.config({
  packages: [{
    name: "codemirror",
    location: "../path/to/codemirror",
    main: "lib/codemirror"
  }]
});
```  

### 配置项

[点我查看配置项](./configuration.md)

