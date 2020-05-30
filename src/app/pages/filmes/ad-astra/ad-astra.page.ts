import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-ad-astra',
  templateUrl: './ad-astra.page.html',
  styleUrls: ['./ad-astra.page.scss'],
})
export class AdAstraPage {

  @ViewChild('slide', { static: false }) slide: IonSlides;

  slider: any;

  //Configuration for each Slider
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  constructor(
  ) {
    //Item object for Nature
    this.slider =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          url: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/5BwqwxMEjeFtdknRV792Svo0K1v.jpg"
        },
        {
          url: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/duengnNbJdTdjR329SmAAJO4stC.jpg"
        },
        {
          url: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/t4z8OlOEzH7J1JRFUN3rcm6XHNL.jpg"
        },
        {
          url: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/cs6z1byqL0ffw1948FJI2Jr1HVT.jpg"
        },
        {
          url: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/5DWR5jI0rKpys581EjZ60XKobZJ.jpg"
        }
      ]
    };
  }

  //Move to Next slide
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

}
