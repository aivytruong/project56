import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import {model} from './ClientApp/Models/model';


async function sendLegoFile(file:string, institute:string) : Promise<void> {
  let content = {content:file}
  console.log(content)
  let res = await fetch(`/api/v1/CustomAssignmentLogic/SendLegoFile/${institute}`, { method: 'put',  body:JSON.stringify(content), credentials: 'include', headers: { 'content-type': 'application/json' } })
  let parsed_res = await res.json()
  if(!parsed_res)
    throw new Error("Error while uploading or processing the file at server side")
  return 
}
class FormUploaderComponent extends React.Component<{institute:model.Institute, entities_to_upload:"Lego"},{content:string}>  {
  constructor(props, context){
    super(props, context)
    this.state = {content:""}
  }
  file_loaded(e){
    this.setState({...this.state, content: e.target.result});
  }
  handleChange(event) {
    let reader = new FileReader();
    reader.onload = this.file_loaded.bind(this)
    let files = event.target.files;
    if (!files.length) {
      alert('No file select');
      return;
    }
    let file = files[0];
    reader.readAsText(file);

    
  }
  handleSubmit(event) {
    console.log("handleSubmit", this.state)
    if(this.props.entities_to_upload == "Lego")
      sendLegoFile(this.state.content, this.props.institute.Name).then(_=>alert('File sent')).catch(e=>{console.log(e); alert('Error')})
    event.preventDefault();
  }

  render(){

    return <form onSubmit={this.handleSubmit.bind(this)}>
      <input type="file" onChange={this.handleChange.bind(this)}/> 
      <label> Select a file to upload</label> 
      <input type="submit" value="submit"/>
      </form>
  }
} 