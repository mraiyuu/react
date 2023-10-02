import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    //short cirtuit 
    return(this.state.isLoggedIn && <div>Welcome Denis</div>  )

    

    //ternary 
    // return (
    //     this.state.isLoggedIn ?
    //     <div>Welcome Denis</div> :
    //     <div>Welcome Guest</div>
    // )
    // let message
    // if(this.State.isLoggedIn) {
    //     message = <div>Welcome Denis</div>
    // }else {
    //     message = <div>Welcome guest</div>
    // }
    // return <div>{message}</div>

    // if(this.state.isLoggedIn) {
    //     return(
    //         <div>
    //             Welcome Denis
    //         </div>
    //     )
    // } else {
    //     return(
    //         <div>
    //             Welcome Guest
    //         </div>
    //     )
    // }

    // return(
    //     <div>
    //         <div>
    //         Welcome Denis
    //     </div>
    //     <div>
    //         Welcome Guest
    //     </div>

    //     </div>

    // )
  }
}

export default UserGreeting;
