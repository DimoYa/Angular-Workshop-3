import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AsideComponent } from './aside/aside.component';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { ThemesListItemComponent } from './theme-list-item/themes-list-item.component';
import { ThemeService } from '../../core/service/theme.service';
import { PostService } from '../../core/service/post.service';
import { UserService } from '../../core/service/user.service';
import { ThemesNewComponent } from './themes-new/themes-new.component';
import { ThemesRoutingModule } from './themes-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ThemesDetailsComponent } from './themes-details/themes-details.component';

@NgModule({
  declarations: [
    AsideComponent,
    ThemesListComponent,
    ThemesListItemComponent,
    ThemesNewComponent,
    ThemesDetailsComponent
      ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ThemesRoutingModule,
    FormsModule
  ],
  providers: [ThemeService, PostService, UserService],
})
export class ThemesModule {}
