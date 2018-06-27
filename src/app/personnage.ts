import {Joueur} from './joueur';

export class Personnage {

  constructor(
    private _id: number = 0,
    private _nom: string = '',
    private _classe: string = '',
    private _pv: number = 0 ,
    private _puissance: number = 0,
    private _defense: number = 0,
    private _esprit: number = 0,
    private _intelligence: number = 0,
    private _init: number = 0,
    private _equipement: string = null,
    private _inventaire: string = null,
    private _background: string = null,
    private _race: string = '',
    private _sexe: string = '',
  ) { }

  get id(): number {
    return this._id;
  }

  get nom(): string {
    return this._nom;
  }

  get classe(): string {
    return this._classe;
  }

  get pv(): number {
    return this._pv;
  }

  get puissance(): number {
    return this._puissance;
  }

  get esprit(): number {
    return this._esprit;
  }

  get intelligence(): number {
    return this._intelligence;
  }

  get init(): number {
    return this._init;
  }

  get equipement(): string {
    return this._equipement;
  }

  get inventaire(): string {
    return this._inventaire;
  }

  get background(): string {
    return this._background;
  }

  get race(): string {
    return this._race;
  }

  get sexe(): string {
    return this._sexe;
  }

  set id(value: number) {
    this._id = value;
  }

  set nom(value: string) {
    this._nom = value;
  }

  set classe(value: string) {
    this._classe = value;
  }

  set pv(value: number) {
    this._pv = value;
  }

  set puissance(value: number) {
    this._puissance = value;
  }

  set esprit(value: number) {
    this._esprit = value;
  }

  set intelligence(value: number) {
    this._intelligence = value;
  }

  set init(value: number) {
    this._init = value;
  }

  set equipement(value: string) {
    this._equipement = value;
  }

  set inventaire(value: string) {
    this._inventaire = value;
  }

  set background(value: string) {
    this._background = value;
  }

  set race(value: string) {
    this._race = value;
  }

  set sexe(value: string) {
    this._sexe = value;
  }


  get defense(): number {
    return this._defense;
  }

  set defense(value: number) {
    this._defense = value;
  }
}
