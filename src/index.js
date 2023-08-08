fetch('http://localhost:3000/games')
.then(response => response.json())
.then(games => {
    renderGame(games)
    renderGameDetail(games[0])
})


function renderGame(games){
    games.forEach(game => {
        const gameList = document.querySelector('.game-list')
        const eachGame = document.createElement('li')
        eachGame.textContent = game.name + ' ' + (game.manufacturer_name)
        gameList.append(eachGame)
        eachGame.addEventListener('click', () => {
            renderGameDetail(game)
        })
    })
}

function renderGameDetail(game){
    const image = document.getElementById('detail-image')
    const name = document.getElementById('detail-title')
    const highScore = document.getElementById('detail-high-score')
    image.src = game.image
    name.textContent = game.name
    highScore.textContent = game.high_score
}


const scoreInput = document.getElementById('high-score-form')
scoreInput.addEventListener('submit', e => {
    e.preventDefault()
    const scoreAdded = document.getElementById('score-input').value
    const totalScore = document.getElementById('detail-high-score')
    totalScore.textContent = parseInt(totalScore.textContent) + parseInt(scoreAdded)

})