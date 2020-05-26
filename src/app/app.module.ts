import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeComponent } from './list-employe/list-employe.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {EmployeService} from '../services/employe.service';
import {IncsalaryService} from "../services/incsalary.service";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewemployeComponent } from './newemploye/newemploye.component';
import { EditemployeComponent } from './editemploye/editemploye.component';
import { HeaderComponent } from './header/header.component';
import { UpdnewincsalaryComponent } from './updnewincsalary/updnewincsalary.component';
import { NewsalaryComponent } from './newsalary/newsalary.component';
import { GraphesComponent } from './graphes/graphes.component';

const appRoutes:Routes=[
  {path:'employes', component:ListEmployeComponent},
  {path:'newemploye', component:NewemployeComponent},
  {path:'editemploye/:id', component:EditemployeComponent},
  {path:'incsalary/:id', component:UpdnewincsalaryComponent},
  {path:'newsalary', component:NewsalaryComponent},
  {path:'graphes', component:GraphesComponent},
  {path:'',redirectTo:'/employes',pathMatch:'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    ListEmployeComponent,
    NewemployeComponent,
    EditemployeComponent,
    HeaderComponent,
    UpdnewincsalaryComponent,
    NewsalaryComponent,
    GraphesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeService, IncsalaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
