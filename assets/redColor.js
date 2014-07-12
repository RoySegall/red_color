(function ($) {

  Drupal.behaviors.RedColorAlerts = {
    attach: function (context) {
      var messages = '';
      setInterval(function() {
        $.ajax({
          url: 'red_color',
          dataType: 'json',
          type: 'get',
          crossDomain: true,
          contentType: "application/json; charset=utf-8",
          success: function(msg) {
            if (msg == 'NO_RESULTS') {
              return;
            }

            if (JSON.stringify(messages) !== JSON.stringify(msg)) {
              console.log(msg);
            }

            messages = msg;
          }
        });
      }, 1000);
    }
  };

})(jQuery);
