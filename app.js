// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({
    models: [
        'MyModel',
        'MyModel2',
        'MyModel3'
    ],
    stores: [
        'MyStore',
        'MyStore2',
        'MyStore3'
    ],
    views: [
        'MyTabPanel',
        'MyWindow'
    ],
    name: 'DemoApp',

    launch: function() {
        Ext.create('DemoApp.view.MyTabPanel', {renderTo: Ext.getBody()});
    }

});
