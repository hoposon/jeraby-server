const axios = require('axios').default;

const verifyRecaptcha = async (req, res, next) => {
  const secret_key = process.env.RECAPTCHA_SECRET_KEY;
  const token = req.body.token;
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;

  try {
    const response = await axios.post(url)
    const google_response = await response.json()
    next()
    // res.json({google_response})
  } catch(error) {
    res.status(401).json({error})
  }
}

module.exports = {
  verifyRecaptcha
}