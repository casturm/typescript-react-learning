import * as React from "react";

export const SaveAndReturnSFCModal: React.SFC<{ text: string }> = ({text}) =>
  <div className="save-and-return">
    <a href="#" className="save-and-return-link" data-toggle="modal" data-target="#SaveAndReturnModal">Save and Return SFC!</a>
    <div className="modal fade save-and-return-modal" role="dialog" id="SaveAndReturnModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="save-and-return-content"
                   dangerouslySetInnerHTML={{__html: text}} />
            </div>
          </div>
        </div>
      </div>
  </div>;

