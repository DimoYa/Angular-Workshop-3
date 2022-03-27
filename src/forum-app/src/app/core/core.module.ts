import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { UserService } from './service/user.service';
import { ThemeService } from './service/theme.service';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
   ],
 imports: [
   CommonModule,
   RouterModule,
 ],
 exports: [
   HeaderComponent,
   FooterComponent
 ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        UserService,
        ThemeService,
      ]
    }
  }
}
