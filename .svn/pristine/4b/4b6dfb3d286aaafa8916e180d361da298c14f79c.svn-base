module View{
	export class WinPopupView extends egret.gui.Skin{
		private static _skinParts:Array<string> = ["btnSure"];
		private __s:Function = egret.gui.setProperties;
		public btnSure:egret.gui.Button;

		public constructor(){
			super();
			
			this.elementsContent = [this.__10_i()];
			this.states = [
				new egret.gui.State ("normal",
					[
					])
				,
				new egret.gui.State ("disabled",
					[
					])
			];
		}

		public get skinParts():Array<string>{
			return WinPopupView._skinParts;
		}
		private __3_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["alpha","height","source","width","x","y"],[0.7,2048,"black_png",2048,-686,-457])
			return t;
		}
		private __4_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["horizontalCenter","source","verticalCenter"],[0,"bj_01",0])
			return t;
		}
		private __5_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["horizontalCenter","source","verticalCenter"],[0.5,"amazing",-161])
			return t;
		}
		private __6_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["horizontalCenter","source","verticalCenter"],[0,"word_01",-32.5])
			return t;
		}
		private __7_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["horizontalCenter","source","verticalCenter","visible"],[40,"icon_5",1,false])
			return t;
		}
		private __8_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["horizontalCenter","source","verticalCenter","visible"],[0.5,"icon_+",1.5,false])
			return t;
		}
		private __9_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["horizontalCenter","source","verticalCenter","visible"],[-62.5,"0003_icon_02",2.5,false])
			return t;
		}
		private btnSure_i():egret.gui.Button{
			var t:egret.gui.Button = new egret.gui.Button();
			this.btnSure = t;
			t.setStyle("fontFamily","黑体")
			t.setStyle("size",40)
			this.__s(t,["height","label","skinName","width","x","y"],[77,"确定",new egret.gui.ButtonSkin("btn_off_03","btn_on_03"),195,218,603])
			return t;
		}
		private __10_i():egret.gui.Group{
			var t:egret.gui.Group = new egret.gui.Group();
			this.__s(t,["height","horizontalCenter","left","top","verticalCenter","width"],[1136,0,0,0,0,640])
			t.elementsContent = [this.__3_i(),this.__4_i(),this.__5_i(),this.__6_i(),this.__7_i(),this.__8_i(),this.__9_i(),this.btnSure_i()];
			return t;
		}
	}
}