$(document).ready(function() {
    
    $('.eat').on("click", function(event) {
      event.preventDefault();
      console.log('working 1')
        console.log(event);
      var id = $(this).data('id');
      console.log('working 2')
      console.log(id);

      $.ajax({
        method: "PUT",
        url: "/burgers/" + id
      }).then(function(data) {
        // reload page to display devoured burger in proper column
        location.reload();
      });
  
    });
  });
  