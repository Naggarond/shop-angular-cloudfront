import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NotificationService } from '../notification.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class ErrorPrintInterceptor implements HttpInterceptor {
  constructor(private readonly notificationService: NotificationService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap({
        // eslint-disable-next-line rxjs/no-implicit-any-catch
        error: (response: HttpResponse<string>) => {
          const url = new URL(request.url);
          if (
            response &&
            (response.status === 401 || response.status === 403)
          ) {
            this.notificationService.showError(
              `Code: ${response.status} on url  "${url.pathname}"`,
              0
            );
          } else {
            this.notificationService.showError(
              `Request to "${url.pathname}" failed. Check the console for the details`,
              0
            );
          }
        },
      })
    );
  }
}
