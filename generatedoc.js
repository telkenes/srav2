const fs = require('fs')
const endpoints = require('./endpoints.js')
let docs = '# SRA v2 wrapper\n\n**Note:** Use `null` if you want to leave the query empty\n**Example:**\n \`\`\`js\nconst sra = require(\'srav2\')\nsra.chatbot(\'hello\', \'keyhere\'\)\n\`\`\`\n\n'
endpoints.forEach(endpoint => {
    docs += `
## ${endpoint.func}
### Queries
|Query|Required|
|-|-|\n`
    endpoint.queries.forEach(q => {
        docs += `|${q.key}|${q.required}|\n`
    })
})

fs.writeFileSync('./README.md', docs)