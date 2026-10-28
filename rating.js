function setRating(rating){
    const stars=document.querySelectorAll(".star");
    stars.forEach(function(stars,index){
        if(index<rating){
            stars.classList.add("filled");
        } 
        else
            { 
            stars.classList.remove("filled");
        }
    }); 
document.getElementById("msg").innerText="Rating:"+rating+"/5";
} 



