Ext.define('DemoApp.model.MyModel3', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.Field',
        'Ext.data.proxy.LocalStorage'
    ],

    fields: [
        {
            name: 'Field1', type: 'string'
        },
        {
            name: 'Field2', type: 'string'
        },
        {
            name: 'Field3', type: 'string'
        }
    ],

    proxy: {
        type: 'localstorage',
                id: 'storage3'

    }
});