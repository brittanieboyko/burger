$(function() {
    $(".eat-burger").on("click", (event) => {
      let id = $(this).data("id");
      let devoured = $(this).data("devoured");
  
      let newBurgerState = {
        devoured: devoured
      };
      console.log("burger got eat", devoured);
    });
})
    