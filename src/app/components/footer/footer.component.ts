import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  links = [
    ['https://telegram.org/', 'assets/social-media-icons/vk.svg', 'vk'],
    ['https://www.tiktok.com/', 'assets/social-media-icons/twitter.svg', 'twitter'],
    ['https://www.instagram.com/', 'assets/social-media-icons/telegram.svg', 'telegram'],
    ['https://www.whatsapp.com/', 'assets/social-media-icons/youtube.svg', 'youtube']
  ];
}
