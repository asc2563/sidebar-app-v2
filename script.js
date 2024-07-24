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

function goToWebsite1() {
  var selectBox = document.getElementById("rammy");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  if (selectedValue != "") {
    window.location = selectedValue;
  }
}

function goToWebsite3() {
  var selectBox = document.getElementById("holyub");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  if (selectedValue != "") {
    window.location = selectedValue;
  }
}
