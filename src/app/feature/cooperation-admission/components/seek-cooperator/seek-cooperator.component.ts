import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-seek-cooperator',
  templateUrl: './seek-cooperator.component.html',
  styleUrls: ['./seek-cooperator.component.scss'],
})
export class SeekCooperatorComponent implements OnInit {
  cpfFormControl = new FormControl('', [Validators.required]);

  constructor() {}

  ngOnInit(): void {}

  getErrorMessage() {
    if (this.cpfFormControl.hasError('required')) {
      return 'Por favor informe o CPF!';
    }

    return  '';
  }
}
