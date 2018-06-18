import { Injectable } from '@angular/core';

@Injectable()
export class ClickService {
  clicks: string[] = [];

  addClick(click: string) {
    this.clicks.push(click);

    return this.clicks;
  }

  constructor() { }
}
