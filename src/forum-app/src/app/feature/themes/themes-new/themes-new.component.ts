import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ThemeService } from '../../../core/service/theme.service';

@Component({
  selector: 'app-themes-new',
  templateUrl: './themes-new.component.html',
  styleUrls: ['./themes-new.component.css'],
})
export class ThemesNewComponent implements OnInit {
  constructor(private themeService: ThemeService, private router: Router) {}

  errorMessage: string = '';

  ngOnInit(): void {}

  create(createTheme: NgForm): void {
    console.log(createTheme.value);
    this.themeService.createTheme$(createTheme.value).subscribe({
      next: () => {
        this.router.navigate(['/themes']);
      },
      complete: () => {
        console.log('created');
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      },
    });
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
