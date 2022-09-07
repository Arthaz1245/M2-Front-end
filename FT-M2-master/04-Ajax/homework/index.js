var URL = "http://localhost:5000/amigos/";

$(".getFriends").click(() => {
  $("#lista").empty();
  //$.get("https://jsonplaceholder.typicode.com/users", (response) => {

  $.get(`${URL}`, (friends) => {
    friends.forEach((amigo) => {
      let li = document.createElement("li");
      li.id = amigo.id;
      li.innerText = amigo.name + " X";
      let list = document.getElementById("lista");
      list.appendChild(li);
    });
  });
});

$("#search").click(function () {
  let id = $("#input").val();

  if (id) {
    $.get(`${URL}${id}`, function (friend) {
      console.log(friend);

      $("#amigo").text(`El nombre de mi amigo es : ${friend.name}`);
      $("#input").val("");
    });
  } else {
    $("#amigo").text("Tienes que ingresar un ID");
  }
});

$("#delete").click(function () {
  let id = $("#inputDelete").val();

  $.ajax({
    url: `${URL}${id}`,
    type: "DELETE",
    success: function (friend) {
      alert("Amigo elimimado ");
    },
  });
});
