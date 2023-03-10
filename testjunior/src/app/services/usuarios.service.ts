import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable, catchError, of, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Response } from '../interfaces/response';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  apiUrl = '/api/'


  constructor(private http: HttpClient) { }

  // addUser(user: User): Observable<Response> {
  //   return this.http.post<Response>(`${this.apiUrl}user2s`, user, this.httpOptions).pipe(
  //     tap((newUser: Response) => this.log(`user added w/ id=${newUser.user.id}`)),
  //     catchError(this.handleError<Response>('addUser'))
  //   );
  // }
  addUser(user: User): Observable<Response> {
    return this.http.post<Response>(`${this.apiUrl}users`, user)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  getUser(id: string): Observable<Response> {
    const url = `${this.apiUrl}users/${id}`;
    return this.http.get<Response>(url).pipe(
      catchError(this.errorHandler)
    );
  }

  private errorHandler(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Ocurrio un error', error.error);
    } else {
     
      console.error(
        `Error en el servidor. Status ${error.status}`, error.error);
    }
    return throwError(() => new Error('Ocurrió un error, por favor intentalo más tarde'));
  }


}
