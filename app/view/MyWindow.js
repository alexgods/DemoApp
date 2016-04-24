Ext.define('DemoApp.view.MyWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.mywindow',

    requires: [
        'DemoApp.view.MyWindowViewModel',
        'DemoApp.view.MyWindowViewController',
        'Ext.form.field.Text',
        'Ext.button.Button'
    ],

    controller: 'mywindow',
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
            id: 'W1Value1',
            fieldLabel: 'Поле 1',
            name: 'Value1',
            listeners: {
                change: 'onChange'
            }
        },
        {
            xtype: 'textfield',
            id: 'W1Value2',
            fieldLabel: 'Поле 2',
            name: 'Value2',
            listeners: {
                change: 'onChange'
            }
        },
        {
            xtype: 'textfield',
            id: 'W1Value3',
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