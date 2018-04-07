/*############# HTML-rol beolvasas ##############*/

var numField1 = document.getElementById('numField1');

var numField2 = document.getElementById('numField2');

var resultField = document.getElementById('resultField');

var form = document.getElementById('xIsWhatPercentOfY');

//////// TEST IF WORKS

/*
numField1.value = "test1";
numField2.value = "test2";
resultField.innerText = "test3";
*/


/*############# EVENT LISTENERS ##############*/

var myCalcFunction = function(event) {
    //alert("We clickeyclacked something!");
    
    if (!numField1.value || !numField2.value) {
        alert("Please enter values in the fields!");
    } else {
        
        //parseFloat to convert Strings to Floats
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);
        
        var result = x / y;
        var percent = result * 100;
        
        resultField.innerText = "Answer: " + percent + " %";
        
        //pls don't refresh the page
        event.preventDefault();
    }
    
}

form.addEventListener('submit', myCalcFunction);










