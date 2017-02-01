import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { LogAspect } from '../services/log-service';

import { UniListPage } from '../pages/uni-list/uni-list';

@Component({
	templateUrl: 'app.html'
})

export class MyApp {
	@ViewChild(Nav) nav: Nav;

	// make university selection page the root (or first) page
	rootPage: any = UniListPage;
	pages: Array<{title: string, component: any}>;

	constructor(public platform: Platform, public menu: MenuController, private logAspect: LogAspect) {
		this.initializeApp();

		// set our app's pages
		this.pages = [
			{ title: 'Universidades', component: UniListPage },
		];
	}

	initializeApp() {
		this.platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			StatusBar.styleDefault();
			Splashscreen.hide();
		});
	}

	openPage(page) {
		// close the menu when clicking a link from the menu
		this.menu.close();
		// navigate to the new page if it is not the current page
		this.nav.setRoot(page.component);
	}
}
