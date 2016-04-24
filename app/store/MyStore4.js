Ext.define('DemoApp.store.MyStore4', {
    extend: 'Ext.data.Store',

    requires: [
        'DemoApp.model.MyModel4',
        'Ext.data.field.String',
        'Ext.data.proxy.LocalStorage'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'MyStore4',
            autoLoad: true,
            autoSync: true,
            model: 'DemoApp.model.MyModel4',
            fields: [
                {
                    type: 'string',
                    name: 'TabIndex'
                },
                {
                    type: 'string',
                    name: 'AddRow'
                },
        {
            name: 'AddValue1', type: 'string'
        },
        {
            name: 'AddValue2', type: 'string'
        },
        {
            name: 'AddValue3', type: 'string'
        }
            ],
            proxy: {
                type: 'localstorage',
                id: 'storage1'
            }


        }, cfg)]);
    }
});