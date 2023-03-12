import React from 'react';
import { Card, TextField, Typography, Button } from '@mui/material';

import './index.css';

function update_view()
{
    const default_str = "[ Type in the box below and press the 'VIEW' button every time to see the updates here ]";

    let content_str = document.getElementById('note-content').value;

    document.getElementById('outlined-read-only-input').value = content_str === "" ? default_str : content_str;

    // check without using id = outlined-read-only-input
}

class Create extends React.Component {

    componentDidMount()
    {
        // anything?
    }

    render() {
        return (<div>
            <h2>Create ✍</h2>
            <hr></hr>

            <Card id="note-form" variant="outlined" style={{ padding: "1rem" }}>
                <Typography variant="overline" display="block" gutterBottom>
                    Create New Note
                </Typography>

                <TextField id="note-title" label="Note Title" variant="outlined" fullWidth/>
                <br /><br />

                <TextField
                    id="outlined-read-only-input"
                    label="Note Content"
                    defaultValue="[ Type in the box below and press the 'VIEW' button every time to see the updates here ]"
                    InputProps={{
                        readOnly: true,
                    }}
                    multiline fullWidth
                />
                <br /><br />

                <div style={{ display: 'flex' }}>
                    <TextField
                    id="note-content"
                    label="Write..." variant="outlined"
                    multiline
                    fullWidth minRows={10}
                    />

                    <div style={{ marginLeft: '1rem' }}>
                        <Button variant="outlined"> <b>B</b> </Button><br/>
                        <Button variant="outlined"> <i>I</i> </Button><br/>
                        <Button variant="outlined"> <u>U</u> </Button><br/>
                        <Button variant="outlined"> 📐 </Button><br/>
                        <Button variant="outlined"> 🌍 </Button><br/>
                        <Button variant="outlined"> 🔗 </Button>
                    </div>
                </div>
                <br />

                <Button variant="contained" onClick={update_view} style={{ marginRight: '0.5rem' }}>
                    🔍 View
                </Button>

                <Button variant="contained" color="success">
                    🚀 Publish
                </Button>
            </Card>
        </div>
        );
    }
};

export default Create;