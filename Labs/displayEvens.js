function clearErrors() {
    for (var loopCounter = 0; 
        loopCounter < document.forms["formEvens"].elements.length; 
        loopCounter++) {
        if (document.forms["formEvens"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["formEvens"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    } 

    /*
    for (var e=document.getElementById("resultNums").childElementCount;e=0;e--){
        document.getElementById("resultNums").removeChild(myBr); 
    }
    */
  
}
function resetForm() {
    clearErrors();
    document.forms["formEvens"]["start_num"].value = "";
    document.forms["formEvens"]["end_num"].value = "";
    document.forms["formEvens"]["step_num"].value = "";
    document.getElementById("resultText").style.display = "none";
    document.getElementById("resultNums").style.display = "none";
    document.getElementById("submitButton").innerText = "Display Evens";
    document.forms["formEvens"]["start_num"].focus();
    window.location.reload();
}
function validateItems() {
    clearErrors();
    var startNum = document.forms["formEvens"]["start_num"].value;
    var endNum = document.forms["formEvens"]["end_num"].value;
    var stepNum = document.forms["formEvens"]["step_num"].value;
    if (startNum == "" || isNaN(startNum)) {
        alert("Starting Number must be filled in with a number.");
        document.forms["formEvens"]["start_num"]
           .parentElement.className = "form-group has-error"
        document.forms["formEvens"]["start_num"].focus();
        return false;
    }
    if (endNum == "" || isNaN(endNum) || endNum<=(startNum*1)) {
        alert("Ending Number must be filled in with a number higher than the starting number.");
        document.forms["formEvens"]["end_num"]
            .parentElement.className = "form-group has-error"
        document.forms["formEvens"]["end_num"].focus();
        return false;
    }
    if (stepNum == "" || isNaN(stepNum) || stepNum<1) {
        alert("Step must be filled in with a positive number.");
        document.forms["formEvens"]["step_num"]
            .parentElement.className = "form-group has-error"
        document.forms["formEvens"]["step_num"].focus();
        return false;
    }
    document.getElementById("resultText").style.display = "block";
    document.getElementById("resultNums").style.display = "block";    
    document.getElementById("submitButton").innerText = "Recalculate";
    //var returnText = "";
    var myReturnNums = document.getElementById("resultNums");
    var myBr = document.createElement("br");
    var evenNums = new Array();
    document.getElementById("resultText").innerText = "Here are the even numbers between "+startNum+" and "+endNum+" by "+stepNum+"'s:"
    for (var loopCounter=(startNum*1);loopCounter<=(endNum*1);loopCounter=loopCounter+(stepNum*1)){
        if (loopCounter%2==0){
            evenNums.push(loopCounter);
        }
    }
    var br = document.createElement("br");
    var oo = document.getElementById("resultNums");
    for (var i=0;i<evenNums.length;i++){
        myReturnNums.innerText += evenNums[i];
        myReturnNums.appendChild(myBr);
    }
    //document.getElementById("resultText").innerText = returnText;
    //document.getElementById("resultNums").innerText = returnNums;
    
    // We are returning false so that the form doesn't submit 
    // and so that we can see the results
    return false;
}