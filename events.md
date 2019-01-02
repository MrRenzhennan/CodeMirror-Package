# 事件
编辑器实例触发以下事件。实例参数总是引用编辑器本身。  

### change
>"change" (instance: CodeMirror, changeObj: object)  

每次更改编辑器的内容时触发。 changeObj是一个{from，to，text，removed，origin}对象，包含有关作为第二个参数发生的更改的信息。 from和to是变化开始和结束的位置（在变更前坐标系中）（例如，如果位置在第19行的开头，它可能是{ch：0，line：18}）。 text是一个字符串数组，表示替换更改范围的文本（按行拆分）。 删除的是以前在和从之间的文本，这些文本被此更改覆盖。 在DOM更新发生之前，在操作结束之前触发此事件。


### changes
> "changes" `(instance: CodeMirror, changes: array<object>)`  


像“change”事件一样，但是每个操作都是批处理的，传递一个包含操作中发生的所有更改的数组。此事件在操作完成后触发，它所做的显示更改将触发新操作。  


### beforeChange
>"beforeChange" (instance: CodeMirror, changeObj: object)  
  
  
此事件在应用更改之前触发，其处理程序可以选择修改或取消更改。changeObj对象具有从属性、到属性和文本属性，就像“change”事件一样。它还有一个cancel ( )方法，可以调用它来取消更改，如果更改不是来自撤消或重做事件，还有一个update(from，to，text )方法，可以用来修改更改。无法修改撤消或重做更改，因为它们包含一些元信息，用于恢复仅对特定更改有效的旧标记范围。所有三个要更新的参数都是可选的，并且可以省略以保持该字段的现有值不变。注意:您不能从“beforeChange”处理程序中执行任何会导致文档或其可视化更改的操作。这样做将会导致编辑器被破坏，因为这个处理程序是直接从CodeMirror实现的内部调用的


### cursorActivity
>"cursorActivity" (instance: CodeMirror)  


当光标或所选内容移动或对编辑器内容进行任何更改时，将触发。



### keyHandled
>"keyHandled" (instance: CodeMirror, name: string, event: Event)  


通过键映射处理键后触发。 name是已处理密钥的名称（例如“Ctrl-X”或“q”“），event是DOM keydown或keypress事件。  



### inputRead
>"inputRead" (instance: CodeMirror, changeObj: object)  


每当从隐藏文本区域读取新输入(由用户键入或粘贴)时触发。  


### electricInput
>"electricInput" (instance: CodeMirror, line: integer)  

如果文本输入与模式的电模式匹配，则触发，这将导致行缩进发生更改。


### beforeSelectionChange
>"beforeSelectionChange" (instance: CodeMirror, obj: {ranges, origin, update})  

在移动选择之前触发此事件。它的处理程序可以检查选择范围集，在obj参数的ranges属性中以{anchor，head}对象数组的形式呈现，并通过调用此对象的update方法，传递相同格式的范围数组，来可选地更改它们。对象还包含一个origin属性，保存传递给选择更改方法的origin字符串(如果有)。此事件的处理程序与“beforeChange”处理程序有相同的限制——它们不应该做任何事情来直接更新编辑器的状态。  


### viewportChange  
>"viewportChange" (instance: CodeMirror, from: number, to: number)  

 每当编辑器的视图端口发生变化(由于滚动、编辑或任何其他因素)时激发。from和to参数给出了视口的新开始和结束。
 
 
 
 ### swapDoc
 >"swapDoc" (instance: CodeMirror, oldDoc: Doc)  
 
 
 当使用swapDoc方法替换编辑器的文档时，就会发出这一信号。  
 
 
 ### gutterClick
 >"gutterClick" (instance: CodeMirror, line: integer, gutter: string, clickEvent: Event)  
 
 单击编辑器装订线（行号区域）时触发。 将编辑器实例作为第一个参数传递，将作为第二个参数单击的行的（从零开始）编号，作为第三个参数单击的装订线的CSS类，以及作为第四个参数的原始mousedown事件对象传递。  
 
 
 ### gutterContextMenu  
 >"gutterContextMenu" (instance: CodeMirror, line: integer, gutter: string, contextMenu: Event: Event)  
 
 
 当编辑器装订线（行号区域）收到contextmenu事件时触发。 将编辑器实例作为第一个参数传递，将作为第二个参数单击的行的（从零开始）编号，作为第三个参数单击的装订线的CSS类，以及原始上下文菜单鼠标事件对象作为第四个参数。 您可以阻止默认事件，以表示CodeMirror不应该进一步处理。  
 
 
 ### focus
 >"focus" (instance: CodeMirror, event: Event)  
 
 编辑器聚焦时触发。
 
 
 ### blur
 >"blur" (instance: CodeMirror, event: Event)  
 
 编辑器未聚焦时触发。
 
 
 ### scroll
 >"scroll" (instance: CodeMirror)  
 
 在滚动编辑器时触发  
 
 
 ### refresh  
 >"refresh" (instance: CodeMirror)  
 
  编辑器刷新或调整大小时触发。 对于依赖于编辑器或字符大小的缓存值无效非常有用。  
  
  
  ### optionChange
  >"optionChange" (instance: CodeMirror, option: string)  
  
  每次使用setOption更改选项时调用。
  
  
  ### scrollCursorIntoView
  >"scrollCursorIntoView" (instance: CodeMirror, event: Event)

当编辑器试图将光标滚动到视图中时触发。可以连接到编辑器，以处理编辑器周围的其他可滚动容器。当事件对象调用了它的preventDefault方法时，CodeMirror本身不会尝试滚动窗口。


### update
>"update" (instance: CodeMirror)  

当CodeMirror更新其DOM显示时将被触发。


### renderLine
>"renderLine" (instance: CodeMirror, line: LineHandle, element: Element)  

每当一行（重新）渲染到DOM时触发。 在构建DOM元素之后立即触发，然后将其添加到文档中。 处理程序可能会混淆结果元素的样式，或添加事件处理程序，但不应尝试更改编辑器的状态。


### mousedown 
### dblclick 
### touchstart
### contextmenu
### keydown
### keypress
### keyup
### cut
### copy
### paste
### dragstart
### dragenter
### dragover
### dragleave
### drop  


>"mousedown", "dblclick", "touchstart", "contextmenu", "keydown", "keypress", "keyup", "cut", "copy", "paste", "dragstart", "dragenter", "dragover", "dragleave", "drop" (instance: CodeMirror, event: Event)  


当CodeMirror处理此类DOM事件时触发。您可以防止默认事件的发生，或者赋予它一个真实的codemirrorIgnore属性，以表明CodeMirror不应该再做进一步的处理。


# 文档对象(codemirro . doc的实例)发出以下事件

### change
>"change" (instance: CodeMirror, changeObj: object)  

每次更改编辑器的内容时触发。 changeObj是一个{from，to，text，removed，origin}对象，包含有关作为第二个参数发生的更改的信息。 from和to是变化开始和结束的位置（在变更前坐标系中）（例如，如果位置在第19行的开头，它可能是{ch：0，line：18}）。 text是一个字符串数组，表示替换更改范围的文本（按行拆分）。 删除的是以前在和从之间的文本，这些文本被此更改覆盖。 在DOM更新发生之前，在操作结束之前触发此事件。


### change
"change" (line: LineHandle, changeObj: object)

在以任何方式更改行文本内容时触发(但是没有完全删除该行)。更改对象与传递给编辑器对象上的更改事件的对象类似。



### beforeChange
>"beforeChange" (instance: CodeMirror, changeObj: object)  
  
  
此事件在应用更改之前触发，其处理程序可以选择修改或取消更改。changeObj对象具有从属性、到属性和文本属性，就像“change”事件一样。它还有一个cancel ( )方法，可以调用它来取消更改，如果更改不是来自撤消或重做事件，还有一个update(from，to，text )方法，可以用来修改更改。无法修改撤消或重做更改，因为它们包含一些元信息，用于恢复仅对特定更改有效的旧标记范围。所有三个要更新的参数都是可选的，并且可以省略以保持该字段的现有值不变。注意:您不能从“beforeChange”处理程序中执行任何会导致文档或其可视化更改的操作。这样做将会导致编辑器被破坏，因为这个处理程序是直接从CodeMirror实现的内部调用的

 
### cursorActivity
>"cursorActivity" (instance: CodeMirror)  


当光标或所选内容移动或对编辑器内容进行任何更改时，将触发。

### beforeSelectionChange
>"beforeSelectionChange" (instance: CodeMirror, obj: {ranges, origin, update})  

在移动选择之前触发此事件。它的处理程序可以检查选择范围集，在obj参数的ranges属性中以{anchor，head}对象数组的形式呈现，并通过调用此对象的update方法，传递相同格式的范围数组，来可选地更改它们。对象还包含一个origin属性，保存传递给选择更改方法的origin字符串(如果有)。此事件的处理程序与“beforeChange”处理程序有相同的限制——它们不应该做任何事情来直接更新编辑器的状态。  

### delete

删除行对象时将触发。 线对象与线的开头相关联。 当您需要找出给定线上的装订线标记何时被移除时，这非常有用。


# 标记范围句柄（CodeMirror.TextMarker）由markText和setBookmark返回，发出以下事件：


### beforeCursorEnter
当游标进入标记的范围时触发。从这个事件处理程序中，可以检查编辑器状态，但不能修改，但是可以清除事件触发的范围。  


### clear
> "clear" (from: {line, ch}, to: {line, ch})  

在清除范围时触发，可以通过与clearOnEnter结合的游标移动，也可以通过对其clear()方法的调用。每个句柄只触发一次。注意，通过文本编辑删除范围不会引发此事件，因为撤销操作可能使范围重新存在。从并给出文件中范围在被清除时所跨越的部分。


### hide
当通过编辑操作从文档中删除标记的最后一部分时触发。


### unhide
当通过编辑删除标记后，撤销操作将标记带回来时触发。


# addLineWidget返回的Line Widgets（CodeMirror.LineWidget）触发这些事件：

### redraw
>"redraw" ()  

每当编辑器将小部件重新添加到DOM时触发。这将在添加小部件后发生一次(如果它被滚动到视图中)，然后每当它被滚动出视图并再次返回时，或者当对编辑器选项或小部件所在行的更改要求重新绘制小部件时再次发生。































