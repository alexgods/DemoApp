    var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
        clicksToMoveEditor: 1,
        autoCancel: false
    });

    var rowEditing2 = Ext.create('Ext.grid.plugin.RowEditing', {
        clicksToMoveEditor: 1,
        autoCancel: false
    });

    var rowEditing3 = Ext.create('Ext.grid.plugin.RowEditing', {
        clicksToMoveEditor: 1,
        autoCancel: false
    });

Ext.define('DemoApp.view.MyTabPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.mytabpanel',

    requires: [
        'DemoApp.view.MyTabPanelViewModel',
        'DemoApp.view.MyTabPanelViewController',
        'Ext.tab.Tab',
        'Ext.grid.Panel',
        'Ext.grid.column.Column',
        'Ext.view.Table'
    ],

    controller: 'mytabpanel',
    viewModel: {
        type: 'mytabpanel'
    },
    itemId: 'mytabpanel1',
    id: 'mytabpanel11',

    height: 800,
    width: '100%',
    activeTab: 0,
                    listeners: {
                        beforetabchange: 'ontabChange',
                        afterrender: 'onbeforeShow'

},

    items: [
        {
            xtype: 'panel',
            height: '100%',
            width: '100%',
            id: 'MyPanel1',
            title: 'Таблица 1',
            items: [
                {
                    xtype: 'gridpanel',
                    title: '',
                    id: 'MyGriPanel1',
                    store: 'MyStore',
                    plugins: [rowEditing],
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'Field1',
            		    editor: { allowBlank: false },
                            text: ''
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'Field2',
            		    editor: { allowBlank: false },
                            text: ''
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'Field3',
            		    editor: { allowBlank: false },
                            text: ''
                        }
                    ]/*,
                    listeners: {
                        beforeshow: 'onbeforeShow',
			beforeload: 'onMyGriPanel1BeforeLoad',
refresh: 'onMyGriPanel1BeforeLoad'
                    }*/
                },
                {
                    xtype: 'button',
                    itemId: 'mybutton',
                    arrowAlign: 'bottom',
                    iconAlign: 'right',
                    text: 'Добавить',
                    listeners: {
                        click: {fn: 'onMybuttonClick'}
			
                    }
                }
            ]
        },
        {
            xtype: 'panel',
            height: '100%',
            width: '100%',
            id: 'MyPanel2',
            title: 'Таблица 2',
            items: [
                {
                    xtype: 'gridpanel',
                    title: '',
                    id: 'MyGriPanel2',
                    store: 'MyStore2',
                    plugins: [rowEditing2],
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'Field1',
            		    editor: { allowBlank: false },
                            text: ''
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'Field2',
            		    editor: { allowBlank: false },
                            text: ''
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'Field3',
            		    editor: { allowBlank: false },
                            text: ''
                        }
                    ]
                },
                {
                    xtype: 'button',
                    itemId: 'mybutton2',
                    arrowAlign: 'bottom',
                    iconAlign: 'right',
                    text: 'Добавить',
                    listeners: {
                        click: 'onMybuttonClick2'
                    }
                }
            ]


        },
        {
            xtype: 'panel',
            height: '100%',
            width: '100%',
            id: 'MyPanel3',
            title: 'Таблица 3',
            items: [
                {
                    xtype: 'gridpanel',
                    title: '',
                    id: 'MyGriPanel3',
                    store: 'MyStore3',
                    plugins: [rowEditing3],
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'Field1',
            		    editor: { allowBlank: false },
                            text: ''
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'Field2',
            		    editor: { allowBlank: false },
                            text: ''
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'Field3',
            		    editor: { allowBlank: false },
                            text: ''
                        }
                    ]
                },
                {
                    xtype: 'button',
                    itemId: 'mybutton3',
                    arrowAlign: 'bottom',
                    iconAlign: 'right',
                    text: 'Добавить',
                    listeners: {
                        click: 'onMybuttonClick3'
                    }
                }
            ]

        }
    ]

});