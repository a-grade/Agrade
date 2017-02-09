import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Wove } from 'aspect.js';

import { University, Major, Module } from '../../models';

import { MajorDetailsPage, ModuleDetailsPage } from '../../pages'

import { DatabaseService, StateService, LoadingService } from '../../services';

@Wove()
@Component({
	selector: 'module-list',
	templateUrl: 'module-list.html'
})

export class ModuleListPage {
	get university(): University {
		return this.navParams.get('university');
	};
	get major(): Major {
		return this.navParams.get('major');
	};
	modules: Module[];

	constructor(
		private dbService: DatabaseService,
		private stateService: StateService,
		private loading: LoadingService,
		private navCtrl: NavController,
		private navParams: NavParams,
	) {
		this.loading.show();

		dbService
			.getModules(this.university, this.major)
			.subscribe(modules => {
				this.modules = modules;
				this.loading.hide();
			});
	};

	backToMajorList() {
		this.stateService.setCurrentMajor(null);
	};
	goToMajorDetails() {
		this.navCtrl.push(MajorDetailsPage, {
			major : this.major
		});
	};
	moduleLocked(module) {
		return module.checked;
	};
	moduleSelected(module) {
		this.modules.forEach(module => {});
	};
	moduleToggleCheck(module) {
		module.checked = !module.checked;
	};
	infoClicked(module, event) {
		event.stopPropagation();
		this.navCtrl.push(ModuleDetailsPage, {
			module: module,
		});
	};
	moduleClicked(module) {

	};
}
