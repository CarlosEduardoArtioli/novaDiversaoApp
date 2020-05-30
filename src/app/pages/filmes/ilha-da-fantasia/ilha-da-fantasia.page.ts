import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-ilha-da-fantasia',
  templateUrl: './ilha-da-fantasia.page.html',
  styleUrls: ['./ilha-da-fantasia.page.scss'],
})
export class IlhaDaFantasiaPage {

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
          url: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/27WkMAcrLJYgmJcgbNvzMh2qw70.jpg"
        },
        {
          url: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/x80ZIVGUJ6plcUBcgVZ6DPKT7vc.jpg"
        },
        {
          url: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/1aOXDzzefrSrAIrMhggxki5JUm9.jpg"
        },
        {
          url: "https://image.tmdb.org/t/p/w500_and_h282_face/rUwZnxRjdSOhQnVBabMU69A7Uhn.jpg"
        },
        {
          url: "https://image.tmdb.org/t/p/w500_and_h282_face/8ZDlM7uEDRHAFXPBQQaNkJh0rmM.jpg"
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

