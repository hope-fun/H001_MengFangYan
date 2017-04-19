/**
 *
 * @author
 *
 */
var ViewModel;
(function (ViewModel) {
    var LoginVM = (function (_super) {
        __extends(LoginVM, _super);
        function LoginVM(_uiStage, _onCallBack) {
            _super.call(this);
            this.onBgMusic = "";
            this.skinName = "View.LoginView";
            this.uiStage = _uiStage;
            this.onCallBack = _onCallBack;
            this.uiStage.addElement(this);
        }
        var __egretProto__ = LoginVM.prototype;
        Object.defineProperty(__egretProto__, "OnBgMusic", {
            get: function () {
                return this.onBgMusic;
            },
            set: function (name) {
                if (this.onBgMusic == "" && name != "") {
                    this.onBgMusic = name;
                    this.BgMusic = RES.getRes(name); //set
                    this.BgMusic.play(true, 0); //get
                }
                else {
                    this.onBgMusic = "";
                    this.BgMusic.stop(); //get
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "BgMusic", {
            get: function () {
                return this.bgMusic;
            },
            set: function (s) {
                this.bgMusic = s;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.childrenCreated = function () {
            var _this = this;
            this.OnBgMusic = "TTCFY_mp3"; //开音效.
            //        this.onBgMusic();
            var tw = egret.Tween.get(this.btn_start, { loop: true });
            tw.to({ scaleX: 1.2, scaleY: 1.2 }, 500).to({ scaleX: 1, scaleY: 1 }, 500);
            this.btn_start.touchEnabled = false;
            this.bg_00_png.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.OnBgMusic = ""; //关音效.
                var tw = egret.Tween.get(_this);
                tw.to({ alpha: 0 }, 300).call(_this.onClose);
                _this.bg_00_png.touchEnabled = false;
                //                this.bg_00_png.removeEventListener(egret.TouchEvent.TOUCH_TAP,() => { },this);
            }, this);
        };
        //    private onBgMusic() {        
        ////        if(bgMusic.        
        //        var bgMusic: egret.Sound = RES.getRes("TTCFY_mp3");        
        //        bgMusic.play(true);        
        //    }
        /*         * 关闭并回调.         */
        __egretProto__.onClose = function () {
            this.onCallBack();
            this.uiStage.removeElement(this);
        };
        return LoginVM;
    })(egret.gui.SkinnableComponent);
    ViewModel.LoginVM = LoginVM;
    LoginVM.prototype.__class__ = "ViewModel.LoginVM";
})(ViewModel || (ViewModel = {}));
