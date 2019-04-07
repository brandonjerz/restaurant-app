import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';


@Component({
  selector: 'app-home-menu-item',
  templateUrl: './home-menu-item.component.html',
  styleUrls: ['./home-menu-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HomeMenuItemComponent implements OnInit {
 @Input() name: string;
 @Input() accentText: string;
 @Input() imgUrl: string;
  constructor() { }

  ngOnInit() {
    
  }

}
