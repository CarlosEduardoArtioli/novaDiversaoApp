import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-lei-ordem',
  templateUrl: './lei-ordem.page.html',
  styleUrls: ['./lei-ordem.page.scss'],
})
export class LeiOrdemPage {

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
          url: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/cD9PxbrdWYgL7MUpD9eOYuiSe2P.jpg"
        },
        {
          url: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/84sFzAa4Gea3r2Zh6Qg2lxuJPMO.jpg"
        },
        {
          url: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/t39Cri4qpYIxF01Mlq2p6xjxRqG.jpg"
        },
        {
          url: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/kZOtfE95MA4lftXt1842kWtzBmY.jpg"
        },
        {
          url: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/2wgk47yrb2WnXAdSBLFX9EiU882.jpg"
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