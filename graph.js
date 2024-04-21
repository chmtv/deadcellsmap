class bscProperty {
  constructor(bsc, bscProperties = {}) {
    this.bsc = bsc;
    this.bscProperties = bscProperties;
  }
}
class runeProperty {
  constructor(rune, runeProperties) {
    this.rune = rune;
    this.runeProperties = runeProperties
  }
}

function createEdgeLabel() {
  return null;
}

const biomesEnum = {
    prisonQuarters: 0,
    promenade: 1,
    toxicSewers: 2,
    arboretum: 3,
    ramparts: 4,
    ancientSewers: 6,
    corruptedPrison: 5,
    morass: 7,
    prisonDepths: 8,
    ossuary: 9,
    blackBridge: 10,
    nest: 11,
    insufferableCrypt: 12,
    stiltVillage: 13,
    fracturedShrines: 14,
    graveyard: 15,
    slumberingSanctuary: 16,
    undyingShores: 17,
    clockTower: 18,
    forgottenSepulcher: 19,
    cavern: 20,
    mausoleum: 21,
    clockRoom: 22,
    guardiansHaven: 23,
    highPeakCastle: 24,
    distillery: 25,
    infestedShipwreck: 26,
    throneRoom: 27,
    lighthouse: 28,
    crown: 29,
    castleOutskirts: 30,
    draculaCastle1: 31,
    defiledNecropolis: 32,
    draculaCastle2: 33,
    mastersKeep: 34
  }
const dlcEnum = {
    badSeed: 0,
    fatalFalls: 1,
    QueenAndTheSea: 2,
    castlevania: 3
  };
const runesEnum = {
  vine: 0,
  teleportation: 1,
  ram: 2,
  spider: 3,
}
const runes = [
  {
    name: "Vine Rune",
    imgSrc: "/deadcellsmap/runes/vineRune.webp"
  },
  {
    name: "Teleportation Rune",
    imgSrc: "/deadcellsmap/runes/teleRune.webp"
  },
  {
    name: "Ram Rune",
    imgSrc: "/deadcellsmap/runes/ramRune.webp"
  },
  {
    name: "Spider Rune",
    imgSrc: "/deadcellsmap/runes/spiderRune.png"
  }
];
let bsc = 0
const originalGraph = [
  {
    // 0
    name: "Prisoners' Quarters",
    edges: [biomesEnum.promenade, biomesEnum.castleOutskirts],
    powerScrolls: 2,
    runeProperties: [
      new runeProperty(runesEnum.vine, {edges: [biomesEnum.toxicSewers]}),
      new runeProperty(runesEnum.teleportation, {edges: [biomesEnum.arboretum]})
    ],
    img: "./prisonersQuarters.webp",
    top: 0,
    left: 0,
    gearLevel: 1 // The only biome without an increasing gear level is the first draculas castle
  },
  {
    // 1
    name: "Promenade of the Condemned",
    edges: [biomesEnum.ramparts, ],
    powerScrolls: 1,
    dualScrolls: 2,
    scrollFragments: 0,
    bscProperties: [
      new bscProperty(1, {powerScrolls: 1}),
      new bscProperty(3, {scrollFragments: 1}),
      new bscProperty(4, {scrollFragments: 1})
    ],
    runeProperties: [
      new runeProperty(runesEnum.teleportation, {edges: [
        // I THINK THIS IS CORRECT, IDK
        biomesEnum.ossuary,
        biomesEnum.morass
      ]}),
      new runeProperty(runesEnum.spider, {edges: [biomesEnum.prisonDepths]})
    ],
    img: "./promenade.png",
    top: 20,
    left: 0
  },
  { // 2
    name: "Toxic Sewers",
    edges: [biomesEnum.ramparts],
    powerScrolls: 1,
    dualScrolls: 2,
    scrollFragments: 0,
    bscProperties: [
      new bscProperty(1, {powerScrolls: 1}),
      new bscProperty(3, {scrollFragments: 2}),
      new bscProperty(4, {scrollFragments: 1})
    ],
    runeProperties: [
      new runeProperty(runesEnum.ram, {edges: [biomesEnum.ancientSewers]}),
      new runeProperty(runesEnum.spider, {edges: [
        biomesEnum.corruptedPrison,
      ]})
    ],
    img: "https://deadcells.wiki.gg/images/f/fe/Toxic_Sewers.png",
    top: 20,
    left: 40
  },
  {
    // 3
    name: "Dilapidated Arboretum",
    edges: [biomesEnum.ramparts, biomesEnum.morass],
    powerScrolls: 1,
    bscProperties: [
      new bscProperty(1, {powerScrolls: 1}),
      new bscProperty(3, {scrollFragments: 1}),
      new bscProperty(4, {scrollFragments: 1})
    ],
    runeProperties: [
      new runeProperty(runesEnum.spider, {edges:[biomesEnum.prisonDepths]})
    ],
    dualScrolls: 2,
    img: "./arboretum.webp",
    dlc: 0,
    scrollFragments: 0,
    top: 20,
    left: -40
  },
  {
    // 4
    name: "Ramparts",
    edges: [biomesEnum.blackBridge],
    powerScrolls: 3,
    dualScrolls: 2,
    scrollFragments: 0,
    bscProperties: [
      new bscProperty(3, {edges: [biomesEnum.insufferableCrypt]}),
      new bscProperty(2, {powerScrolls: 1}),
      new bscProperty(3, {scrollFragments: 1}),
      new bscProperty(4, {scrollFragments: 1})
    ],
    img: "https://deadcells.wiki.gg/images/b/be/Ramparts.png",
    top: 60,
    left: 20
  },
  {
    // 5
    name: "Corrupted Prison",
    img: "https://deadcells.wiki.gg/images/3/35/Corrupted_Prison.png",
    edges: [biomesEnum.ancientSewers],
    bscProperties: [
      new bscProperty(1, {edges: [biomesEnum.ramparts]})
    ],
    powerScrolls: 1,
    top: 40,
    left: 35,
  },
  {
    // 6
    name: "Ancient Sewers",
    img: "https://deadcells.wiki.gg/images/3/39/Ancient_Sewers.png",
    edges: [biomesEnum.insufferableCrypt],
    powerScrolls: 3,
    dualScrolls: 2,
    scrollFragments: 0,
    bscProperties: [
      new bscProperty(2, {powerScrolls: 1}),
      new bscProperty(3, {scrollFragments: 3}),
      new bscProperty(4, {scrollFragments: 2})
    ],
    top: 60,
    left: 40
  },
  {
    // 7
    name: "Morass of the Banished",
    img: "https://deadcells.wiki.gg/images/4/4b/Morass_of_the_Banished.png",
    edges: [biomesEnum.nest],
    dlc: dlcEnum.badSeed,
    powerScrolls: 3,
    dualScrolls: 2,
    scrollFragments: 0,
    bscProperties: [
      new bscProperty(2, {powerScrolls: 1}),
      new bscProperty(3, {scrollFragments: 2}),
      new bscProperty(4, {scrollFragments: 2})
    ],
    top: 60,
    left: -20
  },
  {
    // 8
    name: "Prison Depths",
    img: "https://deadcells.wiki.gg/images/c/ce/Prison_Depths.png",
    edges: [biomesEnum.morass, biomesEnum.ossuary],
    powerScrolls: 1,
    bscProperties: [
      new bscProperty(1, {edges: [biomesEnum.ancientSewers]})
    ],
    top: 40,
    left: -40
  },
  {
    // 9
    name: "Ossuary",
    img: "https://deadcells.wiki.gg/images/thumb/a/af/Ossuary.png/299px-Ossuary.png",
    edges: [biomesEnum.blackBridge],
    powerScrolls: 2,
    dualScrolls: 2,
    scrollFragments: 0,
    bscProperties: [
      new bscProperty(2, {powerScrolls: 1}),
      new bscProperty(3, {scrollFragments: 2}),
      new bscProperty(4, {scrollFragments: 1})
    ],
    top: 60,
    left: -40
  },
  {
    // 10
    name: "Black Bridge",
    img: "https://deadcells.wiki.gg/images/thumb/e/e8/Black_Bridge.png/299px-Black_Bridge.png",
    edges: [biomesEnum.stiltVillage, biomesEnum.fracturedShrines, biomesEnum.slumberingSanctuary],
    scrollFragments: 0,
    bscProperties: [
      new bscProperty(3, {scrollFragments: 2}),
      new bscProperty(4, {scrollFragments: 1})
    ],
    powerScrolls: 0,
    top: 80,
    left: -40
  },
  {
    // 11
    name: "Nest",
    edges: [biomesEnum.stiltVillage, biomesEnum.fracturedShrines],
    img: "https://deadcells.wiki.gg/images/thumb/d/d1/Nest.png/299px-Nest.png",
    scrollFragments: (bsc >= 3 && 3) + (bsc >= 4 && 1),
    bscProperties: [
      new bscProperty(3, {scrollFragments: 3}),
      new bscProperty(4, {scrollFragments: 1})
    ],
    runeProperties: [
      new runeProperty(runesEnum.spider, {edges: [biomesEnum.graveyard]})
    ],
    powerScrolls: 0,
    dlc: dlcEnum.badSeed,
    top: 80,
    left: 0
  },
  {
    // 12
    name: "Insufferable Crypt",
    img: "https://deadcells.wiki.gg/images/thumb/8/8c/Insufferable_Crypt.png/299px-Insufferable_Crypt.png",
    edges: [biomesEnum.slumberingSanctuary],
    scrollFragments: 0,
    powerScrolls: 0,
    bscProperties: [
      new bscProperty(3, {scrollFragments: 3}),
      new bscProperty(4, {scrollFragments: 1})
    ],
    runeProperties: [
      new runeProperty(runesEnum.spider, {edges: [biomesEnum.graveyard]})
    ],
    top: 80,
    left: 40
  },
  {
    // 13
    name: "Stilt Village",
    img: "https://deadcells.wiki.gg/images/thumb/f/f0/Stilt_Village.png/299px-Stilt_Village.png",
    edges: [biomesEnum.undyingShores, biomesEnum.clockTower, biomesEnum.forgottenSepulcher],
    powerScrolls: 3,
    dualScrolls: 1,
    scrollFragments: 0,
    bscProperties: [
      new bscProperty(3, {powerScrolls: 1}),
      new bscProperty(3, {scrollFragments: 1}),
      new bscProperty(4, {scrollFragments: 1})
    ],
    top: 100,
    left: -40
  },
  {
    // 14
    name: "Fractured Shrines",
    img: "https://deadcells.wiki.gg/images/thumb/c/c5/Fractured_Shrines.png/299px-Fractured_Shrines.png",
    edges: [biomesEnum.undyingShores, biomesEnum.clockTower, biomesEnum.forgottenSepulcher],
    powerScrolls: 3,
    dualScrolls: 1,
    scrollFragments: 0,
    bscProperties: [
      new bscProperty(3, {powerScrolls: 1}),
      new bscProperty(3, {scrollFragments: 1}),
      new bscProperty(4, {scrollFragments: 1})
    ],
    dlc: dlcEnum.fatalFalls,
    top: 100,
    left: -20
  },
  {
    // 15
    name: "Graveyard",
    edges: [biomesEnum.undyingShores, biomesEnum.forgottenSepulcher],
    img: "https://deadcells.wiki.gg/images/thumb/d/d5/Graveyard.png/299px-Graveyard.png",
    powerScrolls: 3,
    dualScrolls: 1,
    scrollFragments: 0,
    bscProperties: [
      new bscProperty(1, {edges: [biomesEnum.cavern]}),
      new bscProperty(3, {powerScrolls: 1}),
      new bscProperty(3, {scrollFragments: 2}),
      new bscProperty(4, {scrollFragments: 1})
    ],
    top: 100,
    left: 0
  },
  {
    // 16
    name: "Slumbering Sanctuary",
    img: "https://deadcells.wiki.gg/images/thumb/b/b4/Slumbering_Sanctuary.png/299px-Slumbering_Sanctuary.png",
    edges: [biomesEnum.clockTower, biomesEnum.forgottenSepulcher],
    powerScrolls: 3,
    dualScrolls: 1,
    scrollFragments: 0,
    bscProperties: [
      new bscProperty(2, {edges: [biomesEnum.cavern]}), // The giant also must be killed
      new bscProperty(3, {powerScrolls: 1}),
      new bscProperty(3, {scrollFragments: 3}),
      new bscProperty(4, {scrollFragments: 1})
    ],
    top: 100,
    left: 20
  },
  {
    // 17
    name: "Undying Shores",
    img: "https://deadcells.wiki.gg/images/thumb/0/04/Undying_Shores.png/299px-Undying_Shores.png",
    edges: [biomesEnum.mausoleum],
    powerScrolls: 4,
    dualScrolls: 2,
    scrollFragments: 0,
    bscProperties: [
      new bscProperty(4, {powerScrolls: 1}),
      new bscProperty(3, {scrollFragments: 3}),
      new bscProperty(4, {scrollFragments: 1})
    ],
    dlc: dlcEnum.fatalFalls,
    top: 120,
    left: -40
  },
  {
    // 18
    name: "Clock Tower",
    img: "https://deadcells.wiki.gg/images/thumb/6/6b/Clock_Tower.png/299px-Clock_Tower.png",
    edges: [biomesEnum.clockRoom],
    powerScrolls: 4,
    dualScrolls: 2,
    scrollFragments: 0,
    bscProperties: [
      new bscProperty(4, {powerScrolls: 1}),
      new bscProperty(3, {scrollFragments: 3}),
      new bscProperty(4, {scrollFragments: 1})
    ],
    top: 120,
    left: -20
  },
  {
    // 19
    name: "Forgotten Sepulcher",
    img: "https://deadcells.wiki.gg/images/thumb/3/32/Forgotten_Sepulcher.png/299px-Forgotten_Sepulcher.png",
    edges: [biomesEnum.clockRoom],
    powerScrolls: 4,
    dualScrolls: 2,
    scrollFragments: 0,
    bscProperties: [
      new bscProperty(2, {edges: [biomesEnum.guardiansHaven]}), // The giant also must be killed
      new bscProperty(4, {powerScrolls: 1}),
      new bscProperty(3, {scrollFragments: 2}),
      new bscProperty(4, {scrollFragments: 1})
    ],
    top: 120,
    left: 0
  },
  {
    // 20
    name: "Cavern",
    img: "https://deadcells.wiki.gg/images/thumb/5/57/Cavern.png/299px-Cavern.png",
    edges: [biomesEnum.mausoleum, biomesEnum.guardiansHaven],
    powerScrolls: 4,
    dualScrolls: 2,
    scrollFragments: 0,
    bscProperties: [
      new bscProperty(4, {powerScrolls: 1}),
      new bscProperty(3, {scrollFragments: 4}),
      new bscProperty(4, {scrollFragments: 1})
    ],
    top: 120,
    left: 20
  },
  {
    // 21
    name: "Mausoleum",
    img: "https://deadcells.wiki.gg/images/thumb/1/15/Mausoleum.png/299px-Mausoleum.png",
    edges: [biomesEnum.infestedShipwreck, biomesEnum.highPeakCastle],
    dlc: dlcEnum.fatalFalls,
    scrollFragments: 0,
    bscProperties: [
      new bscProperty(1, {edges: [biomesEnum.distillery]}),
      new bscProperty(3, {scrollFragments: 2}),
      new bscProperty(4, {scrollFragments: 1})
    ],
    powerScrolls: 0,
    top: 140,
    left: -40
  },
  {
    // 22
    name: "Clock Room",
    img: "https://deadcells.wiki.gg/images/thumb/3/37/Clock_Room.png/299px-Clock_Room.png",
    edges: [biomesEnum.highPeakCastle, biomesEnum.distillery, biomesEnum.infestedShipwreck, biomesEnum.draculaCastle2],
    scrollFragments: 0,
    powerScrolls: 0,
    bscProperties: [
      new bscProperty(1, {edges: [biomesEnum.distillery]}),
      new bscProperty(3, {scrollFragments: 2}),
      new bscProperty(4, {scrollFragments: 1})
    ],
    top: 140,
    left: 0
  },
  {
    // 23
    name: "Guardian's Haven",
    img: "https://deadcells.wiki.gg/images/thumb/7/72/Guardian%27s_Haven.png/299px-Guardian%27s_Haven.png",
    edges: [biomesEnum.highPeakCastle, biomesEnum.distillery, biomesEnum.infestedShipwreck, biomesEnum.throneRoom], // The throne room exit awards two scrolls of power
    edgeLabels: [null, null, null, createEdgeLabel("powerScroll.png", 2)],
    scrollFragments: 0,
    bscProperties: [
      new bscProperty(3, {scrollFragments: 3}),
      new bscProperty(4, {scrollFragments: 1})
    ],
    powerScrolls: 0,
    top: 140,
    left: 20
  },
  {
    // 24
    name: "High Peak Castle",
    img: "https://deadcells.wiki.gg/images/thumb/f/f0/High_Peak_Castle.png/299px-High_Peak_Castle.png",
    edges: [biomesEnum.throneRoom],
    powerScrolls: 2,
    dualScrolls: 2,
    scrollFragments: 0,
    bscProperties: [
      new bscProperty(3, {scrollFragments: 3}),
      new bscProperty(4, {scrollFragments: 1})
    ],
    top: 160,
    left: 0
  },
  {
    // 25
    name: "Derelict Distillery",
    img: "https://deadcells.wiki.gg/images/thumb/a/ad/Derelict_Distillery.png/300px-Derelict_Distillery.png",
    edges: [biomesEnum.lighthouse, biomesEnum.throneRoom],
    powerScrolls: 2,
    dualScrolls: 2,
    scrollFragments: 0,
    bscProperties: [
      new bscProperty(3, {scrollFragments: 1}),
      new bscProperty(4, {scrollFragments: 1})
    ],
    top: 160,
    left: -20
  },
  {
    // 26
    name: "Infested Shipwreck",
    img: "https://deadcells.wiki.gg/images/thumb/b/b4/Infested_Shipwreck.png/300px-Infested_Shipwreck.png",
    edges: [biomesEnum.lighthouse],
    powerScrolls: 2 + (bsc >= 3 && 1),
    dualScrolls: 2,
    scrollFragments: (bsc >= 3 && 1) + (bsc >= 4 && 1),
    bscProperties: [
      new bscProperty(3, {scrollFragments: 1}),
      new bscProperty(4, {scrollFragments: 1})
    ],
    top: 160,
    left: -40
  },
  {
    // 27
    name: "Throne Room",
    img: "https://deadcells.wiki.gg/images/thumb/e/ef/Throne_Room.png/299px-Throne_Room.png",
    // powerScrolls: 0,
    top: 180,
    left: 20
  },
  {
    // 28
    name: "Lighthouse",
    img: "https://deadcells.wiki.gg/images/thumb/b/be/Lighthouse.png/299px-Lighthouse.png",
    edges: [biomesEnum.crown],
    dlc: dlcEnum.QueenAndTheSea,
    // powerScrolls: 0,
    top: 180,
    left: 0
  },
  {
    // 29
    name: "The Crown",
    img: "https://deadcells.wiki.gg/images/thumb/9/9f/The_Crown.png/299px-The_Crown.png",
    dlc: dlcEnum.QueenAndTheSea,
    top: 200,
    left: 0
  },
  //
  //                            CASLTEVANIA
  //
  {
    // 30
    name: "Castle's Outskirts",
    img: "https://deadcells.wiki.gg/images/a/a7/Castle%27s_Outskirts.png",
    edges: [
      biomesEnum.draculaCastle1
    ],
    powerScrolls: 1,
    dualScrolls: 2,
    scrollFragments: 0,
    bscProperties: [
      new bscProperty(1, {powerScrolls: 1}),
      new bscProperty(3, {scrollFragments: 1}),
      new bscProperty(4, {scrollFragments: 1})
    ],
    dlc: dlcEnum.castlevania,
    top: 31,
    left: -20
  },
  {
    // 31
    name: "Dracula's Castle", // Depth 3
    img: "https://deadcells.wiki.gg/images/0/0a/Dracula%27s_Castle.png",
    edges: [
      biomesEnum.defiledNecropolis
    ],
    powerScrolls: 3,
    dualScrolls: 2,
    scrollFragments: 0,
    bscProperties: [
      new bscProperty(2, {powerScrolls: 1}),
      new bscProperty(3, {scrollFragments: 3}),
      new bscProperty(4, {scrollFragments: 1})
    ],
    dlc: dlcEnum.castlevania,
    top: 55,
    left: 0
  },
  {
    // 32
    name: "Defiled Necropolis",
    img: "https://deadcells.wiki.gg/images/5/5f/Defiled_Necropolis.png",
    edges: [
      biomesEnum.slumberingSanctuary, biomesEnum.stiltVillage, biomesEnum.fracturedShrines
    ],
    dlc: dlcEnum.castlevania,
    top: 80,
    left: 20
  },
  {
    // 33
    name: "Dracula's Castle", // Depth 6
    img: "https://deadcells.wiki.gg/images/0/0a/Dracula%27s_Castle.png",
    edges: [
      biomesEnum.mastersKeep
    ],
    powerScrolls: 3,
    dualScrolls: 2,
    scrollFragments: 0,
    bscProperties: [
      new bscProperty(3, {scrollFragments: 3}),
      new bscProperty(4, {scrollFragments: 1})
    ],
    dlc: dlcEnum.castlevania,
    top: 160,
    left: 40
  },
  { // 34
    name: "Master's Keep",
    img: "https://deadcells.wiki.gg/images/3/32/Master%27s_Keep.png",
    dlc: dlcEnum.castlevania,
    top: 180,
    left: 40
  }
];
let graph = Array.from(originalGraph)

// this func is not present in the main files
// 2:08 what the fuck am i doing with myself???
function getBiomeNames() {
  let result = []
  originalGraph.forEach(biome => {
    result.push(biome.name)
  })
  return result;
}



function graphWithBscEffects(bsc = 0, inputGraph = originalGraph) {
  // Reset the graph to 0 BSC
  let outGraph = inputGraph.map((biome) => {
    let newEdges = biome.edges && biome.edges.map((edge) => {return edge});
    return {...biome, edges: newEdges};
  })
  // Apply each property of bscProperties to the main properties
  outGraph.forEach((biome, biomeIndex) => {
    biome.bscProperties && biome.bscProperties.forEach((curBscObj) => {
      if(curBscObj.bsc <= bsc) {
        
        biome.powerScrolls += curBscObj.bscProperties.powerScrolls || 0;
        biome.scrollFragments += curBscObj.bscProperties.scrollFragments || 0;
        curBscObj.bscProperties.edges && curBscObj.bscProperties.edges.forEach((edge, edgeIndex) => {
          // Sets the edge labels array, I think it should be rewritten to a function that applies a label array
            if(!biome.edgeLabels) {
              biome.edgeLabels = [];
            }
            if(!biome.edges.includes(edge)) {
              // Below code adds the labels for BSC Edges but it kinda doesn't work so i give up for now
              // biome.edgeLabels[edgeIndex + 1] = (<EdgeLabel imgSrc="./bsc.png" text={curBscObj.bsc} />)
            }
            
            
            biome.edges.push(edge)
        })
        
      }
    })
  })
  return outGraph;
}
function graphWithRuneEffects(runesFlags, inputGraph) {
  // Make the start graph variable
  let outGraph = inputGraph.map((biome) => {
    let edges = biome.edges && biome.edges.map((edge) => {return edge});
    return {...biome, edges: edges};
  })
  // Apply each property of runeProperties to the main properties

    outGraph.forEach((biome, biomeIndex) => {
      
      biome.runeProperties && biome.runeProperties.forEach((curRuneObj) => {
        if(runesFlags[curRuneObj.rune]) {
          biome.powerScrolls += curRuneObj.runeProperties.powerScrolls || 0;
          biome.scrollFragments += curRuneObj.runeProperties.scrollFragments || 0;
          curRuneObj.runeProperties.edges && curRuneObj.runeProperties.edges.forEach((edge, edgeIndex) => {
            // Sets the edge labels array, I think it should be rewritten to a function that applies a label array
            if(!biome.edgeLabels) {
              biome.edgeLabels = [];
            }
            if(!biome.edges.includes(edge)) {
              // Below code adds the labels for Rune edges but it also kinda doesn't work so i give up for now
              // biome.edgeLabels[edgeIndex] = (<EdgeLabel imgSrc={runes[curRuneObj.rune].imgSrc} text=""/>)
            }
            

            biome.edges.push(edge)
          })
        }
      })
    })
  return outGraph;
}
// Decided to change the architecture a little
function removeNodesWithoutEdges(inputGraph) {
  let indicesToRemove = []
    inputGraph.forEach((mainBiome, mainBiomeIndex) => {
      mainBiome.hidden = true
      if(mainBiomeIndex > 0) {
        inputGraph.forEach((secBiome, secBiomeIndex) => {
          if(secBiome.edges && secBiome.edges.includes(mainBiomeIndex)) {
            mainBiome.hidden = false;
          }
        })
      }
      else mainBiome.hidden = false;
      if(mainBiome.hidden) mainBiome.edges = []
    })
    for (var i = indicesToRemove.length -1; i >= 0; i--)
      inputGraph.splice(indicesToRemove[i],1);
}
function removeDlcEdges(inputGraph, dlc) {
  inputGraph.forEach((biome) => {
    if(biome.edges) {
      for(let i = biome.edges.length - 1; i >= 0; i--) {
        let biomeToCheck = inputGraph[biome.edges[i]]
        if(biomeToCheck.dlc != null && dlc[biomeToCheck.dlc] == false) {
          console.log(biome.name)
          console.log(biome.edges, i)
          biome.edges.splice(i, 1);
          console.log(biome.edges, i)
        }
      }
    }
    
    
    
  })
}

function createGraph(bsc = 0, dlc = dlc, runes) {
    let resultGraph = graphWithBscEffects(bsc);
    resultGraph = graphWithRuneEffects(runes, resultGraph);
    removeDlcEdges(resultGraph, dlc)
    removeNodesWithoutEdges(resultGraph)

    return resultGraph;
}
export {createGraph, biomesEnum, runesEnum, dlcEnum, originalGraph, getBiomeNames}