import {Injectable} from '@angular/core';
import {Validators} from "@angular/forms";
import {IControl} from "./interfaces/iControl.interface";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Injectable()
export class DataService {

  constructor() {

  }

  getData(): IControl[] {
    return [{
      type: 'text',
      isArray: false,
      name: 'testName',
      label: 'Имя',
      validators: [
        Validators.required,
        Validators.minLength(2)
      ]
    }, {
      type: 'text',
      isArray: true,
      name: 'ВУЗ',
      label: 'ВУЗ',
      placeholder: 'Например, ВолгГУ',
      description: 'Укажите заведения, в которых вы учились.',
      value: ['test']
    }, {
      type: 'number',
      name: 'age',
      label: 'Возраст',
      validators: [
        Validators.required,
        Validators.min(10)
      ]
    }, {
      type: 'checkbox',
      name: 'testCheck',
      label: 'Навыки',
      checkbox: [
        {label: 'Общение', checked: false},
        {label: 'Иностранные языки', checked: false},
        {label: 'Быстрое чтение', checked: false},
        {label: 'Самозащита', checked: false},
        {label: 'Вождение', checked: false},
        {label: 'Программирование', checked: false},
        {label: 'Управление вертолетом', checked: true},
        {label: 'Оперное пение', checked: false},
      ]
    }, {
      type: 'select',
      name: 'select',
      label: 'Семейное положение',
      value: '',
      selectOptions: ['Женат / замужем', 'Не женат / не замужем'],
      validators: [
        Validators.required,
      ]
    }
    ]
  }

  getControls(): Observable<IControl[]> {
    // return this.http.get<IControl[]>('blablabla')
    return of(this.getData())
  }

}
