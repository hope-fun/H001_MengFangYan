var View;
(function (View) {
    var WordBtnItemView = (function (_super) {
        __extends(WordBtnItemView, _super);
        function WordBtnItemView() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [76, 77]);
            this.elementsContent = [this.wordBtn_i(), this.wordLabelGroup_i()];
            this.states = [
                new egret.gui.State("up", []),
                new egret.gui.State("down", [
                    new egret.gui.SetProperty("wordLabel", "textColor", 0x222222)
                ]),
                new egret.gui.State("disabled", [
                    new egret.gui.SetProperty("wordLabel", "textColor", 0xcccccc)
                ])
            ];
        }
        var __egretProto__ = WordBtnItemView.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return WordBtnItemView._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__4_i = function () {
            var t = new egret.gui.HorizontalLayout();
            this.__s(t, ["gap", "horizontalAlign", "verticalAlign"], [0, "center", "middle"]);
            return t;
        };
        __egretProto__.wordBtn_i = function () {
            var t = new egret.gui.Button();
            this.wordBtn = t;
            this.__s(t, ["horizontalCenter", "skinName", "verticalCenter"], [0, new egret.gui.ButtonSkin("0001_btn_off_07", "0001_btn_on_07"), 0]);
            return t;
        };
        __egretProto__.wordLabelGroup_i = function () {
            var t = new egret.gui.Group();
            this.wordLabelGroup = t;
            t.setStyle("fontFamily", "微软雅黑");
            this.__s(t, ["horizontalCenter", "verticalCenter"], [0, 0]);
            t.layout = this.__4_i();
            t.elementsContent = [this.wordLabel_i()];
            return t;
        };
        __egretProto__.wordLabel_i = function () {
            var t = new egret.gui.Label();
            this.wordLabel = t;
            this.__s(t, ["fontFamily", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "size", "textAlign", "textColor", "verticalAlign", "y"], ["微软雅黑", 0, 0, 0, 0, 50, "center", 0x111111, "middle", 4]);
            return t;
        };
        WordBtnItemView._skinParts = ["wordBtn", "wordLabel", "wordLabelGroup"];
        return WordBtnItemView;
    })(egret.gui.Skin);
    View.WordBtnItemView = WordBtnItemView;
    WordBtnItemView.prototype.__class__ = "View.WordBtnItemView";
})(View || (View = {}));
