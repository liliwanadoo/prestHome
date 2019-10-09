export class User {
    private _email: string;
    private _password: string;

  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }
  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }

  public transform(user: any): User {
    Object.assign(this, user);
    return this;
  }
}
