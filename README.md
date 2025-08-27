# Puntos BI Auto - Smart Coupon Calculator

A comprehensive automated tool that fetches your Club BI points and calculates optimal coupon redemption strategies across three major stores: iShop, Tiendas Max, and CEMACO.

## 🌟 Features

- **Multi-store Support**: Compare coupons from iShop, Tiendas Max, and CEMACO
- **Parallel Processing**: Efficient data fetching with grouped output for better readability
- **Optimal Calculations**: Smart coupon distribution algorithm for maximum value
- **Independent Scenarios**: Compare all three stores separately to make the best decision
- **Real-time Data**: Fetches current point requirements directly from BI Puntos website

## 📋 Prerequisites

- Node.js v20.6.0 or higher
- Valid Club BI account credentials
- Internet connection for web scraping

## ⚙️ Configuration

The project uses a `config.env` file to store your Club BI credentials securely. Create this file in the project root with the following variables:

```env
NUMERO_DPI=your_cui_number_without_spaces
FECHA_NACIMIENTO=DD/MM/YYYY
NUMERO_TARJETA_CLUB_BI=your_club_bi_card_number
```

**Security Note**: Never commit your `config.env` file to version control. Keep your credentials private.

### Configuration Variables:

- `NUMERO_DPI`: Your CUI (Código Único de Identificación) number without spaces
- `FECHA_NACIMIENTO`: Your birth date in DD/MM/YYYY format
- `NUMERO_TARJETA_CLUB_BI`: Your Club BI card number

## 🚀 Installation & Usage

1. Clone this repository
2. Create and configure your `config.env` file with your credentials
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the calculator:
   ```bash
   npm run start
   ```

## 📊 Output Format

The tool provides organized output in the following sequence:

### 1. BI Points Lookup
```
Puntos BI acumulados: 50,000
```

### 2. Store-Specific Coupon Listings
Grouped by store for easy comparison:
```
iShop [Coupon Title]: [Points Required]
iShop [Coupon Title]: [Points Required]

Tiendas Max [Coupon Title]: [Points Required]
Tiendas Max [Coupon Title]: [Points Required]
...

CEMACO [Coupon Title]: [Points Required]
CEMACO [Coupon Title]: [Points Required]
...
```

### 3. Three Independent Calculation Scenarios
Each store scenario uses your full available points independently:
```
--- CALCULADORA DE CUPONES iShop ---
--- CALCULADORA DE CUPONES Tiendas Max ---
--- CALCULADORA DE CUPONES CEMACO ---
```

## 🎯 Coupon Categories

### iShop (Electronics & Technology)
- Q150 gift certificates
- Q500 gift certificates

### Tiendas Max (Department Store)
- Q100, Q200, Q300, Q400, Q500, Q600, Q700, Q800 gift certificates

### CEMACO (Home Improvement)
- Q100, Q200, Q300, Q400, Q500, Q900, Q1000, Q1300 gift certificates

## 🔧 How It Works

1. **BI Points Lookup**: Automatically logs into Club BI and fetches your current points
2. **Parallel Data Fetching**: Simultaneously retrieves point requirements for all coupons
3. **Optimal Distribution**: Calculates the best combination starting with highest-value coupons
4. **Independent Analysis**: Shows three complete scenarios to help you choose the best store

### Calculation Algorithm

For each store, the tool:
- Starts with the highest denomination coupon available
- Calculates maximum quantity possible with your points
- Subtracts used points and continues with the next denomination
- Repeats until all denominations are processed
- Shows remaining points and total value achieved

## 📱 Example Output

```
Puntos BI acumulados: 50,000

iShop Certificado de regalo de Q150 en iShop: 1,500
iShop Certificado de regalo de Q500 en iShop: 4,500

Tiendas Max Certificado de regalo de Q100 en Tiendas Max: 1,200
Tiendas Max Certificado de regalo de Q200 en Tiendas Max: 2,400
...

CEMACO Certificado de regalo de Q100 en CEMACO: 1,000
CEMACO Certificado de regalo de Q200 en CEMACO: 2,000
...

--- CALCULADORA DE CUPONES iShop ---
Puntos disponibles: 50,000
Cupones iShop de Q500: 11 (49,500 puntos)
Cupones iShop de Q150: 0 (0 puntos)
Puntos restantes: 500
Total valor en cupones iShop: Q5,500

--- CALCULADORA DE CUPONES Tiendas Max ---
Puntos disponibles: 50,000
Cupones Tiendas Max de Q800: 6 (48,000 puntos)
Cupones Tiendas Max de Q200: 1 (2,000 puntos)
Puntos restantes: 0
Total valor en cupones Tiendas Max: Q5,000

--- CALCULADORA DE CUPONES CEMACO ---
Puntos disponibles: 50,000
Cupones CEMACO de Q1300: 3 (39,000 puntos)
Cupones CEMACO de Q1000: 1 (10,000 puntos)
Cupones CEMACO de Q900: 1 (1,000 puntos)
Puntos restantes: 0
Total valor en cupones CEMACO: Q5,900
```

## 🛠️ Technical Details

- **Web Automation**: Uses Playwright for reliable browser automation
- **Parallel Processing**: Fetches all coupon data simultaneously for better performance
- **Error Handling**: Robust selectors and error handling for reliable data extraction
- **Grouped Output**: Sequential execution ensures organized, readable results

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.