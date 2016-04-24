Ext.define('DemoApp.view.MyWindow3', {
    extend: 'Ext.window.Window',
    alias: 'widget.mywindow3',

    requires: [
        'DemoApp.view.MyWindowViewModel3',
        'DemoApp.view.MyWindowViewController3',
        'Ext.form.field.Text',
        'Ext.button.Button'
    ],

    controller: 'mywindow3',
    viewModel: {
        type: 'mywindow'
    },
    height: 250,
    width: 400,
    title: 'Новая запись',
    maximized: true,

    items: [
        {
            xtype: 'textfield',
            id: 'W3Value1',
            fieldLabel: 'Поле 1',
            name: 'Value1',
            listeners: {
                change: 'onChange'
            }
        },
        {
            xtype: 'textfield',
            id: 'W3Value2',
            fieldLabel: 'Поле 2',
            name: 'Value2',
            listeners: {
                change: 'onChange'
            }
        },
        {
            xtype: 'textfield',
            id: 'W3Value3',
            fieldLabel: 'Поле 3',
            name: 'Value3',
            listeners: {
                change: 'onChange'
            }
        },
        {
            xtype: 'button',
            text: 'Сохранить',
            listeners: {
                click: 'onButtonClick'
            }
        }
    ]
});