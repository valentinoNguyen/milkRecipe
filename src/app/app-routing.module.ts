import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { ToppingComponent } from './components/topping/topping.component';
import { IceLevelComponent } from './components/ice-level/ice-level.component';
import { SweetLevelComponent } from './components/sweet-level/sweet-level.component';
import { SizeComponent } from './components/size/size.component';


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
        path: 'size',
        component: SizeComponent,
    },
    {
        path: 'topping',
        component: ToppingComponent,
    },
    {
        path: 'ice',
        component: IceLevelComponent,
    },
    {
        path: 'sweet',
        component: SweetLevelComponent,
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
