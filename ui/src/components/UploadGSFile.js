import React, { Component } from 'react';
import { connect } from 'react-redux';
import { post_file } from '../actions';


class UploadGSFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    };
  }

  onFileChange = event => {
    this.setState({ selectedFile: event.target.files[0] })
  };

  onFileUpload = () => {

    // Create an object of formData 
    const formData = new FormData();

    // Details of the uploaded file 
    console.log('selectedFile', JSON.stringify(this.state.selectedFile));

    // Update the formData object 
    formData.append(
      "gsFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );



    // Request made to the backend api 
    // Send formData object 
    this.props.post_file(formData)

  };

  fileData = () => {

    if (this.state.selectedFile) {

      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>
          <p>File Type: {this.state.selectedFile.type}</p>
          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  render() {

    return (
      <div>
        <h1>
          Gale–Shapley
        </h1>
        <h3>
          Input File Upload
        </h3>
        <div>
          <input type="file" onChange={this.onFileChange} />
          <button onClick={this.onFileUpload}>
            Upload!
              </button>
        </div>
        {this.fileData()}
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  post_file: file => dispatch(post_file(file))
});

export default connect(
  null,
  mapDispatchToProps
)(UploadGSFile);