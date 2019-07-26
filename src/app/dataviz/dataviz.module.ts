import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarDiagramComponent } from './bar-diagram/bar-diagram.component';
import { FrenchMapComponent } from './french-map/french-map.component';
import { WikidataImagelistComponent } from './wikidata-imagelist/wikidata-imagelist.component';



@NgModule({
  declarations: [BarDiagramComponent, FrenchMapComponent, WikidataImagelistComponent],
  imports: [
    CommonModule
  ],
  exports: [BarDiagramComponent, FrenchMapComponent, WikidataImagelistComponent]
})
export class DatavizModule { }
