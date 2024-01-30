const changeInputSize = document.getElementById("font-size-control");
const textChange = document.getElementById("text");

changeInputSize.addEventListener("input", (e) => {
  textChange.style.fontSize = changeInputSize.value + "px";
});
