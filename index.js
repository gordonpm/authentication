const bcrypt = require('bcrypt');

// generates the hash
const hashPassword = async (pw) => {
    //const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(pw, 12);
    //console.log(salt);
    console.log(hash);
}

// verifies the password by comparing with hash
const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if (result) {
        console.log("Logged in Successfully!");
    } else {
        console.log("INCORRECT LOGIN!");
    }
}

//hashPassword('monkey');
login('monkey', '$2b$12$wTQaS8pXm2korcHpG9f2tOfK0200kuK1oJ47Or0EcvLCbZz97z4tm');