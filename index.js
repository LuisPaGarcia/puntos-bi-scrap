const playwright = require('playwright');
async function main() {
    const browser = await playwright.chromium.launch({
        headless: true,
    });

    const [pageBI, pageIShop150, pageIShop500, pageMax100, pageMax200, pageMax300, pageMax400, pageMax500, pageMax600, pageMax700, pageMax800] = await Promise.all([
        browser.newPage(),
        browser.newPage(),
        browser.newPage(),
        browser.newPage(),
        browser.newPage(),
        browser.newPage(),
        browser.newPage(),
        browser.newPage(),
        browser.newPage(),
        browser.newPage(),
        browser.newPage()
    ]);

    let puntosAcumuladosBI, puntosIShop150, puntosIShop500;
    let puntosMax100, puntosMax200, puntosMax300, puntosMax400, puntosMax500, puntosMax600, puntosMax700, puntosMax800;

    // First: Get BI Points
    puntosAcumuladosBI = await (async () => {
        await pageBI.goto('https://www.clubbi.com.gt/consulta.aspx');
        await pageBI.click('#rddpi');
        await pageBI.fill('#ctl00_panelDerecho_ConsultaPuntosGrande1_txtIdentificador', process.env.NUMERO_DPI);
        await pageBI.fill('#ctl00_panelDerecho_ConsultaPuntosGrande1_txtFechaNacimiento', process.env.FECHA_NACIMIENTO);
        await pageBI.fill('#ctl00_panelDerecho_ConsultaPuntosGrande1_txtTarjetaPersonal', process.env.NUMERO_TARJETA_CLUB_BI);
        await pageBI.click('#ctl00_panelDerecho_ConsultaPuntosGrande1_imgButon');
        await pageBI.waitForSelector('#ctl00_panelDerecho_ConsultaPuntosGrande1_lblPuntosDisponibles');
        const puntos = await pageBI.locator('#ctl00_panelDerecho_ConsultaPuntosGrande1_lblPuntosDisponibles').textContent();
        console.log('Puntos BI acumulados:', puntos);
        return puntos;
    })();

    // Second: Get iShop Coupons
    await Promise.all([
        (async () => {
            await pageIShop150.goto('https://bipuntos.bi.com.gt/promotions/44');
            await pageIShop150.waitForSelector('p.mbottom5:nth-child(3)');
            puntosIShop150 = await pageIShop150.locator('p.mbottom5:nth-child(3)').textContent();
            const titleIShop150 = await pageIShop150.locator('h6.h1-big').textContent();
            console.log('iShop ' + titleIShop150 + ':', puntosIShop150);
        })(),
        
        (async () => {
            await pageIShop500.goto('https://bipuntos.bi.com.gt/promotions/43');
            await pageIShop500.waitForSelector('p.mbottom5:nth-child(3)');
            puntosIShop500 = await pageIShop500.locator('p.mbottom5:nth-child(3)').textContent();
            const titleIShop500 = await pageIShop500.locator('h6.h1-big').textContent();
            console.log('iShop ' + titleIShop500 + ':', puntosIShop500);
        })()
    ]);

    // Third: Get Tiendas Max Coupons
    await Promise.all([
        (async () => {
            await pageMax100.goto('https://bipuntos.bi.com.gt/promotions/17');
            await pageMax100.waitForSelector('p.mbottom5:nth-child(3)');
            puntosMax100 = await pageMax100.locator('p.mbottom5:nth-child(3)').textContent();
            const titleMax100 = await pageMax100.locator('h6.h1-big').textContent();
            console.log('Tiendas Max ' + titleMax100 + ':', puntosMax100);
        })(),
        
        (async () => {
            await pageMax200.goto('https://bipuntos.bi.com.gt/promotions/276');
            await pageMax200.waitForSelector('p.mbottom5:nth-child(3)');
            puntosMax200 = await pageMax200.locator('p.mbottom5:nth-child(3)').textContent();
            const titleMax200 = await pageMax200.locator('h6.h1-big').textContent();
            console.log('Tiendas Max ' + titleMax200 + ':', puntosMax200);
        })(),
        
        (async () => {
            await pageMax300.goto('https://bipuntos.bi.com.gt/promotions/277');
            await pageMax300.waitForSelector('p.mbottom5:nth-child(3)');
            puntosMax300 = await pageMax300.locator('p.mbottom5:nth-child(3)').textContent();
            const titleMax300 = await pageMax300.locator('h6.h1-big').textContent();
            console.log('Tiendas Max ' + titleMax300 + ':', puntosMax300);
        })(),
        
        (async () => {
            await pageMax400.goto('https://bipuntos.bi.com.gt/promotions/278');
            await pageMax400.waitForSelector('p.mbottom5:nth-child(3)');
            puntosMax400 = await pageMax400.locator('p.mbottom5:nth-child(3)').textContent();
            const titleMax400 = await pageMax400.locator('h6.h1-big').textContent();
            console.log('Tiendas Max ' + titleMax400 + ':', puntosMax400);
        })(),
        
        (async () => {
            await pageMax500.goto('https://bipuntos.bi.com.gt/promotions/280');
            await pageMax500.waitForSelector('p.mbottom5:nth-child(3)');
            puntosMax500 = await pageMax500.locator('p.mbottom5:nth-child(3)').textContent();
            const titleMax500 = await pageMax500.locator('h6.h1-big').textContent();
            console.log('Tiendas Max ' + titleMax500 + ':', puntosMax500);
        })(),
        
        (async () => {
            await pageMax600.goto('https://bipuntos.bi.com.gt/promotions/282');
            await pageMax600.waitForSelector('p.mbottom5:nth-child(3)');
            puntosMax600 = await pageMax600.locator('p.mbottom5:nth-child(3)').textContent();
            const titleMax600 = await pageMax600.locator('h6.h1-big').textContent();
            console.log('Tiendas Max ' + titleMax600 + ':', puntosMax600);
        })(),
        
        (async () => {
            await pageMax700.goto('https://bipuntos.bi.com.gt/promotions/283');
            await pageMax700.waitForSelector('p.mbottom5:nth-child(3)');
            puntosMax700 = await pageMax700.locator('p.mbottom5:nth-child(3)').textContent();
            const titleMax700 = await pageMax700.locator('h6.h1-big').textContent();
            console.log('Tiendas Max ' + titleMax700 + ':', puntosMax700);
        })(),
        
        (async () => {
            await pageMax800.goto('https://bipuntos.bi.com.gt/promotions/284');
            await pageMax800.waitForSelector('p.mbottom5:nth-child(3)');
            puntosMax800 = await pageMax800.locator('p.mbottom5:nth-child(3)').textContent();
            const titleMax800 = await pageMax800.locator('h6.h1-big').textContent();
            console.log('Tiendas Max ' + titleMax800 + ':', puntosMax800);
        })()
    ]);
    
    const puntosDisponibles = parseInt(puntosAcumuladosBI.replace(/,/g, ''));
    const puntos500 = parseInt(puntosIShop500.replace(/,/g, ''));
    const puntos150 = parseInt(puntosIShop150.replace(/,/g, ''));
    
    // iShop calculations
    const cupones500 = Math.floor(puntosDisponibles / puntos500);
    const puntosRestantes = puntosDisponibles - (cupones500 * puntos500);
    const cupones150 = Math.floor(puntosRestantes / puntos150);
    
    console.log('\n--- CALCULADORA DE CUPONES iShop ---');
    console.log(`Puntos disponibles: ${puntosDisponibles.toLocaleString()}`);
    console.log(`Cupones iShop de Q500: ${cupones500} (${(cupones500 * puntos500).toLocaleString()} puntos)`);
    console.log(`Cupones iShop de Q150: ${cupones150} (${(cupones150 * puntos150).toLocaleString()} puntos)`);
    console.log(`Puntos restantes: ${(puntosRestantes - (cupones150 * puntos150)).toLocaleString()}`);
    console.log(`Total valor en cupones iShop: Q${(cupones500 * 500) + (cupones150 * 150)}`);
    
    // Tiendas Max calculations
    const max800 = parseInt(puntosMax800.replace(/,/g, ''));
    const max700 = parseInt(puntosMax700.replace(/,/g, ''));
    const max600 = parseInt(puntosMax600.replace(/,/g, ''));
    const max500 = parseInt(puntosMax500.replace(/,/g, ''));
    const max400 = parseInt(puntosMax400.replace(/,/g, ''));
    const max300 = parseInt(puntosMax300.replace(/,/g, ''));
    const max200 = parseInt(puntosMax200.replace(/,/g, ''));
    const max100 = parseInt(puntosMax100.replace(/,/g, ''));
    
    let puntosRestantesMax = puntosDisponibles;
    
    const cuponesMax800 = Math.floor(puntosRestantesMax / max800);
    puntosRestantesMax -= (cuponesMax800 * max800);
    
    const cuponesMax700 = Math.floor(puntosRestantesMax / max700);
    puntosRestantesMax -= (cuponesMax700 * max700);
    
    const cuponesMax600 = Math.floor(puntosRestantesMax / max600);
    puntosRestantesMax -= (cuponesMax600 * max600);
    
    const cuponesMax500 = Math.floor(puntosRestantesMax / max500);
    puntosRestantesMax -= (cuponesMax500 * max500);
    
    const cuponesMax400 = Math.floor(puntosRestantesMax / max400);
    puntosRestantesMax -= (cuponesMax400 * max400);
    
    const cuponesMax300 = Math.floor(puntosRestantesMax / max300);
    puntosRestantesMax -= (cuponesMax300 * max300);
    
    const cuponesMax200 = Math.floor(puntosRestantesMax / max200);
    puntosRestantesMax -= (cuponesMax200 * max200);
    
    const cuponesMax100 = Math.floor(puntosRestantesMax / max100);
    puntosRestantesMax -= (cuponesMax100 * max100);
    
    console.log('\n--- CALCULADORA DE CUPONES Tiendas Max ---');
    console.log(`Puntos disponibles: ${puntosDisponibles.toLocaleString()}`);
    if (cuponesMax800 > 0) console.log(`Cupones Tiendas Max de Q800: ${cuponesMax800} (${(cuponesMax800 * max800).toLocaleString()} puntos)`);
    if (cuponesMax700 > 0) console.log(`Cupones Tiendas Max de Q700: ${cuponesMax700} (${(cuponesMax700 * max700).toLocaleString()} puntos)`);
    if (cuponesMax600 > 0) console.log(`Cupones Tiendas Max de Q600: ${cuponesMax600} (${(cuponesMax600 * max600).toLocaleString()} puntos)`);
    if (cuponesMax500 > 0) console.log(`Cupones Tiendas Max de Q500: ${cuponesMax500} (${(cuponesMax500 * max500).toLocaleString()} puntos)`);
    if (cuponesMax400 > 0) console.log(`Cupones Tiendas Max de Q400: ${cuponesMax400} (${(cuponesMax400 * max400).toLocaleString()} puntos)`);
    if (cuponesMax300 > 0) console.log(`Cupones Tiendas Max de Q300: ${cuponesMax300} (${(cuponesMax300 * max300).toLocaleString()} puntos)`);
    if (cuponesMax200 > 0) console.log(`Cupones Tiendas Max de Q200: ${cuponesMax200} (${(cuponesMax200 * max200).toLocaleString()} puntos)`);
    if (cuponesMax100 > 0) console.log(`Cupones Tiendas Max de Q100: ${cuponesMax100} (${(cuponesMax100 * max100).toLocaleString()} puntos)`);
    console.log(`Puntos restantes: ${puntosRestantesMax.toLocaleString()}`);
    
    const totalMax = (cuponesMax800 * 800) + (cuponesMax700 * 700) + (cuponesMax600 * 600) + (cuponesMax500 * 500) + 
                     (cuponesMax400 * 400) + (cuponesMax300 * 300) + (cuponesMax200 * 200) + (cuponesMax100 * 100);
    console.log(`Total valor en cupones Tiendas Max: Q${totalMax}`);
    
    await browser.close();
}

main();