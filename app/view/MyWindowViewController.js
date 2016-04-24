Ext.define('DemoApp.view.MyWindowViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mywindow',

    onButtonClick: function(button, e, eOpts) {
        var store = Ext.create('Ext.data.Store', {
            model: "DemoApp.model.MyModel"
        });
        var addSt = store.add({Field1: Ext.getCmp('W1Value1').getValue(),Field2: Ext.getCmp('W1Value2').getValue() ,Field3: Ext.getCmp('W1Value3').getValue() });
	store.sync(); 
	Ext.getCmp('MyGriPanel1').getStore().load();
	Ext.getCmp('MyGriPanel1').getView().refresh();
    },

    onChange: function( thisE, newValue, oldValue, eOpts) {
        var store = Ext.create('Ext.data.Store', {
            model: "DemoApp.model.MyModel4"
        });
	store.load(); 
//console.log(thisE);
//console.log(newValue);
//console.log(oldValue);
//console.log(thisE); 
	if(store.count() > 0){
		//console.log(store.count());
		var addSt = store.getAt(0);
		addSt.set("AddRow","1");
		switch(thisE.id){
			case 'W1Value1':
				addSt.set("AddValue1",newValue);
				break; 
			case 'W1Value2':
				//console.log("setActiveTab(1)"); 
				addSt.set("AddValue2",newValue);
				break;
			case 'W1Value3':
				addSt.set("AddValue3",newValue); 
				break;
		}

		store.sync(); 
	} 	

    }
});
