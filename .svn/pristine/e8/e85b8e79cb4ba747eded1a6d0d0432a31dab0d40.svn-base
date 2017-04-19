var View;
(function (View) {
    var WordSlotItemView = (function (_super) {
        __extends(WordSlotItemView, _super);
        function WordSlotItemView() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [78, 81]);
            this.elementsContent = [this.wordShotUIAsset_i(), this.wordSlot_i()];
            this.states = [
                new egret.gui.State("up", []),
                new egret.gui.State("down", [
                    new egret.gui.SetProperty("wordShotUIAsset", "source", "0001_btn_off_07")
                ]),
                new egret.gui.State("disabled", [
                    new egret.gui.SetProperty("wordShotUIAsset", "source", "0001_btn_on_07")
                ])
            ];
        }
        var __egretProto__ = WordSlotItemView.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return WordSlotItemView._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__4_i = function () {
            var t = new egret.gui.HorizontalLayout();
            this.__s(t, ["gap", "horizontalAlign", "verticalAlign"], [0, "center", "middle"]);
            return t;
        };
        __egretProto__.wordShotUIAsset_i = function () {
            var t = new egret.gui.UIAsset();
            this.wordShotUIAsset = t;
            t.setStyle("fontFamily", "微软雅黑");
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "1_0000_bj_04", 0]);
            return t;
        };
        __egretProto__.wordSlot_i = function () {
            var t = new egret.gui.Group();
            this.wordSlot = t;
            t.setStyle("fontFamily", "微软雅黑");
            this.__s(t, ["bottom", "left", "right", "top"], [0, 0, 0, 0]);
            t.layout = this.__4_i();
            return t;
        };
        WordSlotItemView._skinParts = ["wordShotUIAsset", "wordSlot"];
        return WordSlotItemView;
    })(egret.gui.Skin);
    View.WordSlotItemView = WordSlotItemView;
    WordSlotItemView.prototype.__class__ = "View.WordSlotItemView";
})(View || (View = {}));
