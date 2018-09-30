import {Url} from "url";

export class Disclosure {
  constructor(private _authorname: string,
              private _institutions: any[],
              private _disclosure: string,
              private _type: string,
              private _abstract: string,
              private _date: string,
              private _doi: string,
              private _issn: string,
              private _journal: string,
              private _lang: string,
              private _publisher: string,
              private _tags: any[],
              private _title: string,
              private _paperType: string,
              private _url: Url,) {

  }

  get authorName () {
    return this._authorname;
  }

  get institutions () {
    return this._institutions;
  }

  get disclosurex () {
    return this._disclosure;
  }

  get type () {
    return this._type;
  }

  get abstract () {
    return this._abstract;
  }

  get date () {
    return this._date;
  }

  get doi () {
    return this._doi;
  }

  get issn () {
    return this._issn;
  }

  get journal () {
    return this._journal;
  }

  get lang () {
    return this._lang;
  }

  get publisher () {
    return this._publisher;
  }

  get paperType () {
    return this._paperType;
  }

  get url () {
    return this._url;
  }
}
