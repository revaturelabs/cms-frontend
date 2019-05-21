import { Result } from './result';
// dummy data 
// export var resultList: Result[] = [
//     {
//         "name": "Java",
//         "tag" : "thread, JDBC, Servlet",
//         "link": "https://www.java.com/en/"
//     }
// ]
// the real deal
export class ResultList {
    resultList: Result[];
    
    constructor(resultList: Result[]) {
        this.resultList = resultList;
    }
}

   
