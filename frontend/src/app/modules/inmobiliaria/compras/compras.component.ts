import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GoogleMark } from 'src/app/core/models/google-mark.model';
import { MarcadorService } from 'src/app/core/services/marcador.service';
import { MarcadorDialogComponent } from './marcador-dialog/marcador-dialog.component';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css'],
})
export class ComprasComponent implements OnInit {
  markers: GoogleMark[] = [];
  currentPosition = { lat: 0, lng: 0 };

  constructor(
    private marcadorService: MarcadorService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getMarcadores();
  }

  getMarcadores() {
    this.marcadorService.getAll().subscribe(
      (resp) => {
        this.markers = resp.data.map(
          (x) => new GoogleMark(x.id, x.description, x.lat, x.long)
        );

        if (this.markers.length > 0)
          this.currentPosition = this.markers[0].position;
      },
      (err) => {
        console.log('Somenthing went wrong getting marcadores.');
      }
    );
  }

  selectMarcador(ev) {
    console.log(ev);
  }

  focusMarcador(mark) {
    this.currentPosition = mark;
  }

  addMarcador() {
    const dialogRef = this.dialog.open(MarcadorDialogComponent, {
      data: { mode: 'ADD' },
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getMarcadores();
      }
    });
  }

  deleteMarcador(id: string) {
    const confirmed = confirm('¿Desea eliminar el marcador?');

    if (confirmed)
      this.marcadorService.remove(id).subscribe(
        (resp) => {
          this.getMarcadores();
        },
        (err) => {
          console.log('Somenthing went wrong deleting marcador.');
        }
      );
  }

  editMarcador(mark: GoogleMark) {
    const dialogRef = this.dialog.open(MarcadorDialogComponent, {
      data: {
        mode: 'EDIT',
        id: mark.id,
        desc: mark.label.text,
        lat: mark.position.lat,
        lng: mark.position.lng,
      },
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getMarcadores();
      }
    });
  }
}
