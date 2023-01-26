import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MultiFormComponent } from './components/multi-form/multi-form.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormWrapperComponent } from './components/form-wrapper/form-wrapper.component';
import { FormStep1Component } from './components/form-step1/form-step1.component';
import { FormStep2Component } from './components/form-step2/form-step2.component';
import { FormStep3Component } from './components/form-step3/form-step3.component';
import { FormStep4Component } from './components/form-step4/form-step4.component';
import { FormStep5Component } from './components/form-step5/form-step5.component';

@NgModule({
  declarations: [
    MultiFormComponent,
    HeaderComponent,
    FooterComponent,
    FormWrapperComponent,
    FormStep1Component,
    FormStep2Component,
    FormStep3Component,
    FormStep4Component,
    FormStep5Component,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('multiForm', reducers),
  ],
})
export class MultiFormModule {}
