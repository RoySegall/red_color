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

              var output =
                '<div class="red_color" id="red_color">' +
                  '<div class="wrapper">' +
                    '<ul>' + items.join("") + '</ul> ' +
                    '<div class="close">X</div>' +
                  '</div>' +
                '</div>';

              $("body").append(output);
              $("#red_color").show();
            }

            messages = results;
          }
        });


        $(".close").click(function() {
          $(".red_color").hide('slow');
        });
      }, 1000);
    }
  };

})(jQuery);
