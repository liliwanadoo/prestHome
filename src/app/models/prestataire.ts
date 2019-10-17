export class Prestataire {
  private _id: number;
  private _raisonsociale: string;
  private _telephone: string;
  private _idusr: number;
  private _idcoord: number;
  private _idcat: number;
  private _description: string;
  private _idnotation: number[];

  public get id(): number {
    return this._id;
  }
  public set id(id: number) {
    this._id = id;
  }
  public get raisonsociale(): string {
    return this._raisonsociale;
  }
  public set raisonsociale(raisonsociale: string) {
    this._raisonsociale = raisonsociale;
  }
  public get telephone(): string {
    return this._telephone;
  }
  public set telephone(telephone: string) {
    this._telephone = telephone;
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
  public get idcat(): number {
    return this._idcat;
  }
  public set idcat(idcat: number) {
    this._idcat = idcat;
  }
  public get description(): string {
    return this._description;
  }
  public set description(description: string) {
    this._description = description;
  }
  public get idnotations(): number[] {
    return this._idnotation;
  }
  public set idnotations(idnotations: number[]) {
    this._idnotation = idnotations;
  }
  public idnotation(index: number) {
    return this._idnotation[index];
  }
}
