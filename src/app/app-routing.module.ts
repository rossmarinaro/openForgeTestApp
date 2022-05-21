import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
//  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {
    path: '', 
    //redirectTo: '', 
    //pathMatch: 'full',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'users',
    children: [
      {
        path: '',
        loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
      },
      {
        path: ':userId',
        loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
      }
    ]

  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
