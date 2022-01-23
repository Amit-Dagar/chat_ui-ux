import React, { PureComponent } from "react";
export default class UserBar extends PureComponent {
  state = {};
  render() {
    return (
      <div className="h-100vh bg-dark-blue">
        {[0, 1, 2, 3].map((user) => (
          <div className="card admin-users-chip my-1">
            <div className="card-body">#UserID</div>
          </div>
        ))}
      </div>
    );
  }
}
