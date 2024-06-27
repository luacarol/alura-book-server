function getLivros(req, res) {
    try {
        res.send("Rota de livros")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros
}