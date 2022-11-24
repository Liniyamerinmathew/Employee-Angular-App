import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewAllEmployeeComponent } from './view-all-employee/view-all-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { NavigaionComponent } from './navigaion/navigaion.component';
import { RouterModule, Routes } from '@angular/router';

const myRoute:Routes=[
  {
    path:"",
    component:AddEmployeeComponent
  },
  {
    path:"search",
    component:SearchEmployeeComponent
  },
  {
    path:"delete",
    component:DeleteEmployeeComponent
  },
  {
    path:"viewall",
    component:ViewAllEmployeeComponent
  },
  {
    path:"edit",
    component:EditEmployeeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewAllEmployeeComponent,
    DeleteEmployeeComponent,
    AddEmployeeComponent,
    SearchEmployeeComponent,
    EditEmployeeComponent,
    NavigaionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
