import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { RecipeComponent } from './components/recipe/recipe.component';


const routes: Routes = [
    {
        path: '',
        component: MenuComponent,
    },
    {
        path: 'menu',
        component: MenuComponent,
    },
    {
        path: 'recipe',
        component: RecipeComponent,
    },
    {
        path: '**',
        redirectTo: 'menu'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
