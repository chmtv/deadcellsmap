import puppeteer from "puppeteer"

// "div[data-source=gear_level_0] div"

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    await page.goto('https://deadcells.wiki.gg/wiki/Prisoners%27_Quarters');
  
    // Set screen size
    await page.setViewport({width: 1080, height: 1024});
  
    // Locate the full title with a unique string
    const textSelector = await page.waitForSelector(
      'div[data-source=gear_level_0] div'
    );
    const gearLevel = await textSelector.evaluate(el => el.textContent);


    // Print the full title
    console.log('The gear level is "%s".', gearLevel);
  
    await browser.close();
  })();