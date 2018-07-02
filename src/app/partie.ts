export class Partie {
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nbjoueurs(): number {
    return this._nbjoueurs;
  }

  set nbjoueurs(value: number) {
    this._nbjoueurs = value;
  }

  get titre(): string {
    return this._titre;
  }

  set titre(value: string) {
    this._titre = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
  constructor(
    private _id: number = 0,
    private _image: string = '',
    private _nbjoueurs: number = 0,
    private _titre: string = '',
    private _description: string = '',
    private _idMJ: number = 0,
  ) { }
}
