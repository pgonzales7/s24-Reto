import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInterceptorService {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Este es el interceptor');
    req = req.clone({
      setHeaders:{'Authorization': 'Token de Autorización'}
    });
    return next.handle(req);
  }

  constructor() { }

}
