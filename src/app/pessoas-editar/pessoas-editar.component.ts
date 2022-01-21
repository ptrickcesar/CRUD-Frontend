import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-pessoas-editar',
  templateUrl: './pessoas-editar.component.html',
  styleUrls: ['./pessoas-editar.component.css']
})
export class PessoasEditarComponent implements OnInit {
  id: string = '';
  pessoaForm: FormGroup = new FormGroup({});
  nome: string = '';
  email: string = '';
  idade: number = 0;
  sexo: string = '';
  telefone: string = '';
  isLoadingResults = false;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getPessoa(this.route.snapshot.params['id']);
    this.pessoaForm = this.formBuilder.group({
      'nome' : [null, Validators.required],
      'telefone' : [null, Validators.required],
      'idade' : [null, Validators.required],
      'sexo' : [null, Validators.required],
      'email' : [null, Validators.required],
 });
 }

 getPessoa(id: string) {
  this.api.findOne(id).subscribe(data => {
    this.id = data.id;
    this.pessoaForm.setValue({
      nome: data.nome,
      telefone: data.telefone,
      sexo: data.sexo,
      idade: data.idade,
      email: data.email,
    });
  });
}

update(form: NgForm) {
  this.isLoadingResults = true;
  this.api.update(this.id, form as any)
    .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/pessoas']);
      }, (err) => {
        this.isLoadingResults = false;
      }
    );
}
}
