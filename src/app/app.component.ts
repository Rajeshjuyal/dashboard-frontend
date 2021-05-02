import { Component, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  public exportRequestInterval;

  constructor() {}
  ngOnInit() {}
  ngOnDestroy() {}
}
