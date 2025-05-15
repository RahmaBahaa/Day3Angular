import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  @Output() myEvent = new EventEmitter<string>();
  goTo(page:string){
    this.myEvent.emit(page);
  }
}
