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

import './NotesComponent.css';

function NotesComponent(props)
{
    return (
        <div className="allnotes">
            {props.data.map((el, idx) => 
                <Card className="note" key={idx}>
                    <CardHeader
                        avatar={
                        <Avatar sx={{ bgcolor: orange[500] }}>
                            R
                        </Avatar>
                        }
                        title={el.title}
                        subheader="September 14, 2016"
                    />

                    <CardActionArea>
                        <CardContent>
                            <Typography variant="body2">
                                {el.content}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    
                    
                    <div className="note-footer">
                        
                        <div className="left">
                            <IconButton aria-label="read more" disabled>
                                <ThumbUpIcon />
                            </IconButton>
                            {el.nVotes} Votes

                            <IconButton aria-label="read more" disabled>
                                <ForumIcon />
                            </IconButton>
                            {el.nDiscussions} Discussions
                        </div>

                        <div className="right">
                            <a href="/notes/single">
                            <IconButton aria-label="read more">
                                <ReadMoreIcon />
                            </IconButton>
                            </a>

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
                )
            }
        </div>
    );
}

export default NotesComponent;