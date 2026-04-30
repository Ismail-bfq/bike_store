function validationForm(){
    //consts
    const bikeName = document.getElementById("bikeName").value;
    const price =document.getElementById(price).value;
    const seller =document.getElementById("seller").value;
    const phone =document.getElementById("phone").value;    
    const image =document.getElementById("image").value;
    // allerts of input not added
    if (image === ""){
        alert("pleas choose a bike image ");
        return false
    }
    if (bikeName === ""){
        alert("pleas choose a bike name");
        return false
    }
    if (price === "" ||price<=0){
        alert("price not given or invalid value ");
        return false
    }
    if (phone.length < 10){
        alert("pleas choose a valid phone number!! ");
        return false
    }
    // not always working 

}