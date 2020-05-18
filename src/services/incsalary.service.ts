import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ModelIncsalary} from "../model/model.incsalary";
import {ModelEmploye} from "../model/model.employe";

@Injectable()
export class IncsalaryService {
  constructor(public httpClient: HttpClient) {

  }
  getIncsalaries(){
    return this.httpClient.get("http://localhost:8088/incsalaries");
  }

  saveIncsalary(incsalary:ModelIncsalary){
    return this.httpClient.post("http://localhost:8088/incsalary",incsalary);
  }
  updateIncsalary(incsalary:ModelIncsalary, id:number){
    return this.httpClient.put("http://localhost:8088/incsalaries/"+ incsalary.id ,incsalary);
  }

}
