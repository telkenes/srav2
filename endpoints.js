module.exports = [
    {
        func: "animal.dog",
        path: "/animal/dog",
        output: 'json',
        queries: []
    },
    {
        func: "animal.cat",
        path: "/animal/cat",
        output: 'json',
        queries: []
    },
    {
        func: "animal.panda",
        path: "/animal/panda",
        output: 'json',
        queries: []
    },
    {
        func: "animal.fox",
        path: "/animal/fox",
        output: 'json',
        queries: []
    },
    {
        func: "animal.red_panda",
        path: "/animal/red_panda",
        output: 'json',
        queries: []
    },
    {
        func: "animal.koala",
        path: "/animal/koala",
        output: 'json',
        queries: []
    },
    {
        func: "animal.raccoon",
        path: "/animal/raccoon",
        output: 'json',
        queries: []
    },
    {
        func: "animal.kangaroo",
        path: "/animal/kangaroo",
        output: 'json',
        queries: []
    },
    {
        func: "animu.wink",
        path: "/animu/wink",
        output: 'json',
        queries: []
    },
    {
        func: "animu.pat",
        path: "/animu/pat",
        output: 'json',
        queries: []
    },
    {
        func: "animu.hug",
        path: "/animu/hug",
        output: 'json',
        queries: []
    },
    {
        func: "animu.face_palm",
        path: "/animu/face-palm",
        output: 'json',
        queries: []
    },
    {
        func: "facts.dog",
        path: "/facts/dog",
        output: 'json',
        queries: []
    },
    {
        func: "facts.cat",
        path: "/facts/cat",
        output: 'json',
        queries: []
    },
    {
        func: "facts.panda",
        path: "/facts/panda",
        output: 'json',
        queries: []
    },
    {
        func: "facts.fox",
        path: "/facts/fox",
        output: 'json',
        queries: []
    },
    {
        func: "facts.birb",
        path: "/facts/birb",
        output: 'json',
        queries: []
    },
    {
        func: "facts.koala",
        path: "/facts/koala",
        output: 'json',
        queries: []
    },
    {
        func: "facts.kangaroo",
        path: "/facts/kangaroo",
        output: 'json',
        queries: []
    },
    {
        func: "facts.raccoon",
        path: "/facts/raccoon",
        output: 'json',
        queries: []
    },
    {
        func: "facts.elephant",
        path: "/facts/elephant",
        output: 'json',
        queries: []
    },
    {
        func: "facts.giraffe",
        path: "/facts/giraffe",
        output: 'json',
        queries: []
    },
    {
        func: "facts.whale",
        path: "/facts/whale",
        output: 'json',
        queries: []
    },
    {
        func: "imgs.dog",
        path: "/img/dog",
        output: 'json',
        queries: []
    },
    {
        func: "imgs.cat",
        path: "/img/cat",
        output: 'json',
        queries: []
    },
    {
        func: "imgs.panda",
        path: "/img/panda",
        output: 'json',
        queries: []
    },
    {
        func: "imgs.fox",
        path: "/img/fox",
        output: 'json',
        queries: []
    },
    {
        func: "imgs.red_panda",
        path: "/img/red_panda",
        output: 'json',
        queries: []
    },
    {
        func: "imgs.koala",
        path: "/img/koala",
        output: 'json',
        queries: []
    },
    {
        func: "imgs.birb",
        path: "/img/birb",
        output: 'json',
        queries: []
    },
    {
        func: "imgs.raccoon",
        path: "/img/raccoon",
        output: 'json',
        queries: []
    },
    {
        func: "imgs.kangaroo",
        path: "/img/kangaroo",
        output: 'json',
        queries: []
    },
    {
        func: "imgs.whale",
        path: "/img/whale",
        output: 'json',
        queries: []
    },
    {
        func: "imgs.pikachu",
        path: "/img/pikachu",
        output: 'json',
        queries: []
    },
    {
        func: "chatbot",
        path: "/chatbot",
        output: 'json',
        queries: [{key: "message", required: true}, {key: "key", required: true}]
    },
    {
        func: "lyrics",
        path: "/lyrics",
        output: 'json',
        queries: [{key: "title", required: true}, {key: "cancer", required: false}, {key: "key", required: false}]
    },
    {
        func: "meme",
        path: "/meme",
        output: 'json',
        queries: []
    },
    {
        func: "base64.encode",
        path: "/base64",
        output: 'json',
        queries: [{key: "encode", required: true}]
    },
    {
        func: "base64.decode",
        path: "/base64",
        output: 'json',
        queries: [{key: "decode", required: true}]
    },
    {
        func: "binary.encode",
        path: "/binary",
        output: 'json',
        queries: [{key: "text", required: true}]
    },
    {
        func: "binary.decode",
        path: "/binary",
        output: 'json',
        queries: [{key: "decode", required: true}]
    },
    {
        func: "joke",
        path: "/joke",
        output: 'json',
        queries: []
    },
    {
        func: "minecraft",
        path: "/mc",
        output: 'json',
        queries: [{key: "username", required: true}]
    },
    {
        func: "canvas.wasted",
        path: "/canvas/wasted",
        output: 'img',
        queries: [{key: "avatar", required: true}]
    },
    {
        func: "canvas.gay",
        path: "/canvas/gay",
        output: 'img',
        queries: [{key: "avatar", required: true}]
    },
    {
        func: "canvas.glass",
        path: "/canvas/glass",
        output: 'img',
        queries: [{key: "avatar", required: true}]
    },
    {
        func: "canvas.jail",
        path: "/canvas/jail",
        output: 'img',
        queries: [{key: "avatar", required: true}]
    },
    {
        func: "canvas.greyscale",
        path: "/canvas/greyscale",
        output: 'img',
        queries: [{key: "avatar", required: true}, {key: "key", required: false}]
    },
    {
        func: "canvas.invert",
        path: "/canvas/invert",
        output: 'img',
        queries: [{key: "avatar", required: true}, {key: "key", required: false}]
    },
    {
        func: "canvas.brightness",
        path: "/canvas/brightness",
        output: 'img',
        queries: [{key: "avatar", required: true}, {key: "key", required: false}]
    },
    {
        func: "canvas.threshold",
        path: "/canvas/threshold",
        output: 'img',
        queries: [{key: "avatar", required: true}, {key: "key", required: false}]
    },
    {
        func: "canvas.sepia",
        path: "/canvas/sepia",
        output: 'img',
        queries: [{key: "avatar", required: true}, {key: "key", required: false}]
    },
    {
        func: "canvas.blurple",
        path: "/canvas/blurple",
        output: 'img',
        queries: [{key: "avatar", required: true}, {key: "key", required: false}]
    },
    {
        func: "canvas.pixelate",
        path: "/canvas/pixelate",
        output: 'img',
        queries: [{key: "avatar", required: true}, {key: "key", required: false}]
    },
    {
        func: "canvas.blur",
        path: "/canvas/blur",
        output: 'img',
        queries: [{key: "avatar", required: true}, {key: "key", required: false}]
    },
    {
        func: "canvas.triggered",
        path: "/canvas/triggered",
        output: 'img',
        queries: [{key: "avatar", required: true}, {key: "key", required: false}]
    },
    {
        func: "canvas.youtube",
        path: "/canvas/youtube-comment",
        output: 'img',
        queries: [{key: "avatar", required: true}, {key: "username", required: true}, {key: "comment", required: true}]
    },
    {
        func: "canvas.simp",
        path: "/canvas/simpcard",
        output: 'img',
        queries: [{key: "avatar", required: true}, {key: "key", required: false}]
    },
    {
        func: "canvas.horny",
        path: "/canvas/horny",
        output: 'img',
        queries: [{key: "avatar", required: true}, {key: "key", required: false}]
    },
    {
        func: "canvas.lolice",
        path: "/canvas/lolice",
        output: 'img',
        queries: [{key: "avatar", required: true}, {key: "key", required: false}]
    },
    {
        func: "canvas.itssostupid",
        path: "/canvas/its-so-stupid",
        output: 'img',
        queries: [{key: "avatar", required: true}, {key: "dog", required: true}, {key: "key", required: false}]
    },
    {
        func: "canvas.colorviewer",
        path: "/canvas/colorviewer",
        output: 'img',
        queries: [{key: "hex", required: true}, {key: "key", required: false}]
    },
    {
        func: "canvasd.wasted",
        path: "/canvas/wasted",
        output: 'djsp',
        queries: [{key: "avatar", required: true}]
    },
    {
        func: "canvasd.gay",
        path: "/canvas/gay",
        output: 'djsp',
        queries: [{key: "avatar", required: true}]
    },
    {
        func: "canvasd.glass",
        path: "/canvas/glass",
        output: 'djsp',
        queries: [{key: "avatar", required: true}]
    },
    {
        func: "canvasd.jail",
        path: "/canvas/jail",
        output: 'djsp',
        queries: [{key: "avatar", required: true}]
    },
    {
        func: "canvasd.greyscale",
        path: "/canvas/greyscale",
        output: 'djsp',
        queries: [{key: "avatar", required: true}, {key: "key", required: false}]
    },
    {
        func: "canvasd.invert",
        path: "/canvas/invert",
        output: 'djsp',
        queries: [{key: "avatar", required: true}, {key: "key", required: false}]
    },
    {
        func: "canvasd.brightness",
        path: "/canvas/brightness",
        output: 'djsp',
        queries: [{key: "avatar", required: true}, {key: "key", required: false}]
    },
    {
        func: "canvasd.threshold",
        path: "/canvas/threshold",
        output: 'djsp',
        queries: [{key: "avatar", required: true}, {key: "key", required: false}]
    },
    {
        func: "canvasd.sepia",
        path: "/canvas/sepia",
        output: 'djsp',
        queries: [{key: "avatar", required: true}, {key: "key", required: false}]
    },
    {
        func: "canvasd.blurple",
        path: "/canvas/blurple",
        output: 'djsp',
        queries: [{key: "avatar", required: true}, {key: "key", required: false}]
    },
    {
        func: "canvasd.pixelate",
        path: "/canvas/pixelate",
        output: 'djsp',
        queries: [{key: "avatar", required: true}, {key: "key", required: false}]
    },
    {
        func: "canvasd.blur",
        path: "/canvas/blur",
        output: 'djsp',
        queries: [{key: "avatar", required: true}, {key: "key", required: false}]
    },
    {
        func: "canvasd.triggered",
        path: "/canvas/triggered",
        output: 'djsg',
        queries: [{key: "avatar", required: true}, {key: "key", required: false}]
    },
    {
        func: "canvasd.youtube",
        path: "/canvas/youtube-comment",
        output: 'djsp',
        queries: [{key: "avatar", required: true}, {key: "username", required: true}, {key: "comment", required: true}]
    },
    {
        func: "canvasd.simp",
        path: "/canvas/simpcard",
        output: 'djsp',
        queries: [{key: "avatar", required: true}, {key: "key", required: false}]
    },
    {
        func: "canvasd.horny",
        path: "/canvas/horny",
        output: 'djsp',
        queries: [{key: "avatar", required: true}, {key: "key", required: false}]
    },
    {
        func: "canvasd.lolice",
        path: "/canvas/lolice",
        output: 'djsp',
        queries: [{key: "avatar", required: true}, {key: "key", required: false}]
    },
    {
        func: "canvasd.itssostupid",
        path: "/canvas/its-so-stupid",
        output: 'djsp',
        queries: [{key: "avatar", required: true}, {key: "dog", required: true}, {key: "key", required: false}]
    },
    {
        func: "canvasd.colorviewer",
        path: "/canvas/colorviewer",
        output: 'djsp',
        queries: [{key: "hex", required: true}, {key: "key", required: false}]
    }
]