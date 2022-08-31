import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface CustomisedCardProps {
    imageName: string;
    imageLink: string;
    description: string;
    webpageLink: string;
    shortenedWebpageLink: string;
}

export default function CustomisedCard(props: CustomisedCardProps) {
    let navigate = useNavigate();
    return (
        <motion.div
            id="card"
            drag
            dragElastic={0.2}
            dragConstraints={{ left: 10, top: 10, right: 10, bottom: 10 }}
            whileHover={{ scale: 1.1 }}
        >
            <Card sx={{ maxWidth: 345, backgroundColor: 'primary.light' }}>
                <CardMedia
                    component="img"
                    alt={props.imageName}
                    width="100vw"
                    height="200vh"
                    image={props.imageLink}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Pass And Play
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        onClick={() => {
                            navigator.clipboard.writeText(props.webpageLink);
                        }}
                        sx={{ color: 'success.dark' }}
                    >
                        SHARE
                    </Button>
                    <Button
                        size="small"
                        sx={{ color: 'info.dark' }}
                        onClick={() => {
                            navigate(props.shortenedWebpageLink);
                        }}
                    >
                        PLAY
                    </Button>
                </CardActions>
            </Card>
        </motion.div>
    );
}