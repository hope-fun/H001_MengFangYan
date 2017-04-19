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
        var d = __define,c=LoginVM;p=c.prototype;
        d(p, "OnBgMusic"
            ,function () {
                return this.onBgMusic;
            }
            ,function (name) {
                if (this.onBgMusic == "" && name != "") {
                    this.onBgMusic = name;
                    this.BgMusic = RES.getRes(name); //set
                }
                else {
                    this.onBgMusic = "";
                }
            }
        );
        d(p, "BgMusic"
            ,function () {
                return this.bgMusic;
            }
            ,function (s) {
                this.bgMusic = s;
            }
        );
        p.childrenCreated = function () {
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
        p.onClose = function () {
            this.onCallBack();
            this.uiStage.removeElement(this);
        };
        return LoginVM;
    })(egret.gui.SkinnableComponent);
    ViewModel.LoginVM = LoginVM;
    egret.registerClass(LoginVM,"ViewModel.LoginVM");
})(ViewModel || (ViewModel = {}));
