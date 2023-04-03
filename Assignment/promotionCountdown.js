startTime();
setInterval("startTime()", 1000);

function startTime() {
   var today = new Date();

   var newyear=new Date("May 9 , 2021");
   
   var dayleft=(newyear-today)/(1000*60*60*24);

   if (dayleft > 0) {
      document.getElementById("dayLeft").textContent = Math.ceil(dayleft) + " Day(s) Left";
   
   } else if (dayleft > -1)  {
     document.getElementById("dayLeft").textContent = "It's Mother's Day!";

  }  else  {
      document.getElementById("dayLeft").textContent = "";
  }  

}  