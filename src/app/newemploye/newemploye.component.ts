import { Component, OnInit } from '@angular/core';
import {ModelEmploye} from '../../model/model.employe';
import {EmployeService} from '../../services/employe.service';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newemploye',
  templateUrl: './newemploye.component.html',
  styleUrls: ['./newemploye.component.css']
})
export class NewemployeComponent implements OnInit{
  signInForm: FormGroup;
  errorMessage: string;
  employe:ModelEmploye=new ModelEmploye();
  constructor(public employeService:EmployeService,  private router: Router, private formBuilder: FormBuilder) { }

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

  addEmploye(){
    this.employeService.saveEmploye(this.employe)
      .subscribe(data=> {
        this.router.navigate(['/employes'])
        // console.log(data);
        },err=>{
        this.errorMessage = err.message;
          // console.log(this.employe);
          console.log(err);
        }
      );
  }

}
