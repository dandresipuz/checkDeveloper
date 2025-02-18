import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private username = 'admin';
  private password = 'admin';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authHeader = 'Basic ' + btoa(`${this.username}:${this.password}`);

    const authReq = req.clone({
      setHeaders: { 
        Authorization: authHeader,
        'Content-Type': 'application/json' // Asegura que todos los POST envíen JSON
      }
    });

    return next.handle(authReq);
  }
}