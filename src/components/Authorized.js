import React from 'react';

function SecretComponent() {
    return <h1>Authorized/Logged In Users Only</h1>
}

function RegularComponent() {
    return <h1>Unauthorized/Not Logged In Users</h1>
}

function App(props) {
    // if (props.authorized) {
    //     return <SecretComponent/>;
    // } else {
    //     return <RegularComponent/>;
    // }
    return(
        <>
        {props.authorized ? <SecretComponent/> : <RegularComponent/>}
        </>
    )
}
//above code only works if you add a prop to App in index.js called
    //<App authorized={false} />

export default App;