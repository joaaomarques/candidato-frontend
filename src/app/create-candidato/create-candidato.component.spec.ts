import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCandidatoComponent } from './create-candidato.component';

describe('CreateCandidatoComponent', () => {
  let component: CreateCandidatoComponent;
  let fixture: ComponentFixture<CreateCandidatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateCandidatoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
