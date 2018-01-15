import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UsesComponent } from './uses/uses.component';
import { FilterPipe } from './filter.pipe';
import {DataService} from './data.service';
import{EmployeeService} from './employee.service';

@NgModule({
  declarations: [
    FilterPipe,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    UsesComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{
      path:'about',
      component:AboutComponent
    },
    {
      path:'contact',
      component:ContactComponent
    },
    {
      path:'uses',
      component:UsesComponent
    }])
  ],
  providers: [DataService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
