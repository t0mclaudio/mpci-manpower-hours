import React from 'react';
import Papa from 'papaparse';
import styled from 'styled-components';

export default ({ handleUpload }) => {
  const fileInput = React.createRef()

  const handleSubmit = (e) => {
    e.preventDefault();
    let file = fileInput.current.files[0];
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        handleUpload(results.data);
      }
    })
  }

  return (
    <Form >
      <input id="select-csv"type="file" aria-label="select csv file"ref={fileInput} onChange={handleSubmit} />
      {/* <input type="submit" value="Choose" /> */}
      {/* <label for="select-csv">Please upload proper csv format</label> */}
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  margin: 0 auto;
  input[type=submit] {
    background-color: green;
    color: white;
    padding: 15px;
    border: none;
    border-radius: 2px;
  }
  input[type=file] {
    border: 1px solid gray;
    color: gray;
    padding: 15px;
    border-radius: 2px;
  }

`