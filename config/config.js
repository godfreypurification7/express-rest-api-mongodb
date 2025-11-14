require("dotenv").config();

const dev = {
    app: {
        port: process.env.PORT || 4000,
    },
    db: {
        url: process.env.DB_URL || "mongodb://localhost:45.248.151.62/userDemoDB"
    },
};

module.exports = dev;