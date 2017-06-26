
export class Vineyard {

  constructor(
    private _name: string,
    public address: string,
    public area: number
  ){}

  get name ():string {
    return this._name;
  }
}
