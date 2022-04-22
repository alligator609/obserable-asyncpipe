import { Injectable } from '@angular/core';
import { ApiService } from './iapi.service';

@Injectable({
  providedIn: 'root'
})
export class PlantService extends ApiService {
  override collection: string = "common/Common/Plant/Get";
}
