window.onload = init;

function init() {

    document.forms[0].onsubmit = function() {

        if (this.checkValidity()) {
            if(confirm("Comfirm your reservation? ")==1) {

             cname=document.getElementById('name').value;

             alert("Thank you for reservation , " + cname + " ☺")  

             window.location.reload();

             return false;
            }
        }
    }
  
}