/*
 * File: app/view/MaterialMaster.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('test.view.MaterialMaster', {
    extend: 'Ext.form.Panel',
    alias: 'widget.materialmaster',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.TextArea'
    ],

    config: {
        itemId: 'myformpanel2',
        items: [
            {
                xtype: 'fieldset',
                disabled: false,
                itemId: 'myfieldset2',
                styleHtmlContent: true,
                instructions: 'Material details',
                title: 'Material Master',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Material Name',
                        name: 'Name',
                        readOnly: true
                    },
                    {
                        xtype: 'textareafield',
                        label: 'Description',
                        name: 'Description',
                        readOnly: true,
                        maxRows: 2
                    },
                    {
                        xtype: 'textfield',
                        label: 'Supplier',
                        name: 'SupplierID',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        label: 'Supplier Name',
                        name: 'SupplierName',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        label: 'UOM',
                        name: 'MeasureUnit',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        label: 'Price',
                        name: 'Price',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        label: 'Width',
                        name: 'Width',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        label: 'Depth',
                        name: 'Depth',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        label: 'Height',
                        name: 'Height',
                        readOnly: true
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onMyformpanelPainted',
                event: 'painted'
            }
        ]
    },

    onMyformpanelPainted: function(element, eOpts) {
        //debugger;

        data = Ext.getStore('MaterialMasters');

        if (data.isLoading()) {
        alert ("still  loading, cant show details.retry");
        }

        data1 = data.getAt(0);
        data2 = data1.getData();

        //var data = this;
        //console.log("Completed paint event for form");
        this.setValues(data2);
        //http://stackoverflow.com/questions/17899171/how-to-pass-the-selected-item-to-the-next-view
    }

});