function Logout({ loggedIn }) {
    return (
        <div>
            <h2>🚪 Logout</h2>
            <hr></hr>

            <div className="card">
                <div className="card-header">
                    Saying good bye ? 😐
                </div>

                <div className="card-body">
                {loggedIn ?
                    <button className="btn btn-secondary">Log Out</button>
                    :
                    <p>Whoa! You must login to logout</p>
                }
                </div>

                </div>
            </div>
    );
  }

export default Logout;