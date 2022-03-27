import { Component, Input, OnChanges } from '@angular/core';
import ITheme from '../../../core/model/Theme';
import { UserService } from '../../../core/service/user.service';


@Component({
  selector: 'app-themes-list-item',
  templateUrl: './themes-list-item.component.html',
  styleUrls: ['./themes-list-item.component.css']
})
export class ThemesListItemComponent implements OnChanges  {
  get isLogged(): boolean | null {
    return this.userService.isLoggedInUser;
  }
  canSubscribe: boolean = false;

  @Input() theme!: ITheme
  constructor(private userService: UserService) { }

  ngOnChanges(): void {
    this.canSubscribe = !this.theme.subscribers.includes('5fa64b162183ce1728ff371d');
  }

}
