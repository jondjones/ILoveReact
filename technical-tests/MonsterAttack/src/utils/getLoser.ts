import GameStatus from '../types/GameStatus'

function getLoser(playerHealth : Number, monstersHealth : Number) {
    if (playerHealth <= 0) {
        return GameStatus.MonsterWin
    } else if (monstersHealth  <= 0) {
        return GameStatus.PlayerWin
    }

    return GameStatus.Fighting
}

export default getLoser;