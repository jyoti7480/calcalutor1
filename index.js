var result = document.getElementById("result");

function display(number){
    result.value += number;
}

function calculate(){
    var final_number = result.value;
    var final_result = eval(final_number);
    result.value = final_result;
}

function clrs(){
    result.value="";
}

function del() {
    const result = document.getElementById('result'); 

    const currentValue = result.value;
    const modifiedValue = currentValue.slice(0, -1);

    // Set the modified value back to the input element
    result.value = modifiedValue;
}