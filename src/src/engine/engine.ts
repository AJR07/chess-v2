import Coordinates from './board/coordinates/coordinates';
import FENParser from './fen/parser';

export default class ChessEngine {
    fenManager: FENParser;
    constructor() {
        this.fenManager = new FENParser(
            'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
        );
        this.getBoardData();
    }

    getBoardData() {
        return this.fenManager.data.piecePlacement;
    }

    editBoardData(coords: Coordinates) {}

    regenerateFen() {}
}
