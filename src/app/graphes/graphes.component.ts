import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js';
import {EmployeService} from '../../services/employe.service';
import {IncsalaryService} from '../../services/incsalary.service';
@Component({
  selector: 'app-graphes',
  templateUrl: './graphes.component.html',
  styleUrls: ['./graphes.component.css']
})
export class GraphesComponent implements OnInit {
  listEmploye;
  incsalaries;
  constructor(public employeservice: EmployeService, public incsalaryservice: IncsalaryService) {
  }

  ngOnInit(): void {
    this.employeservice.getEmployes()
      .subscribe(data => {
          this.listEmploye = data;
          var list_names =[];
          var list_salaire = [];
          for(var i=0; i<this.listEmploye.length; i++) {
            var ch;
            var sal = this.listEmploye[i].salaire;
            list_salaire.push(sal);
             var nom = this.listEmploye[i].nom;
             var preom = this.listEmploye[i].prenom;
            ch = nom+" "+ preom;
            list_names.push(ch);
          }
    var ch1 = document.getElementById('myChart') as HTMLCanvasElement;
    var ctx = ch1.getContext('2d');
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        labels: list_names,
        datasets: [{
          label: 'dataset ',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: list_salaire
        }]
      },

      // Configuration options go here
      options: {}
    });
        }, err => {
          console.log(err);
        }
      );

    //chart2
    this.incsalaryservice.getIncsalaries()
      .subscribe(data=> {
          this.incsalaries= data;
          var list_names =[];
          var list_travail = [];
          for(var i=0; i<this.incsalaries.length; i++) {
          var ch;
          var travailSal = this.incsalaries[i].prime;
          list_travail.push(travailSal);
          var nom = this.incsalaries[i].nom;
          var preom = this.incsalaries[i].prenom;
          ch = nom+" "+ preom;
          list_names.push(ch);
        }
        var ch1 = document.getElementById('mysecondChart') as HTMLCanvasElement;
        var ctx = ch1.getContext('2d');
        var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'line',

          // The data for our dataset
          data: {
            labels: list_names,
            datasets: [{
              label: 'dataset ',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: list_travail
            }]
          },

          // Configuration options go here
          options: {}
        });


        },err=>{
          console.log(err);
        }
      );
  }
}

