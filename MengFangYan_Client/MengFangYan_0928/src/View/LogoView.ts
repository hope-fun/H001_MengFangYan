module View{
	export class LogoView extends egret.gui.Skin{
		private __s:Function = egret.gui.setProperties;

		public constructor(){
			super();
			
			this.__s(this,["height","width"],[1136,640])
			this.elementsContent = [this.__3_i()];
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

		private __3_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["luckywings512_png",97,320])
			return t;
		}
	}
}