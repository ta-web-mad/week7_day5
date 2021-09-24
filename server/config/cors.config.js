const cors = require('cors');

const whitelist = [process.env.ORIGIN];

const corsOptions = {
  origin: (origin, cb) => {
    const isOriginWhiteListed = whitelist.includes(origin);
    cb(null, isOriginWhiteListed);
  },
  credentials: true
}


module.exports = (app) => app.use(cors(corsOptions));