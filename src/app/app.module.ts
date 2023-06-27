import { ApplicationRef, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ListContactFormComponent } from './list-contact-form/list-contact-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ListContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class AppModule {
  constructor(injector: Injector) {
    const contactFormElement = createCustomElement(ContactFormComponent, { injector });
    customElements.define('contact-form', contactFormElement);

    const listContactsElement = createCustomElement(ListContactFormComponent, { injector });
    customElements.define('list-contact-form', listContactsElement);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    if (document.querySelector('app-root')) {
      appRef.bootstrap(AppComponent);
    }
  }
}
