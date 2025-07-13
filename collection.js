var productContainer = document.getElementById("product")
var search=document.getElementById("search")
var productList=productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredvalue = event.target.value.toUpperCase()
    for(i=0;i<productList.length;i++)
    {
      var productname = productList[i].querySelector("p").textContent
      if(productname.toUpperCase().indexOf(enteredvalue)<0)
         {
            productList[i].style.display="none"  
               }
               else{
                  {
            productList[i].style.display="block"  
               }  
               }  
    }
})