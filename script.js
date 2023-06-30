const div = document.querySelectorAll(".list");

function toggle(value) {
  div.forEach((ul) =>
    ul.id == value ? ul.classList.add("active") : ul.classList.remove("active")
  );
  console.log(value);
}
