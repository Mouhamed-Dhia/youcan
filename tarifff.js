try {
  setInterval(function () {
    document
      .querySelector(".single-product .single-submit")
      .classList.toggle("shaked");
  }, 5000);
} catch (error) {
  // Code to handle the error
  console.log("An error occurred: " + error.message);
}

try {
  var text = document.getElementsByClassName("single-variant")[0].innerText;
  var wordToSearch = [
    "gratuite",
    "gratuit",
    "free",
    "free shipping",
    "بلاش",
    "0",
    "مجاني",
    "التوصيل مجاني",
    "livraison gratuite",
    "livraison gratuit",
  ];

  function PrixLivraison(text, wordToSearch) {
    for (let i = 0; i < wordToSearch.length; i++) {
      var matchResult = text.match(wordToSearch[i]);
      if (matchResult) {
        prix = 0;
        res = 1;
        break;
      } else {
        res = 0;
      }
    }
    if (res < 1) {
      prix = Number(text.match(/[\d.]+/g));
    }
    return prix;
  }

  var myElement = document.getElementsByClassName("product-details")[0];

  myElement.addEventListener("change", function (event) {
    /* var activeElementID = event.target.id;*/
    document.getElementById("prixP").innerHTML =
      document.getElementsByClassName("single-price")[0].firstChild.firstChild
        .innerHTML + "<span>دت</span>";

    document.getElementById("prixT").innerHTML =
      prixTotale(text, wordToSearch) + "<span>دت</span>";
  });

  function prixTotale(text, wordToSearch) {
    prixP = Number(document.getElementById("prixP").innerText.match(/[\d.]+/g));
    return prixP + PrixLivraison(text, wordToSearch);
  }
  function appendNewRow(tr, name, prix, id) {
    tBody.appendChild(tr);

    tr.appendChild(document.createElement("td"));
    tr.firstChild.textContent = name;
    tr.appendChild(document.createElement("td"));
    tr.lastChild.textContent = prix;
    tr.lastChild.setAttribute("id", id);
    let spanPrix = document.createElement("span");
    tr.lastChild.appendChild(spanPrix);
    spanPrix.textContent = "دت";

    let span = document.createElement("span");
    span.setAttribute("class", "badgebg-success");
  }
  function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
  }
  let product = document.getElementsByClassName("product-details")[0];
 
  let divCard = document.createElement("div");

  console.log(divCard);
  divCard.setAttribute("style", "margin-bottom:5%;padding: 2%;background-color: #f0f0f0;border-radius: 15px;");
  let cardHeader = document.createElement("div");
  insertAfter(divCard, document.getElementById("express-checkout-section"));
  cardHeader.setAttribute("class", "card-header");
  divCard.appendChild(cardHeader);
  let H3 = document.createElement("h3");
  cardHeader.appendChild(H3);
  H3.setAttribute("class", "card-title");
  H3.setAttribute("style", "float:right");
  H3.innerHTML = "التعريفة";
  let cardBody = document.createElement("div");
  divCard.appendChild(cardBody);
  cardBody.setAttribute("class", "card-body");
  let table = document.createElement("table");
  cardBody.appendChild(table);
  table.setAttribute("class", "table");
  let tBody = document.createElement("tbody");
  table.appendChild(tBody);
  /* document.getElementsByClassName("product-details")[0].setAttribute("onclick","getPrix()");*/

  pP = document.getElementsByClassName("single-price")[0].firstChild.firstChild
    .innerHTML;
  appendNewRow(document.createElement("tr"), "ثمن المنتج", pP, "prixP");
  try{
  appendNewRow(
    document.createElement("tr"),
    "التوصيل",
    PrixLivraison(text, wordToSearch),
    "prixL"
  );}
  catch(error){
    document.getElementById("prixL").innerHTML = "لم يتم تحديد ثمن التوصيل";
    console.log("An error occurred: " + error.message);
  }
  appendNewRow(
    document.createElement("tr"),
    "المبلغ الجملي",
    prixTotale(text, wordToSearch),
    "prixT"
  );

  (function () {
    document.getElementsByClassName("single-order-body")[0].remove();
    setTimeout(function () {
      document.getElementsByClassName("single-order-body")[0].remove();
      console.log("Code is controlling itself after loading.");
    }, 2000);
  })();
} catch (error) {
  console.log("Pour activer Tarif Plugin veuillez ajouter un variant pour la livraison !");
}
try {
  document.getElementsByClassName("single-order-body")[0].remove();
} catch (error) {
  console.log("An error occurred: " + error.message);
}
