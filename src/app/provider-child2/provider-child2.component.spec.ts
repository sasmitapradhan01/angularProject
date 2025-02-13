import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderChild2Component } from './provider-child2.component';

describe('ProviderChild2Component', () => {
  let component: ProviderChild2Component;
  let fixture: ComponentFixture<ProviderChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProviderChild2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProviderChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
