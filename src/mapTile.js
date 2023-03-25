import React, { Component } from 'react'
import { ArcherElement } from 'react-archer';

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
    // <img src={imgSrc} alt={this.props.name} />
    return (
        <ArcherElement
        id={this.props.index}
        relations={this.props.relations}
        >
          
            <div id={this.props.index} className="mapTile" style={{
              backgroundColor: "#ddd",
              top: this.props.style.marginTop,
              left: this.props.style.marginLeft
              }}>
                <div className="mapImgContainer" style={{
                  backgroundImage: `url("${imgSrc}")`
                }}>
                  
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
                {
                  
                  this.props.scrollFragments && 
                  <>
                    , Fragments: {this.props.scrollFragments}
                  </>
                   || ""
                }
              </div>
              </div>
            
          
        </ArcherElement>
    )
  }
}
