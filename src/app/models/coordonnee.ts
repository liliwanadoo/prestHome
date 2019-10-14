export class Coordonnee {
  private _cp: string;
  public get cp(): string {
    return this._cp;
  }
  public set cp(value: string) {
    this._cp = value;
  }

  private _ville: string;
  public get ville(): string {
    return this._ville;
  }
  public set ville(value: string) {
    this._ville = value;
  }

  private _id: BigInteger;
  public get id(): BigInteger {
    return this._id;
  }
  public set id(value: BigInteger) {
    this._id = value;
  }

  private _coord: string;
  public get coord(): string {
    return this._coord;
  }
  public set coord(value: string) {
    this._coord = value;
  }
}
