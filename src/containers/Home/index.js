import React from "react";
import { connect } from "react-redux";
import {  facebook_login } from "../../store/action";
import './style.css';

class Home extends React.Component {
    render(){
        return (
            <div>
                <h1>Home</h1>
                {/* <button onClick={()=>this.props.set_data(user)}>Set Data</button> */}
                <button onClick={() => this.props.facebook_login(this.props.history)}>FaceBook Login</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    users: state.users
})

const mapDispatchToProps = (dispatch) => ({
    facebook_login: (history) => dispatch(facebook_login(history)),

})


export default connect(mapStateToProps, mapDispatchToProps)(Home);
