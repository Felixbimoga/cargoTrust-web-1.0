import { Component } from '@angular/core';
import { ToastData, ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-toast',
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  toasts: ToastData[] = [];

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.toastService.toasts$.subscribe(t => this.toasts = t);
  }

  remove(id: number) {
    this.toastService.remove(id);
  }
}
