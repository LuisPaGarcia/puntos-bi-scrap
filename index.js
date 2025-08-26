const playwright = require('playwright');
async function main() {
    const browser = await playwright.chromium.launch({
        headless: true,
    });

    const [page, page2, page3] = await Promise.all([
        browser.newPage(),
        browser.newPage(),
        browser.newPage()
    ]);

    let puntosAcumuladosBI, puntosIShop150, puntosIShop500;

    await Promise.all([
        (async () => {
            await page.goto('https://www.clubbi.com.gt/consulta.aspx');
            await page.click('#rddpi');
            await page.fill('#ctl00_panelDerecho_ConsultaPuntosGrande1_txtIdentificador', process.env.NUMERO_DPI);
            await page.fill('#ctl00_panelDerecho_ConsultaPuntosGrande1_txtFechaNacimiento', process.env.FECHA_NACIMIENTO);
            await page.fill('#ctl00_panelDerecho_ConsultaPuntosGrande1_txtTarjetaPersonal', process.env.NUMERO_TARJETA_CLUB_BI);
            await page.click('#ctl00_panelDerecho_ConsultaPuntosGrande1_imgButon');
            await page.waitForSelector('#ctl00_panelDerecho_ConsultaPuntosGrande1_lblPuntosDisponibles');
            puntosAcumuladosBI = await page.locator('#ctl00_panelDerecho_ConsultaPuntosGrande1_lblPuntosDisponibles').textContent();
            console.log('Puntos BI acumulados:', puntosAcumuladosBI);
        })(),
        
        (async () => {
            await page2.goto('https://bipuntos.bi.com.gt/promotions/44');
            await page2.waitForSelector('p.mbottom5:nth-child(3)');
            puntosIShop150 = await page2.locator('p.mbottom5:nth-child(3)').textContent();
            const title150 = await page2.locator('h6.h1-big').textContent();
            console.log(title150 + ':', puntosIShop150);
        })(),
        
        (async () => {
            await page3.goto('https://bipuntos.bi.com.gt/promotions/43');
            await page3.waitForSelector('p.mbottom5:nth-child(3)');
            puntosIShop500 = await page3.locator('p.mbottom5:nth-child(3)').textContent();
            const title500 = await page3.locator('h6.h1-big').textContent();
            console.log(title500 + ':', puntosIShop500);
        })()
    ]);
    
    const puntosDisponibles = parseInt(puntosAcumuladosBI.replace(/,/g, ''));
    const puntos500 = parseInt(puntosIShop500.replace(/,/g, ''));
    const puntos150 = parseInt(puntosIShop150.replace(/,/g, ''));
    
    const cupones500 = Math.floor(puntosDisponibles / puntos500);
    const puntosRestantes = puntosDisponibles - (cupones500 * puntos500);
    const cupones150 = Math.floor(puntosRestantes / puntos150);
    
    console.log('\n--- CALCULADORA DE CUPONES ---');
    console.log(`Puntos disponibles: ${puntosDisponibles.toLocaleString()}`);
    console.log(`Cupones de Q500: ${cupones500} (${(cupones500 * puntos500).toLocaleString()} puntos)`);
    console.log(`Cupones de Q150: ${cupones150} (${(cupones150 * puntos150).toLocaleString()} puntos)`);
    console.log(`Puntos restantes: ${(puntosRestantes - (cupones150 * puntos150)).toLocaleString()}`);
    console.log(`Total valor en cupones: Q${(cupones500 * 500) + (cupones150 * 150)}`);
    
    await browser.close();
}

main();