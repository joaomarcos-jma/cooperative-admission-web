import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  MASK_CPF,
  UNMASK_NUMBER,
} from 'src/app/feature/shared/constants/mask.constant';
import cpfValidator from 'src/app/feature/shared/validators/cpf.validator';

@Component({
  selector: 'app-seek-cooperator',
  templateUrl: './seek-cooperator.component.html',
  styleUrls: ['./seek-cooperator.component.scss'],
})
export class SeekCooperatorComponent implements OnInit {
  cpfFormControl = new FormControl('', [Validators.required, cpfValidator]);
  maskCpf = MASK_CPF;
  unmask = UNMASK_NUMBER;

  constructor() {}

  ngOnInit(): void {}

  getErrorMessage() {
    if (this.cpfFormControl.hasError('required')) {
      return 'Por favor informe o CPF!';
    }

    return this.cpfFormControl.hasError('cpfNotValid')
      ? 'O CPF informado é inválido!'
      : '';
  }
}
