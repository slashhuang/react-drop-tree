(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react/lib/ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react/lib/ReactDOM"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react/lib/ReactDOM")) : factory(root["React"], root["ReactDom"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _libDropDownMenuJs = __webpack_require__(2);

	var _libDropDownMenuJs2 = _interopRequireDefault(_libDropDownMenuJs);

	//单向下拉菜单

	var _libMultiDropDownMenuJs = __webpack_require__(4);

	var _libMultiDropDownMenuJs2 = _interopRequireDefault(_libMultiDropDownMenuJs);

	//下拉层级菜单

	var _libDropDownSelectJs = __webpack_require__(5);

	var _libDropDownSelectJs2 = _interopRequireDefault(_libDropDownSelectJs);

	//下拉多选框

	var _libDropDownSuggestionJs = __webpack_require__(6);

	var _libDropDownSuggestionJs2 = _interopRequireDefault(_libDropDownSuggestionJs);

	//联想功能组件
	__webpack_require__(9);
	var DropDown = {
	    DropDownMenu: _libDropDownMenuJs2['default'],
	    MultiDropDownMenu: _libMultiDropDownMenuJs2['default'],
	    DropDownSelect: _libDropDownSelectJs2['default'],
	    DropDownSuggestion: _libDropDownSuggestionJs2['default']
	};

	module.exports = DropDown;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by slashhuang on 16/5/10.
	 * 下拉菜单
	 */
	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var DropDownMenu = (function (_Component) {
	    _inherits(DropDownMenu, _Component);

	    function DropDownMenu(props, context) {
	        _classCallCheck(this, DropDownMenu);

	        _Component.call(this, props, context);
	        this.state = {
	            title: props.title || '',
	            dropDownData: props.dropDownData || []
	        };
	    }

	    DropDownMenu.prototype.clickCallback = function clickCallback(hint) {
	        this.setState({
	            hint: hint
	        });
	    };

	    DropDownMenu.prototype.render = function render() {
	        var _this = this;

	        var _state = this.state;
	        var title = _state.title;
	        var dropDownData = _state.dropDownData;

	        return _react2['default'].createElement(
	            'div',
	            { className: 'question-multi-menu' },
	            _react2['default'].createElement(
	                'div',
	                { className: 'question-multi-menu-head' },
	                _react2['default'].createElement(
	                    'span',
	                    { className: 'drop-down-hint' },
	                    title
	                ),
	                _react2['default'].createElement('i', { className: 'drop-down-arrow' })
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'question-multi-menu-body' },
	                _react2['default'].createElement(
	                    'ul',
	                    { className: 'select-drop-down-list multi-drop-down-list' },
	                    dropDownData && dropDownData.map(function (ele) {
	                        return _react2['default'].createElement(
	                            'li',
	                            { onClick: function () {
	                                    ele.callback();_this.clickCallback(ele.data);
	                                },
	                                key: ele.data },
	                            _react2['default'].createElement(
	                                'div',
	                                { className: 'multi-drop-down-list-content' },
	                                ele.data
	                            )
	                        );
	                    })
	                )
	            )
	        );
	    };

	    return DropDownMenu;
	})(_react.Component);

	exports['default'] = DropDownMenu;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by slashhuang on 16/5/11.
	 *层级下拉菜单栏
	 */
	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var MultiDropDownMenu = (function (_Component) {
	    _inherits(MultiDropDownMenu, _Component);

	    function MultiDropDownMenu(props, context) {
	        _classCallCheck(this, MultiDropDownMenu);

	        _Component.call(this, props, context);
	        this.state = {
	            dropDownQueue: [], //1代表浮动在1.2; 0代表浮动在2.1，
	            formGroup: [], //最后存取的数据
	            title: props.title
	        };
	        this.formData = this.state.formGroup;
	    }

	    /**
	     * 渲染标题
	     * @param formGroup
	     *
	     * @return {*}
	     */

	    MultiDropDownMenu.prototype.renderTitle = function renderTitle(formGroup) {
	        return formGroup && formGroup.reduce(function (pre, ele) {
	            return pre + ele['typeName'] + ';';
	        }, '');
	    };

	    /**
	     * 处理多选框点击操作
	     * @param ele
	     */

	    MultiDropDownMenu.prototype.checkboxHandler = function checkboxHandler(ele) {
	        var cachedFormGroup = this.state.formGroup;
	        /**
	         * 按照如下格式存取对外调用的数据，确保完备
	         * [ele]//ele为数组中的每一项
	         */
	        var targetIndex = cachedFormGroup.indexOf(ele);
	        if (targetIndex > -1) {
	            cachedFormGroup.splice(targetIndex, 1);
	        } else {
	            cachedFormGroup.push(ele);
	        }
	        this.setState({
	            formGroup: cachedFormGroup,
	            title: this.renderTitle(cachedFormGroup) || this.props.title
	        });
	    };

	    /**
	     * 渲染多选框
	     * @return {XML}
	     */

	    MultiDropDownMenu.prototype.renderSelectMenu = function renderSelectMenu(selectDataSource) {
	        var _this = this;

	        var formGroup = this.state.formGroup;

	        var XML = _react2['default'].createElement(
	            'ul',
	            { className: 'select-drop-down-list' },
	            selectDataSource && selectDataSource.map(function (ele) {
	                return _react2['default'].createElement(
	                    'li',
	                    { className: 'select-drop-down-input', onClick: function () {
	                            _this.checkboxHandler(ele);
	                        } },
	                    _react2['default'].createElement(
	                        'i',
	                        { className: formGroup.indexOf(ele) < 0 ? 'check-box' : 'check-box active' },
	                        _react2['default'].createElement('b', null)
	                    ),
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'select-drop-down-check-content' },
	                        ' ',
	                        ele.typeName
	                    )
	                );
	            })
	        );
	        return XML;
	    };

	    MultiDropDownMenu.prototype.renderList = function renderList(type, ele, activeIndex, index, depth) {
	        var _this2 = this;

	        var xml = null;
	        var formGroup = this.state.formGroup;

	        if (type == 'branch') {
	            xml = _react2['default'].createElement(
	                'li',
	                { key: ele.typeName, className: index == activeIndex ? "on" : '' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'multi-drop-down-list-content',
	                        onMouseOver: function () {
	                            _this2.calculateNextMenuTree(depth, index);
	                        }
	                    },
	                    ele.typeName
	                ),
	                _react2['default'].createElement('em', null)
	            );
	        } else {
	            xml = _react2['default'].createElement(
	                'li',
	                { className: 'select-drop-down-input', onClick: function () {
	                        _this2.checkboxHandler(ele);
	                    } },
	                _react2['default'].createElement(
	                    'i',
	                    { className: formGroup.indexOf(ele) < 0 ? 'check-box' : 'check-box active' },
	                    _react2['default'].createElement('b', null)
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'select-drop-down-check-content' },
	                    ' ',
	                    ele.typeName
	                )
	            );
	        }
	        return xml;
	    };

	    /**
	     * 计算新的menu队列数据
	     * @param depth 状态数组深度
	     * @param index 替换的序数号
	     */

	    MultiDropDownMenu.prototype.calculateNextMenuTree = function calculateNextMenuTree(depth, index) {
	        var cachedDropDownQueue = this.state.dropDownQueue;
	        cachedDropDownQueue = cachedDropDownQueue.slice(0, depth); //每次鼠标浮动，保留之前的
	        cachedDropDownQueue[depth] = index; //队列尾部添加序数号
	        //推入数据
	        this.setState({
	            dropDownQueue: cachedDropDownQueue
	        });
	    };

	    /**
	     * 下拉children所需要的数据形式
	     * [1,2,3]=>
	     * dropDownData[1].children//第1层
	     * dropDownData[1].children[2].children
	     * dropDownData[1].children[2].children[3]
	     * @type {{dropDownQueue: Array}}
	     */

	    MultiDropDownMenu.prototype.renderQueuedMenu = function renderQueuedMenu(dropDownQueue) {
	        var _this3 = this;

	        var dropDownData = this.props.dropDownData;
	        var cachedData = [];
	        dropDownQueue.reduce(function (preQueue, cur) {
	            /**
	             * 参数叠加
	             */
	            preQueue.push(cur);

	            /**
	             * 往数组推送数据
	             */
	            var childMenuSourceData = preQueue.reduce(function (pre, cur) {
	                return pre[cur].children;
	            }, dropDownData);
	            if (childMenuSourceData && childMenuSourceData.length > 0) {
	                cachedData.push(_this3.renderChildMenu(childMenuSourceData, preQueue.length, dropDownQueue));
	            }
	            return preQueue;
	        }, []);
	        return cachedData;
	    };

	    /**
	     *
	     * @param listData 菜单数据
	     * @param depth 菜单深度(parent的节点)
	     * @return {XML}
	     * active的序数号码dropDownQueue[depth+1]
	     */

	    MultiDropDownMenu.prototype.renderChildMenu = function renderChildMenu(listData, depth, dropDownQueue) {
	        var _this4 = this;

	        var activeIndex = dropDownQueue[depth];
	        var XML = _react2['default'].createElement(
	            'ul',
	            { className: 'multi-drop-down-list select-drop-down-list', key: depth },
	            listData && listData.map(function (ele, index) {
	                return ele.leaf ? _this4.renderList('leaf', ele, activeIndex, index, depth) : _this4.renderList('branch', ele, activeIndex, index, depth);
	            })
	        );
	        return XML;
	    };

	    MultiDropDownMenu.prototype.render = function render() {
	        var _this5 = this;

	        var dropDownData = this.props.dropDownData;
	        var _state = this.state;
	        var dropDownQueue = _state.dropDownQueue;
	        var title = _state.title;

	        return _react2['default'].createElement(
	            'div',
	            { className: 'question-multi-menu' },
	            _react2['default'].createElement(
	                'div',
	                { className: 'question-multi-menu-head', onMouseOver: function () {
	                        _this5.setState({
	                            dropDownQueue: []
	                        });
	                    } },
	                _react2['default'].createElement(
	                    'span',
	                    { className: 'drop-down-hint' },
	                    title
	                ),
	                _react2['default'].createElement('i', { className: 'drop-down-arrow' })
	            ),
	            dropDownData && dropDownData.length > 0 ? _react2['default'].createElement(
	                'div',
	                { className: 'question-multi-menu-body' },
	                this.renderChildMenu(dropDownData, 0, dropDownQueue),
	                /*来自第0层*/
	                this.renderQueuedMenu(dropDownQueue)
	            ) : null
	        );
	    };

	    return MultiDropDownMenu;
	})(_react.Component);

	exports['default'] = MultiDropDownMenu;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by slashhuang on 16/5/12.
	 *
	 * 下拉多选框菜单
	 */
	"use strict";

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var DropDownSelect = (function (_Component) {
	    _inherits(DropDownSelect, _Component);

	    function DropDownSelect(props, context) {
	        _classCallCheck(this, DropDownSelect);

	        _Component.call(this, props, context);
	        this.state = {
	            formGroup: [],
	            idGroup: []
	        };
	        this.formData = this.state.formGroup;
	    }

	    DropDownSelect.prototype.checkboxHandler = function checkboxHandler(ele) {
	        var cachedFormGroup = this.state.formGroup;
	        var cachedidGroup = this.state.idGroup;
	        var name = ele.name,
	            id = ele.id;
	        /**
	         * 按照如下格式存取对外调用的数据，确保完备
	         * [ele]//ele为数组中的每一项
	         */
	        var targetIndex = cachedFormGroup.indexOf(name);
	        if (targetIndex > -1) {
	            cachedFormGroup.splice(targetIndex, 1);
	            cachedidGroup.splice(targetIndex, 1);
	        } else {
	            cachedFormGroup.push(name);
	            cachedidGroup.push(id);
	        }
	        this.setState({
	            formGroup: cachedFormGroup,
	            idGroup: cachedidGroup
	        });
	        this.formGroup = this.state.formGroup;
	    };

	    DropDownSelect.prototype.renderChildMenu = function renderChildMenu(selectDataSource) {
	        var _this = this;

	        var formGroup = this.state.formGroup;

	        var XML = _react2["default"].createElement(
	            "ul",
	            { className: "select-drop-down-list" },
	            selectDataSource && selectDataSource.map(function (ele) {
	                var name = ele.name;
	                return _react2["default"].createElement(
	                    "li",
	                    { className: "select-drop-down-input", onClick: function () {
	                            _this.checkboxHandler(ele);
	                        } },
	                    _react2["default"].createElement(
	                        "i",
	                        { className: formGroup.indexOf(name) < 0 ? 'check-box' : 'check-box active' },
	                        _react2["default"].createElement("b", null)
	                    ),
	                    _react2["default"].createElement(
	                        "div",
	                        { className: "select-drop-down-check-content " },
	                        name
	                    )
	                );
	            })
	        );
	        return XML;
	    };

	    DropDownSelect.prototype.render = function render() {
	        var _props = this.props;
	        var selectDataSource = _props.selectDataSource;
	        var title = _props.title;
	        var formGroup = this.state.formGroup;

	        return _react2["default"].createElement(
	            "div",
	            { className: "question-multi-menu" },
	            _react2["default"].createElement(
	                "div",
	                { className: "question-multi-menu-head" },
	                _react2["default"].createElement(
	                    "span",
	                    { className: "drop-down-hint" },
	                    formGroup && formGroup.join(";") || title
	                ),
	                _react2["default"].createElement("i", { className: "drop-down-arrow" })
	            ),
	            _react2["default"].createElement(
	                "div",
	                { className: "question-multi-menu-body" },
	                this.renderChildMenu(selectDataSource)
	            )
	        );
	    };

	    return DropDownSelect;
	})(_react.Component);

	exports["default"] = DropDownSelect;
	module.exports = exports["default"];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by slashhuang on 16/5/13.
	 * 联想下拉组件
	 */
	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(7);

	var DropDownSuggestion = (function (_Component) {
	    _inherits(DropDownSuggestion, _Component);

	    function DropDownSuggestion(props, context) {
	        _classCallCheck(this, DropDownSuggestion);

	        _Component.call(this, props, context);
	        this.state = {
	            formGroup: [], //满足联想要求的下拉框
	            targetContact: {}, //选中的目标联系人
	            customerClassName: '',
	            placeHolder: props.title || '',
	            title: '', //展示的数据
	            status: false
	        };
	        this.formData = this.state.targetContact;
	    }

	    DropDownSuggestion.prototype.componentDidMount = function componentDidMount() {
	        var that = this;
	        _reactDom.findDOMNode(this.refs['suggestContainer']).addEventListener('mouseleave', function () {
	            that.judgeStatus();
	        });
	        this.setState({
	            customerClassName: this.props.customerClassName || "drop-down-suggestion",
	            placeHolder: this.props.placeHolder || "请填写姓名"
	        });
	    };

	    DropDownSuggestion.prototype.judgeStatus = function judgeStatus() {
	        if (Object.keys(this.state.targetContact).length < 1) {}
	        this.formData = this.state.targetContact;
	    };

	    DropDownSuggestion.prototype.clickHandler = function clickHandler(ele) {
	        this.setState({
	            targetContact: ele,
	            status: true,
	            title: ele
	        });
	    };

	    DropDownSuggestion.prototype.handleChange = function handleChange(value) {
	        var that = this;
	        var url = this.props.url;

	        this.setState({
	            title: value
	        });
	        fetch(url).then(function (data) {
	            return data.json();
	        }).then(function (data) {
	            that.setState({
	                formGroup: data['keywords'],
	                targetContact: {}
	            });
	        })['catch'](function () {
	            debugger;
	        });
	    };

	    DropDownSuggestion.prototype.renderChildMenu = function renderChildMenu(formGroup) {
	        var _this = this;

	        var XML = formGroup && formGroup.length > 0 ? _react2['default'].createElement(
	            'div',
	            { className: 'question-multi-menu-body' },
	            _react2['default'].createElement(
	                'ul',
	                { className: 'select-drop-down-list' },
	                formGroup && formGroup.map(function (ele) {
	                    return _react2['default'].createElement(
	                        'li',
	                        { className: 'select-drop-down-input', onClick: function () {
	                                _this.clickHandler(ele);
	                            } },
	                        _react2['default'].createElement(
	                            'div',
	                            null,
	                            ele
	                        )
	                    );
	                })
	            )
	        ) : _react2['default'].createElement('div', null);
	        return XML;
	    };

	    DropDownSuggestion.prototype.render = function render() {
	        var _this2 = this;

	        var _state = this.state;
	        var formGroup = _state.formGroup;
	        var title = _state.title;
	        var placeHolder = _state.placeHolder;

	        return _react2['default'].createElement(
	            'div',
	            { className: this.state.customerClassName, ref: 'suggestContainer' },
	            _react2['default'].createElement('input', { className: 'drop-down-suggestion-head',
	                style: { outline: 'none' },
	                value: title,
	                placeholder: placeHolder,
	                onChange: function (e) {
	                    return _this2.handleChange(e.target.value);
	                }
	            }),
	            this.renderChildMenu(formGroup)
	        );
	    };

	    return DropDownSuggestion;
	})(_react.Component);

	exports['default'] = DropDownSuggestion;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(8);


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;