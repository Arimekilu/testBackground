import {Component} from '@angular/core';

@Component({
  selector: 'app-test-checkbox',
  templateUrl: './test-checkbox.component.html',
  styleUrls: ['./test-checkbox.component.scss']
})
export class TestCheckboxComponent {
  checkboxArr = [
    {label: 'Общение', checked: false},
    {label: 'Иностранные языки', checked: false},
    {label: 'Быстрое чтение', checked: false},
    {label: 'Самозащита', checked: false},
    {label: 'Вождение', checked: false},
    {label: 'Программирование', checked: false},
    {label: 'Управление вертолетом', checked: false},
    {label: 'Оперное пение', checked: false},

  ]
}
