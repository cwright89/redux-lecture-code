import React from 'react';
// fucntion to subscribe your component to redux
import { connect } from 'react-redux';

const Profile = props => {

    return (
        <main className='profile'>
            <h1>{props.user.username}</h1>
            <h3>Age: {props.user.age}</h3>
            <h3>Email: {props.user.email}</h3>
        </main>
    )
}

// mapStateToProps is the function that allows you to define the state items you want to subscribe to on redux
const mapStateToProps = reduxState => reduxState;

// connect is passed mapStateToProps and your component in separate sets of parenthesis
export default connect(mapStateToProps)(Profile);