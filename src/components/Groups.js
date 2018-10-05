import React from "react";

export class Groups extends React.Component {
  textChange(event){
    var str = event.target.value;
    var isCorrect = /^([A-Z]+#[A-Z0-9]{6})$/.test(str);
    if (str === "") {
      document.getElementById("userIds").style.border = "none";
    } else if (isCorrect) {
      document.getElementById("userIds").style.border = "2px solid green";
    } else {
      document.getElementById("userIds").style.border = "2px solid red";
    }
  }

  render(){
    return (
      <div className="groupsComponent">
        <div className="headerWrapper">
          <h1>CREATE A GROUP</h1>
        </div>
        <form action="">
          <span>Enter ID's of users to invite:</span>
          <input type="text" id="userIds" name="userIds" placeholder="e.g. INAN#GOSH9EF" onChange={(event) => this.textChange(event)}/>
          <span>Invited users:</span>
          <ul className="invitedUsersWrapper">
            <li>
              <span>SAMANI#G8RVI4O</span>
              <button id="deleteInvite"><i className="fas fa-times"></i></button>
            </li>
            <li>
              <span>JESSE#R97G5DK</span>
              <button id="deleteInvite"><i className="fas fa-times"></i></button>
            </li>
            <li>
              <span>INAN#G0SH9EF</span>
              <button id="deleteInvite"><i className="fas fa-times"></i></button>
            </li>
            <li>
              <span>SAMANI#G8RVI4O</span>
              <button id="deleteInvite"><i className="fas fa-times"></i></button>
            </li>
            <li>
              <span>JESSE#R97G5DK</span>
              <button id="deleteInvite"><i className="fas fa-times"></i></button>
            </li>
            <li>
              <span>INAN#G0SH9EF</span>
              <button id="deleteInvite"><i className="fas fa-times"></i></button>
            </li>

          </ul>
        </form>
        <div className="createGroupWrapper">
          <button id="createGroup">Meet up!</button>
        </div>
      </div>
    )
  }
}