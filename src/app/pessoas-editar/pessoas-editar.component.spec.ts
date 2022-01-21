import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasEditarComponent } from './pessoas-editar.component';

describe('PessoasEditarComponent', () => {
  let component: PessoasEditarComponent;
  let fixture: ComponentFixture<PessoasEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoasEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoasEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
