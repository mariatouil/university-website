const humburger = document.querySelector(".fa-bars");
console.log(humburger);

 const navbar = document.querySelector(".nav-bar");
 const closeicon=document.querySelector(".fa-times");
closeicon.style.cursor="pointer";
 console.log(navbar);
  humburger.addEventListener("click",(eo)=>{
  navbar.style.right = "0";});
  closeicon.addEventListener("click",(eo)=>{
  navbar.style.right = "-200px";});