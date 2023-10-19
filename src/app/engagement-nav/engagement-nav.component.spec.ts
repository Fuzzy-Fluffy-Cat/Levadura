import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementNavComponent } from './engagement-nav.component';

describe('EngagementNavComponent', () => {
  let component: EngagementNavComponent;
  let fixture: ComponentFixture<EngagementNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EngagementNavComponent]
    });
    fixture = TestBed.createComponent(EngagementNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
