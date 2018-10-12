import React from 'react'
import CharacterItem from './CharacterItem'

export default class App extends React.Component {
  render() {
    const characters = [
      {
        name: 'にんじゃわんこ',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/React/ken.png',
      },
      {
        name: 'ベイビーわんこ',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/React/ben.png',
      },
      {
        name: 'ひつじ仙人',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/React/master.png',
      },
      {
        name: 'とりずきん',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/React/torizukin.png',
      },
    ]
    return (
      <div>
        {characters.map(character => {
          return <CharacterItem character={character} />
        })}
      </div>
    )
  }
}
