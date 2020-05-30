import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-aprendiz-de-espia',
  templateUrl: './aprendiz-de-espia.page.html',
  styleUrls: ['./aprendiz-de-espia.page.scss'],
})
export class AprendizDeEspiaPage {

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
          url: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/yalJdTsb6EcDX5devj2ltWXuceO.jpg"
        },
        {
          url: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/33OysXGPBH5ja2xmD8wx4sRk7IM.jpg"
        },
        {
          url: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/xx3x35BS7xL6IsG3tU2qrxsHwiX.jpg"
        },
        {
          url: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/4AEw9NlS0FzKkv1WJ18BlM9MPvE.jpg"
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
