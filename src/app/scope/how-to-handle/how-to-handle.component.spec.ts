import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToHandleComponent } from './how-to-handle.component';

describe('HowToHandleComponent', () => {
  let component: HowToHandleComponent;
  let fixture: ComponentFixture<HowToHandleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToHandleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HowToHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
