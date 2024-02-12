import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumComponent } from './forum/forum.component';
import { AccountComponent } from './account/account.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { CreateComponent } from './create/create.component';
import { GamingComponent } from './gaming/gaming.component';
import { MainComponent } from './main/main.component';
import { HostingComponent } from './hosting/hosting.component';
import { MinecraftComponent } from './minecraft/minecraft.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PolicyComponent } from './policy/policy.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: MainComponent },
  { path: 'create', component: CreateComponent },
  { path: 'account', component: AccountComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'explorer', component: ExplorerComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'policy', component: PolicyComponent },
  { path: 'gaming', component: GamingComponent },
  { path: 'minecraft', component: MinecraftComponent },
  { path: 'hosting', component: HostingComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
