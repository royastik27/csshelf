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
exports.password = function(password) {
    return (password.length >= 8);
}