import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalData, ModalService } from '../../core/services/modal.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit {
  isOpen = false;
  data: ModalData = {};

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.modalService.modal$.subscribe(({ open, data }) => {
      this.isOpen = open;
      this.data = data ?? {};
    });
  }

  get overlayClass(): string {
    return `overlay overlay--${this.data.position ?? 'center'}`;
  }

  get modalBoxClass(): string {
    return `modal-box modal-box--${this.data.size ?? 'medium'}`;
  }

  close() {
    this.modalService.close();
  }
}
