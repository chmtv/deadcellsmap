import React, { Component } from 'react'
import './Menu.css';
import {dlcEnum, runesEnum} from "./graph.js"

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      open: true
    }
  }
  toggleMenu() {
      this.setState({
        open: !this.state.open
      })
      
  }
  render() {
    return (
      <>
        <div id="menu" className={this.state.open ? "settingsMenuOpen" : "settingsMenuClosed"}>
          <section>
              <img src="./bsc.png" alt="Boss Stem Cells"/>
              <input type="radio" name="bscOptions" id="bsc0" className="optionButton" onClick={() => this.props.bscSet(0)} checked={this.props.bsc == 0}/>
              <label for="bsc0"><h1>0</h1></label>
              
              <input type="radio" name="bscOptions" id="bsc1" className="optionButton" onClick={() => this.props.bscSet(1)} />
              <label for="bsc1"><h1>I</h1></label>

              <input type="radio" name="bscOptions" id="bsc2" className="optionButton" onClick={() => this.props.bscSet(2)} />
              <label for="bsc2"><h1>II</h1></label>

              <input type="radio" name="bscOptions" id="bsc3" className="optionButton" onClick={() => this.props.bscSet(3)} />
              <label for="bsc3"><h1>III</h1></label>

              <input type="radio" name="bscOptions" id="bsc4" className="optionButton" onClick={() => this.props.bscSet(4)} />
              <label for="bsc4"><h1>IV</h1></label>

              <input type="radio" name="bscOptions" id="bsc5" className="optionButton" onClick={() => this.props.bscSet(5)} />
              <label for="bsc5"><h1>V</h1></label>
          </section>
          <section>
            <input type="checkbox" name="vineRune" id="vineRune" checked={this.props.runes[runesEnum.vine]} onClick={() => {this.props.runeToggle(runesEnum.vine)}}/>
            <label htmlFor='vineRune'><img src="/deadcellsmap/runes/vineRune.webp"/></label>

            <input type="checkbox" name="teleRune" id="teleRune" checked={this.props.runes[runesEnum.teleportation]} onClick={() => this.props.runeToggle(runesEnum.teleportation)}/>
            <label htmlFor='teleRune'><img src="/deadcellsmap/runes/teleRune.webp"/></label>

            <input type="checkbox" name="ramRune" id="ramRune" checked={this.props.runes[runesEnum.ram]} onClick={() => {this.props.runeToggle(runesEnum.ram)}}/>
            <label htmlFor='ramRune'><img src="/deadcellsmap/runes/ramRune.webp"/></label>

            <input type="checkbox" name="spiderRune" id="spiderRune" checked={this.props.runes[runesEnum.spider]} onClick={() => {this.props.runeToggle(runesEnum.spider)}}/>
            <label htmlFor='spiderRune'><img src="/deadcellsmap/runes/spiderRune.png"/></label>
          </section>
          <section id="dlc">
            <input type="checkbox" name="badSeedDlc" checked={this.props.dlc[dlcEnum.badSeed]} onClick={() => this.props.dlcToggle(dlcEnum.badSeed)} />
            <label htmlFor='teleRune' style={{backgroundImage: "url(https://deadcells.wiki.gg/images/thumb/b/be/The_Bad_Seed_DLC_Titlecard.jpg/300px-The_Bad_Seed_DLC_Titlecard.jpg)"}}></label>
          </section>
        </div>
        <button id="settingsButton" onClick={this.toggleMenu} className={this.state.open ? "settingsButtonOpen" : "settingsButtonClosed"}>
          <img src="./settings.svg" alt="Boss Stem Cells"/>
        </button>
      </>
    )
  }
}
