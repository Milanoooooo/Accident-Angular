import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choropleth',
  templateUrl: './choropleth.component.html',
  styleUrls: ['./choropleth.component.scss']
})
export class ChoroplethComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    this.generateKilledFile();
  }

  async generateKilledFile() {

    const usagers = await d3.csv('assets/data/usagers-2017.csv');
    const caracteristique = await d3.csv('assets/data/caracteristiques-2017.csv');

    console.log('usagers', usagers);
    console.log('caracteristiques', caracteristique);
  }

}
