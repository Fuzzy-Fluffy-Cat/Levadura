import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerIconComponent } from './burger-icon.component';

describe('BurgerIconComponent', () => {
  let component: BurgerIconComponent;
  let fixture: ComponentFixture<BurgerIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BurgerIconComponent]
    });
    fixture = TestBed.createComponent(BurgerIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
