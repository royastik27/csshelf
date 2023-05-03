import { useState } from 'react';
import { useCookies } from 'react-cookie';

function Profile({ loggedIn }) {

    // const [cookies, setCookie, removeCookie] = useCookies([]);

    // const [ userName, setUserName ] = useState('');

    // if(cookies.token)
    //     userName = 

    return (
        <div>
            <h2>👤 Profile</h2>
            <hr></hr>

            {loggedIn ?
                <p>Welcome!</p>
                :
                <p>You must login to continue!</p>
            }
        </div>
    );
  }

export default Profile;