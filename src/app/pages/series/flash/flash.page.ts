import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-flash',
  templateUrl: './flash.page.html',
  styleUrls: ['./flash.page.scss'],
})
export class FlashPage {

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
          url: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/jC1KqsFx8ZyqJyQa2Ohi7xgL7XC.jpg"
        },
        {
          url: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/jeruqNWhqRqOR1QyqdQdHunrvU5.jpg"
        },
        {
          url: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/z59kJfcElR9eHO9rJbWp4qWMuee.jpg"
        },
        {
          url: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/4KUg5OtElC528To0LBc8gBtv5oq.jpg"
        },
        {
          url: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/8s7WmphQS3jdUr3z6HvTLmet9Bk.jpg"
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

