function hover() {
  if(document.getElementsByTagName) {
    var images = document.getElementsByTagName("img");

    for(var i=0; i < images.length; i++) {
      if(images[i].getAttribute("src").match("_001."))
      {
        images[i].onmouseover = function() {
          this.setAttribute("src", this.getAttribute("src").replace("_001.", "_002."));
        }
        images[i].onmouseout = function() {
          this.setAttribute("src", this.getAttribute("src").replace("_002.", "_001."));
        }
      }
    }
  }
}

if(window.addEventListener) {
  window.addEventListener("load", hover, false);
}
else if(window.attachEvent) {
  window.attachEvent("onload", hover);
}