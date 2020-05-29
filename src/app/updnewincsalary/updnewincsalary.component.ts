import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
  incsalaries;
  id: number;
  employee: ModelEmploye;
  incsalary: ModelIncsalary = new ModelIncsalary();
  listEmploye;
  constructor(public employeservice:EmployeService,public incsalaryService: IncsalaryService,
              private router: Router, private formBuilder: FormBuilder,private route: ActivatedRoute,
              private employeeService: EmployeService) { }

  ngOnInit(): void {
    this.salForm();
    this.employee = new ModelEmploye();
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmploye(this.id)
      .subscribe((data:any)=> {
        this.employee = data;
        }, error => console.log(error));

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
      nbrdhtravailjourferier: ['', [Validators.required]],
      nbdhtrweek: ['', [Validators.required]],
      nbrmission: ['', [Validators.required]],
      nbrcertif: ['', [Validators.required]]
    });
  }

  traitement(){
      this.incsalary.nom=this.employee.nom;
      this.incsalary.prenom=this.employee.prenom;
      var idpro = 0;
      this.incsalaryService.getIncsalaries()
      .subscribe(data=> {
          this.incsalaries= data;
          for(var i=0; i<this.incsalaries.length; i++) {
          if ((this.incsalaries[i].nom === this.incsalary.nom) && (this.incsalaries[i].prenom === this.incsalary.prenom)) {
            idpro = this.incsalaries[i].id +1;
            this.incsalary.nbrcertif = this.incsalaries[i].nbrcertif + Number(this.incsalary.nbrcertif);
            this.incsalary.nbrmission =this.incsalaries[i].nbrmission + Number( this.incsalary.nbrmission);
            this.incsalary.nbdhtrweek = this.incsalaries[i].nbdhtrweek+ Number(this.incsalary.nbdhtrweek);
            this.incsalary.prime = 0;
            this.incsalary.nbrdhtravailjourferier = this.incsalaries[i].nbrdhtravailjourferier +Number(this.incsalary.nbrdhtravailjourferier);
            this.incsalaryService.deleteInc(this.incsalaries[i].id)
              .subscribe(
                data => {
                  this.incsalaries = this.incsalaries.filter(employe => employe.id !== this.incsalaries[i].id);
                },
                error => console.log(error));
            var salparjour = this.employee.salaire /30;
            var a =Number(this.incsalary.nbdhtrweek)*(salparjour/2) + Number(this.incsalary.nbrdhtravailjourferier)* (salparjour*2)+
              Number(this.incsalary.nbrcertif) * 2000 +Number(this.incsalary.nbrmission)*3000;
            this.incsalary.prime = a;
            this.incsalaryService.saveIncsalary(this.incsalary)
              .subscribe(data=> {
                  // console.log(data);
                },err=>{
                  this.errorMessage = err.message;
                  // console.log(this.employe);
                  console.log(err);
                }
              );

            }
          }
          console.log(idpro)
          this.router.navigate(['prime', idpro]);
        }
        ,err=>{
          console.log(err);
        }
      );
  }
  addIncsalary(){
    this.traitement();

  }

}
