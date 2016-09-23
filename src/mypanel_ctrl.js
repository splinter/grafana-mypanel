import {PanelCtrl} from 'app/plugins/sdk';
import _ from 'lodash';

const panelDefaults = {};

export class MyPanelCtrl extends PanelCtrl {
	constructor($scope,$injector) {
		super($scope,$injector);
		_.defaults(this.panel,panelDefaults);
		this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
		this.events.on('panel-initialized', this.render.bind(this));
	}
	
  	onInitEditMode() {
		this.addEditorTab('Options','/public/plugins/grafana-mypanel/editor.html',2);
        }
}

MyPanelCtrl.templateUrl = "module.html";
