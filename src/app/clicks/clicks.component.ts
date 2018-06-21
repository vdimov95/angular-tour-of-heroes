import { Component, OnInit } from '@angular/core';
import { ClickService } from '../click.service';


@Component({
  selector: 'app-clicks',
  templateUrl: './clicks.component.html',
  styleUrls: ['./clicks.component.css']
})

export class ClicksComponent implements OnInit {
  clicks: string[];

  clickMe() {
    this.clicks = this.clickService.addClick('click');
  }

  constructor(public clickService: ClickService) { }

  ngOnInit() {
  }

}
