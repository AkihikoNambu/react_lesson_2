import React from 'react'

export default class CharacterItem extends React.Component {
  render() {
    const {character} = this.props
    return (
      <div className='character-wrapper'>
        <img
          className='character-image'
          src={character.image}
        />
        <div className='character-name'>{character.name}</div>
      </div>
    )
  }
}
