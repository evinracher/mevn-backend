import express from 'express'
import Note from '../models/notes'

const router = express.Router()

router.post('/notes', async (req, res) => {
  const { body } = req
  try {
    const noteDB = await Note.create(body)
    res.status(200).json(noteDB)
  } catch (error) {
    return res.status(500).json({
      message: 'An error ocurred on the server',
      error
    })
  }
})

router.get('/notes/:id', async (req, res) => {
  const _id = req.params.id
  try {
    const noteDB = await Note.findOne({ _id })
    return res.status(200).json(noteDB)
  } catch (error) {
    return res.status(400).json({
      message: 'An error ocurred on the server',
      error
    })
  }
})

router.get('/notes', async (req, res) => {
  try {
    const notesDB = await Note.find()
    return res.status(200).json(notesDB)
  } catch (error) {
    return res.status(400).json({
      message: 'An error ocurred on the server',
      error
    })
  }
})

router.delete('/notes/:id', async (req, res) => {
  const _id = req.params.id
  try {
    const noteDB = await Note.findByIdAndDelete({ _id })
    if (!noteDB) {
      return res.status(400).json({
        message: 'Id not found'
      })
    }
    return res.status(200).json(noteDB)
  } catch (error) {
    return res.status(400).json({
      message: 'An error ocurred on the server',
      error
    })
  }
})

router.put('/notes/:id', async (req, res) => {
  const _id = req.params.id
  const { body } = req
  try {
    const noteDB = await Note.findByIdAndUpdate(_id, body, { new: true })
    if (!noteDB) {
      return res.status(400).json({
        message: 'Id not found'
      })
    }
    res.status(200).json(noteDB)
  } catch (error) {
    return res.status(500).json({
      message: 'An error ocurred on the server',
      error
    })
  }
})

module.exports = router