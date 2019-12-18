import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IllnessesPage } from './illnesses.page';

describe('IllnessesPage', () => {
  let component: IllnessesPage;
  let fixture: ComponentFixture<IllnessesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IllnessesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IllnessesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
