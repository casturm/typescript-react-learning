import * as React from "react";

export class BootstrapModal extends React.Component<any, any> {
  intervalID: number;

  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {email: ""};
  }

  closeModal() : void {
    console.log("closeModal " + this.intervalID);
    const closeButton = document.querySelector("#exampleModal button.close");
    if (closeButton) {
      (closeButton as HTMLButtonElement).click();
    }
    clearInterval(this.intervalID);
  }

  handleChange(event: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({email: event.currentTarget.value});
  }

  handleClick(event: any) : void {
    console.log("dialog save " + this.state.email);
    this.intervalID = setInterval(() => this.closeModal(), 1000);
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Launch demo modal
        </button>
        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Modal body text goes here.</p>
                <label>
                  Email:
                  <input type="text" value={this.state.email} onChange={this.handleChange} />
                </label>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={this.handleClick}>Save changes</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

