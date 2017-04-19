var View;
(function (View) {
    var MainGameView = (function (_super) {
        __extends(MainGameView, _super);
        function MainGameView() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [1136, 640]);
            this.elementsContent = [this.bg_i(), this.player_02_i(), this.btnTip_i(), this.back_i(), this.btnRidMistake_i(), this.btnRightAnswer_i(), this.btnListenAgain_i(), this.btnShare_i(), this.__3_i(), this.__4_i(), this.levelName_i(), this.wordBtnGroup_i(), this.wordSlotGroup_i(), this.questionLabel_i(), this.moneyGroup_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = MainGameView.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return MainGameView._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [38, -93, egret.gui.getScale9Grid("10,9,61,60"), "1_0000_bj_04", -522, 222]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.TileLayout();
            this.__s(t, ["horizontalAlign", "horizontalGap", "orientation", "paddingTop", "verticalAlign", "verticalGap"], ["center", 3, "rows", 15, "middle", 10]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.HorizontalLayout();
            this.__s(t, ["horizontalAlign", "verticalAlign"], ["center", "middle"]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [38, 0, egret.gui.getScale9Grid("10,9,61,60"), "1_0000_bj_04", 0, 233]);
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "verticalCenter", "x"], ["0003_icon_02", 0.5, -16]);
            return t;
        };
        __egretProto__.back_i = function () {
            var t = new egret.gui.Button();
            this.back = t;
            this.__s(t, ["horizontalCenter", "skinName", "verticalCenter", "x", "y"], [-259, new egret.gui.ButtonSkin("back", "back_"), -504.5, 10, 10]);
            return t;
        };
        __egretProto__.bg_i = function () {
            var t = new egret.gui.UIAsset();
            this.bg = t;
            this.__s(t, ["source", "x", "y"], ["bg_01_png", 0, 0]);
            return t;
        };
        __egretProto__.btnListenAgain_i = function () {
            var t = new egret.gui.Button();
            this.btnListenAgain = t;
            this.__s(t, ["horizontalCenter", "skinName", "verticalCenter"], [235.5, new egret.gui.ButtonSkin("0011_btn_off_05", "0011_btn_on_05"), -210.5]);
            return t;
        };
        __egretProto__.btnMall_i = function () {
            var t = new egret.gui.UIAsset();
            this.btnMall = t;
            this.__s(t, ["right", "source", "verticalCenter"], [-24, "0004_btn_off_08", 0]);
            return t;
        };
        __egretProto__.btnRidMistake_i = function () {
            var t = new egret.gui.Button();
            this.btnRidMistake = t;
            this.__s(t, ["horizontalCenter", "skinName", "verticalCenter"], [-235, new egret.gui.ButtonSkin("0012_btn_off_03", "0012_btn_on_03"), -90.5]);
            return t;
        };
        __egretProto__.btnRightAnswer_i = function () {
            var t = new egret.gui.Button();
            this.btnRightAnswer = t;
            this.__s(t, ["horizontalCenter", "skinName", "verticalCenter"], [-232, new egret.gui.ButtonSkin("0009_btn_off_04", "0009_btn_on_04"), 81]);
            return t;
        };
        __egretProto__.btnShare_i = function () {
            var t = new egret.gui.Button();
            this.btnShare = t;
            this.__s(t, ["horizontalCenter", "skinName", "verticalCenter"], [235, new egret.gui.ButtonSkin("0013_btn_off_06", "0013_btn_on_06"), -43]);
            return t;
        };
        __egretProto__.btnTip_i = function () {
            var t = new egret.gui.Button();
            this.btnTip = t;
            this.__s(t, ["horizontalCenter", "skinName", "verticalCenter"], [-236, new egret.gui.ButtonSkin("0008_btn_off_02", "0008_btn_on_02"), -273]);
            return t;
        };
        __egretProto__.levelName_i = function () {
            var t = new egret.gui.Label();
            this.levelName = t;
            this.__s(t, ["fontFamily", "horizontalCenter", "text", "verticalCenter"], ["黑体", -94, "教学篇 01/01", -522]);
            return t;
        };
        __egretProto__.moneyGroup_i = function () {
            var t = new egret.gui.Group();
            this.moneyGroup = t;
            this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width"], [38, 168.5, -522, 233]);
            t.elementsContent = [this.__7_i(), this.moneyLabel_i(), this.__8_i(), this.btnMall_i()];
            return t;
        };
        __egretProto__.moneyLabel_i = function () {
            var t = new egret.gui.Label();
            this.moneyLabel = t;
            this.__s(t, ["fontFamily", "horizontalCenter", "text", "verticalCenter"], ["黑体", -2, "0", 0]);
            return t;
        };
        __egretProto__.player_02_i = function () {
            var t = new egret.gui.UIAsset();
            this.player_02 = t;
            this.__s(t, ["source", "x", "y"], ["0010_player_02", 164, 290]);
            return t;
        };
        __egretProto__.questionLabel_i = function () {
            var t = new egret.gui.Label();
            this.questionLabel = t;
            this.__s(t, ["horizontalCenter", "y"], [0, 817]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [0, egret.gui.getScale9Grid("2,84,12,220"), "bg00000", 394.5, 640]);
            return t;
        };
        __egretProto__.wordBtnGroup_i = function () {
            var t = new egret.gui.Group();
            this.wordBtnGroup = t;
            this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width"], [276, -0.5, 430, 639]);
            t.layout = this.__5_i();
            return t;
        };
        __egretProto__.wordSlotGroup_i = function () {
            var t = new egret.gui.Group();
            this.wordSlotGroup = t;
            this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width"], [80, 0, 172, 640]);
            t.layout = this.__6_i();
            return t;
        };
        MainGameView._skinParts = ["bg", "player_02", "btnTip", "back", "btnRidMistake", "btnRightAnswer", "btnListenAgain", "btnShare", "levelName", "wordBtnGroup", "wordSlotGroup", "questionLabel", "moneyLabel", "btnMall", "moneyGroup"];
        return MainGameView;
    })(egret.gui.Skin);
    View.MainGameView = MainGameView;
    MainGameView.prototype.__class__ = "View.MainGameView";
})(View || (View = {}));
