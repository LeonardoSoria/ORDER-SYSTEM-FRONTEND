import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Combo} from '../../interfaces/combo.interface';
import {RegisterSale} from '../../interfaces/registerSale.interface';
import {Portion} from '../../interfaces/portion.interface';
import {Invoice} from '../../interfaces/invoice.interface';
import {RegisterSaleDTO} from '../../interfaces/registerSaleDTO.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  stepOne = true;
  stepTwo = false;
  stepThree = false;
  comboList: Combo[] = [];
  portionList: Portion[] = [];

  comboBasicControlList: RegisterSale[] = [];
  comboFamiliarControlList: RegisterSale[] = [];
  comboEspecialControlList: RegisterSale[] = [];

  fullName = '';
  nit = '';

  totalPrice = 0;

  constructor(private service: ApiService) {
  }

  ngOnInit(): void {
    this.service.getAllCombos().subscribe(value => {
      this.comboList.push(...value);
    });
  }

  addCombo(comboId: number): void {
    if (comboId === 1) {
      const registerSale = {
        id: this.comboBasicControlList.length + 1,
        comboId,
        tomatoList: [],
        meatList: [],
        cheeseList: [],
        potatoList: []
      };
      this.comboBasicControlList.push(registerSale);
      this.totalPrice += 25;
    }
    if (comboId === 2) {
      const registerSale = {
        id: this.comboFamiliarControlList.length + 1,
        comboId,
        tomatoList: [],
        meatList: [],
        cheeseList: [],
        potatoList: []
      };
      this.comboFamiliarControlList.push(registerSale);
      this.totalPrice += 40;
    }
    if (comboId === 3) {
      const registerSale = {
        id: this.comboEspecialControlList.length + 1,
        comboId,
        tomatoList: [],
        meatList: [],
        cheeseList: [],
        potatoList: []
      };
      this.comboEspecialControlList.push(registerSale);
      this.totalPrice += 50;
    }
  }

  removeCombo(comboId: number): void {
    if (comboId === 1) {
      if (this.totalPrice > 0 && this.comboBasicControlList.length > 0) {
        this.totalPrice -= 25;
      }
      this.comboBasicControlList.splice(0, 1);
    }
    if (comboId === 2) {
      if (this.totalPrice > 0 && this.comboFamiliarControlList.length > 0) {
        this.totalPrice -= 40;
      }
      this.comboFamiliarControlList.splice(0, 1);
    }
    if (comboId === 3) {
      if (this.totalPrice > 0 && this.comboEspecialControlList.length > 0) {
        this.totalPrice -= 50;
      }
      this.comboEspecialControlList.splice(0, 1);
    }
  }

  addPortion(id: number, comboId: number, portionId: number): void {
    if (comboId === 1) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.comboBasicControlList.length; i++) {
        if (this.comboBasicControlList[i].id === id) {
          if (portionId === 1) {
            this.comboBasicControlList[i].tomatoList.push(portionId);
            this.totalPrice += 2;
          }
          if (portionId === 2) {
            this.comboBasicControlList[i].meatList.push(portionId);
            this.totalPrice += 10;
          }
          if (portionId === 3) {
            this.comboBasicControlList[i].cheeseList.push(portionId);
            this.totalPrice += 5;
          }
          if (portionId === 4) {
            this.comboBasicControlList[i].potatoList.push(portionId);
            this.totalPrice += 10;
          }
        }
      }
    }
    if (comboId === 2) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.comboFamiliarControlList.length; i++) {
        if (this.comboFamiliarControlList[i].id === id) {
          if (portionId === 1) {
            this.comboFamiliarControlList[i].tomatoList.push(portionId);
            this.totalPrice += 2;
          }
          if (portionId === 2) {
            this.comboFamiliarControlList[i].meatList.push(portionId);
            this.totalPrice += 10;
          }
          if (portionId === 3) {
            this.comboFamiliarControlList[i].cheeseList.push(portionId);
            this.totalPrice += 5;
          }
          if (portionId === 4) {
            this.comboFamiliarControlList[i].potatoList.push(portionId);
            this.totalPrice += 10;
          }
        }
      }
    }
    if (comboId === 3) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.comboEspecialControlList.length; i++) {
        if (this.comboEspecialControlList[i].id === id) {
          if (portionId === 1) {
            this.comboEspecialControlList[i].tomatoList.push(portionId);
            this.totalPrice += 2;
          }
          if (portionId === 2) {
            this.comboEspecialControlList[i].meatList.push(portionId);
            this.totalPrice += 10;
          }
          if (portionId === 3) {
            this.comboEspecialControlList[i].cheeseList.push(portionId);
            this.totalPrice += 5;
          }
          if (portionId === 4) {
            this.comboEspecialControlList[i].potatoList.push(portionId);
            this.totalPrice += 10;
          }
        }
      }
    }
  }

  removePortion(id: number, comboId: number, portionId: number): void {
    if (comboId === 1) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.comboBasicControlList.length; i++) {
        if (this.comboBasicControlList[i].id === id) {
          if (portionId === 1) {
            if (this.totalPrice > 0 && this.comboBasicControlList[i].tomatoList.length > 0) {
              this.totalPrice -= 2;
            }
            this.comboBasicControlList[i].tomatoList.splice(0, 1);
          }
          if (portionId === 2) {
            if (this.totalPrice > 0 && this.comboBasicControlList[i].meatList.length > 0) {
              this.totalPrice -= 10;
            }
            this.comboBasicControlList[i].meatList.splice(0, 1);
          }
          if (portionId === 3) {
            if (this.totalPrice > 0 && this.comboBasicControlList[i].cheeseList.length > 0) {
              this.totalPrice -= 5;
            }
            this.comboBasicControlList[i].cheeseList.splice(0, 1);
          }
          if (portionId === 4) {
            if (this.totalPrice > 0 && this.comboBasicControlList[i].potatoList.length > 0) {
              this.totalPrice -= 10;
            }
            this.comboBasicControlList[i].potatoList.splice(0, 1);
          }
        }
      }
    }
    if (comboId === 2) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.comboFamiliarControlList.length; i++) {
        if (this.comboFamiliarControlList[i].id === id) {
          if (portionId === 1) {
            if (this.totalPrice > 0 && this.comboFamiliarControlList[i].tomatoList.length > 0) {
              this.totalPrice -= 2;
            }
            this.comboFamiliarControlList[i].tomatoList.splice(0, 1);
          }
          if (portionId === 2) {
            if (this.totalPrice > 0 && this.comboFamiliarControlList[i].meatList.length > 0) {
              this.totalPrice -= 10;
            }
            this.comboFamiliarControlList[i].meatList.splice(0, 1);
          }
          if (portionId === 3) {
            if (this.totalPrice > 0 && this.comboFamiliarControlList[i].cheeseList.length > 0) {
              this.totalPrice -= 5;
            }
            this.comboFamiliarControlList[i].cheeseList.splice(0, 1);
          }
          if (portionId === 4) {
            if (this.totalPrice > 0 && this.comboFamiliarControlList[i].potatoList.length > 0) {
              this.totalPrice -= 10;
            }
            this.comboFamiliarControlList[i].potatoList.splice(0, 1);
          }
        }
      }
    }
    if (comboId === 3) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.comboEspecialControlList.length; i++) {
        if (this.comboEspecialControlList[i].id === id) {
          if (portionId === 1) {
            if (this.totalPrice > 0 && this.comboEspecialControlList[i].tomatoList.length > 0) {
              this.totalPrice -= 2;
            }
            this.comboEspecialControlList[i].tomatoList.splice(0, 1);
          }
          if (portionId === 2) {
            if (this.totalPrice > 0 && this.comboEspecialControlList[i].meatList.length > 0) {
              this.totalPrice -= 10;
            }
            this.comboEspecialControlList[i].meatList.splice(0, 1);
          }
          if (portionId === 3) {
            if (this.totalPrice > 0 && this.comboEspecialControlList[i].cheeseList.length > 0) {
              this.totalPrice -= 5;
            }
            this.comboEspecialControlList[i].cheeseList.splice(0, 1);
          }
          if (portionId === 4) {
            if (this.totalPrice > 0 && this.comboEspecialControlList[i].potatoList.length > 0) {
              this.totalPrice -= 10;
            }
            this.comboEspecialControlList[i].potatoList.splice(0, 1);
          }
        }
      }
    }
  }

  pay(): void {
    const registerSaleDTOList: RegisterSaleDTO[] = [];

    if (this.comboBasicControlList.length > 0) {
      for (const basic of this.comboBasicControlList) {
        const arrayAux = basic.tomatoList.concat(basic.meatList.concat(basic.cheeseList.concat(basic.potatoList)));
        registerSaleDTOList.push({
          comboId: basic.comboId,
          portionIds: arrayAux
        });
      }
    }

    if (this.comboFamiliarControlList.length > 0) {
      for (const familiar of this.comboFamiliarControlList) {
        const arrayAux = familiar.tomatoList.concat(familiar.meatList.concat(familiar.cheeseList.concat(familiar.potatoList)));
        registerSaleDTOList.push({
          comboId: familiar.comboId,
          portionIds: arrayAux
        });
      }
    }

    if (this.comboEspecialControlList.length > 0) {
      for (const especial of this.comboEspecialControlList) {
        const arrayAux = especial.tomatoList.concat(especial.meatList.concat(especial.cheeseList.concat(especial.potatoList)));
        registerSaleDTOList.push({
          comboId: especial.comboId,
          portionIds: arrayAux
        });
      }
    }

    const sale: Invoice = {
      fullName: this.fullName,
      nit: this.nit,
      registerSaleDTOList,
      total: this.totalPrice
    };

    this.service.registerSale(sale).subscribe(value => {
      console.log(value);
      window.print();
      this.stepOne = true;
      this.stepTwo = false;
      this.stepThree = false;
      this.portionList = [];
      this.totalPrice = 0;
      this.comboBasicControlList = [];
      this.comboFamiliarControlList = [];
      this.comboEspecialControlList = [];
    });
  }

  nextStepTwo(): void {
    this.stepOne = false;
    this.stepTwo = true;
    this.service.getAllPortions().subscribe(data => {
      this.portionList.push(...data);
    });
  }

  backStepOne(): void {
    this.portionList = [];
    this.stepOne = true;
    this.stepTwo = false;
  }

  nextStepThree(): void {
    this.stepThree = true;
    this.stepTwo = false;
  }

  backStepTwo(): void {
    this.stepThree = false;
    this.stepTwo = true;
  }

}
