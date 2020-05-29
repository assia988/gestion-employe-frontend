import { Component, OnInit } from '@angular/core';
import {ModelEmploye} from '../../model/model.employe';
import {EmployeService} from '../../services/employe.service';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ModelIncsalary} from '../../model/model.incsalary';
import {IncsalaryService} from '../../services/incsalary.service';

@Component({
  selector: 'app-newemploye',
  templateUrl: './newemploye.component.html',
  styleUrls: ['./newemploye.component.css']
})
export class NewemployeComponent implements OnInit{
  signInForm: FormGroup;
  errorMessage: string;
  incsalaries:ModelIncsalary = new ModelIncsalary();
  employe:ModelEmploye=new ModelEmploye();
  constructor(public employeService:EmployeService,public incsalaryService: IncsalaryService,  private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.signInForm = this.formBuilder.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      departement: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      salaire: ['', [Validators.required]],
      date: ['', [Validators.required]],
      cin: ['', [Validators.required]],
    });
  }

  addEmploye() {
    this.employeService.saveEmploye(this.employe)
      .subscribe(data => {
        this.incsalaries.nom = this.employe.nom;
        this.incsalaries.prenom = this.employe.prenom;
        this.incsalaries.nbrcertif === 0;
        this.incsalaries.nbrmission === 0;
        this.incsalaries.nbdhtrweek === 0;
        this.incsalaries.nbrdhtravailjourferier === 0;
        this.incsalaries.prime === 0;
        this.incsalaryService.saveIncsalary(this.incsalaries)
          .subscribe(data=> {
              // console.log(data);
            },err=>{
              this.errorMessage = err.message;
              // console.log(this.employe);
              console.log(err);
            }
          );

        this.router.navigate(['/employes'])
          // console.log(data);
        }, err => {
          this.errorMessage = err.message;
          // console.log(this.employe);
          console.log(err);
        }
      );
    console.log(this.incsalaries);
  }
}
