import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      if(req.url.indexOf("/login") < 0) {


      const token = localStorage.getItem('token');

      const cloneReq = req.clone({
        setHeaders:{
          Authorization: `Bearer ${token}`
        }
      })
      return next.handle(cloneReq)
    }

    return next.handle(req.clone())
  }
}
