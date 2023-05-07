import { useState } from 'react';

function Logout({ loggedIn }) {

    const [ errorMessage, setErrorMessage ] = useState('');

    async function checkAuth()
    {
        try {
            const res = await fetch('http://localhost:5000/api/getuserdetails', {
                method: "POST"
            });

            const output = await res.json();

            if(output.ok)
                setErrorMessage(`User ${output.userName} is logged in`);
            else
                setErrorMessage(output.message);
        }
        catch(err) {
            setErrorMessage('Server probelm!');
        }
    }

    async function handleLogOut()
    {
        try {
            const res = await fetch('http://localhost:5000/api/logout', {
                method: "POST"
            });

            const output = await res.json();

            if(output.ok)
                setErrorMessage('Logged out successfully!');
            else
                setErrorMessage(output.message);
        }
        catch(err) {
            setErrorMessage('Server probelm!');
        }
    }

    return (
        <div>
            <h2>🚪 Logout</h2>
            <hr></hr>

            <div className="card">
                <div className="card-header">
                    Saying good bye ? 😐
                </div>


                <div className="card-body">

                <button onClick={checkAuth} className="btn btn-info me-2">Check Auth</button>

                {loggedIn ?
                    <button onClick={handleLogOut} className="btn btn-secondary">Log Out</button>
                    :
                    <p className="mb-0">Whoa! You must login to logout</p>
                }
                </div>
                
                <div className="card-footer text-success">
                    {errorMessage}
                </div>

                </div>
            </div>
    );
  }

export default Logout;