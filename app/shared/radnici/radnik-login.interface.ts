import { IVrstaZadataka } from './vrsta-zadataka.interface';

export interface IRadnikLogin {
  success: boolean;
  ID_RADNIKA: number;
  PREZIME_RADNIKA: string;
  IME_RADNIKA: string;
  SIFRA_RADNIKA: string;
  ID_ULOGE: number;
  NAZIV_ULOGE: string;
  VRSTA_ZADATAKA: IVrstaZadataka;
  BROJ_POST_RADI: number;
  CID: string;
  NAZIV_POS: string;
  ID_RAD_JED: number;
  NAZIV_RAD_JED: string;
  DATUM_RADA: string;
  STANJE_RADNIKA: number;

}