import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input()
  photoCover: string = 'https://marcdias.com.br/wp-content/uploads/2016/07/reactjs.png';
  @Input()
  cardTitle: string = 'Essa é a nossa notícia secundária. Ela fica ao lado da página.';
}
