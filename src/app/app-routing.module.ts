import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ListContactFormComponent } from './list-contact-form/list-contact-form.component';

const routes: Routes = [
  {
    path: '',
    component: ContactFormComponent
  },
  {
    path: 'list',
    component: ListContactFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
