import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddProduct } from './button-add-product';

describe('ButtonAddProduct', () => {
  let component: ButtonAddProduct;
  let fixture: ComponentFixture<ButtonAddProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonAddProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonAddProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
