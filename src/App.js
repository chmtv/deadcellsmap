import './App.css';
import React from 'react';
import { ArcherContainer} from 'react-archer';
import MapTile from './mapTile.js';
import Menu from './Menu.js';
import ScrollContainer from 'react-indiana-drag-scroll'
import {createGraph, biomesEnum, dlcEnum, runesEnum} from './graph';
import EdgeLabel from './edgeLabel';
import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
import _ from "lodash"

class App extends React.Component{
  constructor(props) {
    super(props);
    this.dlcEnum = dlcEnum
    this.biomesEnum = biomesEnum;
    this.runesEnum = runesEnum;
    const runes = [
      true,
      true, 
      true,
      true
    ]
    const dlc = [
      true,
      true,
      true,
      true
    ]
    let bsc = 0
    this.state = {
      reset: 0,
      bsc: bsc,
      scrollX: 0,
      scrollY: 0,
      lastX: 0,
      lastY: 0,
      graph: createGraph(bsc, dlc, runes),
      runes: runes,
      dlc: dlc,
    };

    this.archerRef = React.createRef();
    this.containerRef = React.createRef();

    this.mapList = this.mapList.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.bscSet = this.bscSet.bind(this);
    this.runeToggle = this.runeToggle.bind(this);
    this.dlcToggle = this.dlcToggle.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.highlightBiome = this.highlightBiome.bind(this);
  }


 bscSet(bsc) {
  this.setState({
    bsc: bsc,
    graph: createGraph(bsc, this.state.dlc, this.state.runes)
  })
 }
 runeToggle(rune) {
  let newRunes = [...this.state.runes];
  newRunes[rune] = !newRunes[rune];
  this.setState({
    runes: newRunes,
    graph: createGraph(this.state.bsc, this.state.dlc, newRunes)
  });
 }
 dlcToggle(dlc) {
  let newDlc = [...this.state.dlc];
  newDlc[dlc] = !newDlc[dlc];
  this.setState({
    dlc: newDlc,
    graph: createGraph(this.state.bsc, newDlc, this.state.runes)
  });
 }
  onMouseDown(e) {
    e.button != 1 && this.setState({
      isScrolling: true,
      lastY: e.clientY
    })
  }
  onMouseLeave(e) {
    /*
    this.setState({
      isScrolling: false,
      lastY: e.clientY
    })
    */
  }
  onMouseUp() {
    this.setState({
      isScrolling: false
    })
  }
  
  onMouseMove(e) {
    if(this.state.isScrolling) {
      let deltaY = this.state.lastY - e.clientY;
      
      this.setState({
          scrollX: this.state.scrollX,
          scrollY: this.state.scrollY + deltaY,
          lastY: e.clientY
          
      });
      this.archerRef.current.refreshScreen();
      window.scroll(0, this.state.scrollY + deltaY);
      if(this.state.scrollY < 0) {
        this.setState({
          scrollY: 0
        })
      }
    }
  }
  onScroll(e) {
    this.setState({
      scrollY: e.clientY
    })
  }
  
  getRelationsArray(rootIndex = 0) {
    let curBiome = this.state.graph[rootIndex]
    if (curBiome.edges) {
      let array = curBiome.edges.map((targetIndex, edgeIndex) => {
        // Sets the label for the edge, seems unoptimized, will think about it later, probably
        // TODO: DLC floors also shouldn't have arrows coming out of them when the DLC is set to false
        if(this.state.graph[targetIndex].dlc !== undefined && !this.state.dlc[this.state.graph[targetIndex].dlc]) {
          return {
            targetId: targetIndex,
            targetAnchor: 'top',
            sourceAnchor: 'bottom',
            style: { strokeColor: '#ffffff00'},
            label: curBiome.edgeLabels && curBiome.edgeLabels[edgeIndex]
          }
        }
        else {
          return {
            targetId: targetIndex,
            targetAnchor: 'top',
            sourceAnchor: 'bottom',
            style: { 
              strokeColor: curBiome.highlighted ? "hsl(10deg, 90%, 40%)" : "hsl(180deg, 90%, 40%)",
              strokeWidth: curBiome.highlighted ? "4" : "2",
            },
            label: curBiome.edgeLabels && curBiome.edgeLabels[edgeIndex]
          }
        }
        
      })
      return array;
    }
    else {
      return [];
    }
  }
  highlightBiome(index) {
    let newGraph = _.cloneDeep(this.state.graph)
    newGraph[index].highlighted = !newGraph[index].highlighted;
    this.setState({
      graph: newGraph
    });
  }
  mapList() {
    let mapList = this.state.graph.map((el, i) => {
        return <MapTile 
          name={el.name}
          index={i}
          relations={this.getRelationsArray(i)}
          style={{
            marginTop: `${5 + el.top / 2.2}%`,
            // marginLeft: `${window.innerWidth / 2 + el.left * 10}px`,
            marginLeft: `${40 + el.left}%`,
          }}
          powerScrolls={el.powerScrolls}
          dualScrolls={el.dualScrolls}
          scrollFragments={el.scrollFragments}
          img={el.img}
          visibility={el.hidden ? "hidden" : "visible"}
          highlightBiome={this.highlightBiome}
          highlighted={el.highlighted}
        />
    })
    return mapList
  }

  render() {
    this.archerRef.current && this.archerRef.current.refreshScreen()
    return (
      <>
      {
      // process.env.NODE_ENV === 'production' && <base href="./deadcellsmap" />
      }
      <div id="background"></div>
      <Menu 
      bscSet={this.bscSet}
      runeToggle={this.runeToggle}
      runes={this.state.runes}
      bsc={this.state.bsc}
      dlc={this.state.dlc}
      dlcToggle={this.dlcToggle}
      >
      </Menu>
        <div id="archerMajorContainer" >
          
            <ArcherContainer lineStyle='straight'
            ref={this.archerRef}
            >
            <div id="container" ref={this.containerRef} onMouseDown={window.screen.width < 1280 && this.onMouseDown} onMouseUp={this.onMouseUp} onMouseMove={this.onMouseMove} onMouseLeave={this.onMouseLeave}>
                
                {this.mapList()}
                
            </div>
            </ArcherContainer>
          
        </div>
        
      </>
      

    )
  }
}

export default App;