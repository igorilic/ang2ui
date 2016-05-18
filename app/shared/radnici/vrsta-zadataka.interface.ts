import { IZadatakMeni } from './zadatak-meni.interface';

export interface IVrstaZadataka {
    [ZAD_ID: string]: IZadatakMeni;
}