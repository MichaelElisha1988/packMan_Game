import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
export interface mapCube {
  id: number;
  cubeIsActive: boolean;
  cubeFilled: boolean;
  playerOnCube: boolean;
}
@Component({
  selector: 'app-plat-ground',
  templateUrl: './plat-ground.component.html',
  styleUrls: ['./plat-ground.component.css'],
})
export class PlayGroundComponent implements OnInit {
  @Input() menuPage!: boolean;
  @Output() menuPageChange = new EventEmitter<boolean>();

  @Input() gamePage!: boolean;
  @Output() gamePageChange = new EventEmitter<boolean>();

  @Input() scourePage!: boolean;
  @Output() scourePageChange = new EventEmitter<boolean>();

  @Input() maps!: mapCube[];
  @Output() mapsChange = new EventEmitter<mapCube[]>();

  @Input() playerCreated!: boolean;
  @Output() playerCreatedChange = new EventEmitter<boolean>();

  @Input() playerCurrentLocationIndex!: number;
  @Output() playerCurrentLocationIndexChange = new EventEmitter<number>();

  @Input() disabledIds!: number[];
  @Output() disabledIdsChange = new EventEmitter<number[]>();

  @Input() intervarGame!: any;

  @Input() gameOver!: boolean;
  @Output() gameOverChange = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  backToMainMenu() {
    console.log(`im here`);
    this.gamePage = false;
    this.menuPage = true;
    this.playerCreated = false;
    this.maps = [];
    this.disabledIds = [];
    this.gameOver = false;
    clearInterval(this.intervarGame);
    this.gamePageChange.emit(this.gamePage);
    this.menuPageChange.emit(this.menuPage);
    this.mapsChange.emit(this.maps);
    this.playerCreatedChange.emit(this.playerCreated);
    this.disabledIdsChange.emit(this.disabledIds);
    this.gameOverChange.emit(this.gameOver);
  }

  makeMove(move: number) {
    if (this.maps[this.playerCurrentLocationIndex + move].cubeIsActive) {
      this.maps[this.playerCurrentLocationIndex].playerOnCube = false;
      this.maps[this.playerCurrentLocationIndex + move].playerOnCube = true;
      this.maps[this.playerCurrentLocationIndex + move].cubeFilled = false;
      this.playerCurrentLocationIndex += move;
      this.playerCurrentLocationIndexChange.emit(
        this.playerCurrentLocationIndex
      );
    }
  }

  moveCheracter(e: any) {
    // console.log(e.target.textContent);
    switch (e.target.textContent) {
      case '←':
        if (this.playerCurrentLocationIndex - 1 < 0) break;
        this.makeMove(-1);
        break;
      case '↑':
        if (this.playerCurrentLocationIndex - 10 < 0) break;
        this.makeMove(-10);
        break;
      case '↓':
        if (this.playerCurrentLocationIndex + 10 > this.maps.length) break;
        this.makeMove(10);
        break;
      case '→':
        if (this.playerCurrentLocationIndex + 1 > this.maps.length) break;
        this.makeMove(1);
        break;
      default:
        break;
    }
    // this.maps[+e.target.id].cubeFilled = false;
  }
}
