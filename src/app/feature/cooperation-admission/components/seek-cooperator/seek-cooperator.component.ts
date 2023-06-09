import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  MASK_CPF,
  UNMASK_NUMBER,
} from 'src/app/shared/constants/mask.constant';
import cpfValidator from 'src/app/shared/validators/cpf.validator';
import { MembersService } from '../../services/members.service';
import { Members } from '../../models/members';

@Component({
  selector: 'app-seek-cooperator',
  templateUrl: './seek-cooperator.component.html',
  styleUrls: ['./seek-cooperator.component.scss'],
})
export class SeekCooperatorComponent implements OnInit {
  cpfFormControl = new FormControl('', [Validators.required, cpfValidator]);
  maskCpf = MASK_CPF;
  unmask = UNMASK_NUMBER;
  memberData: Members = null;

  constructor(private memberService: MembersService) {}

  ngOnInit(): void {}

  getErrorMessage() {
    if (this.cpfFormControl.hasError('required')) {
      return 'Por favor informe o CPF!';
    }

    return this.cpfFormControl.hasError('cpfNotValid')
      ? 'O CPF informado é inválido!'
      : '';
  }

  getMember() {
    this.memberService
      .getMemberByCpf(this.cpfFormControl.value)
      .subscribe((member) => {
        member.length ? (this.memberData = member[0]) : null;
      });
  }
}
