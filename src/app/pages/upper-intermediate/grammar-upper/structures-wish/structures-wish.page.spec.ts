import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuresWishPage } from './structures-wish.page';

describe('StructuresWishPage', () => {
  let component: StructuresWishPage;
  let fixture: ComponentFixture<StructuresWishPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructuresWishPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuresWishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
