"use strict";

// Configuration variables
const port = process.env.PORT || "4000";
const mongoURI = process.env.MONGODB_URI || "mongodb+srv://backend:Fpq3TwBF1ms4Z9vz@cluster0.ktyep.mongodb.net/shrumapp?retryWrites=true&w=majority";
const JwtSecret = process.env.JWT_SECRET || "very secret secret";

module.exports = {
    port,
    mongoURI,
    JwtSecret,
};
