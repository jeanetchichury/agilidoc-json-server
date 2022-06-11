module.exports = (req, res, next) => {
    res.header('Content-Range', 'posts 0-1000/1000')
    next()
  }