import React, { Fragment, PureComponent } from "react";
import UserBar from "./UserBar";

export default class Admin extends PureComponent {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="d-flex w-100 h-100 justify-content-between">
          <div className="w-25">
            <UserBar />
          </div>
          <div className="w-75">
            {/* Top Card */}
            <div className="card border-0">
              <div className="card-body">#UserID</div>
            </div>

            <div className="d-flex flex-column w-100 juistify-conent-beween admin-chat-body">
              <div>
                {/* admin chat area */}
                <div className="p-3">
                  <div className="d-flex">
                    <div className="w-75">
                      <div className="d-flex w-100">
                        <div className="card card-chat-image-lite me-2">
                          <div className="d-flex justify-content-center align-items-center h-100">
                            <div>U</div>
                          </div>
                        </div>
                        <div className="card admin-chat-message shadow-sm">
                          How can we help you?
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* User chat area */}
                <div className="p-3">
                  <div className="d-flex justify-content-end w-100">
                    <div className="w-75">
                      <div className="d-flex justify-content-end w-100">
                        <div className="card user-chat-message shadow-sm me-2">
                          How the hell am I supposed to get a jury to believe
                          you when I am not even sure that I do?!
                        </div>
                        <div className="card card-chat-image-dark">
                          <div className="d-flex justify-content-center align-items-center h-100">
                            <div>A</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* send message area */}
              <footer className="mt-auto">
                <div className="card border-0">
                  <div className="card-body">
                    <div className="d-flex flex-fill w-100 justify-content-between">
                      <div className="form-group flex-fill pe-2">
                        <input
                          type="text"
                          name="message"
                          id="message"
                          placeholder="Type your message here..."
                          className="form-control rounded-pill"
                        />
                      </div>
                      <div className="card px-3 bg-dark-blue rounded-circle text-white send-button">
                        <div className="d-flex justify-content-center align-items-center h-100">
                          <i className="bi bi-send"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
