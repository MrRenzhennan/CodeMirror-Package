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
