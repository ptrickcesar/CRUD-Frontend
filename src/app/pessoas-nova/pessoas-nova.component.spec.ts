import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasNovaComponent } from './pessoas-nova.component';

describe('PessoasNovaComponent', () => {
  let component: PessoasNovaComponent;
  let fixture: ComponentFixture<PessoasNovaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoasNovaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoasNovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
