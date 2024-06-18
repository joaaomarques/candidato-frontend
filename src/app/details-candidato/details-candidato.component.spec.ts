import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCandidatoComponent } from './details-candidato.component';

describe('DetailsCandidatoComponent', () => {
  let component: DetailsCandidatoComponent;
  let fixture: ComponentFixture<DetailsCandidatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsCandidatoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
