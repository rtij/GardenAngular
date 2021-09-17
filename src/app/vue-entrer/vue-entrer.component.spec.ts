import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueEntrerComponent } from './vue-entrer.component';

describe('VueEntrerComponent', () => {
  let component: VueEntrerComponent;
  let fixture: ComponentFixture<VueEntrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VueEntrerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VueEntrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
