import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtremeWeatherPage } from './extreme-weather.page';

describe('ExtremeWeatherPage', () => {
  let component: ExtremeWeatherPage;
  let fixture: ComponentFixture<ExtremeWeatherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtremeWeatherPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtremeWeatherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
