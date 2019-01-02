import * as CodeMirror from 'codemirror/lib/codemirror';
import 'codemirror/lib/codemirror.css';
import './index.css';
//语言高亮支持
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/php/php.js';

//主题
import 'codemirror/theme/cobalt.css'
import { create } from 'domain';

// var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
//     value: "var a= 0;\n",//编辑器的起始值
//     mode: "text/javascript",//编辑器解析模式
//     lineSeparator: null,//显式设置编辑器的行分隔符
//     theme: "cobalt",	//设置主题
//     indentUnit: 2,//一个块应该缩进多少空格
//     smartIndent: true,//是否使用模式提供的上下文相关缩进
//     tabSize: 4,//Tab表示几个空格
//     indentWithTabs: false,//是否在缩进时，第一个N * tabSize空格应替换为N个制表符。 默认值为false。
//     electricChars: true,//配置编辑器在键入可能更改其正确缩进的字符时是否应重新缩进当前行（仅在模式支持缩进时才有效）
//     direction: "ltr",//翻转整体布局并选择基本段落方向为从左到右或从右到左
//     lineWrapping: false,//对于较长的行，CodeMirror应该滚动还是换行,默认为false(滚动)。
//     lineNumbers: true,	//是否显示编辑器左侧的行号
//     firstLineNumber: 1,//从哪个数字开始计数行。默认值为1。
//     //lineNumberFormatter: function () { },//用于格式化行号的函数。 该函数传递给行号，并应返回将在装订线中显示的字符串
//     //gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
//     foldGutter: true,//确定装订线是否水平滚动内容（false）或在水平滚动期间是否保持固定（true，默认值）
//     scrollbarStyle: "native",//滚动条默认样式  null
//     readOnly: false,//这将禁用用户编辑编辑器内容。如果指定了特殊值“nocursor”(而不是简单的true)，则也不允许编辑器聚焦
//     showCursorWhenSelecting: false,//选择是否处于活动状态时是否应绘制光标。 默认为false。
//     lineWiseCopyCut: false,//启用时(默认情况下)，当没有选择时进行复制或剪切将复制或剪切其上有光标的整行
//     pasteLinesPerSelection: true,//当从外部源（而不是编辑器本身）粘贴某些内容时，如果行数与选择的数量相匹配，则CodeMirror将默认为每个选择插入一行。
//     //selectionsMayTouch:""
//     undoDepth: 200,//编辑器存储的最大撤消级别数。 请注意，这包括选择更改事件。
//     historyEventDelay: 1250,//在键入或删除时将导致新历史事件开始的不活动时间（以毫秒为单位）。 默认为1250。
//     //tabindex:"",
//     autofocus: false,//初始化 获得焦点
//     dragDrop: true,//控制是否启用拖放。 默认开启
//     //allowDropFileTypes
//     cursorBlinkRate: 530,//用于光标闪烁的半周期（以毫秒为单位）。 默认闪烁率为530毫秒。 通过将此值设置为零，可以禁用闪烁。 负值完全隐藏光标。
//     cursorScrollMargin: 0,//当在可滚动文档中接近可见视图的顶部或底部时，在光标上方和下方需要保留多少额外空间。默认值为0。
//     cursorHeight: 1,//确定光标的高度。默认值为1，表示它跨越了整个直线高度 较小的高度(例如0.85 )看起来更好，因为它会导致光标不能一直到达行的底部
//     resetSelectionOnContextMenu: true,//控制当在当前选择之外单击打开上下文菜单时，光标是否移动到单击点
//     pollInterval: 100,//指示CodeMirror应以多快的速度轮询其输入文本区域(在聚焦时)以获得更改
//     //flattenSpans
//     addModeClass: false,//启用时（默认情况下为off），将为每个标记添加一个额外的CSS类，指示生成它的（内部）模式，前缀为“cm-m-”。
//     maxHighlightLength: true,//当高亮显示长行时，为了保持响应，编辑会放弃，当它到达某个位置时，简单地将行的其余部分设为纯文本。默认值为10，000。可以将此设置为Infinity以关闭此行为。
//     //viewportMargin
//     matchBrackets: true,	//括号匹配
//     //specialChars:"",//一个正则表达式，用于确定哪些字符应该被特殊占位符替换
//     //specialCharPlaceholder:function(){},//给定由specialChars选项标识的特殊字符的函数，生成用于表示字符的DOM节点
//     //rtlMoveVisually:"",
//     //keyMap:"默认值为“default”",//配置要使用的键映射。
//     //extraKeys:null,//可用于为编辑器指定额外的键绑定
//     //inputStyle:"",//选择CodeMirror处理输入和焦点的方式。 核心库定义了“textarea”和“contenteditable”输入模型
//     //configureMouse:function(){},//
//     //workTime
//     //workDelay
// });
// editor.setSize('50%', '950px');

class CodeMirrorPackage{
    constructor(opaction){
        this.CodeMirror = CodeMirror;
        this.old_opaction = {
            value: "",//编辑器的起始值
            mode: "text/javascript",//编辑器解析模式
            lineSeparator: null,//显式设置编辑器的行分隔符
            theme: "cobalt",	//设置主题
            styleActiveLine: true, // 当前行背景高亮
            indentUnit: 2,//一个块应该缩进多少空格
            smartIndent: true,//是否使用模式提供的上下文相关缩进
            tabSize: 4,//Tab表示几个空格
            indentWithTabs: false,//是否在缩进时，第一个N * tabSize空格应替换为N个制表符。 默认值为false。
            electricChars: true,//配置编辑器在键入可能更改其正确缩进的字符时是否应重新缩进当前行（仅在模式支持缩进时才有效）
            direction: "ltr",//翻转整体布局并选择基本段落方向为从左到右或从右到左
            lineWrapping: false,//对于较长的行，CodeMirror应该滚动还是换行,默认为false(滚动)。
            lineNumbers: true,	//是否显示编辑器左侧的行号
            firstLineNumber: 1,//从哪个数字开始计数行。默认值为1。
            //lineNumberFormatter: function () { },//用于格式化行号的函数。 该函数传递给行号，并应返回将在装订线中显示的字符串
            gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
            foldGutter: true,//确定装订线是否水平滚动内容（false）或在水平滚动期间是否保持固定（true，默认值）
            scrollbarStyle: "native",//滚动条默认样式  null
            readOnly: false,//这将禁用用户编辑编辑器内容。如果指定了特殊值“nocursor”(而不是简单的true)，则也不允许编辑器聚焦
            showCursorWhenSelecting: false,//选择是否处于活动状态时是否应绘制光标。 默认为false。
            lineWiseCopyCut: false,//启用时(默认情况下)，当没有选择时进行复制或剪切将复制或剪切其上有光标的整行
            pasteLinesPerSelection: true,//当从外部源（而不是编辑器本身）粘贴某些内容时，如果行数与选择的数量相匹配，则CodeMirror将默认为每个选择插入一行。
            //selectionsMayTouch:""
            undoDepth: 200,//编辑器存储的最大撤消级别数。 请注意，这包括选择更改事件。
            historyEventDelay: 1250,//在键入或删除时将导致新历史事件开始的不活动时间（以毫秒为单位）。 默认为1250。
            //tabindex:"",
            autofocus: false,//初始化 获得焦点
            dragDrop: true,//控制是否启用拖放。 默认开启
            //allowDropFileTypes
            cursorBlinkRate: 530,//用于光标闪烁的半周期（以毫秒为单位）。 默认闪烁率为530毫秒。 通过将此值设置为零，可以禁用闪烁。 负值完全隐藏光标。
            cursorScrollMargin: 0,//当在可滚动文档中接近可见视图的顶部或底部时，在光标上方和下方需要保留多少额外空间。默认值为0。
            cursorHeight: 1,//确定光标的高度。默认值为1，表示它跨越了整个直线高度 较小的高度(例如0.85 )看起来更好，因为它会导致光标不能一直到达行的底部
            resetSelectionOnContextMenu: true,//控制当在当前选择之外单击打开上下文菜单时，光标是否移动到单击点
            pollInterval: 100,//指示CodeMirror应以多快的速度轮询其输入文本区域(在聚焦时)以获得更改
            //flattenSpans
            addModeClass: false,//启用时（默认情况下为off），将为每个标记添加一个额外的CSS类，指示生成它的（内部）模式，前缀为“cm-m-”。
            maxHighlightLength: true,//当高亮显示长行时，为了保持响应，编辑会放弃，当它到达某个位置时，简单地将行的其余部分设为纯文本。默认值为10，000。可以将此设置为Infinity以关闭此行为。
            //viewportMargin
            matchBrackets: true,	//括号匹配
            //specialChars:"",//一个正则表达式，用于确定哪些字符应该被特殊占位符替换
            //specialCharPlaceholder:function(){},//给定由specialChars选项标识的特殊字符的函数，生成用于表示字符的DOM节点
            //rtlMoveVisually:"",
            //keyMap:"默认值为“default”",//配置要使用的键映射。
            //extraKeys:null,//可用于为编辑器指定额外的键绑定
            //inputStyle:"",//选择CodeMirror处理输入和焦点的方式。 核心库定义了“textarea”和“contenteditable”输入模型
            //configureMouse:function(){},//
            //workTime
            //workDelay
        };
        this.opaction = Object.assign(this.old_opaction,opaction);
    }

    CodeMirrorInit(){
        this.editor = CodeMirror.fromTextArea(document.getElementById("code"),this.opaction)
    }

    SetSize(width = "50%",height = '900px'){
        this.editor.setSize(width, height)
    }

    CodeMirrorRunCode(){
        let buttonTag = document.createElement("button");
        buttonTag.innerHTML = "运行";
        buttonTag.setAttribute("style","position: absolute;top: 10px;right: 10px;z-index:100;width: 70px;height: 30px;")
        buttonTag.onclick = function(){
            console.log("运行");
        };
        let parentDom = document.getElementsByClassName("CodeMirror")[0];
        parentDom.appendChild(buttonTag);
    }

    CodeMirrorSubmit(){
        let buttonTag = document.createElement("button");
        buttonTag.innerHTML = "提交";
        buttonTag.setAttribute("style","position: absolute;top: 10px;right: 90px;z-index:100;width: 70px;height: 30px;");
        //var _this = this;
        buttonTag.onclick = ()=>{
            console.log("提交");
            this.opaction.callback(this.editor.getValue())
        }
        let parentDom = document.getElementsByClassName("CodeMirror")[0];
        parentDom.appendChild(buttonTag);
    }

   

};

const codemirrorpackage = new CodeMirrorPackage({
    mode: "text/javascript",
    callback:function(value){
        console.log(value)
    }
});
codemirrorpackage.CodeMirrorInit();
codemirrorpackage.SetSize();
codemirrorpackage.CodeMirrorRunCode();
codemirrorpackage.CodeMirrorSubmit();
console.log(codemirrorpackage)