import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ModelIncsalary} from "../model/model.incsalary";


@Injectable()
export class IncsalaryService {
  constructor(public httpClient: HttpClient) {

  }
  getIncsalaries(){
    return this.httpClient.get("http://localhost:8088/incsalaries");
  }
  getIncsalary(id:number){
    return  this.httpClient.get("http://localhost:8088/incsalaries/"+id);
  }

  saveIncsalary(incsalary:ModelIncsalary){
    return this.httpClient.post("http://localhost:8088/incsalaries",incsalary);
  }
  updateIncsalary(incsalary:ModelIncsalary, id:number){
    return this.httpClient.put("http://localhost:8088/incsalaries/"+ incsalary.id ,incsalary);
  }
  deleteInc(id:number){
    return this.httpClient.delete("http://localhost:8088/incsalaries/"+id);
  }

}
