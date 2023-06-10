import { TestBed } from '@angular/core/testing';

import { MembersService } from './members.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { mockMember } from '../mocks/member.mock';

describe('MembersService', () => {
  let service: MembersService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MembersService],
      imports: [HttpClientTestingModule],
    });
  });

  beforeEach(() => {
    service = TestBed.inject(MembersService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#list', () => {
    it('returned Observable should match the right data', () => {
      const query = '605.125.520-61';
      service.getMemberByCpf(query).subscribe((member) => {
        expect(member[0]?.id).toEqual(mockMember.id);
      });

      const req = httpTestingController.expectOne(
        `${environment.baseUrl}/users?document=${query}`
      );
      expect(req.request.method).toEqual('GET');
      req.flush([mockMember]);
    });
  });
});
