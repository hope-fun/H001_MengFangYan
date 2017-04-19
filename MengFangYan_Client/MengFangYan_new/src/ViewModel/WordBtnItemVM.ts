/**
 *
 * @author 
 *
 */
class WordBtnItemVM extends egret.gui.SkinnableComponent{// .SkinnableComponent{
    
    public wordBtnGroup: egret.gui.Group;
    
    public wordLabel: egret.gui.Label;
    
    public wordBtn: egret.gui.Button;
    
    public wordLabelGroup: egret.gui.Group;
    
//    public wordBtnGroup: egret.gui.Group;
    //文字平移的动画回掉.
    private onClick: Function;
    
	public constructor(_wordBtnGroup ?: egret.gui.Group,_word ?: string,_onClick ?: Function) {
        super();
        this.skinName = "View.WordBtnItemView";
        this.wordBtnGroup = _wordBtnGroup;
        this.onClick = _onClick;
        this.wordBtnGroup.addElement(this);
        this.wordLabel.text = _word;
        this.wordLabel.touchEnabled = false;
	}
	
    public childrenCreated() {
        this.wordBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
             this.wordBtn.touchEnabled = false;
             if(this.onClick != null) { 
                  this.onClick(this);
             }
             //这边需要回复可点击,TODO:可能会出视效bug.
             setTimeout(() => {
                 this.wordBtn.touchEnabled = true;  
             },300);
//                var tw = egret.Tween.get(this);
//                tw.to({ alpha: 0 },300).call(() => { 
//                    if(this.onClick != null) { 
//                        this.onClick(this);
//                    }
//                });
        },this);
    }
    
    
}
