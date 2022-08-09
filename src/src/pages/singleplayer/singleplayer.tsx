import { Typography } from '@mui/material';
import ChessBoard from '../../engine/board';

export default function SinglePlayer() {
    return (
        <div id="singleplayer">
            <Typography
                variant="h2"
                fontWeight={1000}
                className="horizontal-center"
                sx={{
                    color: 'secondary.light',
                    paddingTop: '5vh',
                    paddingBottom: '5vh',
                }}
            >
                Single-Player Chessboard
            </Typography>
            <ChessBoard />
        </div>
    );
}