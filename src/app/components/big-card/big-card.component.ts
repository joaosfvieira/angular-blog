import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  @Input()
  photoCover: string = 'https://arquivo.devmedia.com.br/noticias/documentacao/documentacao_angular-cli-como-rodar-testes-e-checar-o-codigo_38248.png';
  @Input()
  cardTitle: string = 'É lançada a nova versão do Angular';
  @Input()
  cardDescription: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  + 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in'
  + 'voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit'
  + ' anim id est laborum.';

  @Input()
  id: string = "0";
}
