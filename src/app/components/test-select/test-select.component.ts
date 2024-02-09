import {Component} from '@angular/core';

@Component({
  selector: 'app-test-select',
  templateUrl: './test-select.component.html',
  styleUrls: ['./test-select.component.scss']
})
export class TestSelectComponent {
  selectOptions: string[] = ['Женат / замужем', 'Не женат / не замужем', 'Одинокий волк']
  showOptions: boolean = false
  selectedValue: string = this.selectOptions[0]


  protected readonly console = console;
}
