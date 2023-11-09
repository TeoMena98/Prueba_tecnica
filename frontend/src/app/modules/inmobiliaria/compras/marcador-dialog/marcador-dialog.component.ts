import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MarcadorService } from 'src/app/core/services/marcador.service';

@Component({
  selector: 'app-marcador-dialog',
  templateUrl: './marcador-dialog.component.html',
  styleUrls: ['./marcador-dialog.component.css'],
})
export class MarcadorDialogComponent implements OnInit {
  marcadorForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<MarcadorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private marcadorService: MarcadorService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.marcadorForm = this.fb.group({
      desc: new FormControl('', [Validators.required]),
      lat: new FormControl(0, [Validators.required]),
      lng: new FormControl(0, [Validators.required]),
    });

    if (this.data.mode === 'EDIT') {
      this.marcadorForm.patchValue({
        desc: this.data.desc,
        lat: this.data.lat,
        lng: this.data.lng,
      });
    }
  }

  onSubmit() {
    if (this.marcadorForm.valid) {
      const { desc, lat, lng } = this.marcadorForm.value;

      if (this.data.mode === 'ADD')
        this.marcadorService.add(desc, +lat, +lng).subscribe(
          (resp) => {
            this.dialogRef.close(true);
          },
          (err) => {
            console.log('Somenthing went wrong adding marcador.');
          }
        );
      else if (this.data.mode === 'EDIT')
        this.marcadorService.update(this.data.id, desc, +lat, +lng).subscribe(
          (resp) => {
            this.dialogRef.close(true);
          },
          (err) => {
            console.log('Somenthing went wrong updating marcador.');
          }
        );
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
