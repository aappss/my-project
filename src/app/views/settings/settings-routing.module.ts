import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcademicDetailsComponent } from './academicDetails.component';


const routes: Routes = [
    {
      path: '',
      data: {
        title: 'Settings'
      },
      children: [
        {
          path: 'academicDetails',
          component: AcademicDetailsComponent,
          data: {
            title: 'academicDetails'
          }
        }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SettingsRoutingModule {}
  