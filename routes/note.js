import express from 'express'
import Note from '../models/note'
import { verifyAuth } from '../middlewares/authentication'

const router = express.Router()

router.post('/notes', [verifyAuth], async (req, res) => {
  const { body } = req
  body.userId = req.user._id
  try {
    const noteDB = await Note.create(body)
    res.status(200).json(noteDB)
  } catch (error) {
    return res.status(500).json({
      message: 'An error ocurred on the server.',
      error
    })
  }
})

router.get('/notes/:id', [verifyAuth], async (req, res) => {
  const _id = req.params.id
  try {
    const noteDB = await Note.findOne({ _id })
    return res.status(200).json(noteDB)
  } catch (error) {
    return res.status(400).json({
      message: 'An error ocurred on the server.',
      error
    })
  }
})

router.get('/notes', [verifyAuth], async (req, res) => {
  const limit = Number(req.query.limit) || 5
  const page = Number(req.query.page) || 1
  const offset = (page - 1) * limit
  const userId = req.user._id
  try {
    const notesDB = await Note.find({ userId }).limit(limit).skip(offset)
    const totalNotes = await Note.find({ userId }).countDocuments()
    return res.status(200).json({ results: notesDB, count: totalNotes })
  } catch (error) {
    return res.status(400).json({
      message: 'An error ocurred on the server.',
      error
    })
  }
})

router.delete('/notes/:id', [verifyAuth], async (req, res) => {
  const _id = req.params.id
  try {
    const noteDB = await Note.findByIdAndDelete({ _id })
    if (!noteDB) {
      return res.status(400).json({
        message: 'Id not found.'
      })
    }
    return res.status(200).json(noteDB)
  } catch (error) {
    return res.status(400).json({
      message: 'An error ocurred on the server.',
      error
    })
  }
})

router.put('/notes/:id', [verifyAuth], async (req, res) => {
  const _id = req.params.id
  const { body } = req
  try {
    const noteDB = await Note.findByIdAndUpdate(_id, body, { new: true })
    if (!noteDB) {
      return res.status(400).json({
        message: 'Id not found.'
      })
    }
    res.status(200).json(noteDB)
  } catch (error) {
    return res.status(500).json({
      message: 'An error ocurred on the server.',
      error
    })
  }
})

module.exports = router