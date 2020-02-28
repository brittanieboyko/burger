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
          console.log("burger got eat", newBurgerState);
          location.reload();
        }
      );
    });
})