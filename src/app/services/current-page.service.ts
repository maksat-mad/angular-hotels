import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentPageService {
  currentPage = 0;
  // 0 home page
  // 1 hotels
  // 2 about us
  // 3 profile
  // 4 login
}
