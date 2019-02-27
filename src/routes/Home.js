import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../common/Header'

import Card from '../cards/Card'
import CardContainer from '../cards/CardContainer'

const PageGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  overflow: hidden;
`

export default class Home extends Component {
  render() {
    const { onBookmark } = this.props
    return (
      <PageGrid>
        <Header />
        <CardContainer>
          {this.props.cards.map(card => (
            <Card
              {...card}
              key={card._id}
              onBookmark={() => onBookmark(card)}
            />
          ))}
        </CardContainer>
      </PageGrid>
    )
  }
}
