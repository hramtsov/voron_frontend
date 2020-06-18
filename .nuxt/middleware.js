const middleware = {}

middleware['page'] = require('../middleware/page.js')
middleware['page'] = middleware['page'].default || middleware['page']

export default middleware
