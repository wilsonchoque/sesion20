import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectorService implements HttpInterceptor {


  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    
    console.log('Estas intercetado');
    
    const newReq = req.clone({setHeaders:{
      Authorization: 'Bearer One Piece Existe '
    }})
    
    return next.handle(newReq);    
  }

  constructor() { }
}
