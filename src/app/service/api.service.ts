import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Pessoa } from 'src/model/pessoa';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'http://localhost:3000/pessoas';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  findAll (): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(apiUrl)
      .pipe(
        catchError(this.handleError('getPessoas', []))
      );
  }

  findOne (id: string): Observable<any> {
    return this.http.get<Pessoa>(`${apiUrl}/${id}`)
      .pipe(
        catchError(this.handleError('findOne'))
      );
  }


  create (pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(apiUrl, pessoa, httpOptions).pipe(
      catchError(this.handleError<Pessoa>('addPessoa'))
    );
  }

  update (id: string, pessoa: Pessoa): Observable<any> {
    return this.http.put(`${apiUrl}/${id}`, pessoa, httpOptions).pipe(
      catchError(this.handleError<any>('updatePessoa'))
    );
  }

  delete (id: string): Observable<Pessoa> {
    return this.http.delete<Pessoa>(`${apiUrl}/${id}`, httpOptions).pipe(
      catchError(this.handleError<Pessoa>('deletePessoa'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error('Error', error);

      return of(result as T);
    };
  }
}
