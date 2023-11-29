import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPersonComponent } from './listPerson/listPerson.component';
import { AddPersonComponent } from './addPerson/addPerson.component';
import { DisplayPersonComponent } from './displayPerson/displayPerson.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BackendServiceService } from './backend-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ListPersonComponent,
    AddPersonComponent,
    DisplayPersonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [BackendServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
