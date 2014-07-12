(function ($) {

  Drupal.behaviors.RedColorAlerts = {
    attach: function (context) {
      $.ajax({
        url: 'red_color',
        dataType: 'json',
        type: 'get',
        crossDomain: true,
        contentType: "application/json; charset=utf-8",
        success: function(msg) {
          if (msg == null) {
            return;
          }

          // todo: remove later.
          console.log(msg);
        }
      });
    }
  };

})(jQuery);
