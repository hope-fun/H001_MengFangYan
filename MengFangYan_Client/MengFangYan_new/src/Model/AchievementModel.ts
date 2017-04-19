module Model {
	/**
	 *
	 * @author 
	 *
	 */
    //成就模型.
    export class AchievementModel extends AchievementStBase{
        public constructor(aData : AchievementStBase) {
            super(aData);
        }         
    }
    
    //成就静态对象.
    class AchievementStBase { 
        public constructor(aData : AchievementStBase) { 
            
        }
        //成就静态id.
        public id: number;
        //成就名.
        public name: string;
        //成就描述.
        public description: string;
        //顺序编号.
        public orderNum: number;
        //成就等级.
        public level: number;
        //达成类型.
        public requireType: string;
        //达成所需求的值.
        public requireValue: number;
    }                
}
