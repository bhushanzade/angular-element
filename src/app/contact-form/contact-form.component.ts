import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactFormComponent implements OnInit {

  @Input() company: string = '';
  isOpen: boolean = false;
  reactiveForm: FormGroup;

  constructor(
    private service: ContactService
  ) {
    this.reactiveForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'phone': new FormControl('', [Validators.required]),
      'message': new FormControl('', [Validators.required]),
      'company': new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    if (!this.company) alert("No company name has been added.");
    else {
      this.reactiveForm.get('company')?.setValue(this.company);
      this.reactiveForm.updateValueAndValidity();
    }
  }

  get f() {
    return this.reactiveForm.controls;
  }

  toggle(e: Event, cancelEvent: any) {
    if (!this.isOpen) {
      this.isOpen = true;
    } else if (e.target == cancelEvent) {
      this.isOpen = false;
    }
  }

  save() {
    if (this.reactiveForm.invalid) {
      this.reactiveForm.markAllAsTouched();
      return;
    }

    this.service.saveContact(this.reactiveForm.value).subscribe(res => {
      this.reactiveForm.reset();
      this.isOpen = false;
      this.showPopup()
    })
  }

  showPopup() {
    Swal.fire({
      "icon": "success",
      "title": "Contact Us",
      "text": "Thank you for contacting us. We will reached you soon."
    })
  }

}
