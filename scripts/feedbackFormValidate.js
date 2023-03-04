//feedbackFormValidate.js
//Functions to perform data validation on data entered by
//the user into the feedback form, and to display appropriate
//error messages if problems with the data are discovered

function feedbackFormValidate()
{
    var contactFormObj = document.getElementById("contactForm");
    var firstName = contactFormObj.firstName.value;
    var lastName = contactFormObj.lastName.value;
    var phone = contactFormObj.phone.value;
    var email = contactFormObj.email.value;
    var everythingOK = true;
    var message = contactFormObj.message.value;
    var rating = contactFormObj.Rating.value;
    var words = 0;

    if (!validateName(firstName))
    {
        alert("Error: Invalid first name.");
        everythingOK = false;
    }

    if (!validatePhone(phone))
    {
        alert("Error: Invalid phone number.");
        everythingOK = false;
    }
    
    if (!validateEmail(email))
    {
        alert("Error: Invalid e-mail address.");
        everythingOK = false;
    }
   if (!validateMessage(message))
   {
    alert("Error: Message box is empty.");
    everythingOK = false;
   }

   words = wordCount(message);

   var alertSummary = "Here is the summary of the form you just filled.\n\n";
   alertSummary += "Total word counts ="+words + "\n";
   alertSummary += "You reated this page with "+rating + " stars!\n";
   alertSummary += "Your email address valid?: ="+validateEmail(email) + "\n";
   alertSummary += "You selected to get a reply?:="+contactFormObj.reply.checked + "\n";
   alert(alertSummary);
}

function validateName(name)
{
    var p = name.search(/^[-'\w\s]+$/);
    if (p == 0)
        return true;
    else
        return false;
}

function validatePhone(phone)
{
    var p1 = phone.search(/^\d{3}[-\s]{0,1}\d{3}[-\s]{0,1}\d{4}$/);
    var p2 = phone.search(/^\d{3}[-\s]{0,1}\d{4}$/);
    if (p1 == 0 || p2 == 0)
        return true;
    else
        return false;
}

function validateEmail(address)
{
    var p = address.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/);
    if (p == 0)
        return true;
    else
        return false;
}

function validateMessage(message)
{
    if (message.length==0)
    {
        return false;
    }
    else
    {
        words = wordCount(message);
        return true;
    }
}
function wordCount(message)
{
    message = message.replace(/  +/g, ' ');
    "Source: https://www.tutorialrepublic.com/faq/how-to-replace-multiple-spaces-with-single-space-in-javascript.php"
    var count = 0;
    rawWords = message.split(" ");
    for (let i = 0; i < rawWords.length; i++) {
        if (rawWords[i].length>0)
        {
            count+=1;
        }        
      }      
    return count;
}
