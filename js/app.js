/* EMAIL FORM HANDLING */

$('.form-button input').click(function(e){
  // do not submit form
  e.preventDefault();
  // save value if the form field is not blank or the default
  if( $('#email').val() !== '' && $('#email').val() !== 'EMAIL' ){
    var val = $('#email').val();
    // add email address to message
    $('.answer span').text(val);}
})

//click transition

$('.clicker').click(function(f){
  //do not transition screen
f.preventDefault();

if( $('#email').val() !== ''){
  //transition screen to completed message
  $('.main').addClass('open');
  }

  //message displayed no email
  $('#email').attr('value', 'oops... please provide email')
 

}) 

//clears value="EMAIL"

$('input').click(function(){
  $('#email').attr('value', '');
  })

