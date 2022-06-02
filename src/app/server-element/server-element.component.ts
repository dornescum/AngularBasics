import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-element', templateUrl: './server-element.component.html', styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // dc vreau sa ii dau alta denumire o fac in Input[un alias]
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: { type: string, name: string, content: string };

  constructor() {
  }

  ngOnInit(): void {
  }

}
