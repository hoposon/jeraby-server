// const axios = require('axios').default;
const { sendEmail: send} = require('../utils/sendEmail')

const sendEmail = async (req, res) => {
  console.log("🚀 ~ file: send-email.js ~ line 5 ~ sendEmail ~ req", req.body)
  
  if (req.body && req.body.subject && req.body.message) {
    try {
      await send(req.body)
      res.json({"email-sent": "OK"})
    } catch(e) {
      res.status(500).json({"error": JSON.stringify(e, Object.getOwnPropertyNames(e))})
    }
  } else {
    console.log("🚀 ~ file: send-email.js ~ line 5 ~ sendEmail ~ req")
    res.status(400).end()
  }
}

module.exports = {
  sendEmail
}