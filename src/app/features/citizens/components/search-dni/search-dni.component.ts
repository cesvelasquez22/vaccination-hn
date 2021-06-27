import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CitizensService } from '../../services/citizens.service';

@Component({
  selector: 'app-search-dni',
  templateUrl: './search-dni.component.html',
  styleUrls: ['./search-dni.component.scss'],
})
export class SearchDniComponent implements OnInit, OnDestroy {
  searchDni: FormControl;

  // UNSUBSCRIBE ALL
  private unsubscribe$ = new Subject<void>();
  constructor(
    private citizensService: CitizensService,
    private _snackBar: MatSnackBar,
    private router: Router,
  ) {
    this.searchDni = new FormControl('', [Validators.required]);
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  verifyDni() {
    const dni = this.searchDni.value;
    if (dni && dni !== null) {
      this.citizensService
        .getCitizenByDni(dni)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((data) => {
          if (data.length > 0) {
            this.router.navigate(['dashboard'])
          } else {
            this._snackBar.open('Ciudadano NO existe!', 'Aceptar', { duration: 5000 });
          }
        });
    }
  }
}
