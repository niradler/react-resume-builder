import React, {Component} from 'react';
import {Form} from 'react-form-inc';
import Simple from './Simple';
import { Route } from 'react-router-dom'
class Create extends Component {
  constructor(props) {
    super()
    this.state = {
      cv:{}
    }
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
      this.restore = this
      .restore
      .bind(this);
  }
componentWillMount(){
this.restore();
}
save(){
  try{
    localStorage.setItem('cv',JSON.stringify(this.state.cv));  
  }catch(e){ }
}
restore(){
  try{
    let cv = localStorage.getItem('cv');
     cv= JSON.parse(cv);
    if(typeof(cv) === 'object' && cv !==null){
      this.setState({cv:{...cv}})
        }else {//not working ?
          const s = {...this.props.dcv}
          localStorage.setItem('cv',JSON.stringify({...s})); 
          this.setState({cv:{...s}})
        }
   }catch(e){

   }

}
  handleSubmit(fs, t) {
    //t = keys: pi, we,ks,edu

    // if (!fs.isValid) 
    //   return;
 
      const formState = Object.assign({},fs.formData);
      for (const key in formState) {
        if (formState.hasOwnProperty(key)) {
          if(!(formState[key].length >0)) delete formState[key]  
        }
      }
    const cv = this.state.cv;
    switch (t) {
      case 'pi':
        for (const key in formState) {
          cv[key] = formState[key];
        }
        break;
      case 'we':
      if(!cv.workEx){
        cv.workEx=[];
        cv.workEx.push(formState)
      }else{
        cv.workEx.push(formState)
      }
        break;
      case 'ks':
      if(!cv.keySkill){
        cv.keySkill=[];
        cv.keySkill.push(formState)
      }else{
        cv.keySkill.push(formState)
      }
        break;
      case 'edu':
      if(!cv.edu){
        cv.edu=[];
        cv.edu.push(formState)
      }else{
        cv.edu.push(formState)
      }
        break;
      default:
      debugger;
        break;
    }
    this.setState({cv});
    this.save();
  }
  reset(){
    localStorage.setItem('cv',JSON.stringify({}));
    this.setState({cv:{}})//not working ?
    this.updateKey = Math.random();
    debugger;
  }
  print(){
    
this.props.history.push('/simple/print')
  }
  download(){

  }
  render() {
    return (
      <div className="Create container">
      <div className="col-md-6">
      
        <div className="col-md-12">
          <h2>Personal info:</h2>
          <Form
            debug
            className=""
            OnSubmit={(fs) => this.handleSubmit(fs, 'pi')}
            btn={{
            text: "Add",
            props: {
              className: "btn btn-info "
            }
          }}
            fields={[
            {
              InputWrapClass: "form-group ",
              errorClass: 'has-error',
              successClass: 'has-success',
              rules: 'required',
              label: {
                text: "Full Name",
                props: {
                  className: "control-label"
                }
              },
              error: {
                text: "auto",
                props: {
                  className: "help-block"
                }
              },
              props: {
                className: 'form-control input-md',
                name: "fname",
                type: "text"
              }
            }, {
              InputWrapClass: "form-group ",
              errorClass: 'has-error',
              successClass: 'has-success',
              rules: 'required',
              label: {
                text: "Job Title",
                props: {
                  className: "control-label"
                }
              },
              error: {
                text: "auto",
                props: {
                  className: "help-block"
                }
              },
              props: {
                className: 'form-control input-md',
                name: "jobTitle",
                type: "text"
              }
            }, {
              InputWrapClass: "form-group ",
              errorClass: 'has-error',
              successClass: 'has-success',
              rules: 'numeric|required',
              label: {
                text: "Phone",
                props: {
                  className: "control-label"
                }
              },
              error: {
                text: "auto",
                props: {
                  className: "help-block"
                }
              },
              props: {
                className: 'form-control input-md',
                name: "phone",
                type: "tel"
              }
            }, {
              InputWrapClass: "form-group ",
              errorClass: 'has-error',
              successClass: 'has-success',
              rules: 'email|required',
              label: {
                text: "Email",
                props: {
                  className: "control-label"
                }
              },
              error: {
                text: "auto",
                props: {
                  className: "help-block"
                }
              },
              props: {
                className: 'form-control input-md',
                name: "email",
                type: "email"
              }
            }, {
              InputWrapClass: "form-group ",
              errorClass: 'has-error',
              successClass: 'has-success',
              rules: 'required',
              label: {
                text: "Website",
                props: {
                  className: "control-label"
                }
              },
              error: {
                text: "auto",
                props: {
                  className: "help-block"
                }
              },
              props: {
                className: 'form-control input-md',
                name: "site",
                type: "url"
              }
            }, {
              InputWrapClass: "form-group ",
              errorClass: 'has-error',
              successClass: 'has-success',
              rules: 'required',
              label: {
                text: "Description",
                props: {
                  className: "control-label"
                }
              },
              error: {
                text: "auto",
                props: {
                  className: "help-block pull-left"
                }
              },
              props: {
                className: 'form-control input-md',
                name: "profile",
                type: "text"
              }
            }
          ]}/>
        </div>

        <div className="col-md-12">
          <h2>Work expirince:</h2>
          <Form
            className=""
            OnSubmit={(fs) => this.handleSubmit(fs, 'we')}
            btn={{
            text: "Add",
            props: {
              className: "btn btn-info "
            }
          }}
            fields={[
            {
              InputWrapClass: "form-group ",
              errorClass: 'has-error',
              successClass: 'has-success',
              rules: 'required',
              label: {
                text: "Job Title",
                props: {
                  className: "control-label"
                }
              },
              error: {
                text: "auto",
                props: {
                  className: "help-block"
                }
              },
              props: {
                className: 'form-control input-md',
                name: "jobTitle",
                type: "text"
              }
            }, {
              InputWrapClass: "form-group ",
              errorClass: 'has-error',
              successClass: 'has-success',
              rules: 'required',
              label: {
                text: "From",
                props: {
                  className: "control-label"
                }
              },
              error: {
                text: "auto",
                props: {
                  className: "help-block"
                }
              },
              props: {
                className: 'form-control input-md',
                name: "from",
                type: "date"
              }
            }, {
              InputWrapClass: "form-group ",
              errorClass: 'has-error',
              successClass: 'has-success',
              rules: 'required',
              label: {
                text: "To",
                props: {
                  className: "control-label"
                }
              },
              error: {
                text: "auto",
                props: {
                  className: "help-block"
                }
              },
              props: {
                className: 'form-control input-md',
                name: "to",
                type: "date"
              }
            }, {
              InputWrapClass: "form-group ",
              errorClass: 'has-error',
              successClass: 'has-success',
              rules: 'required',
              label: {
                text: "Description",
                props: {
                  className: "control-label"
                }
              },
              error: {
                text: "auto",
                props: {
                  className: "help-block"
                }
              },
              props: {
                className: 'form-control input-md',
                name: "description",
                type: "text"
              }
            }
          ]}/>
        </div>

        <div className="col-md-12">
          <h2>Key skills:</h2>
          <Form
            className=""
            OnSubmit={(fs) => this.handleSubmit(fs, 'ks')}
            btn={{
            text: "Add",
            props: {
              className: "btn btn-info "
            }
          }}
            fields={[{
              InputWrapClass: "form-group ",
              errorClass: 'has-error',
              successClass: 'has-success',
              rules: 'required',
              label: {
                text: "Skills",
                props: {
                  className: "control-label"
                }
              },
              error: {
                text: "auto",
                props: {
                  className: "help-block"
                }
              },
              props: {
                className: 'form-control input-md',
                name: "skill",
                type: "text"
              }
            }
          ]}/>
        </div>

        <div className="col-md-12">
          <h2>Education:</h2>
          <Form
            className=""
            OnSubmit={(fs) => this.handleSubmit(fs, 'edu')}
            btn={{
            text: "Add",
            props: {
              className: "btn btn-info "
            }
          }}
            fields={[
            {
              InputWrapClass: "form-group ",
              errorClass: 'has-error',
              successClass: 'has-success',
              rules: 'required',
              label: {
                text: "Institute",
                props: {
                  className: "control-label"
                }
              },
              error: {
                text: "auto",
                props: {
                  className: "help-block"
                }
              },
              props: {
                className: 'form-control input-md',
                name: "institute",
                type: "text"
              }
            }, {
              InputWrapClass: "form-group ",
              errorClass: 'has-error',
              successClass: 'has-success',
              rules: 'required',
              label: {
                text: "From",
                props: {
                  className: "control-label"
                }
              },
              error: {
                text: "auto",
                props: {
                  className: "help-block"
                }
              },
              props: {
                className: 'form-control input-md',
                name: "from",
                type: "date"
              }
            }, {
              InputWrapClass: "form-group ",
              errorClass: 'has-error',
              successClass: 'has-success',
              rules: 'date|required',
              label: {
                text: "To",
                props: {
                  className: "control-label"
                }
              },
              error: {
                text: "auto",
                props: {
                  className: "help-block"
                }
              },
              props: {
                className: 'form-control input-md',
                name: "to",
                type: "date"
              }
            }, {
              InputWrapClass: "form-group ",
              errorClass: 'has-error',
              successClass: 'has-success',
              rules: 'required',
              label: {
                text: "Description",
                props: {
                  className: "control-label"
                }
              },
              error: {
                text: "auto",
                props: {
                  className: "help-block"
                }
              },
              props: {
                className: 'form-control input-md',
                name: "description",
                type: "text"
              }
            }
          ]}/>
        </div>
        </div>
        <div className="col-md-6">
        <button type="button" className="btn btn-warning" onClick={this.reset.bind(this)}>Reset</button>
        <button type="button" className="btn btn-warning" onClick={this.download.bind(this)}>Download</button>
        <button type="button" className="btn btn-warning" onClick={this.print.bind(this)}>Print</button>
        <Simple cv={this.state.cv} update={this.updateKey}/>
        </div>
      </div>
    );
  }
}

export default Create;
