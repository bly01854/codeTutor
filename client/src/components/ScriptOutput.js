import React, { Component } from 'react'
import {FormGroup, Label, Input } from 'reactstrap';

export default class ScriptOutput extends Component {
    render() {
        return (
        <div>
            <FormGroup>
                <Label for="outputText">Ouptput</Label>
                <Input type="textarea" name="outputText" id="outputText" disabled/>
            </FormGroup>
        </div>
        )
    }
}