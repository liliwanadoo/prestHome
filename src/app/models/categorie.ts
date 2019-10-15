export class Categorie {
  private _libelle: string;
  public get libelle(): string {
    return this._libelle;
  }
  public set libelle(value: string) {
    this._libelle = value;
  }

  private _id: BigInteger;
  public get id(): BigInteger {
    return this._id;
  }
  public set id(value: BigInteger) {
    this._id = value;
  }
}
