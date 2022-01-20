import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrecontactoComponent } from './entrecontacto.component';

describe('EntrecontactoComponent', () => {
  let component: EntrecontactoComponent;
  let fixture: ComponentFixture<EntrecontactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrecontactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrecontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
