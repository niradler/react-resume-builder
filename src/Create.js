import React, {Component} from 'react';
import {Button, Checkbox, Form, Container, Menu} from 'semantic-ui-react';

class Create extends Component {
  render() {
    return (
        <Container>
          <Form>
            <Form.Field>
              <label>First Name</label>
              <input placeholder='Full Name'/>
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input placeholder='Job title'/>
            </Form.Field>
            <hr/>
            <Form.Field>
              <label>Email</label>
              <input placeholder='Job title'/>
            </Form.Field>
            <Form.Field>
              <label>Website</label>
              <input placeholder='Job title'/>
            </Form.Field>
            <Form.Field>
              <label>Phone</label>
              <input placeholder='Job title'/>
            </Form.Field>
            <hr/>
            <Form.Field>
              <label>Personal Profile
              </label>
              <textarea placeholder='Job title'/>
            </Form.Field>
            <hr/>
            <Form.Field>
              <label>Work Experience</label>
              <input placeholder='Job title'/>
              <input placeholder='Company'/>
              <input placeholder='From'/>
              <input placeholder='To'/>
              <textarea placeholder='Description'/>
              <Button type='button'>Add</Button>
            </Form.Field>
            <Form.Field>
              <label>Key Skills</label>
              <input placeholder='Job title'/>
              <Button type='button'>Add</Button>
            </Form.Field>
            <Form.Field>
              <label>Education</label>
              <input placeholder='Institute'/>
              <input placeholder='From'/>
              <input placeholder='To'/>
              <textarea placeholder='Description'/>
              <Button type='button'>Add</Button>
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
        </Container>
    );
  }
}

export default Create;
