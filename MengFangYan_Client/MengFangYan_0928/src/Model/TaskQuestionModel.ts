/**
 *
 * @author 
 *
 */
module Model {    
     //任务题目模型.
     export class TaskQuestionModel extends TaskQuestionStBase { 
     
     }
     
     //任务题目静态对象.
     class TaskQuestionStBase {
         //题目id.
         public id: number;
         //任务id.
         public taskId: number;
         //名字.
         public name:string;
         //排序编号.
         public orderNum: number;
         //性别.
         public gender: string;
         //答案.
         public answer: string;
         //问题.
         public question: string;
         //其他答案.
         public answerOption: string;
         //答案提示.
         public tips: string;
         //音频url.
         public url: string;
     }
}
