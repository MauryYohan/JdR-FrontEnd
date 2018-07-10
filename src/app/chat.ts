export class Chat {
  constructor(private _message: string = ''){}

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }
}
