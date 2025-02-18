import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { } 

  public validate(data: string) {
    return this.http.post<boolean>(environment.apiUrl + 'skill/validate',data);
  }
}
