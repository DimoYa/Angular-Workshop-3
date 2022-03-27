import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../../core/guard/auth.guard";
import { ThemesDetailsComponent } from "./themes-details/themes-details.component";
import { ThemesListComponent } from './themes-list/themes-list.component';
import { ThemesNewComponent } from './themes-new/themes-new.component';


const routes: Routes = [
    { path: 'themes', component: ThemesListComponent},
    { path: 'themes/new', canActivate: [AuthGuard], component: ThemesNewComponent},
    { path: 'themes/:id', component: ThemesDetailsComponent},
];

export const ThemesRoutingModule = RouterModule.forChild(routes);