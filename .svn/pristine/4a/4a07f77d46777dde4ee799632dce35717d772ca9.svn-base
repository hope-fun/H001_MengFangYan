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
        var __egretProto__ = WinPopupVM.prototype;
        __egretProto__.childrenCreated = function () {
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
    WinPopupVM.prototype.__class__ = "ViewModel.WinPopupVM";
})(ViewModel || (ViewModel = {}));
