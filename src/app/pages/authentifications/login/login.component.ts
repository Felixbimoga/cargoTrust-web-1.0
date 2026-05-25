import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthService } from '../../services/auth.service'; // décommente quand tu auras le service

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  showPassword = false;
  isLoading = false;
  loginError = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    // private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  isFieldInvalid(field: string): boolean {
    const control = this.loginForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  getEmailError(): string {
    const control = this.loginForm.get('email');
    if (control?.hasError('required')) return 'L\'email est requis';
    if (control?.hasError('email')) return 'Format d\'email invalide';
    return '';
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.loginError = '';

    const { email, password } = this.loginForm.value;

    // ── Remplace ce bloc par ton appel AuthService ──
    // this.authService.login(email, password).subscribe({
    //   next: (response) => {
    //     this.isLoading = false;
    //     // Redirection selon le rôle
    //     const role = response.user.role;
    //     if (role === 'SUPER_ADMIN') this.router.navigate(['/super-admin']);
    //     else if (role === 'ADMIN_TRANSITAIRE') this.router.navigate(['/admin-transitaire']);
    //     else if (role === 'EMPLOYE_TRANSITAIRE') this.router.navigate(['/employe']);
    //     else this.router.navigate(['/dashboard']);
    //   },
    //   error: (err) => {
    //     this.isLoading = false;
    //     this.loginError = err.error?.message || 'Email ou mot de passe incorrect';
    //   }
    // });

    // Simulation temporaire
    setTimeout(() => {
      this.isLoading = false;
      console.log('Login avec :', email, password);
      // this.router.navigate(['/dashboard']);
    }, 1500);
  }
}
