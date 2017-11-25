import React, {Component} from 'react';
import {Form} from 'react-form-inc';

class Create extends Component {
  constructor(props) {
    super()
    this.state = {
      // fname:"Nir Adler", email:"niradler55@gmail.com", site:"prototypesart.net",
      // phone:"0525310600", jobTitle:"developer", profile:"nir the developer",
      // workEx:[{jobTitle:"developer",from:"19 7 88", to:"21 7
      // 89",description:"Description"}], keySkill:[{description:"Description"}],
      // edu:[{institute:"developer",from:"19 7 88", to:"21 7
      // 89",description:"Description"}],
    }
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  }

  handleSubmit(fs, t) {
    //t = keys: pi, we,ks,edu

    if (!fs.isValid) 
      return;
    const state = this.state;
    switch (t) {
      case 'pi':
        for (const key in fs.formData) {
          state[key] = fs.formData[key];
        }
        this.setState(state);
        break;
      case 'we':
      debugger;
      state.workEx=state.workEx ? [...state.workEx]:[];
      state.workEx.push(fs.formData)
        this.setState(state);
        break;
      case 'ks':
        for (const key in fs.formData) {
          state[key] = fs.formData[key];
        }
        this.setState(state);
        break;
      case 'edu':
        for (const key in fs.formData) {
          state[key] = fs.formData[key];
        }
        this.setState(state);
        break;
      default:
        break;
    }
    debugger;
  }
  render() {
    return (
      <div className="Create container">

        <div className="col-md-6">
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

        <div className="col-md-6">
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

        <div className="col-md-6">
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

        <div className="col-md-6">
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
              rules: 'numeric|required',
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
        <div className="col-md-12"></div>
      </div>
    );
  }
}

export default Create;
