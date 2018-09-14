import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Follow the grant';
  subtitle = 'Making science funding transparent';
  about = 'About follow the grant';
  about_text_1 = 'Funding and sponsoring can influence science and through it medicine, technology, policy, and our daily lives. Yet transparency is lacking: It is hard to find out who has funded which scientist. To solve this problem, we are building a database of research funding, based on information given in scientific papers about funding and conflicts of interest. We aim to help journalists, experts, and citizens find out who is sponsoring research. See the ';
  about_text_2 = ' in our first proof of concept, based on papers in the PLOS journals.';
  link_medienrevolte = 'https://coi.medienrevolte.de/';
  who = 'Who we are';
  name_hristio = 'Hristio Boytchev';
  link_hristio = 'http://hrist.io';
  profession_hristio = 'is an investigative science and health journalist. He is focusing on the concept and journalistic use of followthegrant.org.';
  name_elena = 'Elena Erdmann';
  link_elena = 'https://twitter.com/elena_erdmann';
  and = 'and';
  name_simon = 'Simon Wörpel';
  link_simon = 'https://medienrevolte.de/';
  profession_simon_elena = 'are data journalists responsible mainly for data gathering and analysis.';
  name_karl = 'Karl Scholze';
  link_karl = 'https://twitter.com/K4rls0n';
  profession_karl = 'is an entrepreneur and software engineer in charge of the website.';
  get_in_touch = 'Get in touch';
  get_in_touch_text = 'Do you have questions or feedback? We’d love to get in touch.\n' +
    'Write us to mail@followthegrant.org.\n' +
    'Follow us on Twitter at ';
  twitter_link = 'https://twitter.com/followthegrant';
  funded_by = 'Funded by';
}
