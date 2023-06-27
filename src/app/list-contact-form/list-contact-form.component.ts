import { Observable, filter, map } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-list-contact-form',
  templateUrl: './list-contact-form.component.html',
  styleUrls: ['./list-contact-form.component.scss']
})
export class ListContactFormComponent implements OnInit {

  @Input() title: string = '';
  @Input() company: string = '';

  $items!: Observable<any[]>;

  constructor(private service: ContactService) {

  }

  ngOnInit(): void {
    this.$items = this.service.getContacts().pipe(map(res => res.filter((data: any) => data.company == this.company)));
  }
}
