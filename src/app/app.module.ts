import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { BottomBarComponent } from './core/layouts/bottom-bar/bottom-bar.component';
import { TopBarComponent } from './core/layouts/top-bar/top-bar.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { MenuComponent } from './components/menu/menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToppingComponent } from './components/topping/topping.component';
import { IceLevelComponent } from './components/ice-level/ice-level.component';
import { SweetLevelComponent } from './components/sweet-level/sweet-level.component';
import { SizeComponent } from './components/size/size.component';

@NgModule({
    declarations: [
        AppComponent,
        BottomBarComponent,
        TopBarComponent,
        MenuComponent,
        RecipeComponent,
        ToppingComponent,
        IceLevelComponent,
        SweetLevelComponent,
        SizeComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule,
        MatListModule,
        MatRippleModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
