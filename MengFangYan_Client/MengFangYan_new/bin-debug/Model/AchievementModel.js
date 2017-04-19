var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var Model;
(function (Model) {
    /**
     *
     * @author
     *
     */
    //成就模型.
    var AchievementModel = (function (_super) {
        __extends(AchievementModel, _super);
        function AchievementModel(aData) {
            _super.call(this, aData);
        }
        var d = __define,c=AchievementModel;p=c.prototype;
        return AchievementModel;
    })(AchievementStBase);
    Model.AchievementModel = AchievementModel;
    egret.registerClass(AchievementModel,"Model.AchievementModel");
    //成就静态对象.
    var AchievementStBase = (function () {
        function AchievementStBase(aData) {
        }
        var d = __define,c=AchievementStBase;p=c.prototype;
        return AchievementStBase;
    })();
    egret.registerClass(AchievementStBase,"AchievementStBase");
})(Model || (Model = {}));
