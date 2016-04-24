Ext.define('DemoApp.view.MyWindowViewController3', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mywindow3',

    onButtonClick: function(button, e, eOpts) {
        var store = Ext.create('Ext.data.Store', {
            model: "DemoApp.model.MyModel3"
        });
        var addSt = store.add({Field1: Ext.getCmp('W3Value1').getValue(),Field2: Ext.getCmp('W3Value2').getValue() ,Field3: Ext.getCmp('W3Value3').getValue() });
	store.sync(); 
	Ext.getCmp('MyGriPanel3').getStore().load();
	Ext.getCmp('MyGriPanel3').getView().refresh();
    },

    onChange: function( thisE, newValue, oldValue, eOpts) {
        var store = Ext.create('Ext.data.Store', {
            model: "DemoApp.model.MyModel4"
        });
	store.load(); 
	if(store.count() > 0){
		var addSt = store.getAt(0);
		addSt.set("AddRow","3");
		switch(thisE.id){
			case 'W3Value1':
				addSt.set("AddValue1",newValue);
				break; 
			case 'W3Value2':
				addSt.set("AddValue2",newValue);
				break;
			case 'W3Value3':
				addSt.set("AddValue3",newValue); 
				break;
		}
		store.sync(); 
	} 	

    }

});
