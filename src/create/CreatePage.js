import React, { Component } from 'react'
import styled from 'styled-components'
import Card from '../cards/Card'
import CardContainer from '../cards/CardContainer'
import { split } from '../utils'
import Form from './Form'
const Grid = styled.section`
  display: grid;
  align-content: flex-end;
  padding: 12px;
`

export default class CreatePage extends Component {
  state = {
    title: '',
    content: '',
    tags: '',
  }

  onInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  onSubmit = event => {
    event.preventDefault()
    const tags = split(this.state.tags)
    this.props.onSubmit({ ...this.state, tags })
  }

  render() {
    const { title, content, tags } = this.state

    return (
      <Grid>
        <CardContainer>
          {(title || content || tags) && (
            <Card
              title={title || 'No title yet'}
              content={content || 'No content yet'}
              tags={split(tags)}
            />
          )}
        </CardContainer>
        <Form onSubmit={this.onSubmit} onInputChange={this.onInputChange} />
      </Grid>
    )
  }
}
