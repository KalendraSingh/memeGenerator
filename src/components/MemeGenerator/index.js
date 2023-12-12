import {Component} from 'react'

import {DivBg, ParaEl} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

// Write your code here
class MemeGenerator extends Component {
  state = {
    fontSize: '',
    topText: '',
    bottomText: '',
    imageUrl: '',
    displayMeme: false,
  }

  onChangeFontSize = e => {
    this.setState({fontSize: e.target.value})
  }

  onChangeImageUrl = e => {
    this.setState({imageUrl: e.target.value})
  }

  onChangeTopText = e => {
    this.setState({topText: e.target.value})
  }

  onChangeBottomText = e => {
    this.setState({bottomText: e.target.value})
  }

  generateMeme = () => {
    this.setState({displayMeme: true})
  }

  showMeme = (imageUrl, fontSize, topText, bottomText) => (
    <>
      <div>
        <DivBg imageUrl={imageUrl} data-testid="meme">
          <ParaEl fontSize={fontSize}>{topText}</ParaEl>

          <ParaEl fontSize={fontSize}>{bottomText}</ParaEl>
        </DivBg>
      </div>
    </>
  )

  render() {
    const {fontSize, topText, bottomText, imageUrl, displayMeme} = this.state
    return (
      <div>
        <div>
          <h2>Meme Generator</h2>
          <form>
            <div>
              <label htmlFor="imageUrl">Image Url</label>
              <input
                type="text"
                id="imageUrl"
                placeholder="Enter the Image Url"
                onChange={this.onChangeImageUrl}
              />
            </div>
            <div>
              <label htmlFor="topText">Top Text</label>
              <input
                type="text"
                id="topText"
                placeholder="Enter the Top Text"
                onChange={this.onChangeTopText}
              />
            </div>
            <div>
              <label htmlFor="bottomText">Bottom Text</label>
              <input
                type="text"
                id="bottomText"
                placeholder="Enter the Bottom Text"
                onChange={this.onChangeBottomText}
              />
            </div>
            <div>
              <label htmlFor="fontSize">Font Size</label>
              <select id="fontSize" onChange={this.onChangeFontSize}>
                {fontSizesOptionsList.map(fontsize => (
                  <option value={fontsize.optionId} key={fontsize.optionId}>
                    {fontsize.displayText}
                  </option>
                ))}
              </select>
            </div>
          </form>
          <div>
            <button type="button" onClick={this.generateMeme}>
              Generate
            </button>
          </div>
        </div>
        <div>
          {displayMeme &&
            this.showMeme(imageUrl, fontSize, topText, bottomText)}
        </div>
      </div>
    )
  }
}
export default MemeGenerator
