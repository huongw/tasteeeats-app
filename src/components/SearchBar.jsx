import { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [value, setValue] = useState("");
  const navigateToPage = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigateToPage(`searched/${value.split(" ").join("+")}`);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FaSearch />
      <input
        type="text"
        placeholder="What are you hungry for?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Form>
  );
}

const Form = styled.form`
  margin: auto;
  max-width: 600px;
  position: relative;
  width: 90%;

  @media only screen and (min-width: 401px) {
    width: 75%;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: .8em;
    color: #fff;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
    
    @media only screen and (min-width: 401px) {
      font-size: 1em;
    }
  }

  

  svg {
    position: absolute;
    top: 50%;
    left 0;
    transform: translate(100%, -50%);
    color: #fff;
    font-size: initial;
  }
`;

export default SearchBar;
