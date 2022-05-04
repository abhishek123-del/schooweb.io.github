

    // responsive menu 
    var responsiveMenu = document.getElementById("responsiveMenu");
    var navigation = document.getElementById("navigation").addEventListener("click",()=>{
        responsiveMenu.style.display = "flex";
    })
    var croseBtn = document.getElementById("croseBtn");
    croseBtn.addEventListener("click",()=>{
        responsiveMenu.style.display = "none";
    })
    // responsiveMenu end 

        // fee section  
    var fee = document.getElementById("fee").addEventListener("click",()=>{
        var feesection = document.getElementById('fee-section').style.display = "block"; 
    }
    )
    var Clossbtn = document.getElementById("Clossbtn").addEventListener("click",()=>{
        var feesection = document.getElementById('fee-section').style.display = "none"; 
    }
    )
    // fee section end

    // time-section 
    var timesection = document.getElementById("time-section"); 
    var time = document.getElementById("Time").addEventListener("click",()=>{
        timesection.style.display = "block";
    })
    var Clossbtn2 = document.getElementById("Clossbtn2").addEventListener("click",()=>{
        timesection.style.display = "none";
    })
    // time-section end 