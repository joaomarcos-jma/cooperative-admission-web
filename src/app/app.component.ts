import { Component } from '@angular/core';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cooperative-admission-web';
  isLoading: boolean;

  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe((res) => {
      this.isLoading = res;
    });
  }
}
