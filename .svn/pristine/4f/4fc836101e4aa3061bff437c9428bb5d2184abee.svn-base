module View{
	export class WordBtnItemView extends egret.gui.Skin{
		private static _skinParts:Array<string> = ["wordBtn","wordLabel","wordLabelGroup"];
		private __s:Function = egret.gui.setProperties;
		public wordBtn:egret.gui.Button;
		public wordLabel:egret.gui.Label;
		public wordLabelGroup:egret.gui.Group;

		public constructor(){
			super();
			
			this.__s(this,["height","width"],[76,77])
			this.elementsContent = [this.wordBtn_i(),this.wordLabelGroup_i()];
			this.states = [
				new egret.gui.State ("up",
					[
					])
				,
				new egret.gui.State ("down",
					[
						new egret.gui.SetProperty("wordLabel","textColor",0x222222)
					])
				,
				new egret.gui.State ("disabled",
					[
						new egret.gui.SetProperty("wordLabel","textColor",0xcccccc)
					])
			];
		}

		public get skinParts():Array<string>{
			return WordBtnItemView._skinParts;
		}
		private __4_i():egret.gui.HorizontalLayout{
			var t:egret.gui.HorizontalLayout = new egret.gui.HorizontalLayout();
			this.__s(t,["gap","horizontalAlign","verticalAlign"],[0,"center","middle"])
			return t;
		}
		private wordBtn_i():egret.gui.Button{
			var t:egret.gui.Button = new egret.gui.Button();
			this.wordBtn = t;
			this.__s(t,["horizontalCenter","skinName","verticalCenter"],[0,new egret.gui.ButtonSkin("0001_btn_off_07","0001_btn_on_07"),0])
			return t;
		}
		private wordLabelGroup_i():egret.gui.Group{
			var t:egret.gui.Group = new egret.gui.Group();
			this.wordLabelGroup = t;
			t.setStyle("fontFamily","微软雅黑")
			this.__s(t,["horizontalCenter","verticalCenter"],[0,0])
			t.layout = this.__4_i();
			t.elementsContent = [this.wordLabel_i()];
			return t;
		}
		private wordLabel_i():egret.gui.Label{
			var t:egret.gui.Label = new egret.gui.Label();
			this.wordLabel = t;
			this.__s(t,["fontFamily","paddingBottom","paddingLeft","paddingRight","paddingTop","size","textAlign","textColor","verticalAlign","y"],["微软雅黑",0,0,0,0,50,"center",0x111111,"middle",4])
			return t;
		}
	}
}