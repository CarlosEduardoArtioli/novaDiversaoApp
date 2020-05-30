import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-os-smurfs',
  templateUrl: './os-smurfs.page.html',
  styleUrls: ['./os-smurfs.page.scss'],
})
export class OsSmurfsPage {

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
          url: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/okjpVG3iAw20D2xxtUAaca8YLpE.jpg"
        },
        {
          url: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/5g34j1yR5ljt1goMXV7JTEEJONh.jpg"
        },
        {
          url: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/7HYHXRfHreJD4afBed08nLsXPVN.jpg"
        },
        {
          url: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/7lmoFri37iLDnyOCodsiD4ujlm0.jpg"
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
