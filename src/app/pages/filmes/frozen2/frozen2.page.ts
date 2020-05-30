import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-frozen2',
  templateUrl: './frozen2.page.html',
  styleUrls: ['./frozen2.page.scss'],
})
export class Frozen2Page {

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
          url: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg"
        },
        {
          url: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/cnA434G2b8m95dp76AKMhM1ufku.jpg"
        },
        {
          url: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/2niqBT3WmbsR8fy07URik6fFJIf.jpg"
        },
        {
          url: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/aPSX29AIwAuP54cwrigmxSnPnhn.jpg"
        },
        {
          url: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/rV5AsUB36oaIMBGk18uWrFTP64R.jpg"
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
