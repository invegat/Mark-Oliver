import React, { Component } from 'react';
import { connect } from 'react-redux';
import { post_file } from '../actions';


class UploadGSFilex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    };
  }

  onFileChange = event => {
    console.log('onFileChange event', JSON.stringify(event.target.value.substring(12)))
    this.setState({ selectedFile: event.target.files[0] }, () => {
      console.log('this.state.selectedFile', this.state.selectedFile)
      const formData = new FormData();
      formData.append(
        "gsFile",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
      this.props.postFile(
        {
          name: "gsFile",
          size: this.state.selectedFile.size,
          path: this.state.selectedFile.name
        }
        , this.props.history);
      console.log('this.state.selectedFile', this.state.selectedFile.name)

    })
  };

  onFileUpload = () => {

    // Create an object of formData 
    // const formData = new FormData();

    // Details of the uploaded file 
    console.log('selectedFile', JSON.stringify(this.state.selectedFile));

    // Update the formData object 
    // formData.append(
    //   "gsFile",
    //   this.state.selectedFile,
    //   this.state.selectedFile.name
    // );
    // console.log('initial formData', JSON.stringify(formData))



    // Request made to the backend api 
    // Send formData object 
    this.props.postFile(this.state.selectedFile, this.props.history)

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
            {(new Date(this.state.selectedFile.lastModified)).toDateString()}
            &nbsp;
            {(new Date(this.state.selectedFile.lastModified)).toTimeString()}
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
      <form onSubmit={this.onFileUpload}>
        <h1>
          Gale–Shapley
        </h1>
        <h3>
          Input File Upload
        </h3>
        <div>
          <input type="file" onChange={this.onFileChange} accept="application/json" />
          <button type="submit">
            Upload!
          </button>
        </div>
        {this.fileData()}
      </form>
    );
  }
}


// const mapDispatchToProps = dispatch => ({
//   post_file: (file) => dispatch(post_file(file))
// });

export default connect(
  () => ({
  }),
  dispatch => ({
    postFile: (file, history) => dispatch(post_file(file, history))
  })
)(UploadGSFilex);