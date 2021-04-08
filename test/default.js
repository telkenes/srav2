let sra = require('../index.js')

sra.chatbot('hello', 'frick').then(res => console.log(res)).catch(e => console.log(e))