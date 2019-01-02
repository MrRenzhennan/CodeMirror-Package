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
