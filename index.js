const playwright = require('playwright');
async function main() {
    const browser = await playwright.chromium.launch({
        headless: true,
    });

    const page = await browser.newPage();
    await page.goto('https://www.clubbi.com.gt/consulta.aspx');
    await page.click('#rddpi');
    await page.fill('#ctl00_panelDerecho_ConsultaPuntosGrande1_txtIdentificador', process.env.NUMERO_DPI);
    await page.fill('#ctl00_panelDerecho_ConsultaPuntosGrande1_txtFechaNacimiento', process.env.FECHA_NACIMIENTO);
    await page.fill('#ctl00_panelDerecho_ConsultaPuntosGrande1_txtTarjetaPersonal', process.env.NUMERO_TARJETA_CLUB_BI);
    await page.click('#ctl00_panelDerecho_ConsultaPuntosGrande1_imgButon');
    await page.waitForSelector('#ctl00_panelDerecho_ConsultaPuntosGrande1_lblPuntosDisponibles');
    const puntos = await page.locator('#ctl00_panelDerecho_ConsultaPuntosGrande1_lblPuntosDisponibles').textContent();
    console.log('Puntos BI acumulados:', puntos);
    await browser.close();
}

main();