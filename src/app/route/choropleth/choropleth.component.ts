import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

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
    const caracteristics = await d3.csv('assets/data/caracteristiques-2017.csv');

    console.log('usagers', usagers);
    console.log('caracteristics', caracteristics);

    // filter on killed
    const killed = usagers.filter(r => r.grav === '2')
      .map(r => r.Num_Acc);
    console.log('killed', killed.length);

    //Liste des départements
    const deps = killed.map(numAcc => {
      return caracteristics.find(r => r.Num_Acc === numAcc).dep;
    });

    //Jointure sur la réference de Num_Acc entre les 2 fichiers
    const result = deps.reduce((acc, n) => {
      acc[n] = (acc[n] === undefined) ? 1 : acc[n] + 1;
      return acc;
    }, {});
    console.log('result', result);
  }

}