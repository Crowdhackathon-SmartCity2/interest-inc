import { Storage } from '@ionic/storage';
import { DataHandlerProvider } from './../providers/data-handler/data-handler';
import { TabsPageModule } from './../pages/tabs/tabs.module';

import { Component, ViewChild } from '@angular/core';
import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { CategoriesPage } from '../pages/categories/categories';
import { MapPage } from '../pages/map/map';
import { QrCodesPage } from '../pages/qr-codes/qr-codes';
import { TabsPage } from '../pages/tabs/tabs';


export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.html'
})
export class IntereseeingsApp {

  @ViewChild(Nav) nav: Nav;

  rootPage:any;

  appPages: PageInterface[] = [
    { title: 'Schedule', name: 'TabsPage', component: TabsPageModule, tabComponent: HomePage, index: 0, icon: 'calendar' },
    { title: 'Speakers', name: 'TabsPage', component: TabsPageModule, tabComponent: CategoriesPage, index: 1, icon: 'contacts' },
    { title: 'Map', name: 'TabsPage', component: TabsPageModule, tabComponent: MapPage, index: 2, icon: 'map' },
    { title: 'About', name: 'TabsPage', component: TabsPageModule, tabComponent: QrCodesPage, index: 3, icon: 'information-circle' }
  ];


  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public events: Events,
    public dataHandler: DataHandlerProvider,
    public storage: Storage,
    public menu: MenuController
  ) {
    /*platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    */
      this.platformReady();
      
    //  this.dataHandler.load().then(()=>{
        this.rootPage = TabsPage
      //})

      
   }


   //not sure what this does exactly yet.
   //TODO look further into it
   isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNavs()[0];

    // Tabs are a special case because they have their own navigation
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return 'primary';
    }
    return;
  }
  
  platformReady(){
    this.platform.ready().then(() => {
      this.splashScreen.hide();
      this.statusBar.hide();
    })
  }
}

