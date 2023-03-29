setInterval(disCOL, .1)

function genCOL(){
    var color = '#';
    var letters = "0123456789ABCDEF";
    for (var i = 0; i < 6; i++){
        color += letters[(Math.floor(Math.random() * 16))];
        }
    return color
}
function disCOL(){
 
  
    const l = ["one","two","three","four","five","six","seven","eight","nine"]
      

  
      
 
 
    

    for(i = 0; i < 9;i++){

        document.getElementById(l[i]).style.backgroundColor = genCOL();
        document.getElementById(l[i]).style.color = genCOL();

    }

    document.body.style.backgroundColor = genCOL();

    
}