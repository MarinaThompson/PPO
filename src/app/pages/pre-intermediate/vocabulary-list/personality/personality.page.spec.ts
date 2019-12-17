import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalityPage } from './personality.page';

describe('PersonalityPage', () => {
  let component: PersonalityPage;
  let fixture: ComponentFixture<PersonalityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
