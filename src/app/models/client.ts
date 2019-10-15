export class Client {

  private _id: number;
  private _pseudo: string;
  private _idusr: number;
  private _idcoord: number;

  public get id(): number {
    return this._id;
  }
  public set id(id: number) {
    this._id = id;
  }
  public get pseudo(): string {
    return this._pseudo;
  }
  public set pseudo(pseudo: string) {
    this._pseudo = pseudo;
  }
  public get idusr(): number {
    return this._idusr;
  }
  public set idusr(idusr: number) {
    this._idusr = idusr;
  }
  public get idcoord(): number {
    return this._idcoord;
  }
  public set idcoord(idcoord: number) {
    this._idcoord = idcoord;
  }



}
