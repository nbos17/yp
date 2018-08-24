// JS for mobile menu in Yan's Place Shop
        
document.getElementById("hamburger").addEventListener("click", changeMenu);

function changeMenu() {
  var menu = document.getElementById("mobile-menu"); 

  if (menu.style.maxHeight){
    menu.style.maxHeight = null;
  } else {
    menu.style.maxHeight = menu.scrollHeight + "px";
  }
  
}
