/**
 *
 * @author
 *
 */
var Model;
(function (Model) {
    var IndexDB = (function () {
        function IndexDB() {
            this.getResVersionInfo();
        }
        var __egretProto__ = IndexDB.prototype;
        //下载器.
        __egretProto__.downloader = function (_url, _onCallBack) {
            var loader = new egret.URLLoader();
            var request = new egret.URLRequest(_url);
            loader.addEventListener(egret.Event.COMPLETE, function () {
                if (_onCallBack != null) {
                    _onCallBack(loader);
                }
            }, this);
            loader.load(request);
        };
        //获取资源信息.
        __egretProto__.getResVersionInfo = function () {
            var _this = this;
            this.downloader("resource/assets/database/versionConfig.json", function (loader) {
                //                var vCM:VersionConfigModel = JSON.parse(loader.data);
                //                alert("zhujun: get res version info ! " + JSON.stringify(vCM));        
            });
            //            var url:string = "resource/assets/database/versionConfig.json";
            //            var loader:egret.URLLoader = new egret.URLLoader();
            //            var request:egret.URLRequest = new egret.URLRequest(url);
            //            var _this = this;
            //            loader.addEventListener(egret.Event.COMPLETE, () => {
            //                var vCM:VersionConfigModel = JSON.parse(loader.data);
            //                
            //                
            ////                alert(JSON.stringify(vCM));//
            //                //获取achievement.json,achievementReward.json,task.json,taskQuestion.json,taskReward.json
            ////                var aRM :AchievementRewardModel = JSON
            //                
            //                
            //                _this.getIndexedDBVersionInfo();
            //            }, this);
            //            loader.load(request);
        };
        //获取本地版本号.(空就下载，非空)
        __egretProto__.getIndexedDBVersionInfo = function () {
            alert(3);
        };
        //比较版本号(等于，大于，和没有)
        //获取数据源.
        __egretProto__.getStaticData = function () {
        };
        IndexDB.subject1 = "这是《大话西游》中哪个演员说的？";
        IndexDB.subject2 = "《天下无贼》中的黎叔是谁扮演的？";
        IndexDB.subject3 = "这句台词出自张柏芝出演的哪部电影？";
        IndexDB.subject4 = "这是《失恋三十三天》中哪个演员说的？";
        IndexDB.subject5 = "这句台词出自周星驰出演的哪部电影？";
        IndexDB.answerPool1 = ["驰", "华", "发", "罗", "家", "芬", "周", "少", "莫", "英", "章", "德", "茵", "星", "蔚", "刘", "聪", "孟", "达", "蔡", "文", "润", "朱", "吴"];
        IndexDB.answerPool2 = ["朝", "姜", "刚", "范", "渤", "黄", "冯", "发", "舒", "宝", "小", "淇", "华", "润", "刘", "葛", "周", "王", "强", "梁", "德", "文", "优", "伟"];
        IndexDB.answerPool3 = ["女", "星", "合", "星", "我", "狮", "野", "吼", "蛮", "囍", "愿", "西", "手", "的", "最", "事", "约", "友", "语", "河", "强", "分", "东", "江"];
        IndexDB.answerPool4 = ["淇", "德", "明", "晓", "菲", "优", "舒", "葛", "伟", "周", "文", "发", "合", "润", "白", "百", "朝", "梁", "亦", "刘", "黄", "渤", "章", "华"];
        IndexDB.answerPool5 = ["狐", "浒", "江", "记", "水", "湖", "鼎", "飞", "血", "鸯", "神", "传", "傲", "刀", "笑", "雪", "鸳", "剑", "碧", "龙", "天", "山", "教", "鹿"];
        IndexDB.answer1 = "周星驰";
        IndexDB.answer2 = "葛优";
        IndexDB.answer3 = "河东狮吼";
        IndexDB.answer4 = "文章";
        IndexDB.answer5 = "鹿鼎记";
        return IndexDB;
    })();
    Model.IndexDB = IndexDB;
    IndexDB.prototype.__class__ = "Model.IndexDB";
})(Model || (Model = {}));
