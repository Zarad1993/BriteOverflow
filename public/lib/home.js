$(function() {
  var getLabel = function(label) {
    switch(label) {
      case 'engineering':
        return 'Engineering';
        break;
      case 'salesAndMarketing':
        return 'Sales and Marketing';
        break;
      case 'docsAndContent':
        return 'Docs and Content';
        break;
      default:
        return 'Not Available';
    }
  }

  var setRedirect = function(questions) {
    questions.forEach(function(qs) {
      $('#'+qs.id).click(function() {
        window.location.href = '/questions/' + qs.id
      })
    })
  }
  $.get('/questions', function(response) {
    var elements = $();
    if (response.success) {
      if (response.data.length) {
        response.data.forEach(function(qs) {
          var label = getLabel(qs.label);
          var questionValue = qs.value;
          var elem ='<div class="card mt-4" id="' + qs.id + '">\
                       <div class="card-body">\
                         <h3 class="card-title">' + label + '</h3>\
                         <p class="card-text">' + questionValue + '</p>\
                       </div>\
                     </div>';

          elements = elements.add(elem);
        })
      }
      $('#questionList').append(elements);
      setRedirect(response.data);
    }
  })
});
