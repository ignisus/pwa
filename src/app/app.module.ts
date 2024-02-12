import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForumComponent } from './forum/forum.component';
import { GamingComponent } from './gaming/gaming.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CreateComponent } from './create/create.component';
import { HostingComponent } from './hosting/hosting.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { AccountComponent } from './account/account.component';
import { MinecraftComponent } from './minecraft/minecraft.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PolicyComponent } from './policy/policy.component';
import { SettingsComponent } from './settings/settings.component';
import { TranslationService } from './translation.service';
import { LazyLoadImageModule } from 'ng-lazyload-image';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    GamingComponent,
    HostingComponent,
    CreateComponent,
    ForumComponent,
    ExplorerComponent,
    AccountComponent,
    MinecraftComponent,
    PolicyComponent,
    PageNotFoundComponent,
    SettingsComponent,
  ],
  imports: [
    LazyLoadImageModule,
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [CookieService, TranslationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
