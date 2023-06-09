import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Members } from '../models/members';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  constructor(private http: HttpClient) {}

  getMemberByCpf(cpf: string): Observable<Members[]> {
    return this.http.get<Members[]>(
      `${environment().baseUrl}/users?document=${cpf}`
    );
  }
}
