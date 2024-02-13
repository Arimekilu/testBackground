import {ValidatorFn, Validators} from "@angular/forms";

export interface IControl {
  type: string,
  isArray?: boolean
  name: string,
  label: string,
  placeholder?: string
  value?: string | number | string[],
  checkbox?: {checked: boolean, label: string}[],
  selectOptions?: string[]
  validators?: ValidatorFn[]
}
