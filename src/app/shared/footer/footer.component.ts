import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentDate: Date = new Date();
  public Name: string = 'Rajesh';

  constructor() {}
}
