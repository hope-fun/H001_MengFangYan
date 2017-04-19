module View{
	export class LoginView extends egret.gui.Skin{
		private static _skinParts:Array<string> = ["bg_00_png","btn_start"];
		private __s:Function = egret.gui.setProperties;
		public bg_00_png:egret.gui.Button;
		public btn_start:egret.gui.UIAsset;

		public constructor(){
			super();
			
			this.__s(this,["height","width"],[1136,640])
			this.elementsContent = [this.bg_00_png_i(),this.btn_start_i()];
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
			return LoginView._skinParts;
		}
		private btn_start_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.btn_start = t;
			this.__s(t,["horizontalCenter","source","verticalCenter"],[0.5,"btn_start",462.5])
			return t;
		}
		private bg_00_png_i():egret.gui.Button{
			var t:egret.gui.Button = new egret.gui.Button();
			this.bg_00_png = t;
			this.__s(t,["horizontalCenter","skinName","verticalCenter"],[0,new egret.gui.ButtonSkin("bg_00_png","bg_00_png","bg_00_png"),0])
			return t;
		}
	}
}