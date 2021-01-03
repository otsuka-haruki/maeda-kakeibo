const selectFields = $('select');
selectFields.each(function() {
  const selectField = $(this);
  selectField.formSelect();
  selectField.on('change.initMaterialSelect', function() {
    // re-init when native field changes
    selectField.formSelect();
  });
});
