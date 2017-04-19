var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
/**
 *
 * @author
 *
 */
var ViewModel;
(function (ViewModel) {
    var WinPopupVM = (function (_super) {
        __extends(WinPopupVM, _super);
        function WinPopupVM(_uiStage, _onCallBack) {
            _super.call(this);
            this.skinName = "View.WinPopupView";
            this.uiStage = _uiStage;
            this.onCallBack = _onCallBack;
            this.uiStage.addElement(this);
        }
        var d = __define,c=WinPopupVM;p=c.prototype;
        p.childrenCreated = function () {
            var _this = this;
            this.btnSure.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                if (_this.onCallBack != null) {
                    _this.onCallBack();
                    _this.uiStage.removeElement(_this);
                }
            }, this);
        };
        return WinPopupVM;
    })(egret.gui.SkinnableComponent);
    ViewModel.WinPopupVM = WinPopupVM;
    egret.registerClass(WinPopupVM,"ViewModel.WinPopupVM");
})(ViewModel || (ViewModel = {}));
