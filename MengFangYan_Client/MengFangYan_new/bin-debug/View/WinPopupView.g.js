var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var View;
(function (View) {
    var WinPopupView = (function (_super) {
        __extends(WinPopupView, _super);
        function WinPopupView() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [this.__10_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        var d = __define,c=WinPopupView;p=c.prototype;
        d(p, "skinParts"
            ,function () {
                return WinPopupView._skinParts;
            }
        );
        p.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "source", "width", "x", "y"], [0.7, 2048, "black_png", 2048, -686, -457]);
            return t;
        };
        p.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bj_01", 0]);
            return t;
        };
        p.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0.5, "amazing", -161]);
            return t;
        };
        p.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "word_01", -32.5]);
            return t;
        };
        p.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter", "visible"], [40, "icon_5", 1, false]);
            return t;
        };
        p.__8_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter", "visible"], [0.5, "icon_+", 1.5, false]);
            return t;
        };
        p.__9_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter", "visible"], [-62.5, "0003_icon_02", 2.5, false]);
            return t;
        };
        p.btnSure_i = function () {
            var t = new egret.gui.Button();
            this.btnSure = t;
            t.setStyle("fontFamily", "黑体");
            t.setStyle("size", 40);
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [77, "确定", new egret.gui.ButtonSkin("btn_off_03", "btn_on_03"), 195, 218, 603]);
            return t;
        };
        p.__10_i = function () {
            var t = new egret.gui.Group();
            this.__s(t, ["height", "horizontalCenter", "left", "top", "verticalCenter", "width"], [1136, 0, 0, 0, 0, 640]);
            t.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.btnSure_i()];
            return t;
        };
        WinPopupView._skinParts = ["btnSure"];
        return WinPopupView;
    })(egret.gui.Skin);
    View.WinPopupView = WinPopupView;
    egret.registerClass(WinPopupView,"View.WinPopupView");
})(View || (View = {}));
