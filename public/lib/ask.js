$(function() {
  // Handler for .ready() called.
  $('#ask-form').click(function(e) {
    e.preventDefault();
    var question = $('#question').val();
    var label = $('#labelSelect').val();
    $.post('/questions/ask', {question:question, label: label}, function(response) {
      if (response.success) {
       alert('Your question has been successfully submitted.');
       window.location.href = '/';
      }
    })
  })
});
