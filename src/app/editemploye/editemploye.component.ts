import { Component, OnInit } from '@angular/core';
import {ModelEmploye} from '../../model/model.employe';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeService} from '../../services/employe.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editemploye',
  templateUrl: './editemploye.component.html',
  styleUrls: ['./editemploye.component.css']
})
export class EditemployeComponent implements OnInit {
  signInForm: FormGroup;
  id: number;
  employee: ModelEmploye;
  constructor(private route: ActivatedRoute,private router: Router,
              private employeeService: EmployeService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.employee = new ModelEmploye();

    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmploye(this.id)
      .subscribe((data:any)=> {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }

  updateEmployee() {
    this.employeeService.updateEmploye(this.employee, this.id)
      .subscribe(data => {
        // console.log(data)
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateEmployee();
  }
  gotoList() {
    this.router.navigate(['/employes']);
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
}
