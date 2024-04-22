import React, { Component } from 'react'
import { ArcherElement } from 'react-archer';
import { shopEnums } from './graph';

export default class mapTile extends Component {
  
    
  render() {
    let imgSrc;
    if(this.props.img) {
      // In case of external images by URL
      if(this.props.img.startsWith("http")) {
        imgSrc = this.props.img
      }
      // In case of local file
      else {
        imgSrc = "mapimgs/" + this.props.img;
      }
    }
    // Code for showing the loot and shops data
    const shopIconUrl = "https://deadcells.wiki.gg/images/5/58/Gold_Currency_Icon.png"
    let shopsJSX = [<> <img src={shopIconUrl}></img>: </>]
    shopsJSX = this.props.shops && shopsJSX.concat(this.props.shops.map((shopType) => {
      
      switch(shopType) {
        
        case shopEnums.food:
          return <div className='shop'>,</div>
          break;
        case shopEnums.skill:
          return <div className='shop'>Skill,</div>
          break;
        case shopEnums.weapon:
            return <div className='shop'>Weapon,</div>
            break;
        case shopEnums.both:
          return <div className='shop'>Random,</div>
        default:
          return <></>
      }
    }))
    let chestsJSX = <>
    <div><img src="https://static.wikia.nocookie.net/deadcells_gamepedia_en/images/5/54/Treasurechest_Closed.png/revision/latest?cb=20211024083956"></img>:{this.props.chests || 0},</div>
    <div><img src="https://static.wikia.nocookie.net/deadcells_gamepedia_en/images/0/0a/CursedChest_Open.png/revision/latest?cb=20211024083938"></img>:{this.props.cursedChests || 0},</div>
    <div>Cursed Chest %: {this.props.cursedChestPct}%</div>
    </>
    
    // <img src={imgSrc} alt={this.props.name} />
    return (
      <div onClick={() => this.props.highlightBiome(this.props.index)}>
        <ArcherElement
        id={this.props.index}
        relations={this.props.relations}
        
        >
          
            <div id={this.props.index} className={`mapTile ${this.props.highlighted ? "mapTileHighlighted" : ""}`} style={{
              backgroundColor: "#ddd",
              top: this.props.style.marginTop,
              left: this.props.style.marginLeft,
              visibility: this.props.visibility
              }}
              
            
              >
                <div className="mapImgContainer" style={{
                  backgroundImage: `url("${imgSrc}")`
                }}
                >
                  
                </div>
                <div className="mapName"><div>{this.props.name}</div></div>
              <div className="mapDetails">
                <div>
                  {this.props.powerScrolls && <>
                    <img src="powerScroll.png" alt="Power Scroll"></img> 
                    {this.props.powerScrolls}
                  </> || ""}
                </div>
                <div>
                  {this.props.dualScrolls && <>
                    <img src="dualScroll.png" alt="Dual Scroll"></img> 
                    {this.props.dualScrolls}
                  </> || ""} 
                </div>
                <div>
                  {
                    this.props.scrollFragments && 
                    <>
                      , Fragments: {this.props.scrollFragments}
                    </>
                    || ""
                  }
                </div>
              </div>
              <div className="lootAndShops">
                  { 
                  <div className="chests"><img src="https://deadcells.wiki.gg/images/5/54/Treasurechest_Closed.png"></img>{this.props.chests}</div>}
                  { this.props.cursedChests &&
                  <div className="cursedChests"><img src="https://deadcells.wiki.gg/images/thumb/0/0a/CursedChest_Open.png/100px-CursedChest_Open.png"></img>{this.props.cursedChests}</div>}
                  {shopsJSX || ""}
                  {chestsJSX || ""}
              </div>
              </div>
            
          
        </ArcherElement>
      </div>
    )
  }
}
