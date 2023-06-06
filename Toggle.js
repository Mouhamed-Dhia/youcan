 document.addEventListener("DOMContentLoaded", function() {
     var Theme = getCookie("Youcan-Theme");
    if(Theme == "dark"){
      document.getElementById("toggle").checked='true';
      displayToggel("var(--primary-color)","none","block");
      addCSSLink("https://cdn.jsdelivr.net/gh/Mouhamed-Dhia/youcan/Dark-Theme.css");
    }else{
       setCookie("Youcan-Theme", "light", 30);
    }
    });


function addCSSLink(url) {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = url;
  document.head.appendChild(link);
}
function removeCSSLink(url) {
  var links = document.getElementsByTagName("link");
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    if (link.href === url && link.rel === "stylesheet") {
      link.parentNode.removeChild(link);
      break;
    }
  }
}
function getCookie(name) {
  var cookieName = name + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(";");

  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return decodeURIComponent(cookie.substring(cookieName.length, cookie.length));
    }
  }
  return "";
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}
  const divElements = document.querySelectorAll('body > div');
     if (divElements[1]) {
  // Remove the element from the DOM
  divElements[1].parentNode.removeChild(divElements[1]);
}

function displayToggel(c,n,b){
  document.getElementsByClassName("toggle-label")[1].style.backgroundColor=c;
    document.getElementsByClassName("fa-sun")[1].style.display=n;
    document.getElementsByClassName("fa-moon")[1].style.display=b;
}

for(i=0;i<2;i++){
var container = document.getElementsByClassName("header-right")[i];
var newElement = document.createElement("div");
newElement.setAttribute("class","header-element");
element3=container.firstChild;
container.insertBefore(newElement, element3);
if(i==0){
document.querySelectorAll('.desktop-bar > .container > .header-right > .header-element:first-child')[0].innerHTML='<input type="checkbox" id="toggle" class="toggle-checkbox"><label for="toggle" class="toggle-label"><i class="fas fa-sun"></i><i class="fas fa-moon"></i></label>';

}
else{
  document.querySelectorAll('.mobile-bar > .container > .header-right > .header-element:first-child')[0].innerHTML='<input type="checkbox" id="toggle" class="toggle-checkbox"><label for="toggle" class="toggle-label"><i class="fas fa-sun"></i><i class="fas fa-moon"></i></label>';

}
}

var checkbox = document.getElementById("toggle");
var body = document.body;

checkbox.addEventListener("change", function() {
  if (checkbox.checked) {
    displayToggel("var(--primary-color)","none","block");
    addCSSLink("https://cdn.jsdelivr.net/gh/Mouhamed-Dhia/youcan/Dark-Theme.css");
    setCookie("Youcan-Theme", "dark", 30);
  } else {
    displayToggel("grey","block","none");
   removeCSSLink("https://cdn.jsdelivr.net/gh/Mouhamed-Dhia/youcan/Dark-Theme.css");
   setCookie("Youcan-Theme", "light", 30);
  }
});
