import { Injectable } from '@nestjs/common';

@Injectable()
export class NamesService {
  private _names: string[];

  constructor() {
    this._names = [];
  }

  createName(name: string) {
    const nameFound = this._names.find(
      (n) => n.toLowerCase().trim() == name.toLowerCase().trim(),
    );

    if (!nameFound) {
      this._names.push(name);
      return true;
    } else {
      return false;
    }
  }

  getNames() {
    return this._names;
  }
}
