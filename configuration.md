# 配置项
这些是受支持的选项:  

### value
>value: string|CodeMirror.Doc    

编辑器的起始值。 可以是字符串，也可以是文档对象

### mode
> string|object  

使用的模式。 如果没有给出，这将默认为加载的第一个模式。 它可以是一个字符串，可以简单地命名模式，也可以是与模式关联的MIME类型。 或者，它可以是包含模式配置选项的对象，具有命名模式的name属性（例如{name：“javascript”，json：true}）。 每种模式的演示页面都包含有关模式支持的配置参数的信息。 您可以通过检查CodeMirror.modes和CodeMirror.mimeModes对象来询问CodeMirror已定义了哪些模式和MIME类型。 第一个将模式名称映射到它们的构造函数，第二个将MIME类型映射到模式规范。  

### lineSeparator
>lineSeparator: string|null  

显式设置编辑器的行分隔符。 默认情况下（值为null），文档将在CRLF以及单独的CR和LF上拆分，并且单个LF将在所有输出中用作行分隔符（例如getValue）。 给定特定字符串时，只会在该字符串上拆分行，默认情况下，输出将使用相同的分隔符。

### theme
>theme: string  

用于编辑器样式化的主题。您必须确保加载了定义相应.cm-s-[name]样式的CSS文件(请参阅发行版中的主题目录)。默认值是“default”，颜色包含在codemirro .css中。可以同时使用多个主题类，例如“foo bar”将cm-s-foo和cm-s-bar类分配给编辑器。  

### indentUnit
>indentUnit: integer  

一个块应该缩进多少空格(在编辑语言中这是什么意思)。默认值是2  

### smartIndent
>smartIndent: boolean  

 是否使用模式提供的上下文相关缩进（或者只是缩进与之前的行相同）。 默认为true。  
 
 ### tabSize
 >tabSize: integer  
 
Tab表示几个空格。默认为4。  

### indentWithTabs
>indentWithTabs: boolean  

是否在缩进时，第一个N * tabSize空格应替换为N个制表符。 默认值为false。

### electricChars
>electricChars: boolean  

配置编辑器在键入可能更改其正确缩进的字符时是否应重新缩进当前行（仅在模式支持缩进时才有效）。 默认为true。  

### specialChars
>specialChars: RegExp  

一个正则表达式，用于确定哪些字符应该被特殊占位符替换。主要用于非打印特殊字符。默认值为/ [ \ u0000 - \ u001f \ u007f - \ u009f \ u00ad \ u061c \ u200b - \ u200f \ u2028 \ u2029 \ ufeff ] /。  

















