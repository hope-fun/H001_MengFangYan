
	/**
	 *
	 * @author 
	 *
	 */
module ViewModel {
	export class WinPopupVM extends egret.gui.SkinnableComponent {
        private uiStage : egret.gui.UIStage;
        private onCallBack: Function;
        private btnSure: egret.gui.Button;
        
		public constructor(_uiStage ?: egret.gui.UIStage,_onCallBack ?: Function) {
    		super();
            this.skinName = "View.WinPopupView";
            this.uiStage = _uiStage;
            this.onCallBack = _onCallBack;
            this.uiStage.addElement(this);
		}
		
        public childrenCreated() { 
            this.btnSure.addEventListener(egret.TouchEvent.TOUCH_TAP,() => { 
                if(this.onCallBack != null){
                    this.onCallBack();
                    this.uiStage.removeElement(this);
                }
            },this);
        }
	}
}
