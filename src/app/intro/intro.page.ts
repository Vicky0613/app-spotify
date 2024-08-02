import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit{

  public itemsSlider: {title: string, urlImage: string, description: string} [] = [
    {
      title: 'MALUMA',
      urlImage: 'https://pbs.twimg.com/media/Eu10VcuWQAUyGZK.jpg',
      description: 'Maluma concert in New York City'
    },
    {
      title: 'J BALVIN',
      urlImage: 'https://scontent.fbaq6-1.fna.fbcdn.net/v/t31.18172-8/18056205_10154518915790036_1055708337650254166_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_ohc=ieOsG1r4eDoQ7kNvgGqH1nY&_nc_ht=scontent.fbaq6-1.fna&oh=00_AYCiz66eIi1cwM2aE-ZCpAOyk704nIO7iUX7eA884EZiiA&oe=66B03D3B',
      description: 'José Álvaro Osorio Balvín, más conocido como J Balvin, es un cantante y productor colombiano, reconocido como uno de los artistas latinos más vendidos del mundo, con ventas de treinta y cinco millones de álbumes y sencillos a nivel mundial.'
    },
    {
      title: 'ADELE',
      urlImage: 'https://news3lv.com/resources/media/e604ce7b-cb2c-42ca-a9a6-1f7a4586fb99-full1x1_Adelecaesarsposter.jpg',
      description: 'Construido inicialmente para gimnasia sincronizada, el Gran Estadio Strahov en Praga, República Checa, es el segundo estadio más grande jamás construido y puede albergar a la friolera de 250.000 espectadores, 56.000 de los que están sentados. Desde 1990, se han celebrado conciertos en el Great Strahov, con artistas como Guns N ‘Roses, U2 y Bon Jovi tocando allí.'
    },
  ];

  constructor(private router: Router, private storage: Storage) { }

  ngOnInit(){
    this.storage.set('isIntroShowed', true);
  }

  navigateToHome(){
    this.router.navigateByUrl("/sidebar/home")
  }

}
