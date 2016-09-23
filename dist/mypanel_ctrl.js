'use strict';

System.register(['app/plugins/sdk'], function (_export, _context) {
	"use strict";

	var PanelCtrl, _createClass, MyPanelCtrl;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	return {
		setters: [function (_appPluginsSdk) {
			PanelCtrl = _appPluginsSdk.PanelCtrl;
		}],
		execute: function () {
			_createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor);
					}
				}

				return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor;
				};
			}();

			_export('MyPanelCtrl', MyPanelCtrl = function (_PanelCtrl) {
				_inherits(MyPanelCtrl, _PanelCtrl);

				function MyPanelCtrl($scope, $injector) {
					_classCallCheck(this, MyPanelCtrl);

					var _this = _possibleConstructorReturn(this, (MyPanelCtrl.__proto__ || Object.getPrototypeOf(MyPanelCtrl)).call(this, $scope, $injector));

					_this.events.on('panel-initialized', _this.render.bind(_this));
					return _this;
				}

				_createClass(MyPanelCtrl, [{
					key: 'onInitEditMode',
					value: function onInitEditMode() {
						this.addEditorTab('Options', '/public/plugins/grafana-mypanel/editor.html', 2);
					}
				}]);

				return MyPanelCtrl;
			}(PanelCtrl));

			_export('MyPanelCtrl', MyPanelCtrl);
		}
	};
});
//# sourceMappingURL=mypanel_ctrl.js.map
