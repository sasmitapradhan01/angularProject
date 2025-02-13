import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderChild1Component } from './provider-child1.component';

describe('ProviderChild1Component', () => {
  let component: ProviderChild1Component;
  let fixture: ComponentFixture<ProviderChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProviderChild1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProviderChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
