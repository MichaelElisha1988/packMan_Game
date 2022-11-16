import { Component } from '@angular/core';
import { identity } from 'rxjs';
export interface mapCube {
  id: number;
  cubeIsActive: boolean;
  cubeFilled: boolean;
  playerOnCube: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'WallMan_Game';

  mapSize: number = 10;

  maps: mapCube[] = [];

  menuPage: boolean = true;
  gamePage: boolean = false;
  scourePage: boolean = false;
  playerCreated: boolean = false;
  playerCurrentLocationIndex: number = 0;
  disabledIds: number[] = [];
  intervarGame: any;
  gameOver: boolean = false;

  menuSelected(e: any) {
    console.log(e.target);
    this.newGameStarted(this.mapSize);
    this.menuPage = false;
    this.gamePage = true;
  }

  newGameStarted(selectedMapSize: number) {
    let id = 0;
    for (let i = 0; i < selectedMapSize; i++) {
      for (let j = 0; j < selectedMapSize; j++) {
        this.maps.push(this.createNewCube(id));
        if (this.maps[id].cubeIsActive && !this.playerCreated) {
          this.maps[id].playerOnCube = true;
          this.maps[id].cubeFilled = false;
          this.playerCurrentLocationIndex = id;
          this.playerCreated = true;
        }

        id++;
      }
    }
    console.log(this.maps);
    this.intervarGame = setInterval(() => {
      this.passWaychanger(this.disabledIds);
      this.checkEndGame();
    }, 5000);
  }

  checkEndGame() {
    console.log(this.playerCurrentLocationIndex);
    if (!this.maps[this.playerCurrentLocationIndex].cubeIsActive) {
      console.log(`You lose`);
      clearInterval(this.intervarGame);
      this.gameOver = true;
    }
  }

  passWaychanger(disabledIds: number[]) {
    disabledIds.forEach((id) => {
      this.maps[id].cubeIsActive = Math.floor(Math.random() * 2) ? false : true;
    });
  }

  createNewCube(id: number) {
    let randomTF: boolean = Math.floor(Math.random() * 2) ? false : true;
    if (!randomTF) {
      this.disabledIds.push(id);
    }
    let newCube: mapCube = {
      id: id,
      cubeIsActive: randomTF,
      cubeFilled: randomTF,
      playerOnCube: false,
    };

    return newCube;
  }
}
