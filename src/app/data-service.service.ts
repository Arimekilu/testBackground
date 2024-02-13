import {Injectable} from '@angular/core';
import {Validators} from "@angular/forms";
import {IControl} from "./interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getData(): IControl[] {
    return [{
      type: 'text',
      isArray: true,
      name: 'testNameArr',
      label: 'testNameArr',
      placeholder: 'testPleaceholder',
      value: ['test', "test"]
    }, {
      type: 'text',
      isArray: false,
      name: 'testName',
      label: 'testLabel',
    }, {
      type: 'checkbox',
      name: 'testCheck',
      label: 'testCheck',
      checkbox: [
        {label: 'Общение', checked: false},
        {label: 'Иностранные языки', checked: false},
        {label: 'Быстрое чтение', checked: false},
        {label: 'Самозащита', checked: false},
        {label: 'Вождение', checked: true},
        {label: 'Программирование', checked: false},
        {label: 'Управление вертолетом', checked: false},
        {label: 'Оперное пение', checked: false},
      ]
    }, {
      type: 'select',
      name: 'select',
      label: 'testSelect',
      value: 'Одинокий волк',
      selectOptions: ['Женат / замужем', 'Не женат / не замужем', 'Одинокий волк']
    }
    ]
  }

  getCheckbox(): IControl {
    return {
      type: 'checkbox',
      name: 'testCheck',
      label: 'testCheck',
      checkbox: [
        {label: 'Общение', checked: false},
        {label: 'Иностранные языки', checked: false},
        {label: 'Быстрое чтение', checked: false},
        {label: 'Самозащита', checked: false},
        {label: 'Вождение', checked: true},
        {label: 'Программирование', checked: false},
        {label: 'Управление вертолетом', checked: false},
        {label: 'Оперное пение', checked: false},
      ]
    }
  }

  constructor() {
  }
}
