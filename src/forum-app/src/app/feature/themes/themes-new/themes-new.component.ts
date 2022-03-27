import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ThemeService } from '../../../core/service/theme.service';

@Component({
  selector: 'app-themes-new',
  templateUrl: './themes-new.component.html',
  styleUrls: ['./themes-new.component.css'],
})
export class ThemesNewComponent implements OnInit {
  constructor(
    private themeService: ThemeService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  create(body: Object) {
    console.log(body);
  }
}
