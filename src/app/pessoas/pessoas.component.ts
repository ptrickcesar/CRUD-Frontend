import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../service/api.service';
import { Pessoa } from 'src/model/pessoa';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {
  displayedColumns: string[] = [ 'nome', 'idade', 'email', 'telefone', 'sexo', 'acao'];
  dataSource: Pessoa[] = [];
  isLoadingResults = true;
  constructor(private router: Router, private _api: ApiService) { }

  ngOnInit(): void {
    this._api.findAll()
    .subscribe(res => {
      this.dataSource = res;
      this.isLoadingResults = false;
    }, err => {
      this.isLoadingResults = false;
    });
  }

  delete(id: number) {
    this.isLoadingResults = true;
    this._api.delete(id as any)
      .subscribe(res => {
          this.isLoadingResults = false;
          document.location.reload();
        }, (err) => {
          this.isLoadingResults = false;
        }
      );
  }

}
