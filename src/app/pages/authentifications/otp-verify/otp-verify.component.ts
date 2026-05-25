import { Component, OnInit, OnDestroy, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-otp-verify',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './otp-verify.component.html',
  styleUrls: ['./otp-verify.component.css']
})
export class OtpVerifyComponent implements OnInit, OnDestroy {

  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef<HTMLInputElement>>;

  otpValues: string[] = ['', '', '', '', '', ''];
  otpError = '';
  isLoading = false;
  maskedEmail = 'f***@gmail.com';
  countdown = 60;

  private countdownInterval: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    clearInterval(this.countdownInterval);
  }

  get isComplete(): boolean {
    return this.otpValues.every(v => v !== '');
  }

  get otpCode(): string {
    return this.otpValues.join('');
  }

  onInput(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/\D/g, ''); // chiffres uniquement
    input.value = value;
    this.otpValues[index] = value;
    this.otpError = '';

    // Avancer au suivant
    if (value && index < 5) {
      const inputs = this.otpInputs.toArray();
      inputs[index + 1]?.nativeElement.focus();
    }
  }

  onKeydown(event: KeyboardEvent, index: number): void {
    if (event.key === 'Backspace' && !this.otpValues[index] && index > 0) {
      const inputs = this.otpInputs.toArray();
      this.otpValues[index - 1] = '';
      inputs[index - 1]?.nativeElement.focus();
    }
  }

  onPaste(event: ClipboardEvent): void {
    event.preventDefault();
    const pasted = event.clipboardData?.getData('text').replace(/\D/g, '').slice(0, 6) || '';
    const inputs = this.otpInputs.toArray();
    pasted.split('').forEach((char, i) => {
      if (i < 6) {
        this.otpValues[i] = char;
        if (inputs[i]) inputs[i].nativeElement.value = char;
      }
    });
    inputs[Math.min(pasted.length, 5)]?.nativeElement.focus();
  }

  startCountdown(): void {
    this.countdown = 60;
    this.countdownInterval = setInterval(() => {
      if (this.countdown > 0) this.countdown--;
      else clearInterval(this.countdownInterval);
    }, 1000);
  }

  resendCode(): void {
    // this.authService.resendOtp().subscribe();
    this.startCountdown();
    this.otpValues = ['', '', '', '', '', ''];
    const inputs = this.otpInputs.toArray();
    inputs.forEach(i => (i.nativeElement.value = ''));
    inputs[0]?.nativeElement.focus();
  }

  confirm(): void {
    if (!this.isComplete) return;
    this.isLoading = true;
    this.otpError = '';

    // this.authService.verifyOtp(this.otpCode).subscribe({
    //   next: (response) => {
    //     this.isLoading = false;
    //     const role = response.user.role;
    //     if (role === 'SUPER_ADMIN') this.router.navigate(['/super-admin']);
    //     else if (role === 'ADMIN_TRANSITAIRE') this.router.navigate(['/admin-transitaire']);
    //     else if (role === 'EMPLOYE_TRANSITAIRE') this.router.navigate(['/employe']);
    //     else this.router.navigate(['/dashboard']);
    //   },
    //   error: (err) => {
    //     this.isLoading = false;
    //     this.otpError = 'Code incorrect ou expiré. Veuillez réessayer.';
    //   }
    // });

    // Simulation
    setTimeout(() => {
      this.isLoading = false;
      if (this.otpCode === '123456') {
        this.router.navigate(['/dashboard']);
      } else {
        this.otpError = 'Code incorrect ou expiré. Veuillez réessayer.';
      }
    }, 1200);
  }

  goBack(): void {
    this.router.navigate(['/otp-method']);
  }
}
