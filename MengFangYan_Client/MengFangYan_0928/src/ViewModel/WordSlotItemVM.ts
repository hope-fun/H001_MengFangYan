/**
 *
 * @author 
 *
 */
class WordSlotItemVM extends egret.gui.SkinnableContainer {
    
    public wordSlotGroup : egret.gui.Group;
    public wordSlotUIAsset: egret.gui.UIAsset;
    //自身容器.
    public wordSlot: egret.gui.Group;
    
	public constructor(_wordSlotGroup ?: egret.gui.Group) {
        super();
        this.skinName = "View.WordSlotItemView";
        this.wordSlotGroup = _wordSlotGroup;
        this.wordSlotGroup.addElement(this);
//        this.wordShotUIAsset.ad
	}
	
    public childrenCreated() { 
        
//        alert("2");
    }
}
