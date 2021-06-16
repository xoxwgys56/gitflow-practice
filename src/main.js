$(document).ready(function() {
    M.updateTextFields();
});
  
console.log($('#first_name2').val());

// var input_elem = document.querySelector('#first_name2')
// input_elem.addEventListener((e) => {
//     console.log(e)
// })

$('#first_name2').on('input', function (e) {
    var name = $(this).val()
    $('.card-title').text(name)
})