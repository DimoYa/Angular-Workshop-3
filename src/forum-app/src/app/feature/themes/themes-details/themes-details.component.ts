import { Component, OnInit } from '@angular/core';
import ITheme from '../../../core/model/Theme';
import IPost from '../../../core/model/Post';
import { UserService } from '../../../core/service/user.service'
import { ThemeService } from '../../../core/service/theme.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-themes-details',
  templateUrl: './themes-details.component.html',
  styleUrls: ['./themes-details.component.css']
})
export class ThemesDetailsComponent implements OnInit {
  theme: ITheme<IPost>;

  isLoggedIn: boolean = this.userService.isLoggedInUser;
  canSubscribe: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private themeService: ThemeService,
    private userService: UserService) { }

    ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        const id = params['id'];
        this.themeService.getThemeById(id).subscribe(data => {
          this.theme = data;
          this.canSubscribe = !this.theme.subscribers.includes('5fa64b162183ce1728ff371d');
        });
      })
    }
  
    canLike(comment: IPost){
      return !comment.likes.includes('5fa64b162183ce1728ff371d');
    }

}
