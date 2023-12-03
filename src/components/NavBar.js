import React,{Component} from "react"

class Navbar extends Component {
    // Our react code
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark fixed-top shadow p-0" style={{backgroundColor:'black',height:'32px'}}>
                    <a className="navbar-brand col-sm-3 col-md-2 mr-0" style={{color:'white'}} href="https://www.pinterest.com/"> Record HealthCare Data</a>
                    <ul className="navbar-nav pc-3">
                        <li>
                            <h style={{color: 'green'}}>Account Number:{this.props.account}</h>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
export default Navbar;