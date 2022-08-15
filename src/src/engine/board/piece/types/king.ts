import Move from '../../move/move';
import Piece from './empty';
import { Pieces } from '../piecetype';

export default class King extends Piece {
    name = 'king';
    shortName = 'k';

    canBeMovedTo(move: Move, board: Pieces[][]) {
        return true;
    }
}
