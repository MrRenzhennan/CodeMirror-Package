import * as CodeMirror from 'codemirror/lib/codemirror';
import 'codemirror/lib/codemirror.css';
import './index.css';

class Unit {
	constructor() {
		this._innerHeight = 0;
		this._innerWidth = 0;
	}
	//获取可是窗口高度
	getClientHeight() {
		if (window.innerWidth != null) {
			// ie9 +  最新浏览器
			this._innerWidth = window.innerWidth;
			this._innerHeight = window.innerHeight;
		} else if (document.compatMode === 'CSS1Compat') {
			// 标准浏览器
			this._innerWidth = document.documentElement.clientWidth;
			this._innerHeight = document.documentElement.clientHeight;
		} else {
			// 怪异浏览器
			this._innerWidth = document.body.clientWidth;
			this._innerHeight = document.body.clientHeight;
		}
	}

	//创建区间分隔
	EditorResizer(_class = '') {
		let div = document.createElement('div');
		div.className = 'editor-resizer';
		div.className += ` ${_class}`
		return div;
	}

	//title生成
	TitleShow(text = '展示区') {
		let div = document.createElement('div');
		div.className = 'editor-title';
		div.innerHTML = text;
		return div;
	}

	//展示区DOM布局
	DisplayArea(val, isTextarea, id, _class, style = '') {
		let divP = document.createElement('div');
		divP.className = 'displayArea-box';
		divP.className += ` ${_class}`;
		divP.setAttribute('style', style)
		let divC = document.createElement('div');
		divC.className = 'displayArea';
		//是否增加 编辑器
		if (isTextarea) {
			let textarea = document.createElement('textarea');
			textarea.id = id;
			divC.appendChild(textarea);
		}
		divP.appendChild(divC);
		divP.appendChild(this.TitleShow(val));
		return divP;
	}

}

class CodeMirrorPackage extends Unit {
	constructor(opaction) {
		super();
		this.CodeMirror = CodeMirror;
		this.old_opaction = {
			id: '',
			value: '', //编辑器的起始值
			mode: 'text/javascript', //编辑器解析模式
			lineSeparator: null, //显式设置编辑器的行分隔符
			theme: 'cobalt', //设置主题
			styleActiveLine: true, // 当前行背景高亮
			indentUnit: 2, //一个块应该缩进多少空格
			smartIndent: true, //是否使用模式提供的上下文相关缩进
			tabSize: 4, //Tab表示几个空格
			indentWithTabs: false, //是否在缩进时，第一个N * tabSize空格应替换为N个制表符。 默认值为false。
			electricChars: true, //配置编辑器在键入可能更改其正确缩进的字符时是否应重新缩进当前行（仅在模式支持缩进时才有效）
			direction: 'ltr', //翻转整体布局并选择基本段落方向为从左到右或从右到左
			lineWrapping: false, //对于较长的行，CodeMirror应该滚动还是换行,默认为false(滚动)。  该骂折叠
			lineNumbers: true, //是否显示编辑器左侧的行号
			firstLineNumber: 1, //从哪个数字开始计数行。默认值为1。
			//lineNumberFormatter: function () { },//用于格式化行号的函数。 该函数传递给行号，并应返回将在装订线中显示的字符串
			gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
			foldGutter: true, //确定装订线是否水平滚动内容（false）或在水平滚动期间是否保持固定（true，默认值）
			scrollbarStyle: 'native', //滚动条默认样式  null
			readOnly: false, //这将禁用用户编辑编辑器内容。如果指定了特殊值“nocursor”(而不是简单的true)，则也不允许编辑器聚焦
			showCursorWhenSelecting: false, //选择是否处于活动状态时是否应绘制光标。 默认为false。
			lineWiseCopyCut: false, //启用时(默认情况下)，当没有选择时进行复制或剪切将复制或剪切其上有光标的整行
			pasteLinesPerSelection: true, //当从外部源（而不是编辑器本身）粘贴某些内容时，如果行数与选择的数量相匹配，则CodeMirror将默认为每个选择插入一行。
			//selectionsMayTouch:""
			undoDepth: 200, //编辑器存储的最大撤消级别数。 请注意，这包括选择更改事件。
			historyEventDelay: 1250, //在键入或删除时将导致新历史事件开始的不活动时间（以毫秒为单位）。 默认为1250。
			//tabindex:"",
			autofocus: false, //初始化 获得焦点
			dragDrop: true, //控制是否启用拖放。 默认开启
			//allowDropFileTypes
			cursorBlinkRate: 530, //用于光标闪烁的半周期（以毫秒为单位）。 默认闪烁率为530毫秒。 通过将此值设置为零，可以禁用闪烁。 负值完全隐藏光标。
			cursorScrollMargin: 0, //当在可滚动文档中接近可见视图的顶部或底部时，在光标上方和下方需要保留多少额外空间。默认值为0。
			cursorHeight: 1, //确定光标的高度。默认值为1，表示它跨越了整个直线高度 较小的高度(例如0.85 )看起来更好，因为它会导致光标不能一直到达行的底部
			resetSelectionOnContextMenu: true, //控制当在当前选择之外单击打开上下文菜单时，光标是否移动到单击点
			pollInterval: 100, //指示CodeMirror应以多快的速度轮询其输入文本区域(在聚焦时)以获得更改
			//flattenSpans
			addModeClass: false, //启用时（默认情况下为off），将为每个标记添加一个额外的CSS类，指示生成它的（内部）模式，前缀为“cm-m-”。
			maxHighlightLength: true, //当高亮显示长行时，为了保持响应，编辑会放弃，当它到达某个位置时，简单地将行的其余部分设为纯文本。默认值为10，000。可以将此设置为Infinity以关闭此行为。
			//viewportMargin
			matchBrackets: true, //括号匹配
			replaceFind: false, //启动搜索替换
			fullScreen: false, //是否启用全屏
			//specialChars:"",//一个正则表达式，用于确定哪些字符应该被特殊占位符替换
			//specialCharPlaceholder:function(){},//给定由specialChars选项标识的特殊字符的函数，生成用于表示字符的DOM节点
			//rtlMoveVisually:"",
			//keyMap:"默认值为“default”",//配置要使用的键映射。
			extraKeys: {} //可用于为编辑器指定额外的键绑定
			//inputStyle:"",//选择CodeMirror处理输入和焦点的方式。 核心库定义了“textarea”和“contenteditable”输入模型
			//configureMouse:function(){},//
			//workTime
			//workDelay
		};
		this.opaction = Object.assign(this.old_opaction, opaction);
		this.editor = null;
		this.teacherEditor = null;
		this.Init();
	}

	//高亮选中
	StyleActiveLine() {
		if (this.opaction.styleActiveLine) {
			require('codemirror/addon/selection/active-line');
		}
	}
	//滚动条样式
	ScrollbarStyle() {
		if (this.opaction.scrollbarStyle == 'simple' || this.opaction.scrollbarStyle == 'overlay') {
			console.log("simple")
			require('codemirror/addon/scroll/simplescrollbars.css');
			require('codemirror/addon/scroll/simplescrollbars.js');
		}
	}
	//代码折叠
	CodeFold() {
		if (this.opaction.lineWrapping) {
			require('codemirror/addon/fold/foldgutter.css');
			require('codemirror/addon/fold/foldgutter.js');
			require('codemirror/addon/fold/foldcode.js');
			require('codemirror/addon/fold/brace-fold.js');
			require('codemirror/addon/fold/comment-fold.js');
			require('codemirror/addon/fold/indent-fold.js');
			require('codemirror/addon/fold/xml-fold.js');
			if (this.opaction.markdown) {
				require('codemirror/addon/fold/markdown-fold');
			}
		}
	}
	//代码搜索替换
	CodeReplaceFind() {
		if (this.opaction.replaceFind) {
			//搜索
			require('codemirror/addon/search/search.js');
			require('codemirror/addon/search/searchcursor.js');
			//跳转到指定行
			require('codemirror/addon/search/jump-to-line.js');
			//搜索框美化
			require('codemirror/addon/dialog/dialog.js');
			require('codemirror/addon/dialog/dialog.css');
		}
		/**
		 	Ctrl-F / Cmd-F
			开始搜索
			Ctrl-G / Cmd-G
			找下一个
			Shift-Ctrl-G / Shift-Cmd-G
			找到上一个
			Shift-Ctrl-F / Cmd-Option-F
			更换
			Shift-Ctrl-R / Shift-Cmd-Option-F
			全部替换
			ALT-G
			跳到线上
		*/
	}
	//全屏
	FullScreen() {
		if (this.opaction.fullScreen) {
			require('codemirror/addon/display/fullscreen.css');
			require('codemirror/addon/display/fullscreen.js');
			this.opaction.extraKeys = Object.assign(this.opaction.extraKeys, {
				F11: function (cm) {
					cm.setOption('fullScreen', !cm.getOption('fullScreen'));
				},
				Esc: function (cm) {
					if (cm.getOption('fullScreen')) cm.setOption('fullScreen', false);
				}
			});
		}
	}
	//主题
	CodeMirrorTheme() {
		switch (this.opaction.theme) {
			case 'cobalt':
				require('codemirror/theme/cobalt.css');
				break;
			case 'colorforth':
				require('codemirror/theme/colorforth.css');
				break;
			case 'yeti':
				require('codemirror/theme/yeti.css');
				break;
			case 'night':
				require('codemirror/theme/night.css');
				break;
			default:
				break;
		}
	}
	//模式
	CodeMirrorMode() {
		switch (this.opaction.mode) {
			case 'text/javascript': //js
				require('codemirror/mode/javascript/javascript.js');
				break;
			case 'text/x-java': //java
				require('codemirror/mode/clike/clike.js');
				break;
			case 'htmlmixed': //html
				require('codemirror/mode/htmlmixed/htmlmixed.js');
				break;
			case 'text/x-sql': //sql
				require('codemirror/mode/sql/sql.js');
				break;
			case 'text/x-c++src': //c++
				require('codemirror/mode/clike/clike.js');
				break;
			case 'text/x-csrc': //c
				require('codemirror/mode/clike/clike.js');
				break;
			case 'text/x-csharp': //c#
				require('codemirror/mode/clike/clike.js');
				break;
			case 'text/x-objectivec': //objective-C
				require('codemirror/mode/clike/clike.js');
				break;
			case 'text/x-go': //go
				require('codemirror/mode/go/go.js');
				break;
			case 'text/x-python': //python
				require('codemirror/mode/go/go.js');
				break;
			default:
				break;
		}
	}
	//dom布局
	DomLayout() {
		/*创建外层dom*/
		let div = document.createElement('div');
		div.className = 'CodeMirrorPackage';
		div.id = 'CodeMirror-Layout';
		/*增加分区 */
		div.appendChild(this.EditorResizer());
		/* 编程要求 */
		div.appendChild(
			this.DisplayArea(
				this.opaction.text_text[0] || '编程要求',
				false,
				'',
				'programming-requirements',
			)
		);
		/*增加分区 */
		div.appendChild(this.EditorResizer('col-resize'));
		/* 编程实践 */
		div.appendChild(
			this.DisplayArea(
				this.opaction.text_text[1] || '编程实践区',
				true,
				this.opaction.id,
				'programming-practice-displayArea',
			)
		);
		/*增加分区 */
		div.appendChild(this.EditorResizer('col-resize'));
		//操作式 三块分区    命题式 四块分区   1 操作式  2 命题式
		if (this.opaction.operation_method == '1') {
			/* 样式展示区 */
			div.appendChild(
				this.DisplayArea(
					this.opaction.text_text[2] || '样式展示区',
					false,
					'',
					'show-case',
				)
			);
			/*增加分区 */
			div.appendChild(this.EditorResizer());
		} else if (this.opaction.operation_method == '2') {
			//样式展示区 教师源码  二者逻辑控制 交替出现
			/* 样式展示区 */
			div.appendChild(
				this.DisplayArea(
					this.opaction.text_text[2] || '样式展示区',
					false,
					'',
					'show-case',
				)
			);
			/* 教师源码 */
			div.appendChild(
				this.DisplayArea(
					this.opaction.text_text[3] || '教师源码',
					true,
					'teacher-source-code',
					'teacher-source-code',
					'display:none'
				)
			);
			/*增加分区 */
			div.appendChild(this.EditorResizer('col-resize'));
			/* 要求样式 */
			div.appendChild(
				this.DisplayArea(
					this.opaction.text_text[4] || '要求样式',
					false,
					'',
					'request-style',
				)
			);
			/*增加分区 */
			div.appendChild(this.EditorResizer());
		}
		let body = document.body;
		body.appendChild(div);
		this.CenterDomWidth();
		this.ResizerMove();
	}
	//初始化内容宽度
	CenterDomWidth() {
		let width;
		//总盒子宽度
		let boxWidth = document.getElementById('CodeMirror-Layout').offsetWidth;
		//分割条宽度 百分比
		let resizer = (document.getElementsByClassName('editor-resizer')[0].offsetWidth / boxWidth).toFixed(6);
		if (this.opaction.operation_method == '1') {
			width = `${(100 - resizer * 4 * 100) / 4}%`;
		} else if (this.opaction.operation_method == '2') {
			width = `${(100 - resizer * 5 * 100) / 4}%`;
		};
		//编程要求
		document.getElementsByClassName('programming-requirements')[0].style.width = width;
		document.getElementsByClassName('programming-requirements')[0].setAttribute('data-width', width.split('%')[0]);
		document.getElementsByClassName('programming-requirements')[0].setAttribute('old-width', width);
		//编程实践
		document.getElementsByClassName('programming-practice-displayArea')[0].style.width = width;
		document.getElementsByClassName('programming-practice-displayArea')[0].setAttribute('data-width', width.split('%')[0]);
		document.getElementsByClassName('programming-practice-displayArea')[0].setAttribute('old-width', width);
		//样式展示
		document.getElementsByClassName('show-case')[0].style.width = this.opaction.operation_method == '2' ? width : `${(100 - resizer * 4 * 100) / 2}%`;
		document.getElementsByClassName('show-case')[0].setAttribute('data-width', (this.opaction.operation_method == '2' ? width.split('%')[0] : `${(100 - resizer * 4 * 100) / 2}`));
		document.getElementsByClassName('show-case')[0].setAttribute('old-width', (this.opaction.operation_method == '2' ? width : `${(100 - resizer * 4 * 100) / 2}%`));
		if (this.opaction.operation_method == '2') {
			//教师源码
			document.getElementsByClassName('teacher-source-code')[0].style.width = width;
			document.getElementsByClassName('teacher-source-code')[0].setAttribute('data-width', width.split('%')[0]);
			document.getElementsByClassName('teacher-source-code')[0].setAttribute('old-width', width);
			//要求样式
			document.getElementsByClassName('request-style')[0].style.width = width;
			document.getElementsByClassName('request-style')[0].setAttribute('data-width', width.split('%')[0]);
			document.getElementsByClassName('request-style')[0].setAttribute('old-width', width);
		}
	}
	//分区左右滑动
	ResizerMove() {
		//事件委托
		let EventParent = document.querySelector("#CodeMirror-Layout");
		EventParent.onmousedown = () => {
			let event = event || window.event;
			let _target = event.target || event.srcElement;
			if (_target.getAttribute('class').includes('col-resize')) {
				let prevDom = _target.previousSibling;//获取上一个兄弟节点
				let nextDom = _target.nextSibling;//获取下一个兄弟节点
				if (_target.previousSibling.style.display == 'none') {
					prevDom = _target.previousSibling.previousSibling;
				};
				if (_target.nextSibling.style.display == 'none') {
					nextDom = _target.nextSibling.nextSibling;
				};
				let prev_width = prevDom.getAttribute('data-width');
				let next_width = nextDom.getAttribute('data-width');
				let diffX = event.clientX;//按下时  鼠标位置
				document.onmousemove = (event) => {
					event.preventDefault()
					let clientXMove = ((diffX - event.clientX) / window.innerWidth * 100);

					if(prevDom.offsetWidth > 1){
						nextDom.style.width = `${(Number(next_width) + clientXMove).toFixed(4)}%`;
						nextDom.setAttribute('data-width', `${(Number(next_width) + clientXMove).toFixed(4)}`);
					}
					if(nextDom.offsetWidth >1){
						prevDom.style.width = `${(Number(prev_width) - clientXMove).toFixed(4)}%`;
						prevDom.setAttribute('data-width', `${(Number(prev_width) - clientXMove).toFixed(4)}`);
						
					}
				};
				document.onmouseup = function (event) {
					this.onmousemove = null;
					this.onmouseup = null;
				};
			};
		};
	};
	//展示区宽度还原
	DisplayAreaWidthRestore() {
		let domList = document.getElementsByClassName('displayArea-box');
		for (let i = 0; i < domList.length; i++) {
			domList[i].style.width = domList[i].getAttribute('old-width');
			domList[i].setAttribute('data-width', domList[i].getAttribute('old-width').split('%')[0]);
		}
	}
	//编程实践区 操作按钮生成
	OperationButtonGeneration() {
		let parent = document.getElementsByClassName('programming-practice-displayArea')[0];
		let div = document.createElement('div');
		div.className = 'operation';
		//重置编码
		let button1 = document.createElement('button');
		button1.className = 'button1';
		button1.innerHTML = '重置编码';
		button1.onclick = () => {
			this.ResetContent();
		};
		//点击运行
		let button2 = document.createElement('button');
		button2.className = 'button2';
		button2.innerHTML = '点击运行';
		button2.onclick = () => {

		};
		//获取源码
		let button3 = document.createElement('button');
		button3.className = 'button3';
		button3.innerHTML = '获取源码';
		button3.onclick = () => {
			button4.style.display = 'block';
			button1.style.display = 'none';
			button2.style.display = 'none';
			button3.style.display = 'none';
			document.getElementsByClassName('show-case')[0].style.display = 'none';
			document.getElementsByClassName('teacher-source-code')[0].style.display = 'block';
			this.DisplayAreaWidthRestore()
		};

		//继续实践
		var button4 = document.createElement('button');
		button4.className = 'button4';
		button4.innerHTML = '继续实践';
		button4.style.display = 'none';
		button4.onclick = (_this) => {
			button4.style.display = 'none';
			button1.style.display = 'block';
			button2.style.display = 'block';
			button3.style.display = 'block';
			document.getElementsByClassName('show-case')[0].style.display = 'block';
			document.getElementsByClassName('teacher-source-code')[0].style.display = 'none';
			this.DisplayAreaWidthRestore()
		};

		div.appendChild(button1);
		div.appendChild(button2);
		if (this.opaction.operation_method == '2') {
			div.appendChild(button3);
			div.appendChild(button4);
		};
		parent.appendChild(div)
	}
	//教师源码展示区
	TeacherSourceCode() {
		this.teacherEditor = CodeMirror.fromTextArea(document.getElementById('teacher-source-code'), this.opaction);
		this.teacherEditor.setSize('100%', '100%');
		this.teacherEditor.setOption("readOnly", 'nocursor');
	}
	//教师展示区赋值
	TeacherSourceSetVal(val = '') {
		this.teacherEditor.setValue(val)
	}
	//编辑器生成
	CodeMirrorInit() {
		this.editor = CodeMirror.fromTextArea(document.getElementById(this.opaction.id), this.opaction);
	}
	//初始化
	Init() {
		if (!this.opaction.id) {
			throw new Error('必须传入ID<document.getElementById()>');
			return false;
		}
		//插件
		this.CodeMirrorMode();
		this.StyleActiveLine();
		this.CodeMirrorTheme();
		this.ScrollbarStyle();
		this.CodeReplaceFind();
		this.FullScreen();
		this.CodeFold();

		if(this.opaction.operation_method == '1' || this.opaction.operation_method == '2'){
			this.DomLayout();
			if (this.opaction.operation_method == '2') {
				this.TeacherSourceCode();
			};
			this.OperationButtonGeneration();
		};

		this.CodeMirrorInit();
		this.SetSize();
	}

	//动态改变编辑器属性
	CodeMirrorSetOpaction(key, value) {
		this.editor.setOption(key, value);
	}
	//设置宽高
	SetSize(width = '100%', height = '100%') {
		this.editor.setSize(width, height);
	}

	//获取编辑器内容
	GetValue(callback) {
		if (callback) {
			callback(this.editor.getValue());
		}
	}
	//重置内容
	ResetContent() {
		this.editor.setValue('')
	}
	OnChange(callback) {
		this.editor.on('change', (instance, changeObject) => {
			if (callback) {
				callback(instance, changeObject, this.editor.getValue());
			}
		});
	}
}
export { CodeMirrorPackage };

const codemirrorpackage = new CodeMirrorPackage({
	id: 'code',
	mode: 'text/javascript',
	theme: 'colorforth',
	//text_text: ['操作要求', '编程实践区', '样式展示区'],
	text_text: ['操作要求', '编程实践区', '样式展示区', '教师源码', '样式要求'],
	operation_method: '2', //1 操作式  2 命题式
	scrollbarStyle: 'overlay',
	lineWrapping: true,
	replaceFind: true,
	//fullScreen:true
});

codemirrorpackage.OnChange(function(instance, changeObject,val){
	console.log(instance, changeObject,val)
});
codemirrorpackage.TeacherSourceSetVal('123');


console.log(codemirrorpackage);
