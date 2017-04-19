/**
 *
 * @author 
 *
 */
module ViewModel {
    export class LoginVM extends egret.gui.SkinnableComponent {

        public uiStage: egret.gui.UIStage;

        public onCallBack: Function;

        public bg_00_png: egret.gui.Button;

        public btn_start: egret.gui.UIAsset;

        private onBgMusic: string = "";

        get OnBgMusic(): string {
            return this.onBgMusic;
        }

        set OnBgMusic(name: string) {
            if(this.onBgMusic == "" && name != "") {//没有值就播.
                this.onBgMusic = name;
                this.BgMusic = RES.getRes(name);//set
                this.BgMusic.play(true,0);//get
            } else { //有值就暂停.
                this.onBgMusic = "";
                this.BgMusic.stop();//get
            }
        }
        
        //背景音控件.
        private bgMusic: egret.Sound;

        get BgMusic(): egret.Sound {
            return this.bgMusic;
        }

        set BgMusic(s: egret.Sound) {
            this.bgMusic = s;
        }

        public constructor(_uiStage?: egret.gui.UIStage,_onCallBack?: Function) {
            super();
            this.skinName = "View.LoginView";
            this.uiStage = _uiStage;
            this.onCallBack = _onCallBack;
            this.uiStage.addElement(this);
        }

        public childrenCreated() {
            this.OnBgMusic = "TTCFY_mp3";//开音效.
            //        this.onBgMusic();
            var tw = egret.Tween.get(this.btn_start,{ loop: true });
            tw.to({ scaleX: 1.2,scaleY: 1.2 },500).to({ scaleX: 1,scaleY: 1 },500);
            this.btn_start.touchEnabled = false;
            this.bg_00_png.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
                this.OnBgMusic = "";//关音效.
                var tw = egret.Tween.get(this);
                tw.to({ alpha: 0 },300).call(this.onClose);
                this.bg_00_png.touchEnabled = false;
                //                this.bg_00_png.removeEventListener(egret.TouchEvent.TOUCH_TAP,() => { },this);
            },this);
        }
            
//    private onBgMusic() {        
////        if(bgMusic.        
//        var bgMusic: egret.Sound = RES.getRes("TTCFY_mp3");        
//        bgMusic.play(true);        
//    }
             /*         * 关闭并回调.         */
        private onClose() {
            this.onCallBack();
            this.uiStage.removeElement(this);
        }

    }
}
