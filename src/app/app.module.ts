import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlayGroundComponent } from './play-ground/plat-ground.component';
import { PlayerComponent } from './player/player.component';
import { InformatiomSectionComponent } from './informatiom-section/informatiom-section.component';
import { LoseGameComponent } from './lose-game/lose-game.component';

@NgModule({
  declarations: [AppComponent, PlayGroundComponent, PlayerComponent, InformatiomSectionComponent, LoseGameComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
