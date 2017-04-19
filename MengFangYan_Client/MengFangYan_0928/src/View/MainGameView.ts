module View{
	export class MainGameView extends egret.gui.Skin{
		private static _skinParts:Array<string> = ["bg","player_02","btnTip","back","btnRidMistake","btnRightAnswer","btnListenAgain","btnShare","levelName","wordBtnGroup","wordSlotGroup","questionLabel","moneyLabel","btnMall","moneyGroup"];
		private __s:Function = egret.gui.setProperties;
		public back:egret.gui.Button;
		public bg:egret.gui.UIAsset;
		public btnListenAgain:egret.gui.Button;
		public btnMall:egret.gui.UIAsset;
		public btnRidMistake:egret.gui.Button;
		public btnRightAnswer:egret.gui.Button;
		public btnShare:egret.gui.Button;
		public btnTip:egret.gui.Button;
		public levelName:egret.gui.Label;
		public moneyGroup:egret.gui.Group;
		public moneyLabel:egret.gui.Label;
		public player_02:egret.gui.UIAsset;
		public questionLabel:egret.gui.Label;
		public wordBtnGroup:egret.gui.Group;
		public wordSlotGroup:egret.gui.Group;

		public constructor(){
			super();
			
			this.__s(this,["height","width"],[1136,640])
			this.elementsContent = [this.bg_i(),this.player_02_i(),this.btnTip_i(),this.back_i(),this.btnRidMistake_i(),this.btnRightAnswer_i(),this.btnListenAgain_i(),this.btnShare_i(),this.__3_i(),this.__4_i(),this.levelName_i(),this.wordBtnGroup_i(),this.wordSlotGroup_i(),this.questionLabel_i(),this.moneyGroup_i()];
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
			return MainGameView._skinParts;
		}
		private __4_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["height","horizontalCenter","scale9Grid","source","verticalCenter","width"],[38,-93,egret.gui.getScale9Grid("10,9,61,60"),"1_0000_bj_04",-522,222])
			return t;
		}
		private __5_i():egret.gui.TileLayout{
			var t:egret.gui.TileLayout = new egret.gui.TileLayout();
			this.__s(t,["horizontalAlign","horizontalGap","orientation","paddingTop","verticalAlign","verticalGap"],["center",3,"rows",15,"middle",10])
			return t;
		}
		private __6_i():egret.gui.HorizontalLayout{
			var t:egret.gui.HorizontalLayout = new egret.gui.HorizontalLayout();
			this.__s(t,["horizontalAlign","verticalAlign"],["center","middle"])
			return t;
		}
		private __7_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["height","horizontalCenter","scale9Grid","source","verticalCenter","width"],[38,0,egret.gui.getScale9Grid("10,9,61,60"),"1_0000_bj_04",0,233])
			return t;
		}
		private __8_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","verticalCenter","x"],["0003_icon_02",0.5,-16])
			return t;
		}
		private back_i():egret.gui.Button{
			var t:egret.gui.Button = new egret.gui.Button();
			this.back = t;
			this.__s(t,["horizontalCenter","skinName","verticalCenter","x","y"],[-259,new egret.gui.ButtonSkin("back","back_"),-504.5,10,10])
			return t;
		}
		private bg_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.bg = t;
			this.__s(t,["source","x","y"],["bg_01_png",0,0])
			return t;
		}
		private btnListenAgain_i():egret.gui.Button{
			var t:egret.gui.Button = new egret.gui.Button();
			this.btnListenAgain = t;
			this.__s(t,["horizontalCenter","skinName","verticalCenter"],[235.5,new egret.gui.ButtonSkin("0011_btn_off_05","0011_btn_on_05"),-210.5])
			return t;
		}
		private btnMall_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.btnMall = t;
			this.__s(t,["right","source","verticalCenter"],[-24,"0004_btn_off_08",0])
			return t;
		}
		private btnRidMistake_i():egret.gui.Button{
			var t:egret.gui.Button = new egret.gui.Button();
			this.btnRidMistake = t;
			this.__s(t,["horizontalCenter","skinName","verticalCenter"],[-235,new egret.gui.ButtonSkin("0012_btn_off_03","0012_btn_on_03"),-90.5])
			return t;
		}
		private btnRightAnswer_i():egret.gui.Button{
			var t:egret.gui.Button = new egret.gui.Button();
			this.btnRightAnswer = t;
			this.__s(t,["horizontalCenter","skinName","verticalCenter"],[-232,new egret.gui.ButtonSkin("0009_btn_off_04","0009_btn_on_04"),81])
			return t;
		}
		private btnShare_i():egret.gui.Button{
			var t:egret.gui.Button = new egret.gui.Button();
			this.btnShare = t;
			this.__s(t,["horizontalCenter","skinName","verticalCenter"],[235,new egret.gui.ButtonSkin("0013_btn_off_06","0013_btn_on_06"),-43])
			return t;
		}
		private btnTip_i():egret.gui.Button{
			var t:egret.gui.Button = new egret.gui.Button();
			this.btnTip = t;
			this.__s(t,["horizontalCenter","skinName","verticalCenter"],[-236,new egret.gui.ButtonSkin("0008_btn_off_02","0008_btn_on_02"),-273])
			return t;
		}
		private levelName_i():egret.gui.Label{
			var t:egret.gui.Label = new egret.gui.Label();
			this.levelName = t;
			this.__s(t,["fontFamily","horizontalCenter","text","verticalCenter"],["黑体",-94,"教学篇 01/01",-522])
			return t;
		}
		private moneyGroup_i():egret.gui.Group{
			var t:egret.gui.Group = new egret.gui.Group();
			this.moneyGroup = t;
			this.__s(t,["height","horizontalCenter","verticalCenter","width"],[38,168.5,-522,233])
			t.elementsContent = [this.__7_i(),this.moneyLabel_i(),this.__8_i(),this.btnMall_i()];
			return t;
		}
		private moneyLabel_i():egret.gui.Label{
			var t:egret.gui.Label = new egret.gui.Label();
			this.moneyLabel = t;
			this.__s(t,["fontFamily","horizontalCenter","text","verticalCenter"],["黑体",-2,"0",0])
			return t;
		}
		private player_02_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.player_02 = t;
			this.__s(t,["source","x","y"],["0010_player_02",164,290])
			return t;
		}
		private questionLabel_i():egret.gui.Label{
			var t:egret.gui.Label = new egret.gui.Label();
			this.questionLabel = t;
			this.__s(t,["horizontalCenter","y"],[0,817])
			return t;
		}
		private __3_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["horizontalCenter","scale9Grid","source","verticalCenter","width"],[0,egret.gui.getScale9Grid("2,84,12,220"),"bg00000",394.5,640])
			return t;
		}
		private wordBtnGroup_i():egret.gui.Group{
			var t:egret.gui.Group = new egret.gui.Group();
			this.wordBtnGroup = t;
			this.__s(t,["height","horizontalCenter","verticalCenter","width"],[276,-0.5,430,639])
			t.layout = this.__5_i();
			return t;
		}
		private wordSlotGroup_i():egret.gui.Group{
			var t:egret.gui.Group = new egret.gui.Group();
			this.wordSlotGroup = t;
			this.__s(t,["height","horizontalCenter","verticalCenter","width"],[80,0,172,640])
			t.layout = this.__6_i();
			return t;
		}
	}
}