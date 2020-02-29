import React from 'react';
import Papa from 'papaparse'

export default ({ handleUpload }) => {
  const fileInput = React.createRef()

  const handleSubmit = (e) => {
    e.preventDefault();
    let file = fileInput.current.files[0];
    Papa.parse(file, {
      header: true,
      complete: function (results) {
        handleUpload(results.data);
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="inputFile">Upload file</label>
      <input type="file" ref={fileInput} />
      <input type="submit" value="Submit" />
    </form>
  )
}