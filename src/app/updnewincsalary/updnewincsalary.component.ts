import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ModelIncsalary} from "../../model/model.incsalary";
import {IncsalaryService} from "../../services/incsalary.service";
import {ModelEmploye} from "../../model/model.employe";
import {EmployeService} from "../../services/employe.service";

@Component({
  selector: 'app-updnewincsalary',
  templateUrl: './updnewincsalary.component.html',
  styleUrls: ['./updnewincsalary.component.css']
})
export class UpdnewincsalaryComponent implements OnInit {
  incsalaryForm: FormGroup;
  errorMessage: string;
  incsalary: ModelIncsalary = new ModelIncsalary();
  listEmploye;
  constructor(public employeservice:EmployeService,public incsalaryService: IncsalaryService,private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.salForm();
    this.employeservice.getEmployes()
      .subscribe(data=> {
          this.listEmploye= data;

        },err=>{
          console.log(err);
        }
      );
  }
  salForm(){
    this.incsalaryForm = this.formBuilder.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      nbrcertif: ['', [Validators.required]],
      volapprentissage: ['', [Validators.required]],
      travailsup: ['', [Validators.required]],
      motivation: ['', [Validators.required]],
      innovation: ['', [Validators.required]],
    });
  }


  addIncsalary(){
    this.incsalaryService.saveIncsalary(this.incsalary)
      .subscribe(data=> {
          this.router.navigate(['/employes'])

        },err=>{
          this.errorMessage = err.message;

          console.log(err);
        }
      );
  }

}
