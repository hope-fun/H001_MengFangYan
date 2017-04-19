module View{
	export class WordSlotItemView extends egret.gui.Skin{
		private static _skinParts:Array<string> = ["wordShotUIAsset","wordSlot"];
		private __s:Function = egret.gui.setProperties;
		public wordShotUIAsset:egret.gui.UIAsset;
		public wordSlot:egret.gui.Group;

		public constructor(){
			super();
			
			this.__s(this,["height","width"],[78,81])
			this.elementsContent = [this.wordShotUIAsset_i(),this.wordSlot_i()];
			this.states = [
				new egret.gui.State ("up",
					[
					])
				,
				new egret.gui.State ("down",
					[
						new egret.gui.SetProperty("wordShotUIAsset","source","0001_btn_off_07")
					])
				,
				new egret.gui.State ("disabled",
					[
						new egret.gui.SetProperty("wordShotUIAsset","source","0001_btn_on_07")
					])
			];
		}

		public get skinParts():Array<string>{
			return WordSlotItemView._skinParts;
		}
		private __4_i():egret.gui.HorizontalLayout{
			var t:egret.gui.HorizontalLayout = new egret.gui.HorizontalLayout();
			this.__s(t,["gap","horizontalAlign","verticalAlign"],[0,"center","middle"])
			return t;
		}
		private wordShotUIAsset_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.wordShotUIAsset = t;
			t.setStyle("fontFamily","微软雅黑")
			this.__s(t,["horizontalCenter","source","verticalCenter"],[0,"1_0000_bj_04",0])
			return t;
		}
		private wordSlot_i():egret.gui.Group{
			var t:egret.gui.Group = new egret.gui.Group();
			this.wordSlot = t;
			t.setStyle("fontFamily","微软雅黑")
			this.__s(t,["bottom","left","right","top"],[0,0,0,0])
			t.layout = this.__4_i();
			return t;
		}
	}
}