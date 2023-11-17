import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environment/environment';


const URL = environment.imgPath;

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform( img: string, size: string = 'w500' ): string {

    if(!img){
      return '../../assets/imgs/no-image-banner.jpg';
    }
    const imgUrl = `${URL}/${size}${img}`;

    return imgUrl;
  }

}
