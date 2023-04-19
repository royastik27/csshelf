import './../css/Sidebar.css';

function Sidebar() {
    return (
        <div id="sidebar" className="col-lg-3">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">
                    Top Voted Notes
                </h5>
                
                <a className="sidebar-link" href="">
                Boolean Algebra - A Complete Guide <i>-by @royastik27</i>
                </a>

                <a className="sidebar-link" href="">
                    Boolean Algebra - A Complete Guide <i>-by @royastik27</i>
                </a>

                <a className="sidebar-link" href="">
                Boolean Algebra - A Complete Guide <i>-by @royastik27</i>
                </a>
            </div>
            </div>

            <div className="card">
            <div className="card-body">
                <h5 className="card-title">
                    Top Voted Authors
                </h5>
                
                <a className="sidebar-link" href="">
                    royastik27
                </a>

                <a className="sidebar-link" href="">
                    rajshahi_university
                </a>

                <a className="sidebar-link" href="">
                    udvash_unmesh
                </a>
            </div>
            </div>
        </div>
    );
  }

export default Sidebar;