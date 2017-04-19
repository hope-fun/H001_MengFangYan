var View;
(function (View) {
    var LogoView = (function (_super) {
        __extends(LogoView, _super);
        function LogoView() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [1136, 640]);
            this.elementsContent = [this.__3_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = LogoView.prototype;
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["luckywings512_png", 97, 320]);
            return t;
        };
        return LogoView;
    })(egret.gui.Skin);
    View.LogoView = LogoView;
    LogoView.prototype.__class__ = "View.LogoView";
})(View || (View = {}));
