import React from 'react';
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

/* TODO:
--> Add link to discussion text
*/

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
});

function NotesComponent(props)
{
    return (
        <div className="allnotes">
            {props.data.map((el, idx) => 
                <div className="singlenote" key={idx}>
                    {el.content}
                </div>
                )
            }
        </div>
    );
}

class AllNotes extends React.Component
{
    state = { notes_component: <p>Loading...</p> };

    async get_notes()
    {
        try {
            const res = await fetch('http://localhost:5000/', {
                method: "GET"
            });

            const data = await res.json();  // array
            
            // console.log(typeof data[0]);    // object

            this.setState({ notes_component: <NotesComponent data={data} /> });    
        }
        catch(err)
        {
            // console.log(err);

            this.setState({ notes_component: <p>Failed to load resource!</p> })
        }
    }

    componentDidMount()
    {
        this.get_notes();
    }
    
    render() {
        return (
            <div className="allnotes">
                {this.state.notes_component}
            </div>
        );
    }
};

function Notes() {
    return (
        <div>
            <h2>Notes 📄</h2>
            <hr></hr>

            <AllNotes />  
            {/* <Card style={{ backgroundColor: "inherit" }}>
                Hello    
            </Card>           */}
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
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the
                            mussels, if you like.
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
            </ThemeProvider>
        </div>
    );
  }

export default Notes;
