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
    var MainGameVM = (function (_super) {
        __extends(MainGameVM, _super);
        function MainGameVM(_uiStage, _onCallBack) {
            _super.call(this);
            this.wordSlotList = new Array();
            this.wordSlotAnswer = "";
            this.onQueSound = "";
            this.skinName = "View.MainGameView";
            this.onCallBack = _onCallBack;
            this.uiStage = _uiStage;
            this.uiStage.addElement(this);
        }
        var d = __define,c=MainGameVM;p=c.prototype;
        d(p, "OnQueSound"
            ,function () {
                return this.onQueSound;
            }
            ,function (name) {
                if (this.onQueSound == "" && name != "") {
                    this.onQueSound = name;
                    this.QueSound = RES.getRes(name); //set
                    this.QueSound.play(); //get
                }
                else {
                    this.onQueSound = "";
                }
            }
        );
        d(p, "QueSound"
            ,function () {
                return this.queSound;
            }
            ,function (s) {
                this.queSound = s;
            }
        );
        //        public win;
        p.childrenCreated = function () {
            var _this = this;
            this.OnQueSound = "301a_mp3";
            this.questionLabel.text = Model.IndexDB.subject1;
            for (var i = 0; i < Model.IndexDB.answer1.length; i++) {
                this.wordSlotList.push(new WordSlotItemVM(this.wordSlotGroup));
            }
            for (var i = 0; i < Model.IndexDB.answerPool1.length; i++) {
                this.wordBtnItemVM = new WordBtnItemVM(this.wordBtnGroup, Model.IndexDB.answerPool1[i].toString(), function (_obj) {
                    //                this.wordSlotList[this.wordSlotAnswer].//addChildAt(_obj);
                    if (_this.wordSlotAnswer.length < 3) {
                        var tw = egret.Tween.get(_obj);
                        tw.to({ alpha: 0 }, 300);
                        _obj.wordLabel.textColor = 0xffffff;
                        _this.wordSlotList[_this.wordSlotAnswer.length].wordSlot.addElement(_obj.wordLabel);
                        _this.wordSlotAnswer += _obj.wordLabel.text;
                        if (_this.wordSlotAnswer.length == 3) {
                            if (_this.wordSlotAnswer == Model.IndexDB.answer1) {
                                var win = new ViewModel.WinPopupVM(_this.uiStage, function () {
                                    _this.onClose();
                                });
                            }
                            else {
                                egret.gui.Alert.show("回答不正确哦,请重新开始哦！", "", function () {
                                    _this.onClose();
                                });
                            }
                        }
                    }
                    else {
                        egret.gui.Alert.show("回答还是不正确哦,请重新开始哦！", "", function () {
                            _this.onClose();
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
            this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
            this.btnMall.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                egret.gui.Alert.show("商城维护中。。。");
            }, this);
            this.btnTip.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                egret.gui.Alert.show("金币不足,请先购买金币哦!");
            }, this);
            this.btnRidMistake.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                egret.gui.Alert.show("金币不足,请先购买金币哦!");
            }, this);
            this.btnRightAnswer.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                egret.gui.Alert.show("金币不足，请先购买金币哦!");
            }, this);
            this.btnListenAgain.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                //                this.QueSound.resume();TODO:
            }, this);
            this.btnShare.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                egret.gui.Alert.show("微信分享接入ing。。。");
            }, this);
        };
        /*         * 小狗上下缓动动画.         */
        p.dogTweenLoop = function (img) {
            img.x = 160;
            img.y = 290;
            var tw = egret.Tween.get(img, { loop: true });
            tw.to({ y: 320 }, 1000).to({ y: 290 }, 1000);
        };
        /*         * 关闭并回调.         */
        p.onClose = function () {
            var _this = this;
            this.OnQueSound = "";
            var tw = egret.Tween.get(this);
            tw.to({ alpha: 0 }, 300).call(function () {
                _this.onCallBack();
                _this.uiStage.removeElement(_this);
            });
            this.back.touchEnabled = false;
        };
        return MainGameVM;
    })(egret.gui.SkinnableContainer);
    ViewModel.MainGameVM = MainGameVM;
    egret.registerClass(MainGameVM,"ViewModel.MainGameVM");
})(ViewModel || (ViewModel = {}));
