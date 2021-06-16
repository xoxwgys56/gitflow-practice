$(document).ready(function() {
    M.updateTextFields();
});
  
$('#first_name2').on('input', function (e) {
    var name = $(this).val();
    if (name.length === 0) name = 'John Doe';
    $('.card-title').text(name);
})