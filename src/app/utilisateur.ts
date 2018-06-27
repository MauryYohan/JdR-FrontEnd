export class Utilisateur {

  constructor(private id: number,
              private mail: string,
              private login: string,
              private motDePasse: string,
              private avatar: string,
              private pseudo: string
  ) {}

}
