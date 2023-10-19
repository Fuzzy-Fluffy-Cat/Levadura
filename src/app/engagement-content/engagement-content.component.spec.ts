import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementContentComponent } from './engagement-content.component';

describe('EngagementContentComponent', () => {
  let component: EngagementContentComponent;
  let fixture: ComponentFixture<EngagementContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EngagementContentComponent]
    });
    fixture = TestBed.createComponent(EngagementContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
