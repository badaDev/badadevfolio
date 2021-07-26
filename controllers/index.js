const PostController = require('./PostController')
const ItemController = require('./ItemController')
const ContactController = require('./ContactController')

module.exports = {
  post: PostController,
  item: ItemController,
  contact: ContactController
}
