import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clientForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
