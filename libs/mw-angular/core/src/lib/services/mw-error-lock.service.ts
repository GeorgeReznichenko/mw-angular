import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MwErrorLock } from '../entities/mw-error-lock';

@Injectable({
  providedIn: 'root',
})
export class MwErrorLockService {
  private errorLockSubject = new BehaviorSubject<MwErrorLock | null>(null);

  getErrorLock(): Observable<MwErrorLock | null> {
    return this.errorLockSubject.asObservable();
  }

  setErrorLock(errorLock: MwErrorLock | null): void {
    this.errorLockSubject.next(errorLock);
  }
}
