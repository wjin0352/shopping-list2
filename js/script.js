$(document).ready(function() {
  // global var input box
  var inputPrompt = $('#add-items');

  // Add Header Title feature
    $('.input-title').keydown(function(event) {
      // var keycode = (event.keyCode ? event.keyCode : event.which);
      if (event.keyCode == 13) {
        var title = $('.input-title').val();
        createTitle(title);
      };
    });


  // Edit Header Title feature
    $(document).on('click', '.headerTitle', function(event) {
      editTitle();
    });

  // Add list item feature
    $('#add-items').keydown(function(event) {
      if (event.keyCode == 13) {
        prependListItem();

        // sets the input box back to empty ''
        inputPrompt.val('');
      };
    });

  // Trash button feature
    $(document).on('click', '.trash', function() {
      var item = $(this);
      deleteListItem(item);
    });

  // Done button feature
  // Adds .fin class on finished list items, then removes .fin class
  // on 2nd click
    $(document).on('click', '.finished', function() {
      if (!$(this).closest('p').hasClass('fin')) {
        $(this).closest('p').addClass("fin");
      }
      else {
        $(this).closest('p').removeClass('fin');
      };
    });

    $(document).on('click', '.fin', function() {
      $(this).closest('p').removeClass("fin");
    });

  // Creates a memo from input box
    $('#description').keydown(function(event) {
      var memo = $('#description').val();
      if (event.keyCode == 13) {
        createMemo(memo);
      };
    });

  // Edits memo input box
    $(document).on('click', '.memo', function() {
      editMemo();
    });

  // // Memo save button
  //   $(document).on('click', '.save', function() {
  //     var memo = $('#description').val();

  //   });

  // // Memo delete button
  //   $(document).on('click', '.delete', function() {
  //     // $('.memo').val('');
  //     $('#description').show();
  //   });

  function createTodoHTML() {
    var newItem = inputPrompt.val();
    if (newItem != false) {
      return ('<p><button class="trash btn btn-warning btn-lg">TRASH</button>' + newItem + '<button class="finished btn btn-success btn-lg">DONE!</button></p>');
    };
  };

  function prependListItem() {
    $('.list-drop-down').prepend(createTodoHTML())
        $('.list-drop-down p:first-child')
        .css('opacity', "0")
        .css("margin-top", "20px")
        .animate(
            { opacity: "1" },
            { queue: true, duration: 'slow' }
        )
        .animate(
            {marginTop: "0px"},
            { queue: false, duration: 'slow' }
        );;
  };

  function deleteListItem(item) {
    $(item).closest('p').fadeOut(400);
  };

  function createMemo(memo) {
    var message = '<p class="memo">' + memo + '</p>';
      $('input#description').hide();
      $('.description').append(message);
  };

  function editMemo() {
    $('.memo').hide();
    $('#description').show().focus();
  };

  function createTitle(title) {
    var mainTitle = '<p class="headerTitle">' + title + '</p>';
    $('input.input-title').hide();
    $('.header-title-section').append(mainTitle);
  };

  function editTitle() {
    $('.headerTitle').hide();
    $('.input-title').show().focus();
  };
});
