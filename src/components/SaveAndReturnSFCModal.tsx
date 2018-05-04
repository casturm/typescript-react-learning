import * as React from "react";

export const EmailValidation: React.SFC<{message: string}> = ({message}) =>
  <div className={"alert alert-danger " + (message.length > 0 ? "visible" : "invisible")} role="alert">{message}</div>

export const SaveAndReturnSFCModal: React.SFC<{linkText: string,
  email: string, emailValidationMessage: string, quoteNumber: string, onChange: any, onSave: any}> =
  ({linkText, email, emailValidationMessage, quoteNumber, onChange, onSave}) =>
    <div className="save-and-return">
      <a href="#" className="save-and-return-link col d-flex justify-content-center"
                  data-toggle="modal"
                  data-target="#saveAndReturnModal">
        {linkText}
      </a>
      <div className="modal fade save-and-return-modal"
           id="saveAndReturnModal"
           tabIndex={-1}
           role="dialog"
           aria-labelledby="saveAndReturnModalLabel"
           aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="saveAndReturnModalLabel">
                Save and return later
              </h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-8">
                    <EmailValidation message={emailValidationMessage} />
                  </div>
                </div>
                <div className="row">
                  <div className="col d-flex justify-content-center">
                    <div className="col-md-8">
                      <p>
                         Please create an account with your email address.
                         You will then be able to pick up where you left off when you return.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col d-flex justify-content-center">
                    <div className="col-md-5">
                      <h5 className="quote-number">Quote # {quoteNumber}</h5>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col d-flex justify-content-center">
                    <div className="col-md-7">
                      <label>
                        Email address: <input type="text" value={email} onChange={onChange} />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="container-fluid">
                <div className="row">
                  <div className="col d-flex justify-content-center">
                    <div className="col-md-6">
                      <button type="button"
                              className="btn btn-primary btn-huge save-and-return-submit"
                              onClick={onSave}>
                         Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;

