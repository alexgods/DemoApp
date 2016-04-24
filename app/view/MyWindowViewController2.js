Ext.define('DemoApp.view.MyWindowViewController2', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mywindow2',

    onButtonClick: function(button, e, eOpts) {
        var store = Ext.create('Ext.data.Store', {
            model: "DemoApp.model.MyModel2"
        });
        var addSt = store.add({Field1: Ext.getCmp('W2Value1').getValue(),Field2: Ext.getCmp('W2Value2').getValue() ,Field3: Ext.getCmp('W2Value3').getValue() });
	store.sync(); 
	Ext.getCmp('MyGriPanel2').getStore().load();
	Ext.getCmp('MyGriPanel2').getView().refresh();
    },

    onChange: function( thisE, newValue, oldValue, eOpts) {
        var store = Ext.create('Ext.data.Store', {
            model: "DemoApp.model.MyModel4"
        });
	store.load(); 
	if(store.count() > 0){
		var addSt = store.getAt(0);
		addSt.set("AddRow","2");
		switch(thisE.id){
			case 'W2Value1':
				addSt.set("AddValue1",newValue);
				break; 
			case 'W2Value2':
				addSt.set("AddValue2",newValue);
				break;
			case 'W2Value3':
				addSt.set("AddValue3",newValue); 
				break;
		}
		store.sync(); 
	} 	

    }
});
