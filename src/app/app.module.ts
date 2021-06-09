import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { ConvertunitsPipe } from './convertunits.pipe';

@NgModule({
  declarations: [		
    AppComponent,
      CustomDirectiveDirective,
      ConvertunitsPipe
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
