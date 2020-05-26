import { Component, OnInit } from '@angular/core';
import {ModelIncsalary} from "../../model/model.incsalary";
import {IncsalaryService} from "../../../src/services/incsalary.service";
import {EmployeService} from '../../services/employe.service';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-newsalary',
  templateUrl: './newsalary.component.html',
  styleUrls: ['./newsalary.component.css']
})
export class NewsalaryComponent implements OnInit {
  inc;
  jours;
  incsalaries;
  listEmploye;
  constructor(public httpClient: HttpClient,public employeservice:EmployeService ,public incsalaryservice: IncsalaryService ,public router:Router) { }

  ngOnInit(): void {
    this.incsalaryservice.getIncsalaries()
      .subscribe(data=> {
          this.incsalaries= data;

        },err=>{
          console.log(err);
        }
      );

    this.employeservice.getEmployes()
      .subscribe(data=> {
          this.listEmploye= data;
        },err=>{
          console.log(err);
        }
      );
  }
  newSalary( incsalary:ModelIncsalary){
    this.inc= incsalary.innovation*50+ incsalary.motivation*50+
      incsalary.travailsup*50+ incsalary.volapprentissage*50+
      incsalary.nbrcertif*50;
    return this.inc;
  }

  jourSup( incsalary:ModelIncsalary){
    this.jours= incsalary.travailsup*1;
    return this.jours;
  }
}
