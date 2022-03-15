import React from "react";
import "./Footer.css";

function BottomBar() {
  return (
    <div className="main-footer">
            <br/>
          <p style={{textAlign: "center"}}>
            &copy;{new Date().getFullYear()} TicketBookingApp | All rights reserved |
            Terms Of Service | Privacy
          </p>
      </div>
  );
}

export default BottomBar;