import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-starts',
  templateUrl: './starts.component.html',
  styleUrls: ['./starts.component.css'],
})
export class StartsComponent implements OnInit, OnChanges {
  @Input()
  rating: number;
  starsWidth: number;

  ngOnChanges(): void {
    this.starsWidth = (this.rating * 74) / 5;
  }

  constructor() {}
  ngOnInit(): void {}
}
