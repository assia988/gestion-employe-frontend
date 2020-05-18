import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EmployeService} from '../../services/employe.service';
import {Router} from '@angular/router';
import {ModelEmploye} from '../../model/model.employe';
import {ModelIncsalary} from "../../model/model.incsalary";


@Component({
  selector: 'app-list-employe',
  templateUrl: './list-employe.component.html',
  styleUrls: ['./list-employe.component.css']
})
export class ListEmployeComponent implements OnInit {
  listEmploye;
  constructor(public httpClient: HttpClient, public employeservice:EmployeService,public router:Router) {

  }

  ngOnInit(): void {
   this.employeservice.getEmployes()
     .subscribe(data=> {
         this.listEmploye= data; //data contient la reponse http format json
         //console.log(this.listEmploye);
       },err=>{
         console.log(err);
       }
     );

  }
  onEditEmploye(id:number){
    this.router.navigate(['editemploye',id]);
}
  onDeleteEmploye(e:ModelEmploye) {
    this.employeservice.deleteEmploye(e.id)
      .subscribe(
        data => {
          //console.log(data);
          this.listEmploye = this.listEmploye.filter(employe => employe.id !== e.id)
          //console.log(this.listEmploye);
        },
        error => console.log(error));
  }
  incSalary(){
    this.router.navigate(['incsalary']);
  }
}
