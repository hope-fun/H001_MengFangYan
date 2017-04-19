/**
 *
 * @author 
 *
 */
class GameInit extends egret.DisplayObjectContainer{
       
    /**
    * 加载进度界面
    * loading process interface
    */
    private loadingView:LoadingVM;
    
	public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);       
//        egret.Profiler.getInstance().run();
	}
	
    private onAddToStage(event:egret.Event) {
        //inject the custom material parser
        //注入自定义的素材解析器
        egret.gui.mapClass("egret.gui.IAssetAdapter", AssetAdapter);
        // load skin theme configuration file, you can manually modify the file. And replace the default skin.
        //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
        egret.gui.Theme.load("resource/theme.thm");
        //Config loading process interface
        //设置加载进度界面
        this.loadingView = new LoadingVM();
        this.stage.addChild(this.loadingView);
        // initialize the Resource loading library
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/resource.json", "resource/");
    }
    
    /**
    * 配置文件加载完成,开始预加载preload资源组。
    * Loading of configuration file is complete, start to pre-load the preload resource group
    */
    private onConfigComplete(event:RES.ResourceEvent):void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload");
    }
    
    /**
    * preload资源组加载完成
    * preload resource group is loaded
    */
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.gameInit();
        }
    }
    
    /**
    * 资源组加载出错
    * Resource group loading failed
    */
    private onResourceLoadError(event:RES.ResourceEvent):void {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //ignore loading failed projects
        this.onResourceLoadComplete(event);
    }
    
    /**
    * preload资源组加载进度
    * loading process of preload resource
    */
    private onResourceProgress(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }
    
    private gameLayer : egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
    
    private guiLayer : egret.gui.UIStage = new egret.gui.UIStage();
    
    private logoVM : ViewModel.LogoVM;
    
    private loginVM : ViewModel.LoginVM;
    
    private mainGameVM : ViewModel.MainGameVM;
    
    private indexDB: Model.IndexDB;
    
    /**
    * 初始化场景.
    * Create scene interface
    */
    private gameInit():void {
        this.addChild(this.guiLayer);
        this.createLogoScene();
//        this.indexDB = new Model.IndexDB();
//        this.indexDB.connectDataBase();//create("mfyDatabase",1);
//        this.indexDB.VersionUpData();
//        this.indexDB.CreateObjectStore();
//        this.indexDB.openDB("DB1",1);
//        var _this = this;
//        setTimeout(function() { 
//            alert("zhujun: setTimeout");
////            _this.indexDB.addData("",);
//            },1000)
    }
    
    /*
     * 创建Logo场景.
     */ 
    private createLogoScene() { 
        this.logoVM = new ViewModel.LogoVM(this.guiLayer,() => { 
                this.createLogoinScene();
            }
        );
    }
    
    /*
     * 创建Login场景.
     */ 
    private createLogoinScene() { 
        this.loginVM = new ViewModel.LoginVM(this.guiLayer,() => { 
                this.createMainGameScene();
            }
        );
    }
    
    /*
     * 创建MainGame场景.
     */ 
    private createMainGameScene() { 
        this.mainGameVM = new ViewModel.MainGameVM(this.guiLayer,() => {
                this.createLogoinScene();
            }
        );
    }
    
    /*
     * 创建背景等一系列UI.
     */ 
//    private createBg() { 
//        this.addChild(this.gameLayer);
//        var bitmap:egret.Bitmap = new egret.Bitmap();
//        bitmap.texture = RES.getRes("bg_01_png");
//        this.gameLayer.addChildAt(bitmap,0);
//        //加载图集.
//        var imgs : egret.SpriteSheet = RES.getRes("MainGame_json");
//        //添加文字底板.
//        var imgBottomBg : egret.Bitmap = new egret.Bitmap();
//        imgBottomBg.texture = imgs.getTexture("bg00000");
//        imgBottomBg.fillMode = egret.BitmapFillMode.REPEAT;
//        imgBottomBg.width *= 50;
//        imgBottomBg.y = 790;
//        this.gameLayer.addChildAt(imgBottomBg,1); 
//        //创建道具icon
//        var light: egret.Bitmap = new egret.Bitmap();
//        light.texture = imgs.getTexture("0008_btn_off_02");
//        light.x = 20;
//        light.y = 170;
//        this.gameLayer.addChild(light);
//        
//        var dustbin: egret.Bitmap = new egret.Bitmap();
//        dustbin.texture = imgs.getTexture("0012_btn_off_03");
//        dustbin.x = 20;
//        dustbin.y = 350;
//        this.gameLayer.addChild(dustbin);
//        
//        var book: egret.Bitmap = new egret.Bitmap();
//        book.texture = imgs.getTexture("0009_btn_off_04");
//        book.x = 20;
//        book.y = 530;
//        this.gameLayer.addChild(book);
//        
//        var microphone: egret.Bitmap = new egret.Bitmap();
//        microphone.texture = imgs.getTexture("0011_btn_off_05");
//        microphone.x = 515;
//        microphone.y = 240;
//        this.gameLayer.addChild(microphone);
//        
//        var info: egret.Bitmap = new egret.Bitmap();
//        info.texture = imgs.getTexture("0013_btn_off_06");
//        info.x = 515;
//        info.y = 400;
//        this.gameLayer.addChild(info);
//        
//        var back: egret.Bitmap = new egret.Bitmap();
//        back.texture = imgs.getTexture("back");
//        back.x = 30;
//        back.y = 15;
//        this.gameLayer.addChild(back);
//        
//        var titleLeft: egret.Bitmap = new egret.Bitmap();
//        titleLeft.texture = imgs.getTexture("1_0000_bj_04");
//        var rect: egret.Rectangle = new egret.Rectangle(39,10,1,58);
//        titleLeft.scale9Grid = rect;
//        titleLeft.width *= 2.5;        
//        titleLeft.height *= 0.4; 
//        titleLeft.x = 120;
//        titleLeft.y = 20;
//        this.gameLayer.addChild(titleLeft);
//        
//        var teachStr: egret.TextField = new egret.TextField();
//        teachStr.text = "教学篇1111111111111111111111";
//        teachStr.x = 130;
//        teachStr.y = 22;
//        teachStr.fontFamily = "微软雅黑";
//        this.gameLayer.addChild(teachStr);       
//        
//        //创建小狗以及动画.
//        var img: egret.Bitmap = new egret.Bitmap();
//        img.texture = imgs.getTexture("0010_player_02");
//        this.gameLayer.addChild(img);
////        this.dogTweenLoop(img);
//    }
    

    
    /*
     * 创建下方答案文字池.
     */ 
    private createWord(subject:string, answer:string[]) { 
        var imgs : egret.SpriteSheet = RES.getRes("MainGame_json");
        var askStr: egret.TextField = new egret.TextField();
        askStr.text = subject;
        askStr.x = 10;
        askStr.y = 815;
        askStr.fontFamily = "微软雅黑";
        this.gameLayer.addChild(askStr);
//        for(var i : number = 0 ; i < 8; i++) { 
//            for(var j: number = 0;j < 3;j++) {
//                console.log("i" + i + " j " + j);
//                var img: egret.Bitmap = new egret.Bitmap();
//                var str: egret.TextField = new egret.TextField();
//                img.texture = imgs.getTexture("0001_btn_off_07");
//                str.text = answer[0];
//                answer.shift();
//                str.size = 45;
//                str.x = i * 80 + 15;
//                str.y = j * 80 + 880 + 15;
//                str.bold = true;
//                str.textColor = 0x000000;
//                str.fontFamily = "微软雅黑";
//                str.textAlign = egret.HorizontalAlign.CENTER;
//                img.x = i * 80;
//                img.y = j * 80 + 880;
//                this.gameLayer.addChild(img);
//                this.gameLayer.addChild(str);
//            }   
//        }
    }
    
    
}
