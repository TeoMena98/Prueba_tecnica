import { Component, OnInit } from '@angular/core';
import { VentaModel } from 'src/app/core/models/venta.model';
import { VentasService } from 'src/app/core/services/ventas.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'],
})
export class VentasComponent implements OnInit {
  dataSource: VentaModel[] = [];

  displayedColumns: string[] = ['month', 'amountEstate', 'totalSales'];

  constructor(private ventasService: VentasService) {}

  ngOnInit(): void {
    this.ventasService.getAll().subscribe(
      (resp) => {
        this.dataSource = resp.data.items;
      },
      (err) => {
        alert('Something went wrong login.');
      }
    );
  }
}
