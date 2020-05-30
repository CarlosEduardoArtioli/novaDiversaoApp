import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'ad-astra',
    loadChildren: () => import('./pages/filmes/ad-astra/ad-astra.module').then(m => m.AdAstraPageModule)
  },
  {
    path: 'frozen2',
    loadChildren: () => import('./pages/filmes/frozen2/frozen2.module').then(m => m.Frozen2PageModule)
  },
  {
    path: 'flash',
    loadChildren: () => import('./pages/series/flash/flash.module').then(m => m.FlashPageModule)
  },
  {
    path: 'lei-ordem',
    loadChildren: () => import('./pages/series/lei-ordem/lei-ordem.module').then(m => m.LeiOrdemPageModule)
  },
  {
    path: 'ilha-da-fantasia',
    loadChildren: () => import('./pages/filmes/ilha-da-fantasia/ilha-da-fantasia.module').then(m => m.IlhaDaFantasiaPageModule)
  },
  {
    path: 'aprendiz-de-espia',
    loadChildren: () => import('./pages/filmes/aprendiz-de-espia/aprendiz-de-espia.module').then(m => m.AprendizDeEspiaPageModule)
  },
  {
    path: 'os-smurfs',
    loadChildren: () => import('./pages/desenhos/os-smurfs/os-smurfs.module').then(m => m.OsSmurfsPageModule)
  },
  {
    path: 'peppa-pig',
    loadChildren: () => import('./pages/desenhos/peppa-pig/peppa-pig.module').then(m => m.PeppaPigPageModule)
  },
  {
    path: 'o-novo-show-do-pica-pau',
    loadChildren: () => import('./pages/desenhos/o-novo-show-do-pica-pau/o-novo-show-do-pica-pau.module').then(m => m.ONovoShowDoPicaPauPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
