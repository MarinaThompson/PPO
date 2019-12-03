import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedSpeechPage } from './reported-speech.page';

describe('ReportedSpeechPage', () => {
  let component: ReportedSpeechPage;
  let fixture: ComponentFixture<ReportedSpeechPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportedSpeechPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportedSpeechPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
