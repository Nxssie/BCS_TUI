import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openHelp() {
    window.open('assets/docs/Ayuda/ayuda.html');
  }

  openGithub() {
    window.open('https://github.com/Nxssie/BCS_TUI');
  }
}
