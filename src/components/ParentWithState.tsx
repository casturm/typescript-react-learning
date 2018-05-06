import * as React from "react";
import { SaveAndReturnSFCModal } from "./SaveAndReturnSFCModal";

export class ParentWithState extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      emailValidationMessage: ""
    }
  }

  closeModal() : void {
    console.log("closeModal");
    const closeButton = document.querySelector("#saveAndReturnModal button.close");
    (closeButton as HTMLButtonElement).click();
  }

  handleChange(event: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({
      email: event.currentTarget.value
    });
  }

  validEmail(email: string) {
    const re = /^[^@ ]+@[^@\. ]+(?:\.\w+)+$/
    return re.test(email);
  }

  handleSave(event: any) : void {
    console.log("dialog save " + this.state.email);
    if (this.validEmail(this.state.email)) {
      this.closeModal();
    } else {
      this.setState({emailValidationMessage: "Please enter a valid email address."});
    }
  }

  render() {
    return (
      <SaveAndReturnSFCModal linkText="click me" email={this.state.email} emailValidationMessage={this.state.emailValidationMessage}
          quoteNumber="123" onChange={this.handleChange} onSave={this.handleSave} />
    );
  }
}

