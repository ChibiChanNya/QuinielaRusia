const jwt = require('jsonwebtoken');

// Generate an Access Token for the given User ID
module.exports = {

    generateAccessToken: function (userId) {
        // How long will the token be valid for
        const expiresIn = '20 hours';
        // Which service issued the token
        const issuer = process.env.JWT_ISSUER;
        // Which service is the token intended for
        const audience = process.env.JWT_AUDIENCE;
        // The signing key for signing the token
        const secret = process.env.JWT_SECRET;

        const token = jwt.sign({}, secret, {
            expiresIn: expiresIn,
            audience: audience,
            issuer: issuer,
            subject: userId.toString()
        });

        return token;
    }
};
