import useGameStore from "../gameState/useGameStore";


function preload(p5) {
    const backgroundImage = p5.loadImage('./background.png');
    const beetleImage = p5.loadImage('./beetlemorph.png');
    const playerjetsImage = p5.loadImage('./player_jets.png');
    const playerImage = p5.loadImage('./player.png');
    useGameStore.setState({ backgroundImage, beetleImage, playerjetsImage, playerImage })

}
export default preload;