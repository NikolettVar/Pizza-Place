
//Validation of username and password fields

function checkInfo(){
    let username = document.forms["myForm"]["username"].value;
    let password = document.forms["myForm"]["password"].value;
        if(username === "" || password ===""){
            alert("Please fill in both Username and Password fields");
            return false;
        } 
        else{
            return true;
        }
}


//Validation of number input - pizza amount should be a reasonable number, ie between 1 and 20
function validNumber(){
    let pizzaAmount = document.forms["myPizzas"]["amount"].value;
        if(isNaN(pizzaAmount) || pizzaAmount < 1 || pizzaAmount > 20){
            alert("Please enter a number between 1 and 20");
            return false;
        }
        else{
            return true;
        }
}

//Function to grab the values from dropdown list
function getSelectedValue(){
    let selectedValue = document.getElementById("list").value;
    return selectedValue;  
}

getSelectedValue();

//Calculation of the total 
function calcTotal(){    
  
    let amount = document.forms["myPizzas"]["amount"].value;
    let selected = getSelectedValue();
    let total = selected * amount;    
  
    document.getElementById("total").innerHTML = total;
    return total;    
}

calcTotal();


//Calculation of total -10% discount
function calcDiscountedTotal(){
    let sum = calcTotal();
    let discountedTotal;
    let discountCode = document.forms["myPizzas"]["discountCode"].value;
    if(discountCode === "extracheese"){
        discountedTotal = sum - (sum*0.1);
    }
    else if(discountCode === ""){
        discountedTotal = "Please enter discount code below";
    }
    else{
        discountedTotal = "That's not a valid discount code";
    }
    document.getElementById("discounted").innerHTML = discountedTotal;

}
calcDiscountedTotal();


//Jamie's stipulation with JQuery
$("#list").on("change", function() {
    
    if($(this).val() === "17") {
      alert("You have chosen our largest pizza. Please be advised that it's really huge.");
    }
  });
