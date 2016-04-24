Ext.define('DemoApp.store.MyStore', {
    extend: 'Ext.data.Store',

    requires: [
        'DemoApp.model.MyModel',
        'Ext.data.field.String',
        'Ext.data.proxy.LocalStorage'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'MyStore',
            autoLoad: true,
            autoSync: true,
            model: 'DemoApp.model.MyModel',
            fields: [
                {
                    type: 'string',
                    name: 'Field1'
                },
                {
                    type: 'string',
                    name: 'Field2'
                },
                {
                    type: 'string',
                    name: 'Field3'
                }
            ],
            proxy: {
                type: 'localstorage',
                id: 'storage1'
            }
                    /*listeners: {
load: function(s, r, o) {
        Ext.MessageBox.alert(
        'Пример 1',
        '!'
        );
            }
} */


        }, cfg)]);
    }
});