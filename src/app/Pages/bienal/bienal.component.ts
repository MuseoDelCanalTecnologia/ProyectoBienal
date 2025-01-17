import { Component, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { routes } from '../../app.routes';
@Component({
  selector: 'app-bienal',
  imports: [RouterModule],
  templateUrl: './bienal.component.html',
  styleUrl: './bienal.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
  
})
export class BienalComponent {

}
