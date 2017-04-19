module Model {
	/**
	 *
	 * @author 
	 *
	 */
    //成就奖励模型.
    export class AchievementRewardModel extends AchievementRewardStBase { 
        public constructor() {
            super();
        }      
    }
             
    //成就奖励静态对象.
    class AchievementRewardStBase { 
        //成就奖励id.
        public id: number;
        //成就id.
        public achievementId: number;
        //奖励类型.
        public rewardType: string;
        //奖励数量.
        public count: number;
        //奖励道具id.
        public itemId: number;
        //奖励名称.
        public name: string;
        //奖励描述.
        public description: string;
        //注解.
        public note: string;
    }
}
