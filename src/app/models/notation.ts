export class Notation {
  private _amabilite: number;
  private _qualite: number;
  private _ponctualite: number;
  private _respectDelai: number;
  private _datePrestation: Date;
  private _photo: string;
  private _idPrestataire: number;
  private _idClient: number;
  private _id: number;

  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }
  public get idPrestataire(): number {
    return this._idPrestataire;
  }

  public set idPrestataire(value: number) {
    this._idPrestataire = value;
  }
  public get idClient(): number {
    return this._idClient;
  }

  public set idClient(value: number) {
    this._idClient = value;
  }
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

  public get respectDelai(): number {
    return this._respectDelai;
  }

  public set respectDelai(value: number){
    this._respectDelai = value;
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
