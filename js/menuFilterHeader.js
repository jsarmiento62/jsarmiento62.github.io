function menuHeaderAdd (filterDiv,filterText){
    console.log(filterDiv,filterDiv);
    document.getElementById(filterDiv).style.textAlign="center";  
    document.getElementById(filterDiv).innerHTML = filterText;
}


function menuHeaderShow(filterDiv){
   menuHeaderClear();
    var x = document.getElementById(filterDiv);
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}

function menuHeaderClear(){
     //clear the previous filter
    document.getElementById("tacoHeader").style.display = "none";
    document.getElementById("burritoHeader").style.display = "none";
    document.getElementById("tortaHeader").style.display = "none";
    document.getElementById("gorditaHeader").style.display = "none";
    document.getElementById("miscHeader").style.display = "none";
    document.getElementById("extraHeader").style.display = "none";
    
}
    
        