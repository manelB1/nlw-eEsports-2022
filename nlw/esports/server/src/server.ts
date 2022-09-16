import express from "express";

const app = express();
app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, name: 'Emanuel' },
        { id: 2, name: 'anuncio 2' },
        { id: 3, name: ' hiran' },
        { id: 4, name: ' fodac' },
        { id: 5, name: ' GG' },
    ])
})

app.listen(3333)