import { Component, OnInit } from '@angular/core';
import { CrudService } from 'service/crud.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public Username: '';
  constructor() {}

  ngOnInit() {}
}
