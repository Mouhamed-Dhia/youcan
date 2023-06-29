function changeIcon(oldIcon,newIcon){
     var element = document.getElementsByClassName(oldIcon)[0];
      element.classList.remove("yc");
      element.classList.remove(oldIcon);
      element.classList.add("fa-solid");
      element.classList.add(newIcon);
   }
 document.addEventListener("DOMContentLoaded", function() {
changeIcon("yc-shopping-cart","fa-bag-shopping");
changeIcon("yc-menu","fa-bars-staggered");
});

   document.getElementsByClassName("cart-switcher")[0].innerHTML='<div class="currency-value" style="color:#ffffff;"><span class="value">0</span><span class="currency">&nbsp;د.ت</span></div> <div class="cart-icon"><i class="fa-solid fa-bag-shopping" style="color:#ffffff;"></i></div><span class="cart-count" style="display: none;">0</span>';
   
