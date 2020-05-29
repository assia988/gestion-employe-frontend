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

  incsalaries;
  constructor(public httpClient: HttpClient,
              public incsalaryservice: IncsalaryService ,public router:Router) { }

  ngOnInit(): void {
    this.incsalaryservice.getIncsalaries()
      .subscribe(data=> {
          this.incsalaries= data;
        },err=>{
          console.log(err);
        }
      );
  }
  // jourSup( incsalary:ModelIncsalary){
  //   this.jours= incsalary.travailsup*1;
  //   return this.jours;
  // }
}
