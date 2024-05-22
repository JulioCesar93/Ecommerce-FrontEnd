import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BySellerComponent } from './by-seller.component';

describe('BySellerComponent', () => {
  let component: BySellerComponent;
  let fixture: ComponentFixture<BySellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BySellerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BySellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
