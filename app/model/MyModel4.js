Ext.define('DemoApp.model.MyModel4', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.Field',
        'Ext.data.proxy.LocalStorage'
    ],

    fields: [
        {
            name: 'TabIndex', type: 'string'
        },
        {
            name: 'AddRow', type: 'string'
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
                id: 'storage4'

    }
});