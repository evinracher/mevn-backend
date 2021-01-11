import express from 'express'
import User from '../models/user'
import bcrypt from 'bcrypt'
import _ from 'underscore'
import { verifyAuth, verifyAdmin } from '../middlewares/authentication'

const saltRounds = 10;
const router = express.Router()

router.post('/users', async (req, res) => {
  const body = {
    ...req.body,
    password: bcrypt.hashSync(req.body.password, saltRounds)
  }

  try {
    const userDB = await User.create(body)
    res.status(200).json(userDB)
  } catch (error) {
    return res.status(500).json({
      message: 'An error ocurred on the server.',
      error
    })
  }
})

router.delete('/users/:id', [verifyAuth, verifyAdmin], async (req, res) => {
  const _id = req.params.id
  try {
    const userDB = await User.findByIdAndDelete({ _id })
    if (!userDB) {
      return res.status(400).json({
        message: 'Id not found.'
      })
    }
    return res.status(200).json(userDB)
  } catch (error) {
    return res.status(400).json({
      message: 'An error ocurred on the server.',
      error
    })
  }
})

router.put('/users/:id', [verifyAuth, verifyAdmin], async (req, res) => {
  const _id = req.params.id
  const body = _.pick(req.body, ['name', 'email', 'password', 'active'])
  if (body.password) {
    body.password = bcrypt.hashSync(req.body.password, saltRounds)
  }
  try {
    const userDB = await User.findByIdAndUpdate(_id, body, { new: true, runValidators: true, context: 'query' })
    if (!userDB) {
      return res.status(400).json({
        message: 'Id not found.'
      })
    }
    res.status(200).json(userDB)
  } catch (error) {
    return res.status(500).json({
      message: 'An error ocurred on the server.',
      error
    })
  }
})

module.exports = router