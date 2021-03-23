import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MyOption from "./Option";
import Select from "@atlaskit/select";
import styled from "@emotion/styled";
import data from "../Data/data.json";

const InputContainer = styled("div")`
  max-width: 350px;
  width: 100%;
  margin: 0 auto;
  padding-top: 100px;
`;

const Text = styled.h1`
  color: #010101;
  text-align: center;
  margin-bottom: 50px;
`;

const options = data.map((d, id) => ({
  label: d,
  value: id,
}));

export default class App extends React.Component {
  state = {
    selectedOption: null,
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <InputContainer>
        <Text>Choose the link:</Text>
        <Router>
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
            isSearchable={true}
            components={{
              Option: MyOption,
            }}
          />
        </Router>
      </InputContainer>
    );
  }
}
