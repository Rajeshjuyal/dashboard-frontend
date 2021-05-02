import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss'],
})
export class FullLayoutComponent implements OnInit {
  @ViewChild('wrapper', { static: false }) wrapper: ElementRef;

  public config: any = {};

  constructor() {}

  ngOnInit() {}
}
