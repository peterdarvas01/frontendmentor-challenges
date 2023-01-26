import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiFormComponent } from './multi-form/components/multi-form/multi-form.component';

const routes: Routes = [{ path: '', component: MultiFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
