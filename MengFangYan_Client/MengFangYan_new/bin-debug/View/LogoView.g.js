var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
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
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        var d = __define,c=LogoView;p=c.prototype;
        p.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["luckywings512_png", 97, 320]);
            return t;
        };
        return LogoView;
    })(egret.gui.Skin);
    View.LogoView = LogoView;
    egret.registerClass(LogoView,"View.LogoView");
})(View || (View = {}));
