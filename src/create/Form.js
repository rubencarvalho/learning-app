import React, { Component } from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  display: grid;
  grid-gap: 12px;
  grid-template-rows: 40px 60px 40px 48px;
`

export default class Form extends Component {
  render() {
    return (
      <StyledForm onSubmit={this.props.onSubmit}>
        <input
          onChange={this.props.onInputChange}
          type="text"
          placeholder="Title"
          name="title"
        />
        <textarea
          onChange={this.props.onInputChange}
          placeholder="Content"
          name="content"
          cols="30"
          rows="10"
        />
        <input
          onChange={this.props.onInputChange}
          type="text"
          placeholder="Tags"
          name="tags"
        />
        <button>Create</button>
      </StyledForm>
    )
  }
}
