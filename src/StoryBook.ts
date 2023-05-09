import { template } from './StoryBook.html';
import {
    CloseAppActionsEnum,
    HomologateConfig,
    MakeLovInterface,
    SBLGetFields,
    XAppDashboardBox,
    XAppDataGrid,
    XAppDataGridFieldTypeEnum,
    XAppDataGridHeaderTextAlingEnum,
    XAppDialog,
    XAppDialogStatuses,
    XAppModal,
    XAppsElement
} from "ait-bpd-common";

class StoryBook extends XAppsElement {

    private _xGridEncabezado: XAppDataGrid;
    private _xGridResult: XAppDataGrid;
    private _getTransaccionesPromise: any;
    private _xModal: XAppModal;
    private _data: any = {};
    private BPD_Extension_Name: Array<MakeLovInterface> =  [];


    constructor(applet: any) {
        super(applet);

        this._data = {
            titleCustomer: 'Cliente',
            titleAccounts: 'Cuentas'
        }
    }

    init() {
        super.init();

        this.render().then(() => {
            try
            {
                let div = document.querySelector('.x-app__content-account');
                    div.innerHTML = '<h1>Welcome to StoryBoard</h1>'
            }
            catch(err) 
            {
                console.log(err,'<------');
                new XAppDialog({
                    status: XAppDialogStatuses.error,
                    message: 'Ha ocurrido un error al consultar las transacciones'
                }).show().then(() => {

                    this.closeApp({
                        action: CloseAppActionsEnum.cancel,
                        comments: `Error de renderizado`
                    });

                });
            }
        });

    }

    '::template'(): string {

        return template(this._data);

    }

}

xtag.create('ContainerTest', StoryBook);

export { StoryBook };
