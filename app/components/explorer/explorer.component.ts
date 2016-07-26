import { Component } from '@angular/core';

import { PanelMenu } from 'primeng/primeng';

import {APIManagerService } from '../core/api-manager/api-manager.service';

import { API } from '../core/model/api';

import {SearchPipe} from './search.pipe';

@Component({
	selector: 'explorer',
	moduleId: module.id,
	pipes: [SearchPipe],
	templateUrl: 'explorer.html',
	styleUrls: ['explorer.css'],
	directives: [PanelMenu]
})
export class ExplorerComponent {

	api: API;

	constructor(private apiManagerService:APIManagerService) {
		apiManagerService.api.subscribe((api: API) => {
			this.api = api;
		});
	}
}
