(function () {
  "use strict";
  
  Ext.ns('CustomSelectView');
  
  CustomSelectView = Ext.extend(Ext.form.Select, {
    getPicker: function () {
      console.log('in CustomSelectView');
      if (!this.picker) {
        console.log('this.Picker');
        this.picker = new Ext.Picker({
          height: '260',
          slots: [{
            align       : 'center',
            name        : this.name,
            valueField  : this.valueField,
            displayField: this.displayField,
            value       : this.getValue(),
            store       : this.store
          }],
          listeners: {
            change: this.onPickerChange,
            scope: this
          }
        });
      }
      console.log(this.picker);
      return this.picker;
    }
  });
}());