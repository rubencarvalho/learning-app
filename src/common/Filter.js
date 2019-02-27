import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Grid = styled.section`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2px;
`

const Link = styled.div`
  display: flex;
  cursor: default;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
  flex: 1 1;
  background: #eee;
  color: ${p => (p.isActive ? 'hotpink' : '#333')};
  text-transform: uppercase;
`

export default class Filter extends Component {
  static propTypes = {
    items: PropTypes.array,
    active: PropTypes.bool,
    onClick: PropTypes.func,
  }

  static defaultProps = {}

  render() {
    const { items, active, onClick } = this.props
    return (
      <Grid>
        {items.map(item => (
          <Link
            key={item}
            isActive={item === active}
            onClick={() => onClick(item)}
          >
            {item}
          </Link>
        ))}
      </Grid>
    )
  }
}
