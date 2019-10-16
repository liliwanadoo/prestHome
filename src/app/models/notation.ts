export class Notation {
  private _amabilite: number;
  private _qualite: number;
  private _ponctualite: number;
  private _respectDetail: number;
  private _datePrestation: Date;
  private _photo: string;

  public get amabilite(): number {
    return this._amabilite;
  }

  public set amabilite(value: number) {
    this._amabilite = value;
  }

  public get qualite(): number {
    return this._qualite;
  }

  public set qualite(value: number){
    this._qualite = value;
  }
  public get ponctualite(): number {
    return this._ponctualite;
  }

  public set ponctualite(value: number) {
    this._ponctualite = value;
  }

  public get repectDetail(): number {
    return this._respectDetail;
  }

  public set respectDetail(value: number){
    this._respectDetail = value;
  }
  public get datePrestation(): Date {
    return this._datePrestation;
  }

  public set datePrestation(value: Date) {
    this._datePrestation = value;
  }

  public get photo(): string {
    return this._photo;
  }

  public set photo(value: string){
    this._photo = value;
  }
}
