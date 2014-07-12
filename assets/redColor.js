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
          success: function(results) {
            if (results == 'NO_RESULTS') {
              return;
            }

            var items = [];

            if (JSON.stringify(messages) !== JSON.stringify(results)) {

              $.each(results, function(key, value) {
                items[key] = "<li>" + value + "</li>";
              });

              var output = '<div class="red_color" id="red_color"><ul>' + items.join("") + '</ul></div>';

              $("body").append(output);
              $("#red_color").show(500);
            }

            messages = results;
          }
        });
      }, 1000);
    }
  };

})(jQuery);
