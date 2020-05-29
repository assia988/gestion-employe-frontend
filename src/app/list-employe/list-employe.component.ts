import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EmployeService} from '../../services/employe.service';
import {Router} from '@angular/router';
import {ModelEmploye} from '../../model/model.employe';
import {ModelIncsalary} from "../../model/model.incsalary";
import {IncsalaryService} from '../../services/incsalary.service';


@Component({
  selector: 'app-list-employe',
  templateUrl: './list-employe.component.html',
  styleUrls: ['./list-employe.component.css']
})
export class ListEmployeComponent implements OnInit {
  listEmploye;
  incsalaries;
  constructor(public httpClient: HttpClient, public employeservice:EmployeService,
              public incsalaryService: IncsalaryService, public router:Router) {

  }

  ngOnInit(): void {
   this.employeservice.getEmployes()
     .subscribe(data=> {
         this.listEmploye= data; //data contient la reponse http format json
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
          this.incsalaryService.getIncsalaries()
            .subscribe(data=> {
                this.incsalaries= data;
                for(var i=0; i<this.incsalaries.length; i++){
                  if ((this.incsalaries[i].nom === e.nom) && (this.incsalaries[i].prenom === e.prenom)){
                    this.incsalaryService.deleteInc(this.incsalaries[i].id)
                      .subscribe(
                        data => {
                          this.incsalaries = this.incsalaries.filter(employe => employe.id !== this.incsalaries[i].id);
                          console.log(data)
                        },
                        error => console.log(error));
                  }
                    }
              },err=>{
                console.log(err);
              }
            );

          this.listEmploye = this.listEmploye.filter(employe => employe.id !== e.id)
          //console.log(this.listEmploye);


        },
        error => console.log(error));
  }
  incSalary(id:number){
    this.router.navigate(['incsalary', id]);
  }
}
