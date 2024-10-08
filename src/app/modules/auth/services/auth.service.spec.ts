import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import * as mockRaw from '../../../data/user.json';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let mockUser: any = (mockRaw as any).default;
  let httpClientSpy: { post: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new AuthService(httpClientSpy as any,);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //TODO: Implementar test para el metodo sendCredentials
  it('should return an object with "data" y tokenSession', (done:DoneFn) => {
    //TODO: Arrange
    const user: any = mockUser.userOk;
    const mockResponse = {
      data: {},
      tokenSession: '0x0x0x'
    }
    httpClientSpy.post.and.returnValue(
      of(mockResponse)); //TODO: aqui se hace observable el mockResponse

    //TODO: Act
    service.sendCredentials(user.email, user.password)
      .subscribe(responseApi => {
        const getProperties = Object.keys(responseApi);
        expect(getProperties).toContain('data');
        expect(getProperties).toContain('tokenSession');
        console.log(' 👌👌👌👌👌👌 responseApi', responseApi);
        done();
      });

    //TODO: Assert


  });
});
