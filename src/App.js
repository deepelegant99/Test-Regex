import styles from "./App.module.css";
import { useState } from "react";
export default function App() {
  const [inputs, setInputs] = useState({
    regex: "",
    sentence: "",
    isIn: false
  });
  // We want a single eventhandler for first name, and last name input field

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const testHandler = (event) => {
    event.preventDefault();
    // alert(inputs.regex + " " + inputs.sentence);
    const reg = new RegExp(inputs.regex, "i");
    const val = reg.test(inputs.sentence);

    setInputs({
      ...inputs,
      isIn: val
    });
  };

  return (
    <>
      <form className={styles.formStyle}>
        <label for="regex">Regex</label>
        <br />
        <input
          id="regex"
          name="regex"
          placeholder="Your Regex"
          value={inputs.regex}
          onChange={handleChange}
        />
        <br />
        <label for="sentence">Sentence</label>
        <br />
        <input
          id="sentence"
          name="sentence"
          placeholder="Your sentence"
          value={inputs.sentence}
          onChange={handleChange}
        />

        <br />
        <input
          type="submit"
          name="submit"
          value="Test"
          style={{ padding: ".7em" }}
          onClick={testHandler}
          className={styles.submitStyle}
        />
      </form>
      <h1 className={styles.outStyle}>{inputs.isIn ? "True" : "False"}</h1>
    </>
  );
}
