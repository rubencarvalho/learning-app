import React, { Component } from 'react'
import Filter from './Filter'
import styled from 'styled-components'

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  margin-bottom: 4px;
  background: hotpink;
  color: white;
  text-transform: uppercase;
`
export default class Header extends Component {
  state = {
    tags: ['html', 'css', 'js', 'shell'],
    activeTag: 'html',
  }

  setFilter = tag => {
    this.setState({
      activeTag: tag,
    })
  }

  render() {
    return (
      <header>
        <Title>{this.state.activeTag}</Title>
        <Filter
          items={this.state.tags}
          active={this.state.activeTag}
          onClick={this.setFilter}
        />
      </header>
    )
  }
}
