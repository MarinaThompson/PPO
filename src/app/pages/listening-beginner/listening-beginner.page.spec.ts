import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeningBeginnerPage } from './listening-beginner.page';

describe('ListeningBeginnerPage', () => {
  let component: ListeningBeginnerPage;
  let fixture: ComponentFixture<ListeningBeginnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeningBeginnerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeningBeginnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
