// Fuck Puppetteer this shit ain;t working and is making me angry all for this stupid fucking project
import * as cheerio from 'cheerio';
import axios from 'axios';
import {originalGraph} from "./graph.js"

(async () => {
    const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/116.0"
    for(const biome of originalGraph) {
        const biomeName = biome.name;
        // Axios code for fetching the HTML string
        let htmlData = "";
        let url = `https://deadcells.wiki.gg/wiki/${biomeName}`
        await axios.get(url, {
            headers: {
                'User-Agent': userAgent
              }
        })
        .then(async function (response) {
            // handle success
            let $ = await cheerio.load(response.data)
            let exBlueFound = false;
            // let rawData = $("h3:has(> #Loot_and_shops) ~ *").toArray().map((el) => {
            //     let eltext = $(el).text()
            //     if(eltext.includes("Exclusive blueprints")) {
            //         exBlueFound = true;
            //     }
            //     if(!exBlueFound) return eltext;
            // });
            
            
            
            
            let rawData = []
            $("h3:has(> #Loot_and_shops) ~ *").toArray().forEach((el) => {
                let eltext = $(el).text()
                if(eltext.includes("Exclusive blueprints") ||
                eltext.includes("Enemies")) {
                    exBlueFound = true;
                }
                eltext.replace("[edit]", "")
                eltext.replace("\\n", "")
                if(!exBlueFound) rawData.push(eltext);
            })





            for(let eltext in rawData) {
                // console.log("Eltext: ", eltext)
            }
            console.log(`Data for biome: ${biomeName}: `)
            console.log(rawData)
        })
        .catch(function (error) {
            // handle error 
            console.log(error);
        })
    
    
        
        
    }




})()
