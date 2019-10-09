import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  constructor() { }

  public set(key: string, object: any) {
    localStorage.setItem(key, JSON.stringify(object));
  }

  public get(key: string) {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    }
    return [];
  }

  public remove(key: string) {
    localStorage.removeItem(key);
  }
