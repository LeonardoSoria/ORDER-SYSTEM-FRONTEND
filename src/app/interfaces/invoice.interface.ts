import {RegisterSaleDTO} from './registerSaleDTO.interface';

export interface Invoice {
  fullName: string;
  nit: string;
  total: number;
  registerSaleDTOList: RegisterSaleDTO[];
}
