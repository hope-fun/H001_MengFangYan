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
var WordSlotItemVM = (function (_super) {
    __extends(WordSlotItemVM, _super);
    function WordSlotItemVM(_wordSlotGroup) {
        _super.call(this);
        this.skinName = "View.WordSlotItemView";
        this.wordSlotGroup = _wordSlotGroup;
        this.wordSlotGroup.addElement(this);
        //        this.wordShotUIAsset.ad
    }
    var d = __define,c=WordSlotItemVM;p=c.prototype;
    p.childrenCreated = function () {
        //        alert("2");
    };
    return WordSlotItemVM;
})(egret.gui.SkinnableContainer);
egret.registerClass(WordSlotItemVM,"WordSlotItemVM");
