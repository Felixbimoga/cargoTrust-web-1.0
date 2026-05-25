import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-otp-method',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './otp-method.component.html',
  styleUrls: ['./otp-method.component.css']
})
export class OtpMethodComponent implements OnInit {

  selectedMethod: 'email' | 'sms' | null = null;
  isLoading = false;
  maskedEmail = 'f***@gmail.com'; // Récupère depuis le state ou l'AuthService

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Récupérer l'email masqué depuis le service ou le router state
    // const nav = this.router.getCurrentNavigation();
    // const email = nav?.extras?.state?.['email'] || '';
    // this.maskedEmail = this.maskEmail(email);
  }

  selectMethod(method: 'email' | 'sms'): void {
    this.selectedMethod = method;
  }

  maskEmail(email: string): string {
    const [user, domain] = email.split('@');
    return user.charAt(0) + '***@' + domain;
  }

  sendCode(): void {
    if (!this.selectedMethod) return;
    this.isLoading = true;

    // this.authService.sendOtp(this.selectedMethod).subscribe({
    //   next: () => {
    //     this.isLoading = false;
    //     this.router.navigate(['/verify-otp'], { state: { method: this.selectedMethod } });
    //   },
    //   error: () => {
    //     this.isLoading = false;
    //   }
    // });

    // Simulation
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/verify-otp']);
    }, 1200);
  }

  goBack(): void {
    this.router.navigate(['/login']);
  }
}
