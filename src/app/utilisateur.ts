export class Utilisateur {
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get mail(): string {
    return this._mail;
  }

  set mail(value: string) {
    this._mail = value;
  }

  get login(): string {
    return this._login;
  }

  set login(value: string) {
    this._login = value;
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

  get pseudo(): string {
    return this._pseudo;
  }

  set pseudo(value: string) {
    this._pseudo = value;
  }

  constructor(private _id: number = null,
              private _mail: string = null,
              private _login: string = null,
              private _motDePasse: string = null,
              private _avatar: string = null,
              private _pseudo: string = null
  ) {}

}
