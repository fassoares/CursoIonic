import { LoadingPage } from './../pages/loading/loading';
import { TogglesPage } from './../pages/toggles/toggles';
import { InputsPage } from './../pages/inputs/inputs';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RangePage } from '../pages/range/range';
import { StatusBar } from '@ionic-native/status-bar';
import { RadioPage } from './../pages/radio/radio';
import { CheckboxPage } from './../pages/checkbox/checkbox';
import { ButtonsPage } from './../pages/buttons/buttons';
import { BadgesPage } from '../pages/badges/badges';
import { AlertPage } from './../pages/alert/alert';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import { MyApp } from './app.component';
import { ActionSheetPage } from './../pages/action-sheet/action-sheet';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CardsPage } from './../pages/cards/cards';
import { DatetimesPage } from '../pages/datetimes/datetimes';
import { FabsPage } from '../pages/fabs/fabs';
import { GridPage } from './../pages/grid/grid';
import { IconesPage } from './../pages/icones/icones';
import { ListasPage } from '../pages/listas/listas';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ActionSheetPage,
    AlertPage,
    BadgesPage,
    ButtonsPage,
    CardsPage,
    CheckboxPage,
    RadioPage,
    RangePage,
    DatetimesPage,
    FabsPage,
    GridPage,
    IconesPage,
    InputsPage,
    ListasPage,
    TogglesPage,
    LoadingPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ActionSheetPage,
    AlertPage,
    BadgesPage,
    ButtonsPage,
    CardsPage,
    CheckboxPage,
    RadioPage,
    RangePage,
    DatetimesPage, 
    FabsPage,
    GridPage,
    IconesPage,
    InputsPage,
    ListasPage,
    TogglesPage,
    LoadingPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
