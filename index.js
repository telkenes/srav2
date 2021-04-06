const phin = require('phin')
const endpoints = require('./endpoints.js')
let method = {}

endpoints.forEach(endpoint => {
    let info = endpoint.func.split('.')
    if (!method[info[0]] && info[1]) method[info[0]] = {}
    if (info[1]) {
        method[info[0]][info[1]] = (...args) => {
            return new Promise(async (resolve, reject) => {
                let q = cq(endpoint.queries, args)
                if (q.startsWith('error')) return reject({ "error": q.replace('error', '') })
                if (endpoint.output === 'djsp') return resolve({files: [{attachment: 'https://some-random-api.ml' + endpoint.path + q,name: 'output.png'}]})
                if (endpoint.output === 'djsg') return resolve({files: [{attachment: 'https://some-random-api.ml' + endpoint.path + q,name: 'output.gif'}]})
                let res = await phin('https://some-random-api.ml' + endpoint.path + q).catch(e => console.log(e))
                if (!res || !res.body) return reject({ error: 'Api returned nothing' })
                if (endpoint.output === 'json') return resolve(JSON.parse(res.body))
                else resolve(res.body)
            })
            
        }
    } else {
        method[info[0]] = (...args) => {
            return new Promise(async (resolve, reject) => {
                let q = cq(endpoint.queries, args)
                if (q.startsWith('error')) return reject({ "error": q.replace('error', '') })
                if (endpoint.output === 'djsp') return resolve(new MessageAttachment('https://some-random-api.ml' + endpoint.path + q, 'output.png'))
                if (endpoint.output === 'djsg') return resolve(new MessageAttachment('https://some-random-api.ml' + endpoint.path + q, 'output.gif'))
                let res = await phin('https://some-random-api.ml' + endpoint.path + q).catch(e => console.log(e))
                if (!res || !res.body) return reject({ error: 'Api returned nothing' })
                if (endpoint.output === 'json') return resolve(JSON.parse(res.body))
                else resolve(res.body)
            })
        }
    }
})

function cq(queries, values) {
    let f = ''
    let key = queries.map(x => x.key)
    for (var i = 0; i < key.length; i++) {
        if (queries[i].required && !values[i]) return f = `errorMissing ${key[i]} query. Do func(${key.join(", ")})`
        if (!queries[i].required && !values[i]) f += ''
        else if (i === 0) f += `?${key[i]}=${encodeURIComponent(values[i])}`
        else f += `&${key[i]}=${encodeURIComponent(values[i])}`
    }
    return f
}

module.exports = method