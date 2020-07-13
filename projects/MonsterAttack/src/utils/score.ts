
import { diceDifference } from './dice';

export const calcauleScore = (dice: Array<number>) => {

    if (!dice)
        return;

    const playersScore = dice[0] + dice[1];
    const monstersScore = dice[2] + dice[3];

    console.log('currentPlayersHealth', playersScore)
    console.log('currentMonsterHealth', monstersScore)

    let result = {
        playersScore,
        monstersScore,
        playersDamage : 0,
        monstersDamage : 0
    }

    if (playersScore === monstersScore) {
    } else if (monstersScore > playersScore) {
        result.playersDamage = diceDifference(playersScore, monstersScore)
        console.log('Monster wins with ', result.playersDamage)
    } else {
        result.monstersDamage = diceDifference(playersScore, monstersScore)
        console.log('Player wins with ', result.monstersDamage)
    }

    return result;
}

export default calcauleScore;