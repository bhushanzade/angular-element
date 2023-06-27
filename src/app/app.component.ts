import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-angular-element';
  @Input() message: string = '';
  @Output() messageSent = new EventEmitter<string>();

  sendMessage() {
    console.log("Emit calling");
    this.messageSent.emit('Hello, message coming from angular web element child element!');
    const event = new CustomEvent('messageSent', {
      bubbles: true,
      detail: 'Hello, message coming from angular web element child element!'
    });
    document.dispatchEvent(event);
  }

}
