import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { orange } from "@mui/material/colors";

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ForumIcon from '@mui/icons-material/Forum';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import WatchLaterIcon from '@mui/icons-material/WatchLater';

import { CardActionArea } from '@mui/material';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import './index.css';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
});

function Note() {
    return (
        <ThemeProvider theme={darkTheme}>
            <Card className="posts">
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: orange[500] }}>
                        R
                    </Avatar>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />

                <CardActionArea>
                    <CardContent>
                        <Typography variant="body2">
                        This is a single post Yaaar....
                        </Typography>
                    </CardContent>
                </CardActionArea>
                
                
                <div className="posts-footer">
                    
                    <div className="left">
                        <IconButton aria-label="read more" disabled>
                            <ThumbUpIcon />
                        </IconButton>
                        230 Votes

                        <IconButton aria-label="read more" disabled>
                            <ForumIcon />
                        </IconButton>
                        230 Discussions
                    </div>

                    <div className="right">
                        <IconButton aria-label="read more">
                            <ReadMoreIcon />
                        </IconButton>

                        <IconButton aria-label="watch later">
                            <WatchLaterIcon />
                        </IconButton>

                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>

                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </div>

                </div>
            </Card>
        </ThemeProvider>
    );
}

export default Note;