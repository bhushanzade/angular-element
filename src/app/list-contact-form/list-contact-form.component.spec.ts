import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContactFormComponent } from './list-contact-form.component';

describe('ListContactFormComponent', () => {
  let component: ListContactFormComponent;
  let fixture: ComponentFixture<ListContactFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListContactFormComponent]
    });
    fixture = TestBed.createComponent(ListContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
