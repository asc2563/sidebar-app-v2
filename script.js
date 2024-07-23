var search;
window.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    search_bing();
  }
});
function search_bing() {
  if (search == null || search == "") {
    alert("please search something");
  } else {
    window.open(`https://bing.com/search?q=${search}`);
  }
}
