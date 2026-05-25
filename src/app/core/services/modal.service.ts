import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export type ModalPosition = 'center' | 'top' | 'right';
export type ModalSize = 'small' | 'medium' | 'large' | 'extra-large' | 'extra-large-2' | 'fullscreen';

export interface ModalData {
  titre?: string;
  message?: string;
  position?: ModalPosition;
  size?: ModalSize;
}

@Injectable({ providedIn: 'root' })
export class ModalService {
  private modalSubject = new BehaviorSubject<{ open: boolean; data?: ModalData }>({ open: false });
  modal$ = this.modalSubject.asObservable();

  open(data?: ModalData) {
    this.modalSubject.next({ open: true, data });
  }

  close() {
    this.modalSubject.next({ open: false });
  }
}
