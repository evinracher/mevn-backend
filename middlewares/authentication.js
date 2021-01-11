import jwt from 'jsonwebtoken'
import { secret } from '../utils/constants'

const verifyAuth = (req, res, next) => {
  const token = req.get('token', secret)
  jwt.verify(token, secret, (error, decoded) => {

    if (error) {
      return res.status(401).json({
        message: 'Invalid token',
      })
    }

    req.user = decoded.data
    next()
  })
}

const verifyAdmin = (req, res, next) => {
  const role = req.user.role
  console.log(role)
  if (role != 'ADMIN') {
    return res.status(403).json({
      message: 'User is not an admin',
    })
  }
  next()
}

module.exports = { verifyAuth, verifyAdmin }