import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentPerfectcontinuousPage } from './present-perfectcontinuous.page';

describe('PresentPerfectcontinuousPage', () => {
  let component: PresentPerfectcontinuousPage;
  let fixture: ComponentFixture<PresentPerfectcontinuousPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentPerfectcontinuousPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentPerfectcontinuousPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
