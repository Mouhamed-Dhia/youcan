/*     
------This Code By Mouhamed Dhia Fajria--------

 Email    : ----->  " Mouhameddhia@myself.com "
 whatsApp : ----->  " +21620940425 "
 
 */
function FreeOrder(email){
  const elements = document.querySelectorAll('.contact-form');
  const count = elements.length;
    if (count==0)
    {
      document.getElementsByName("email")[0].setAttribute("value",email);
      document.getElementsByClassName("form-group")[2].setAttribute("style","display:none");
    }
}
