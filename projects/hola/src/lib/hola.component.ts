import { HolaService } from './hola.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hl-hola',
  template: `
    <p>
      hola works - Anartz Mugika ---2222222!
    </p>
  `,
  styles: []
})
export class HolaComponent implements OnInit {

  constructor(private h: HolaService) { }

  ngOnInit() {
  }

}
