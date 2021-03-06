export class Utilisateur {
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get pseudo(): string {
    return this._pseudo;
  }

  set pseudo(value: string) {
    this._pseudo = value;
  }

  get mail(): string {
    return this._mail;
  }

  set mail(value: string) {
    this._mail = value;
  }

  get motDePasse(): string {
    return this._motDePasse;
  }

  set motDePasse(value: string) {
    this._motDePasse = value;
  }

  get avatar(): string {
    return this._avatar;
  }

  set avatar(value: string) {
    this._avatar = value;
  }

  get estMj(): boolean {
    return this._estMj;
  }

  set estMj(value: boolean) {
    this._estMj = value;
  }
  constructor(
    private _id: number = 0,
    private _mail: string = '',
    private _pseudo: string = '',
    private _motDePasse: string = '',
    private _avatar: string = '',
    private _estMj: boolean = false
  ) {}

}
