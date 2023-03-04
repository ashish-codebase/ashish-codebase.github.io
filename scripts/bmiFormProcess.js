//bmiFormProcess.js
//The "driver" function that handles, at the highest level,
//the form data validation and display of the the BMI value

function bmiFormProcess()
{
    var bmiFormObj = document.getElementById("bmiForm");
    if (bmiFormValidate(bmiFormObj))
    {
        var bmi = valueOfBMI(bmiFormObj);
        if (bmiFormObj.details.checked)
            displayDetails(bmiFormObj, bmi);
        else
            alert("Your BMI: " + valueTo1DecimalPlace(bmi));
    }
}
