import puppeteer from "puppeteer"
import clipboard from "clipboardy"
import {originalGraph} from "./graph.js"

function romanToInteger(input) {
  let romanDict = {
    "I": 1,
    "II": 2,
    "III": 3,
    "IV": 4,
    "V": 5,
    "VI": 6,
    "VII": 7,
    "VIII": 8,
    "IX": 9,
    "X": 10,
    "XI": 11,
    "XII": 12,
    "XIII": 13,
    "XIV": 14,
    "XV": 15
  }

  return romanDict[input]
}

async function getGearLevelForUrl(url, browser, page) {

}

(async () => {
  
  const browser = await puppeteer.launch({
    headless: true
  });
  const page = await browser.newPage();
  const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/116.0"
  await page.setUserAgent(userAgent)
  console.log(await browser.userAgent())

    for(const el of originalGraph) {
      await new Promise(r => setTimeout(r, 2000));

      const biomeName = el.name;
      await page.goto(`https://deadcells.wiki.gg/wiki/${biomeName}`);


      /*
      let data = await page.evaluate(() => document.querySelector('div[data-source=gear_level_0] div').innerHTML);
      let gearLevel0 = romanToInteger(await page.evaluate(() => document.querySelector('div[data-source=gear_level_0] div').innerHTML));
      let gearLevel3 = romanToInteger(await page.evaluate(() => document.querySelector('div[data-source=gear_level_3] div').innerHTML));
      let gearlLevel4 = romanToInteger(await page.evaluate(() => document.querySelector('div[data-source=gear_level_4] div').innerHTML));
    
      el.gearLevel = gearLevel0
      if(gearLevel3 - gearLevel0 != 1  ||  gearlLevel4 - gearLevel3 != 2) {
        console.log(el.name, "KURWAAAAAAAAAA")
      }
      console.log(`${el.name} - ${gearLevel0}`)
      */

      // The loot and shops section scraping
      let lootShopsData = await page.evaluate((biomeName, lootShopsData) =>  {
        let result = [];
        
        let elements = Array.from(document.querySelectorAll("h3:has(> #Loot_and_shops) ~ *"));
        let properData = elements.map(element => {
          return element.textContent;
        })
        let lootAndShopsFound = false;
        for (lootEl in properData) {
          if(lootEl == "Loot and shops") {
            result.push("fhuefhuihuidhsdTEST");
            lootAndShopsFound = true;
          }
          else if(lootEl == "Exclusive blueprints") {
            result.push("fhuefhuihuidhsd  BLUEPRINTS");
            break;
          }
          else if(lootAndShopsFound) {
            result.push("FOUUUUUNDNDDDDDDD");
            console.log("chuj")
            let floorLootData = lootEl.textContent;
            result.push(floorLootData);
            console.log("Text content: ", lootEl.textContent)
          }
          
        }
        lootAndShopsFound = false;
        return result;
      }, biomeName)
    
      console.log("Loot and shops data: ", lootShopsData);
    }
        
        
      
      
      
      
      
    
    // let data = await textSelector?.evaluate(el => el.innerHTML)

    

    // Print the full title
    
  
    
  })();
