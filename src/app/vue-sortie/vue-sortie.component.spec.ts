import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueSortieComponent } from './vue-sortie.component';

describe('VueSortieComponent', () => {
  let component: VueSortieComponent;
  let fixture: ComponentFixture<VueSortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VueSortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VueSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
