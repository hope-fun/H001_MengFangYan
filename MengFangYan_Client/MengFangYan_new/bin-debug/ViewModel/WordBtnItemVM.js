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
var WordBtnItemVM = (function (_super) {
    __extends(WordBtnItemVM, _super);
    function WordBtnItemVM(_wordBtnGroup, _word, _onClick) {
        _super.call(this);
        this.skinName = "View.WordBtnItemView";
        this.wordBtnGroup = _wordBtnGroup;
        this.onClick = _onClick;
        this.wordBtnGroup.addElement(this);
        this.wordLabel.text = _word;
        this.wordLabel.touchEnabled = false;
    }
    var d = __define,c=WordBtnItemVM;p=c.prototype;
    p.childrenCreated = function () {
        var _this = this;
        this.wordBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.wordBtn.touchEnabled = false;
            if (_this.onClick != null) {
                _this.onClick(_this);
            }
            //这边需要回复可点击,TODO:可能会出视效bug.
            setTimeout(function () {
                _this.wordBtn.touchEnabled = true;
            }, 300);
            //                var tw = egret.Tween.get(this);
            //                tw.to({ alpha: 0 },300).call(() => { 
            //                    if(this.onClick != null) { 
            //                        this.onClick(this);
            //                    }
            //                });
        }, this);
    };
    return WordBtnItemVM;
})(egret.gui.SkinnableComponent);
egret.registerClass(WordBtnItemVM,"WordBtnItemVM");
