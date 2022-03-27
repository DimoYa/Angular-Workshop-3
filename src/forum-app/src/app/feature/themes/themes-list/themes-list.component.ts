import { Component, OnInit } from '@angular/core';
import ITheme from '../../../core/model/Theme';
import { ThemeService } from '../../../core/service/theme.service';
import { UserService } from '../../../core/service/user.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css'],
})
export class ThemesListComponent implements OnInit {
  get isLogged(): boolean | null {
    return this.userService.isLoggedInUser;
  }
  
  constructor(
    private themeService: ThemeService,
    private userService: UserService
  ) {}

  allThemes!: ITheme[];

  ngOnInit(): void {
    this.themeService.getThemes().subscribe((data) => {
      this.allThemes = data.sort(
        (a, b) => b.subscribers.length - a.subscribers.length
      );
    });
  }
}
