import React, { Component } from 'react';
import { connect } from 'react-redux';
import { post_file } from '../actions';
import Files from 'react-files'
import './css/uploadGSFile.css';

class UploadGSFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      jsonFile: {},
    };
    this.fileReader = new FileReader()
    this.fileReader.onload = (event) => {

      // or do whatever manipulation you want on JSON.parse(event.target.result) here.

      this.setState({ jsonFile: JSON.parse(event.target.result) }, () => {
        console.log('jsonFile', this.state.jsonFile);
      });
    };

  }

  onFilesChange = (files) => {
    this.setState({ selectedFile: files[0] });
    console.log('files', files);
  }
  onFilesError = (error, file) => {
    console.log('error code ' + error.code + ': ' + error.message)
  }

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
          <h4>No File Loaded</h4>
        </div>
      );
    }
  };


  render() {
    return (
      <div className="Files">
        <h1>
          Gale–Shapley
        </h1>
        <h3>
          Input File Upload
        </h3>
        <Files
          className='files-dropzone'
          accepts={['application/json']}
          clickable
          onChange={file => {
            this.setState({ selectedFile: file[0] });
            // we choose readAsText() to load our file, and onload
            // event we rigister in this.fileReader would be triggered.
            this.fileReader.readAsText(file[0]);
          }}
        >
          Drop Gale-Shapley input files here or click to upload
        </Files>
        {this.fileData()}
        {/*
          {
            this.props.gsoutput.len > 0 && (
              (this.props.gsoutput.map(vc => <div>{vc[0]}:</div>)


              )}
            */}
      </div>
    )
  }
}

export default connect(
  state => ({
    gsoutput: state.gsoutput
  }),
  dispatch => ({
    postFile: (file, history) => dispatch(post_file(file, history))
  })
)(UploadGSFile);