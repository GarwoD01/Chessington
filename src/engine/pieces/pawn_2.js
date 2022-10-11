import Piece from './piece';
import Player from '../player';
import Square from '../square';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        // current coordinates (row, col)
        const currentSquare = board.findPiece(this);
        // player's colour
        const colour = this.player;

        // new array for the allowed moves
        let moves = new Array();

        if (colour === Player.WHITE){
            // incrementing the row by 1
            let targetRow = currentSquare.row;
            targetRow++;
            let targetColumn = currentSquare.col;

            // if first move
            // then targetRow increment by either 1 or 2

            // new square for the pawn piece, with new row/col
            let position = new Square(targetRow, targetColumn);

            // new position for piece added to array of allowed moves
            moves.push(position);
        }

        if (colour === Player.BLACK){
            // decrement the row by 1
            let targetRow = currentSquare.row;
            targetRow--;
            let targetColumn = currentSquare.col;

            // if first move
            // then targetRow decrement by either 1 or 2

            let position = new Square(targetRow, targetColumn);

            moves.push(position);
        }
        return moves;
    }
}
