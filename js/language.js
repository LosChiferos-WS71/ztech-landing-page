var check=document.querySelector(".check")
check.addEventListener('click',language)

function language(){
  let id=check.checked;
  if (id==true){
    location.href="es/index.html"
  }else{
    location.href="../index.html"
  }
}
