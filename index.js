const playwright = require('playwright');
async function main() {
    const browser = await playwright.chromium.launch({
        headless: true,
    });

    const [pageBI, pageIShop150, pageIShop500, pageMax100, pageMax200, pageMax300, pageMax400, pageMax500, pageMax600, pageMax700, pageMax800, pageCemaco100, pageCemaco200, pageCemaco300, pageCemaco400, pageCemaco500, pageCemaco900, pageCemaco1000, pageCemaco1300] = await Promise.all([
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
    let puntosCemaco100, puntosCemaco200, puntosCemaco300, puntosCemaco400, puntosCemaco500, puntosCemaco900, puntosCemaco1000, puntosCemaco1300;

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

    // Fourth: Get CEMACO Coupons
    await Promise.all([
        (async () => {
            await pageCemaco100.goto('https://bipuntos.bi.com.gt/promotions/296');
            await pageCemaco100.waitForSelector('p.mbottom5:nth-child(3)');
            puntosCemaco100 = await pageCemaco100.locator('p.mbottom5:nth-child(3)').textContent();
            const titleCemaco100 = await pageCemaco100.locator('h6.h1-big').textContent();
            console.log('CEMACO ' + titleCemaco100 + ':', puntosCemaco100);
        })(),
        
        (async () => {
            await pageCemaco200.goto('https://bipuntos.bi.com.gt/promotions/298');
            await pageCemaco200.waitForSelector('p.mbottom5:nth-child(3)');
            puntosCemaco200 = await pageCemaco200.locator('p.mbottom5:nth-child(3)').textContent();
            const titleCemaco200 = await pageCemaco200.locator('h6.h1-big').textContent();
            console.log('CEMACO ' + titleCemaco200 + ':', puntosCemaco200);
        })(),
        
        (async () => {
            await pageCemaco300.goto('https://bipuntos.bi.com.gt/promotions/299');
            await pageCemaco300.waitForSelector('p.mbottom5:nth-child(3)');
            puntosCemaco300 = await pageCemaco300.locator('p.mbottom5:nth-child(3)').textContent();
            const titleCemaco300 = await pageCemaco300.locator('h6.h1-big').textContent();
            console.log('CEMACO ' + titleCemaco300 + ':', puntosCemaco300);
        })(),
        
        (async () => {
            await pageCemaco400.goto('https://bipuntos.bi.com.gt/promotions/300');
            await pageCemaco400.waitForSelector('p.mbottom5:nth-child(3)');
            puntosCemaco400 = await pageCemaco400.locator('p.mbottom5:nth-child(3)').textContent();
            const titleCemaco400 = await pageCemaco400.locator('h6.h1-big').textContent();
            console.log('CEMACO ' + titleCemaco400 + ':', puntosCemaco400);
        })(),
        
        (async () => {
            await pageCemaco500.goto('https://bipuntos.bi.com.gt/promotions/301');
            await pageCemaco500.waitForSelector('p.mbottom5:nth-child(3)');
            puntosCemaco500 = await pageCemaco500.locator('p.mbottom5:nth-child(3)').textContent();
            const titleCemaco500 = await pageCemaco500.locator('h6.h1-big').textContent();
            console.log('CEMACO ' + titleCemaco500 + ':', puntosCemaco500);
        })(),
        
        (async () => {
            await pageCemaco900.goto('https://bipuntos.bi.com.gt/promotions/305');
            await pageCemaco900.waitForSelector('p.mbottom5:nth-child(3)');
            puntosCemaco900 = await pageCemaco900.locator('p.mbottom5:nth-child(3)').textContent();
            const titleCemaco900 = await pageCemaco900.locator('h6.h1-big').textContent();
            console.log('CEMACO ' + titleCemaco900 + ':', puntosCemaco900);
        })(),
        
        (async () => {
            await pageCemaco1000.goto('https://bipuntos.bi.com.gt/promotions/306');
            await pageCemaco1000.waitForSelector('p.mbottom5:nth-child(3)');
            puntosCemaco1000 = await pageCemaco1000.locator('p.mbottom5:nth-child(3)').textContent();
            const titleCemaco1000 = await pageCemaco1000.locator('h6.h1-big').textContent();
            console.log('CEMACO ' + titleCemaco1000 + ':', puntosCemaco1000);
        })(),
        
        (async () => {
            await pageCemaco1300.goto('https://bipuntos.bi.com.gt/promotions/309');
            await pageCemaco1300.waitForSelector('p.mbottom5:nth-child(3)');
            puntosCemaco1300 = await pageCemaco1300.locator('p.mbottom5:nth-child(3)').textContent();
            const titleCemaco1300 = await pageCemaco1300.locator('h6.h1-big').textContent();
            console.log('CEMACO ' + titleCemaco1300 + ':', puntosCemaco1300);
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
    
    // CEMACO calculations
    const cemaco1300 = parseInt(puntosCemaco1300.replace(/,/g, ''));
    const cemaco1000 = parseInt(puntosCemaco1000.replace(/,/g, ''));
    const cemaco900 = parseInt(puntosCemaco900.replace(/,/g, ''));
    const cemaco500 = parseInt(puntosCemaco500.replace(/,/g, ''));
    const cemaco400 = parseInt(puntosCemaco400.replace(/,/g, ''));
    const cemaco300 = parseInt(puntosCemaco300.replace(/,/g, ''));
    const cemaco200 = parseInt(puntosCemaco200.replace(/,/g, ''));
    const cemaco100 = parseInt(puntosCemaco100.replace(/,/g, ''));
    
    let puntosRestantesCemaco = puntosDisponibles;
    
    const cuponesCemaco1300 = Math.floor(puntosRestantesCemaco / cemaco1300);
    puntosRestantesCemaco -= (cuponesCemaco1300 * cemaco1300);
    
    const cuponesCemaco1000 = Math.floor(puntosRestantesCemaco / cemaco1000);
    puntosRestantesCemaco -= (cuponesCemaco1000 * cemaco1000);
    
    const cuponesCemaco900 = Math.floor(puntosRestantesCemaco / cemaco900);
    puntosRestantesCemaco -= (cuponesCemaco900 * cemaco900);
    
    const cuponesCemaco500 = Math.floor(puntosRestantesCemaco / cemaco500);
    puntosRestantesCemaco -= (cuponesCemaco500 * cemaco500);
    
    const cuponesCemaco400 = Math.floor(puntosRestantesCemaco / cemaco400);
    puntosRestantesCemaco -= (cuponesCemaco400 * cemaco400);
    
    const cuponesCemaco300 = Math.floor(puntosRestantesCemaco / cemaco300);
    puntosRestantesCemaco -= (cuponesCemaco300 * cemaco300);
    
    const cuponesCemaco200 = Math.floor(puntosRestantesCemaco / cemaco200);
    puntosRestantesCemaco -= (cuponesCemaco200 * cemaco200);
    
    const cuponesCemaco100 = Math.floor(puntosRestantesCemaco / cemaco100);
    puntosRestantesCemaco -= (cuponesCemaco100 * cemaco100);
    
    console.log('\n--- CALCULADORA DE CUPONES CEMACO ---');
    console.log(`Puntos disponibles: ${puntosDisponibles.toLocaleString()}`);
    if (cuponesCemaco1300 > 0) console.log(`Cupones CEMACO de Q1300: ${cuponesCemaco1300} (${(cuponesCemaco1300 * cemaco1300).toLocaleString()} puntos)`);
    if (cuponesCemaco1000 > 0) console.log(`Cupones CEMACO de Q1000: ${cuponesCemaco1000} (${(cuponesCemaco1000 * cemaco1000).toLocaleString()} puntos)`);
    if (cuponesCemaco900 > 0) console.log(`Cupones CEMACO de Q900: ${cuponesCemaco900} (${(cuponesCemaco900 * cemaco900).toLocaleString()} puntos)`);
    if (cuponesCemaco500 > 0) console.log(`Cupones CEMACO de Q500: ${cuponesCemaco500} (${(cuponesCemaco500 * cemaco500).toLocaleString()} puntos)`);
    if (cuponesCemaco400 > 0) console.log(`Cupones CEMACO de Q400: ${cuponesCemaco400} (${(cuponesCemaco400 * cemaco400).toLocaleString()} puntos)`);
    if (cuponesCemaco300 > 0) console.log(`Cupones CEMACO de Q300: ${cuponesCemaco300} (${(cuponesCemaco300 * cemaco300).toLocaleString()} puntos)`);
    if (cuponesCemaco200 > 0) console.log(`Cupones CEMACO de Q200: ${cuponesCemaco200} (${(cuponesCemaco200 * cemaco200).toLocaleString()} puntos)`);
    if (cuponesCemaco100 > 0) console.log(`Cupones CEMACO de Q100: ${cuponesCemaco100} (${(cuponesCemaco100 * cemaco100).toLocaleString()} puntos)`);
    console.log(`Puntos restantes: ${puntosRestantesCemaco.toLocaleString()}`);
    
    const totalCemaco = (cuponesCemaco1300 * 1300) + (cuponesCemaco1000 * 1000) + (cuponesCemaco900 * 900) + (cuponesCemaco500 * 500) + 
                        (cuponesCemaco400 * 400) + (cuponesCemaco300 * 300) + (cuponesCemaco200 * 200) + (cuponesCemaco100 * 100);
    console.log(`Total valor en cupones CEMACO: Q${totalCemaco}`);
    
    await browser.close();
}

main();