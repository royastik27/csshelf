// EMAIL VALIDATOR
const verifiedMails = [ 'gmail', 'yahoo', 'hotmail' ];

exports.email = function(email) {

    let i, len = email.length, provider = "";
    
    // GO TILL '@'
    for(i = 0; i < len; ++i)
        if(email.charAt(i) === '@')
            break;
    
    // TAKE THE FOLLOWING CHARACTERS UNTIL '.'
    for(i = i + 1; i < len; ++i)
    {
        if(email.charAt(i) === '.')
            break;

        provider += email.charAt(i);
    }
    
    // CHECK VALIDITY
    len = verifiedMails.length;

    for(let i = 0; i < len; ++i)
        if(provider === verifiedMails[i])
            return true;
    
    return false;
};

// PASSWORD VALIDATOR
const specialChars = [ '@', '*', '#', '$', '&', '?', '!' ];

exports.password = function(password) {

    let len = password.length, specialChar, digit, upperCase, lowerCase;

    // AT LEAST 8 CHARACTERS
    if(len < 8) return false;

    specialChar = digit = upperCase = lowerCase = others = false;

    let i, j, specialCharsLen = specialChars.length, ch;

    for(i = 0; i < len; ++i)
    {
        ch = password[i];

        // FOR SPECIAL CHARACTER
        for(j = 0; j < specialCharsLen; ++j)
            if(ch === specialChars[j])
                { specialChar = true; break; }
        
        if(j < specialCharsLen)
            continue;

        // FOR DIGIT
        if(ch >= '0' && ch <= '9')
            digit = true;
        // FOR ALPHABETS (LOWERCASE & UPPERCASE)
        else if(ch >= 'A' && ch <= 'Z')
            upperCase = true;
        else if(ch >= 'a' && ch <= 'z')
            lowerCase = true;
        else
            others = true;
    }

    // console.log(`${others}, ${upperCase}, ${lowerCase}, ${digit}, ${specialChar}`);

    return (!others && upperCase && lowerCase && digit && specialChar);
}