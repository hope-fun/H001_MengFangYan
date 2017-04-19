/**
*
* @author
*
*/
module Model {

    //任务奖励模型.
    export class TaskModel extends TaskStBase {
        public constructor() {
            super();
        }
    }

    //任务静态对象.
    class TaskStBase {
        //任务id.
        public id:number;
        //城市id.
        public cityId:number;
        //关卡名.
        public name:string;
        //排序编号.
        public orderNum:number;
        //价格.
        public price:number;
        //问题数量.
        public questionCount:number;
        //任务描述.
        public description:number;
    }


}
