import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MwErrorLockService {
  private isErrorLockedSubject = new BehaviorSubject<boolean>(false);

  getIsErrorLocked(): Observable<boolean> {
    return this.isErrorLockedSubject.asObservable();
  }

  setIsErrorLocked(isLocked: boolean): void {
    this.isErrorLockedSubject.next(isLocked);
  }
}
