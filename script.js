function isNumberKey(evt)
    {
      var charCode = (evt.which) ? evt.which : event.keyCode;
      if ((charCode < 48 || charCode > 57) && charCode!==46)
      return false;
    
      return true;
    }
    

    function calculate(){
        var p = Number(document.getElementById("principle").value);
        var t = Number(document.getElementById("time").value);
        var r = Number(document.getElementById("rate-of-interest").value);
        
        
        var interest = p*t*r/100;

        var final = interest+p;
        
        document.getElementById("interest").innerHTML = "₨. "+interest;
        document.getElementById("final").innerHTML = "₨. "+final;
         
        
    }