import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeComponent } from './list-employe/list-employe.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {EmployeService} from '../services/employe.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewemployeComponent } from './newemploye/newemploye.component';
import { EditemployeComponent } from './editemploye/editemploye.component';
import { HeaderComponent } from './header/header.component';

const appRoutes:Routes=[
  {path:'employes', component:ListEmployeComponent},
  {path:'newemploye', component:NewemployeComponent},
  {path:'editemploye/:id', component:EditemployeComponent},
  {path:'',redirectTo:'/employes',pathMatch:'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    ListEmployeComponent,
    NewemployeComponent,
    EditemployeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
