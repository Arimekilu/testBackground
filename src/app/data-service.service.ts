import {Injectable} from '@angular/core';
import {Validators} from "@angular/forms";
import {IControl} from "./interfaces/iControl.interface";

@Injectable()
export class DataService {
  getData(): IControl[] {
    return [{
      type: 'text',
      isArray: true,
      name: 'Имя',
      label: 'estNameArr',
      placeholder: 'Введите имя',
      value: ['test', "test"],
      validators: [
        Validators.required,
        Validators.minLength(2)
      ]
    }, {
      type: 'number',
      name: 'age',
      label: 'Введите возраст',
      validators: [
        Validators.required,
        Validators.minLength(2)
      ]
    }, {
      type: 'text',
      isArray: false,
      name: 'testName',
      label: 'testLabel',
      validators: [
        Validators.required,
        Validators.minLength(2)
      ]
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

  constructor() {
  }
}
