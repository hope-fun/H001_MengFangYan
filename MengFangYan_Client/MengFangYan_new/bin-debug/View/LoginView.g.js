var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var View;
(function (View) {
    var LoginView = (function (_super) {
        __extends(LoginView, _super);
        function LoginView() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [1136, 640]);
            this.elementsContent = [this.bg_00_png_i(), this.btn_start_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        var d = __define,c=LoginView;p=c.prototype;
        d(p, "skinParts"
            ,function () {
                return LoginView._skinParts;
            }
        );
        p.btn_start_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_start = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0.5, "btn_start", 462.5]);
            return t;
        };
        p.bg_00_png_i = function () {
            var t = new egret.gui.Button();
            this.bg_00_png = t;
            this.__s(t, ["horizontalCenter", "skinName", "verticalCenter"], [0, new egret.gui.ButtonSkin("bg_00_png", "bg_00_png", "bg_00_png"), 0]);
            return t;
        };
        LoginView._skinParts = ["bg_00_png", "btn_start"];
        return LoginView;
    })(egret.gui.Skin);
    View.LoginView = LoginView;
    egret.registerClass(LoginView,"View.LoginView");
})(View || (View = {}));
