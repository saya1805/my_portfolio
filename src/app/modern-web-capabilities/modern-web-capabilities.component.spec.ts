import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernWebCapabilitiesComponent } from './modern-web-capabilities.component';

describe('ModernWebCapabilitiesComponent', () => {
  let component: ModernWebCapabilitiesComponent;
  let fixture: ComponentFixture<ModernWebCapabilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModernWebCapabilitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModernWebCapabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
