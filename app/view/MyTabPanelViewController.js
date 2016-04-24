Ext.define('DemoApp.view.MyTabPanelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mytabpanel',

 onGridpanelLoad: function(store, records, successful, operation, eOpts) {
    },

    ontabChange: function( tabPanel, newCard, oldCard, eOpts ) {
//console.log("ontabChange");
        var store = Ext.create('Ext.data.Store', {
            model: "DemoApp.model.MyModel4"
        });
	store.load();
	store.removeAll();
	store.sync(); 

	switch(newCard.id){
		case "MyPanel1":
		        store.add({TabIndex: 1});
			break; 
		case "MyPanel2":
		        store.add({TabIndex: 2});
			break;
		case "MyPanel3":
		        store.add({TabIndex: 3});
			break;
	}
	store.sync(); 
},

    onbeforeShow: function(operation, eOpts) {
//console.log("onbeforeShow");

        var store = Ext.create('Ext.data.Store', {
            model: "DemoApp.model.MyModel4"
        });
	store.load();
//console.log(storeaddSt.get('AddRow'));
	if(store.count() > 0){
		//console.log(store.count());
		var addSt = store.getAt(0);  	
		//console.log(addSt.get('TabIndex'));
		switch(addSt.get('TabIndex')){
			case '1':
				Ext.getCmp('mytabpanel11').setActiveTab(0);
				break; 
			case '2':
				//console.log("setActiveTab(1)"); 
				Ext.getCmp('mytabpanel11').setActiveTab(1);
				break;
			case '3':
				Ext.getCmp('mytabpanel11').setActiveTab(2); 
				break;
		}

		switch(addSt.get('AddRow')){
			case '1':
	        		var win = Ext.widget('mywindow');
				Ext.getCmp('W1Value1').setValue(addSt.get('AddValue1'));
				Ext.getCmp('W1Value2').setValue(addSt.get('AddValue2'));
				Ext.getCmp('W1Value3').setValue(addSt.get('AddValue3'));
  	      			win.show();
				break; 
			case '2':
	        		var win = Ext.widget('mywindow2');
				Ext.getCmp('W2Value1').setValue(addSt.get('AddValue1'));
				Ext.getCmp('W2Value2').setValue(addSt.get('AddValue2'));
				Ext.getCmp('W2Value3').setValue(addSt.get('AddValue3'));
  	      			win.show();
				break;
			case '3':
	        		var win = Ext.widget('mywindow3');
				Ext.getCmp('W3Value1').setValue(addSt.get('AddValue1'));
				Ext.getCmp('W3Value2').setValue(addSt.get('AddValue2'));
				Ext.getCmp('W3Value3').setValue(addSt.get('AddValue3'));
  	      			win.show();
				break;
		}

	} 
/*else {
        	var addSt = store.add({TabIndex: 1, AddRow: 0 });
		store.sync(); 
	} */
	

    },

    onMybuttonClick: function(button, e, eOpts) {
        var win = Ext.widget('mywindow');
        win.show();

        var store = Ext.create('Ext.data.Store', {
            model: "DemoApp.model.MyModel4"
        });
	store.load();
	if(store.count() > 0){
		//console.log(store.count());
		var addSt = store.getAt(0);
		addSt.set("AddRow","1");
		//console.log(addSt);		
		store.sync(); 
	} 	

    },

    onMybuttonClick2: function(button, e, eOpts) {
        var win = Ext.widget('mywindow2');
        win.show();
        var store = Ext.create('Ext.data.Store', {
            model: "DemoApp.model.MyModel4"
        });
	store.load();
	if(store.count() > 0){
		//console.log(store.count());
		var addSt = store.getAt(0);
		addSt.set("AddRow","2");
		//console.log(addSt);		
		store.sync(); 
	} 	

    },

    onMybuttonClick3: function(button, e, eOpts) {
        var win = Ext.widget('mywindow3');
        win.show();
        var store = Ext.create('Ext.data.Store', {
            model: "DemoApp.model.MyModel4"
        });
	store.load();
	if(store.count() > 0){
		//console.log(store.count());
		var addSt = store.getAt(0);
		addSt.set("AddRow","3");
		//console.log(addSt);		
		store.sync(); 
	} 	
    }

});
