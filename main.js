function closeAllFolders(){
    for(i=1;i<=3;i++){
  document.getElementById(`folder_${i}`).classList.add("hide");
  document.querySelector(".backbtn").classList.remove("hide");
    }
  }
  
  function closeAllDates(){
    for(i=1;i<=3;i++){
  document.getElementById(`date_${i}`).classList.add("hide");
   }
  }
  
  function one(){
   document.querySelector(".one").style.display="block";
  closeAllFolders();
  closeAllDates();
  
  }
  function two(){
    document.querySelector(".two").style.display="block";
   closeAllFolders();
   closeAllDates();
   
   }
   function three(){
    document.querySelector(".three").style.display="block";
   closeAllFolders();
   closeAllDates();
   
   }
  function backButton(){
    document.querySelector(".backbtn").classList.add("hide");
    for(i=1;i<=3;i++){
        document.getElementById(`folder_${i}`).classList.remove("hide");
     document.getElementById(`date_${i}`).classList.remove("hide");
    
      }
    document.querySelector(".one").style.display="none";
    
document.querySelector(`.two`).style.display="none";
document.querySelector(`.three`).style.display="none";
}

  function closeButton(){
    document.querySelector(".backbtn").classList.remove("hide");
    
  }
  