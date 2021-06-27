import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-dni',
  templateUrl: './search-dni.component.html',
  styleUrls: ['./search-dni.component.scss']
})
export class SearchDniComponent implements OnInit {
  searchDni: FormControl;

  constructor() { 
    this.searchDni = new FormControl('', [Validators.required]);
  }

  ngOnInit(): void {
  }

}
