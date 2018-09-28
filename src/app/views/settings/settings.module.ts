// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

import { AcademicDetailsComponent } from './academicDetails.component';
// Components Routing
import { SettingsRoutingModule } from './settings-routing.module';
//Services Routing
import { DemoService } from "../../services/demo.service";


@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      SettingsRoutingModule,
      MatTableModule,
      HttpClientModule
    ],
    declarations: [
      AcademicDetailsComponent
    ],
    providers: [
      DemoService,
    ]
  })
  export class SettingsModule { }