import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-pessoa-nova',
  templateUrl: './pessoas-nova.component.html',
  styleUrls: ['./pessoas-nova.component.css']
})

export class PessoasNovaComponent implements OnInit {
  pessoaForm: FormGroup = new FormGroup({});
  nome: String = '';
  email: String = '';
  idade: number = 0;
  sexo: String = '';
  telefone: String = '';

  isLoadingResults = false;
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
     this.pessoaForm = this.formBuilder.group({
    'nome' : [null, Validators.required],
    'telefone' : [null, Validators.required],
    'idade' : [null, Validators.required],
    'sexo' : [null, Validators.required],
    'email' : [null, Validators.required],
  });
  }

  create(form: NgForm) {
    this.isLoadingResults = true;
    this.api.create(form as any)
      .subscribe(res => {
          const id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/pessoas']);
        }, (err) => {
          this.isLoadingResults = false;
        });
  }
}
