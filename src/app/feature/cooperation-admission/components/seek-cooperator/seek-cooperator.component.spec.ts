import { Observable, of } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekCooperatorComponent } from './seek-cooperator.component';
import { mockMember } from '../../mocks/member.mock';
import { MembersService } from '../../services/members.service';
import { FormModule } from 'src/app/shared/modules/form.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SeekCooperatorComponent', () => {
  let component: SeekCooperatorComponent;
  let fixture: ComponentFixture<SeekCooperatorComponent>;
  let mockMemberService: {
    getMemberByCpf: () => Observable<any>;
  };

  beforeEach(() => {
    mockMemberService = {
      getMemberByCpf: () => of([mockMember]),
    };
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, FormModule],
      declarations: [SeekCooperatorComponent],
      providers: [
        {
          provide: MembersService,
          useValue: mockMemberService,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekCooperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
