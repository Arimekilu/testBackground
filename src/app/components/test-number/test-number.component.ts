import {Component} from '@angular/core';

@Component({
  selector: 'app-test-number',
  templateUrl: './test-number.component.html',
  styleUrls: ['./test-number.component.scss']
})
export class TestNumberComponent {
  value: number = 0

  increment() {
    this.value++
  }

  decrement() {
    this.value--
  }
}
