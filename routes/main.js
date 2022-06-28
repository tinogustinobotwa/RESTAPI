__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/docs', (req, res) => {
    res.sendFile(__path + '/views/docs-1.html')
})
router.get('/docs/downloader', (req, res) => {
    res.sendFile(__path + '/views/download.html')
})
router.get('/docs/textmaker', (req, res) => {
    res.sendFile(__path + '/views/textmaker.html')
})
router.get('/docs/islami', (req, res) => {
    res.sendFile(__path + '/views/islami.html')
})
router.get('/docs/simisimi', (req, res) => {
    res.sendFile(__path + '/views/simisimi.html')
})
router.get('/docs/primbon', (req, res) => {
    res.sendFile(__path + '/views/primbon.html')
})
router.get('/docs/randomimage', (req, res) => {
    res.sendFile(__path + '/views/randomimage.html')
})
router.get('/docs/nsfw', (req, res) => {
    res.sendFile(__path + '/views/nsfw.html')
})
router.get('/docs/randomanime', (req, res) => {
    res.sendFile(__path + '/views/randomanime.html')
})
router.get('/docs/sticker', (req, res) => {
    res.sendFile(__path + '/views/sticker.html')
})
router.get('/', (req, res) => {
    res.sendFile(__path + '/views/docs.html')
})
router.get('/api/game', (req, res) => {
    res.sendFile(__path + '/views/game.html')
})

router.get('/about', (req, res) => {
    res.sendFile(__path + '/views/about.html')
})

module.exports = router
