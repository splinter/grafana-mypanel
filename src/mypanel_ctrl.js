import {PanelCtrl} from 'app/plugins/sdk';

export class MyPanelCtrl extends PanelCtrl {
	constructor($scope,$injector) {
		super($scope,$injector);
		this.events.on('panel-initialized', this.render.bind(this));
	}
	
  	onInitEditMode() {
		this.addEditorTab('Options','/public/plugins/grafana-mypanel/editor.html',2);
        }
}
