import { Component, OnInit } from '@angular/core';
import {IncsalaryService} from '../../services/incsalary.service';
import {ModelIncsalary} from '../../model/model.incsalary';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css']
})
export class PrimeComponent implements OnInit {
  incsalary: ModelIncsalary;
  id:number;
  constructor(public incsalaryService: IncsalaryService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'] ;
    this.incsalaryService.getIncsalary(this.id)
      .subscribe((data:any) => {
        console.log(data)
        this.incsalary = data;
      }, error => console.log(error));

  }

}
