function ChangeNav(index) {
  var p = document.getElementById("section");
  switch (index) {
    case 1:
      p.innerHTML = '<iframe width=100% height=100% src="./w01/intro.html">';
      p.style.backgroundColor = "azure";
      break;

    case 2:
      p.innerHTML = '<iframe width=100% height=100% src="./w01/pokemon.html">';
      p.style.backgroundColor = "azure";
      break;

    case 3:
      p.innerHTML = '<iframe width=100% height=100% src="./w02/blog.html">';
      p.style.backgroundColor = "azure";
      break;
    case 4:
      p.innerHTML =
        '<iframe width=100% height=100% src="./w02/imageGallery.html">';
      p.style.backgroundColor = "azure";
      break;
    case 5:
      p.innerHTML = '<iframe width=100% height=100% src="./w03/div.html">';
      p.style.backgroundColor = "azure";
      break;
    case 6:
      p.innerHTML = '<iframe width=100% height=100% src="./tku60.html">';
      p.style.backgroundColor = "azure";
      break;
  }
}
