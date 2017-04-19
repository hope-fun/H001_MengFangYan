/**
 *
 * @author 
 *
 */
module ViewModel {
    export class MainGameVM extends egret.gui.SkinnableContainer {
        //场景舞台.
        public uiStage: egret.gui.UIStage;
        //主游戏场景背景控件.
        public bg: egret.gui.UIAsset;
        //主场景回掉方法.
        public onCallBack: Function;
        //返回按钮控件.
        private back: egret.gui.Button;
        //商城按钮控件.
        private btnMall: egret.gui.Button;
        //提示道具按钮控件.
        private btnTip: egret.gui.Button;
        //去掉一个错误答案按钮控件.
        private btnRidMistake: egret.gui.Button;
        //直接显示正确答案按钮控件.
        private btnRightAnswer: egret.gui.Button;
        //重听按钮控件.
        private btnListenAgain: egret.gui.Button;
        //分享按钮控件.
        private btnShare: egret.gui.Button;
        //答案选项布局控件.
        public wordBtnGroup: egret.gui.Group;
        //答案框布局控件.
        public wordSlotGroup: egret.gui.Group;
        //题目控件.
        public questionLabel: egret.gui.Label;

        private wordSlotList: Array<WordSlotItemVM> = new Array<WordSlotItemVM>();

        private wordSlotAnswer: string = "";

        public wordBtnItemVM: WordBtnItemVM;

        public player_02: egret.gui.UIAsset;

        private onQueSound: string = "";

        get OnQueSound(): string {
            return this.onQueSound;
        }

        set OnQueSound(name: string) {
            if(this.onQueSound == "" && name != "") {//没有值就播.
                this.onQueSound = name;
                this.QueSound = RES.getRes(name);//set
                this.QueSound.play();//get
            } else { //有值就暂停.
                this.onQueSound = "";
//                this.QueSound.stop();//get //TODO
            }
        }
        //背景音控件.
        private queSound: egret.Sound;

        get QueSound(): egret.Sound {
            return this.queSound;
        }

        set QueSound(s: egret.Sound) {
            this.queSound = s;
        }

        public constructor(_uiStage?: egret.gui.UIStage,_onCallBack?: Function) {
            super();
            this.skinName = "View.MainGameView";
            this.onCallBack = _onCallBack;
            this.uiStage = _uiStage;
            this.uiStage.addElement(this);
        }

//        public win;

        public childrenCreated() {
            this.OnQueSound = "301a_mp3";
            this.questionLabel.text = Model.IndexDB.subject1;
            for(var i: number = 0;i < Model.IndexDB.answer1.length;i++) {
                this.wordSlotList.push(new WordSlotItemVM(this.wordSlotGroup));
            }
            for(var i: number = 0;i < Model.IndexDB.answerPool1.length;i++) {
                this.wordBtnItemVM = new WordBtnItemVM(this.wordBtnGroup,Model.IndexDB.answerPool1[i].toString(),(_obj: WordBtnItemVM) => {
                    //                this.wordSlotList[this.wordSlotAnswer].//addChildAt(_obj);
                    if(this.wordSlotAnswer.length < 3) {
                        var tw = egret.Tween.get(_obj);
                        tw.to({ alpha: 0 },300)
                        _obj.wordLabel.textColor = 0xffffff;
                        this.wordSlotList[this.wordSlotAnswer.length].wordSlot.addElement(_obj.wordLabel);
                        this.wordSlotAnswer += _obj.wordLabel.text;
                        if(this.wordSlotAnswer.length == 3) {
                            if(this.wordSlotAnswer == Model.IndexDB.answer1) {
                                var win: WinPopupVM = new WinPopupVM(this.uiStage,() => { this.onClose(); });
                                //                            var win = new View.WinPopupView(this.uiStage);
                                //                            egret.gui.Alert.show("恭喜您，回答正确！","",() => { 
                                //                                this.onClose();
                                //                            });
                            } else {
                                egret.gui.Alert.show("回答不正确哦,请重新开始哦！","",() => {
                                    this.onClose();
                                });
                            }
                        }
                    } else {
                        egret.gui.Alert.show("回答还是不正确哦,请重新开始哦！","",() => {
                            this.onClose();
                        });
                    }  
                    //                console.log(_obj.x);
                    //                    var tw = egret.Tween.get(_obj);
                    //                  alert("判断格子是否满，当前第几个格子，答案是否对");
                    //                    tw.to( {x:1000}, 1000 ,egret.Ease.backInOut);
                });
            }
            this.dogTweenLoop(this.player_02);
            //初始化按钮事件.
            this.back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClose,this);
            this.btnMall.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
                egret.gui.Alert.show("商城维护中。。。");
            },this);
            this.btnTip.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
                egret.gui.Alert.show("金币不足,请先购买金币哦!");
            },this)
            this.btnRidMistake.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
                egret.gui.Alert.show("金币不足,请先购买金币哦!");
            },this);
            this.btnRightAnswer.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
                egret.gui.Alert.show("金币不足，请先购买金币哦!");
            },this);
            this.btnListenAgain.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
                
//                this.QueSound.resume();TODO:
            },this);
            this.btnShare.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
                egret.gui.Alert.show("微信分享接入ing。。。");
            },this);
        }
             /*         * 小狗上下缓动动画.         */
        private dogTweenLoop(img: egret.gui.UIAsset) {
            img.x = 160;
            img.y = 290;
            var tw = egret.Tween.get(img,{ loop: true });
            tw.to({ y: 320 },1000).to({ y: 290 },1000);
        }
             /*         * 关闭并回调.         */
        private onClose() {
            this.OnQueSound = "";
            var tw = egret.Tween.get(this);
            tw.to({ alpha: 0 },300).call(() => {
                this.onCallBack();
                this.uiStage.removeElement(this);
            });
            this.back.touchEnabled = false;
        }
    }
}