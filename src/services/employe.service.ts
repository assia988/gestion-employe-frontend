import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ModelEmploye} from '../model/model.employe';


@Injectable()
export class EmployeService{
  constructor(public httpClient: HttpClient) {

  }
  getEmployes(){
    return  this.httpClient.get("http://localhost:8080/employes");
  }
  saveEmploye(employe:ModelEmploye){
    return this.httpClient.post("http://localhost:8080/employes",employe);
  }
  updateEmploye(employe:ModelEmploye, id:number){
    return this.httpClient.put("http://localhost:8080/employes/"+ employe.id ,employe);
  }
  getEmploye(id:number){
    return this.httpClient.get("http://localhost:8080/employes/"+id);
  }
  deleteEmploye(id:number){
    return this.httpClient.delete("http://localhost:8080/employes/"+id);
  }
}
