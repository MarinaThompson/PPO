import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBeginnerPage } from './menu-beginner.page';

describe('MenuBeginnerPage', () => {
  let component: MenuBeginnerPage;
  let fixture: ComponentFixture<MenuBeginnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBeginnerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBeginnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
