import { Content } from '../model/Content';
//dummy data 
export var resultList: Content[] = [
    {
        "id": 2,
        "name": "Java",
        "tags" : "thread, JDBC, Servlet",
        "url": "https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_join_left",
        "label": "notes",
        "description": "If you don't understand how to properly do a join you should check this out.",
        "createdDate": "5/21/2019",
        "updatedDate": "5/21/2019"
    }
]
//the real deal
// export class ResultList {
//     resultList: Result[];
    
//     constructor(resultList: Result[]) {
//         this.resultList = resultList;
//     }
// ]
// the real deal
export class ResultList {
    resultList: Content[];
    
    constructor(resultList: Content[]) {
        this.resultList = resultList;
    }
}

   
