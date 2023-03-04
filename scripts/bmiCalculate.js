//bmiCalculate.js
//Functions to perform the BMI value calculation,
//to one place after the decimal, assuming all data
//input by the user has been validated

function valueOfBMI(bmiFormObj)
{
    var hUnit = bmiFormObj.heightUnit.
        options[bmiFormObj.heightUnit.selectedIndex].text;
    var wUnit = bmiFormObj.weightUnit.
        options[bmiFormObj.weightUnit.selectedIndex].text;
    var height = bmiFormObj.height.value;
    var weight = bmiFormObj.weight.value;

    if (hUnit == "inches") height = inchesToCentimetres(height);
    if (wUnit == "pounds") weight = poundsToKilograms(weight);
    
    height /= 100.0; //Convert height from centimeters to meters
    var bmi = weight/(height*height); //kilograms/(meters*meters)
    return bmi;
}

function inchesToCentimetres(height)
{
    var CENTIMETRES_PER_INCH = 2.54;
    return height * CENTIMETRES_PER_INCH;
}

function poundsToKilograms(weight)
{
    var POUNDS_PER_KILOGRAM = 2.20462;
    return weight / POUNDS_PER_KILOGRAM;
}

function valueTo1DecimalPlace(num)
{
    var intPortion = Math.floor(num);
    var decimalPortion = Math.round(num*10)%10;
    var text = intPortion + "." + decimalPortion;
    return text;
}

function displayDetails(bmiFormObj, bmi)
{
    var hUnit = bmiFormObj.heightUnit.
        options[bmiFormObj.heightUnit.selectedIndex].text;
    var wUnit = bmiFormObj.weightUnit.
        options[bmiFormObj.weightUnit.selectedIndex].text;
    var height = bmiFormObj.height.value;
    var weight = bmiFormObj.weight.value;
    var text = "BMI Report\n" +
        "Your weight: " + weight + " " + wUnit + "\n" +
        "Your height: " + height + " " + hUnit + "\n" +
        "Your BMI: " + valueTo1DecimalPlace(bmi) + "\n";
    if (bmi < 18.5)
        text += "Your BMI suggests that you are underweight.\n";
    else if (bmi < 25)
        text += "Your BMI suggests that you have a reasonable weight.\n";
    else if (bmi < 29)
        text += "Your BMI suggests that you may be overweight.\n";
    else
        text += "Your BMI suggests that you may be obese.\n";
    alert(text);
}

