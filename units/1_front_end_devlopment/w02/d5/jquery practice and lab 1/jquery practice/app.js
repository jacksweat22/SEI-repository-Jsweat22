// $(function() {
//     // all your js code lives here
//     alert("Everything is ready, let's do this");
//   })
$(document).ready(function() {})
$(function() {
  $('#addHome')
    .removeClass('btn-danger')
    .addClass('btn-success');
  $('h1').addClass('text-center');
  let $newLink = $('<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com</a>');
  let $p = $('<p class="bold">');
  $('body').append($newLink);
  $('#zillowLink').attr('target', '_blank');
      console.log($('#zillowLink').attr('href'));

      $('#addHome')
})