import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikidataImagelistComponent } from './wikidata-imagelist.component';

describe('WikidataImagelistComponent', () => {
  let component: WikidataImagelistComponent;
  let fixture: ComponentFixture<WikidataImagelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikidataImagelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikidataImagelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
