import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrerComponent } from './entrer.component';

describe('EntrerComponent', () => {
  let component: EntrerComponent;
  let fixture: ComponentFixture<EntrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
