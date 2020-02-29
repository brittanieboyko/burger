$(function() {
    $(".eat-burger").on("click", function(event) {
      let id = $(this).data("id");
      let devouredState = $(this).data("devoured");
  
      let newBurgerState = {
        devoured: devouredState
      };

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgerState
      }).then(
        function() {
          location.reload();
        }
      );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();
    
        let newBurger = {
          burger_name: $("#ca").val().trim(),
          devoured: 0
        };
    
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            location.reload();
          }
        );
      });
})