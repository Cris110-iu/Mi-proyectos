import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:5000/api/usuarios'; // Cambia esto si despliegas

  constructor(private http: HttpClient) { }

  // Registrar usuario
  registrar(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, usuario);
  }

  // Obtener todos los usuarios (por ejemplo, para pruebas)
  obtenerUsuarios(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}