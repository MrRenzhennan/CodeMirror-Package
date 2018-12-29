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

### specialCharPlaceholder
>specialCharPlaceholder: function(char) → Element  

给定由specialChars选项标识的特殊字符的函数，生成用于表示字符的DOM节点。 默认情况下，会显示一个红点（•），并带有标题工具提示以指示字符代码


### direction
>direction: "ltr" | "rtl"

翻转整体布局并选择基本段落方向为从左到右或从右到左。 默认为“ltr”。 CodeMirror将Unicode双向算法应用于每一行，但不自动检测基本方向 - 它设置为所有行的编辑器方向。 当基本方向与用户意图不匹配时，生成的顺序有时会出错（例如，前导和尾随标点跳转到行的错误一侧）。 因此，允许用户切换此选项对多语言输入很有帮助。  

### rtlMoveVisually
>rtlMoveVisually: boolean  

 确定通过从右到左（阿拉伯语，希伯来语）文本的水平光标移动是否是可视的（按向左箭头向左移动光标）或逻辑（按向左箭头移动到字符串中的下一个较低索引，这在视觉上是正确的 从右到左的文字）。 Windows上的默认值为false，其他平台上的默认值为true。  
 
 ### keyMap
 >keyMap: string  
 
 配置要使用的键映射。 默认值为“default”，这是codemirror.js本身中定义的唯一键映射。 在键映射目录中可以找到额外的键映射。 有关详细信息，请参阅关键映射部分  
 
 ### extraKeys
 >extraKeys: object  
 
  可用于为编辑器指定额外的键绑定，以及keyMap定义的绑定。 应为null或有效的键映射值。
  
  ### configureMouse
  >configureMouse: fn(cm: CodeMirror, repeat: "single" | "double" | "triple", event: Event) → Object  
  
  允许您配置鼠标选择和拖动的行为。当按下鼠标左键时调用该函数。返回的对象可能具有以下属性:  
  
 - unit: "char" | "word" | "line" | "rectangle" | fn(CodeMirror, Pos) → {from: Pos, to: Pos}    
 选择的单位。 对于自定义单元，可以是内置单元之一，也可以是一个位置并返回其范围的函数。 默认设置是双击返回“word”，三次点击返回“line”，alt-clicks（或Chrome操作系统，meta-shift-clicks）返回“矩形”，否则返回“single”。
- extend: bool  
是扩展现有的选择范围还是启动一个新的选择范围。默认情况下，在shift单击时启用此功能
- addNew: bool  
启用后，这会为现有选择添加新范围，而不是替换它。 默认行为是在Mac OS上为命令单击启用此功能，并在其他平台上按住Control键单击。
- moveOnDrag: bool  
当鼠标甚至拖动编辑器内部的内容时，它控制是复制（false）还是移动（true）。 默认情况下，通过在Mac OS上单击鼠标右键并在其他位置按住Ctrl键单击来启用此功能。

### lineWrapping
>lineWrapping: boolean  

对于较长的行，CodeMirror应该滚动还是换行。默认为false(滚动)。  

### lineNumbers
>lineNumbers: boolean

是否显示编辑器左侧的行号。  

### firstLineNumber
>firstLineNumber: integer   

从哪个数字开始计数行。默认值为1。  

### lineNumberFormatter
>lineNumberFormatter: function(line: integer) → string  

用于格式化行号的函数。 该函数传递给行号，并应返回将在装订线中显示的字符串。  

### gutters
>gutters: array<string>  
 
 可用于添加额外的檐槽(超出或代替行号檐槽)。应该是CSS类名的数组，每个名称定义一个宽度(以及可选的背景)，并且将用于绘制檐槽的背景。可能包括CodeMirror - linenumbers类，以便显式设置行号檐槽的位置(默认情况下，它位于所有其他檐槽的右侧)。这些类名是传递给SetGoodMarker的键。  
 
 
### fixedGutter
>fixedGutter: boolean  

确定装订线是否水平滚动内容（false）或在水平滚动期间是否保持固定（true，默认值）。  

### scrollbarStyle
>scrollbarStyle: string

选择滚动条实现。 默认为“native”，显示本机滚动条。 核心库还提供“null”样式，完全隐藏滚动条。 插件可以实现其他滚动条模型。  

### coverGutterNextToScrollbar
>coverGutterNextToScrollbar: boolean  

当fixedGutter打开并且有一个水平滚动条时，默认情况下，此滚动条左侧会显示装订线。 如果此选项设置为true，则它将由具有类CodeMirror-gutter-filler的元素覆盖  

### inputStyle
>inputStyle: string  

选择CodeMirror处理输入和焦点的方式。 核心库定义了“textarea”和“contenteditable”输入模型。 在移动浏览器上，默认为“contenteditable”。 在桌面浏览器上，默认为“textarea”。 在“contenteditable”模型中，对IME和屏幕阅读器的支持更好。 目的是使其成为未来现代桌面浏览器的默认设置  

### readOnly
>readOnly: boolean|string  

这将禁用用户编辑编辑器内容。如果指定了特殊值“nocursor”(而不是简单的true)，则也不允许编辑器聚焦。  


### showCursorWhenSelecting
>showCursorWhenSelecting: boolean  

选择是否处于活动状态时是否应绘制光标。 默认为false。


### lineWiseCopyCut
>lineWiseCopyCut: boolean  

启用时(默认情况下)，当没有选择时进行复制或剪切将复制或剪切其上有光标的整行


### pasteLinesPerSelection
>pasteLinesPerSelection: boolean  

 当从外部源（而不是编辑器本身）粘贴某些内容时，如果行数与选择的数量相匹配，则CodeMirror将默认为每个选择插入一行。 您可以将其设置为false以禁用该行为。
 
 
 ### selectionsMayTouch
 >selectionsMayTouch: boolean  
 
 确定多个选择是在触摸时（默认值）还是仅在它们重叠时（true）连接。  
 
 ### undoDepth
 >undoDepth: integer  
 
 编辑器存储的最大撤消级别数。 请注意，这包括选择更改事件。 默认为200。
 
 
 ### historyEventDelay
 >historyEventDelay: integer  
 
 在键入或删除时将导致新历史事件开始的不活动时间（以毫秒为单位）。 默认为1250。  
 
 ### tabindex
 >tabindex: integer  
 
 要分配给编辑器的选项卡索引。 如果没有给出，则不会分配选项卡索引。  
 
 ### autofocus
 >autofocus: boolean  
 
 可用于使CodeMirror将焦点集中在初始化上。 默认为关闭。 当使用fromTextArea时，并且没有为此选项指定显式值，当源textarea被聚焦时，它将被设置为true，或者它具有自动聚焦属性并且没有其他元素被聚焦。  
 
 ### phrases
 >phrases: ?object  
 
 一些插件通过短语方法运行用户可见的字符串(如界面中的标签)，以允许翻译。此选项确定该方法的返回值。当它为空或对象没有输入字符串命名的属性时，将返回该字符串。否则，将返回对应于该字符串的属性值。  
 
 
 ### dragDrop
>dragDrop: boolean  

控制是否启用拖放。 默认开启  


### allowDropFileTypes
 >allowDropFileTypes: array<string>  
 
 设置（默认为null）时，只能将类型在数组中的文件放入编辑器中。 字符串应该是MIME类型，并将根据浏览器报告的File对象的类型进行检查。  
 
 ### cursorBlinkRate
 >cursorBlinkRate: number  
 
  用于光标闪烁的半周期（以毫秒为单位）。 默认闪烁率为530毫秒。 通过将此值设置为零，可以禁用闪烁。 负值完全隐藏光标。  
  
  ### cursorScrollMargin
  >cursorScrollMargin: number  
  
  当在可滚动文档中接近可见视图的顶部或底部时，在光标上方和下方需要保留多少额外空间。默认值为0。  
  
### cursorHeight
>cursorHeight: number  

 确定光标的高度。默认值为1，表示它跨越了整个直线高度。对于某些字体(根据某些人的喜好)，较小的高度(例如0.85 )看起来更好，因为它会导致光标不能一直到达行的底部  
 
 ### resetSelectionOnContextMenu
 >resetSelectionOnContextMenu: boolean  
 
 控制当在当前选择之外单击打开上下文菜单时，光标是否移动到单击点。默认值为true。  
 
 ### workTime, workDelay
 >workTime, workDelay: number

 突出显示是由一个伪后台线程完成的，该线程工作时间为毫秒，然后使用超时来休眠工作延迟毫秒。默认值为200和300，您可以更改这些选项，使高亮显示更具攻击性。  
 
 ### pollInterval
 >pollInterval: number  
 
 指示CodeMirror应以多快的速度轮询其输入文本区域(在聚焦时)以获得更改。大多数输入是由事件捕获的，但是有些东西，比如某些浏览器上的IME输入，不会生成允许CodeMirror正确检测它的事件。因此,它投票。默认是100毫秒  
 
 
 ### flattenSpans
 >flattenSpans: boolean  
 
 默认情况下，如果相邻标记具有相同的类，则它们会将相邻标记合并为单个跨度。 这将导致更简单的DOM树，从而表现更好。 使用某些样式（例如圆角），这将改变文档的外观。 您可以将此选项设置为false以禁用此行为。  
 
 ### addModeClass
 >addModeClass: boolean   
 
 启用时（默认情况下为off），将为每个标记添加一个额外的CSS类，指示生成它的（内部）模式，前缀为“cm-m-”。 例如，来自XML模式的标记将获得cm-m-xml类。
 
 
 ### 




