function chkName() 
{
    // 1. Case Insensite
    // 2. May include character spaces ('') and/or hyphen ('-').
    // 3, They hyphen symbol should only be preceded by one or more alphabet characters
    // 4. Hyphen should not appear as the first or last character
    var name = document.getElementById("fname").value;
    // matches all cases of A-Z,a-z and it must end with an alphabet
    var regexp = /^[A-Za-z\-\s]*([A-Za-z\s])$/;
    if((regexp.test(name)))
    {
        alert("Solid name");
    }
    else
    {
        alert("Sloppy name");
    }

}


function chkEmail() 
{
    //1. Consist of username and domian name
    //2. the two part should be seperated by single character '@'
    //3. the username consists of word characters and may include a period ('.'), but should not appea as the first or last character
    //4. the domian name compromises of only alphabet characters and has at least two but not more than four extensions.
    //5. Each extension is seperated by a period.
    //6. The last extension should only have between two and three alphabet characters.
    // *  match the previous expression zero or infinite times
    // + match the previous expression zero or infinite times
    var email = document.getElementById("email").value;
    var regexp = /^([\w])[[\w\.]*([\w])+@([\w]+\.){1,3}([\w]){2,3}$/;
    if((regexp.test(email)))
    {
        alert("Solid email");
    }
    else
    {
        alert("Sloppy email");
    }

}

function chkPassword() 
{
    // password should 
    //1. Begin with an uppercase letter
    //2. at least 1 non-word character, !@#$%
    //3. 8 characters 
    //4. if digits, (?=.*\d)
    var pw = document.getElementById("pw").value;
    var regexp = /^[A-Z]+(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if((regexp.test(pw)))
    {
        alert("Solid pw");
    }
    else
    {
        alert("Sloppy pw");
    }

}

function chkPhone() 
{
    // Should contain at least 10 numeric digits
    // May be seperated by a period ('.') symbol after first 2 digits
    var tel = document.getElementById("tel").value;
    var regexp = /^(([0-9]{10})|([0-9]{2}\.[0-9]{8}))$/;
   
    if (tel.trim()=="")
    {
        alert("Empty tel");
    }
    else if((regexp.test(tel)))
    {
        alert("Solid tel");
    }
    else
    {
        alert("Sloppy tel");
    }

}