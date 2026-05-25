import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ToastData {
  type: 'success' | 'error';
  title: string;
  message: string;
  id: number;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private toastsSubject = new BehaviorSubject<ToastData[]>([]);
  toasts$ = this.toastsSubject.asObservable();
  private counter = 0;

  success(title: string, message: string) {
    this.add({ type: 'success', title, message });
  }

  error(title: string, message: string) {
    this.add({ type: 'error', title, message });
  }

  private add(toast: Omit<ToastData, 'id'>) {
    const id = ++this.counter;
    const current = this.toastsSubject.getValue();
    this.toastsSubject.next([...current, { ...toast, id }]);
    setTimeout(() => this.remove(id), 4000);
  }

  remove(id: number) {
    const current = this.toastsSubject.getValue();
    this.toastsSubject.next(current.filter(t => t.id !== id));
  }
}
