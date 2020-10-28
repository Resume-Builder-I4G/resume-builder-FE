import React, { Component } from "react";
import "./Form.css";
import styled from "styled-components";
import axios from "axios";
import Success from "../../screens/contact-us/Success";
// import "/bootstrap/dist/css/bootstrap.min.css";

const StyledButton = styled.button`
  background: #216de0;
  border-radius: 6px;
  font-family: Inter-regular;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  padding: 20px 95px;
`;

const StyledForm = styled.form`
  width: 100%;
`;

const StyledLabel = styled.label`
  width: 100%;
`;

const StyledInput = styled.input`
  background: #ffffff;
  border: 2px solid #216de0;
  box-sizing: border-box;
  border-radius: 6px;
  margin-top: 16px;
`;

const StyledTextarea = styled.textarea`
  background: #ffffff;
  border: 2px solid #216de0;
  box-sizing: border-box;
  border-radius: 6px;
  margin-top: 16px;
`;

class Form extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      name: "",
      email: "",
      message: "",
      status: "",
      loading: false,
    };
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    const { status, loading, name, email, message } = this.state;
    return (
      <div>
        <StyledForm onSubmit={this.submitForm}>
          <div className="form-group">
            <StyledLabel htmlFor="contact-name">
              <span>Full Name</span>
              <StyledInput
                className="form-control"
                id="contact-name"
                type="text"
                name="name"
                value={name}
                ref={this.inputRef}
                onChange={this.changeHandler}
                placeholder="Awojide Daniel"
                required
              />
            </StyledLabel>
          </div>

          <div className="form-group">
            <StyledLabel htmlFor="contact-email">
              <span>Email Address</span>
              <StyledInput
                required
                className="form-control"
                id="contact-email"
                type="email"
                name="email"
                value={email}
                onChange={this.changeHandler}
                placeholder="awojidedaniel@gmail.com"
              />
            </StyledLabel>
          </div>

          <div className="form-group">
            <StyledLabel htmlFor="contact-message">
              <span>Message</span>
              <StyledTextarea
                id="contact-message"
                className="form-control"
                value={message}
                onChange={this.changeHandler}
                name="message"
                rows="6"
                minLength="30"
                required
              />
            </StyledLabel>
          </div>

          <div className="text-right">
            <StyledButton type="submit" className="btn btn-primary">
              {" "}
              {!loading ? "Send" : <i className="fas fa-ellipsis-h"></i>}{" "}
            </StyledButton>
          </div>
        </StyledForm>
        {status === "SUCCESS" ? <Success display={this.setStatus} /> : ""}
        {status === "ERROR" && (
          <p style={{ textAlign: "center", color: "red" }}>
            {" "}
            <b>Ooops! There was an error.</b>
          </p>
        )}
      </div>
    );
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitForm = (event) => {
    event.preventDefault();

    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response);
        if (response.status === 200 || response.status === 201) {
          // form.reset();
          this.setState({ status: "SUCCESS", loading: false });
        } else {
          this.setState({ status: "ERROR", loading: false });
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({ status: "ERROR", loading: false });
      });

    this.setState({ loading: true });
  };

  setStatus = () => {
    this.setState({ status: "" });
  };
}

export default Form;
