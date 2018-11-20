import { LoadingPage } from './../pages/loading/loading';



import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ActionSheetPage } from './../pages/action-sheet/action-sheet';
import { BadgesPage } from '../pages/badges/badges';
import { AlertPage } from './../pages/alert/alert';
import { ButtonsPage } from './../pages/buttons/buttons';
import { CardsPage } from './../pages/cards/cards';
import { CheckboxPage } from './../pages/checkbox/checkbox';
import { RadioPage } from './../pages/radio/radio';
import { RangePage } from '../pages/range/range';
import { DatetimesPage } from '../pages/datetimes/datetimes';
import { IconesPage } from '../pages/icones/icones';
import { ListasPage } from './../pages/listas/listas';
import { InputsPage } from './../pages/inputs/inputs';
import { GridPage } from './../pages/grid/grid';
import { FabsPage } from './../pages/fabs/fabs';
import { TogglesPage } from '../pages/toggles/toggles';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Action Sheet Component', component: ActionSheetPage},
      { title: 'Alert Component', component:AlertPage},
      { title: 'Badges Component', component:BadgesPage},
      { title: 'Buttons Component', component: ButtonsPage},
      { title: 'Cards Component', component: CardsPage},
      { title: 'Checkbox Component', component: CheckboxPage},
      { title: 'Radio Component', component: RadioPage},
      { title: 'Range Component',component: RangePage},
      { title: 'DateTime Component', component: DatetimesPage},
      { title: 'Fabs Floating Action Buttons', component: FabsPage},
      { title: 'Grid Component', component: GridPage },
      { title: 'Icone Component', component: IconesPage},
      { title: 'Input (formularios)', component:InputsPage},
      { title: "Lista de opções",component:ListasPage},
      { title: "Toggles Component", component:TogglesPage},
      { title: 'Loding Controler', component:LoadingPage},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
