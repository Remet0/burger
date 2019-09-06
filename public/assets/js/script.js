$(document).ready(function() {
    
    $('.eat').on("click", function(event) {
      event.preventDefault();
      var id = $(this).data('id');

      $.ajax({
        method: "PUT",
        url: "/burgers/" + id
      }).then(function(data) {
        // reload page to display devoured burger in proper column
        location.reload();
      });
  
    });
  });
  