import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'signin', loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)},
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'signin', loadChildren: './signin/signin.module#SigninPageModule' },
  { path: 'app-list', loadChildren: './app-list/app-list.module#AppListPageModule' },
  { path: 'add-book', loadChildren: './add-book/add-book.module#AddBookPageModule' },
  // { path: 'detail', loadChildren: './detail/detail.module#DetailPageModule' },
  { path: 'detail/:id', loadChildren: './detail/detail.module#DetailPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
