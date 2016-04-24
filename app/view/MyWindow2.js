Ext.define('DemoApp.view.MyWindow2', {
    extend: 'Ext.window.Window',
    alias: 'widget.mywindow2',

    requires: [
        'DemoApp.view.MyWindowViewModel2',
        'DemoApp.view.MyWindowViewController2',
        'Ext.form.field.Text',
        'Ext.button.Button'
    ],

    controller: 'mywindow2',
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
            id: 'W2Value1',
            fieldLabel: 'Поле 1',
            name: 'Value1',
            listeners: {
                change: 'onChange'
            }
        },
        {
            xtype: 'textfield',
            id: 'W2Value2',
            fieldLabel: 'Поле 2',
            name: 'Value2',
            listeners: {
                change: 'onChange'
            }
        },
        {
            xtype: 'textfield',
            id: 'W2Value3',
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