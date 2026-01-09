
function averageHexColors(hexColors: string[]) {
    if (hexColors.length === 0) {
      return null;
    }
  
    let totalRed = 0;
    let totalGreen = 0;
    let totalBlue = 0;

    let skipped = 0;
  
    for (const hexColor of hexColors) {
      const hex = hexColor.startsWith('#') ? hexColor.slice(1) : hexColor;

      if (hex.length !== 6) {
        skipped++;
        continue;
      }

      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
  
      totalRed += r;
      totalGreen += g;
      totalBlue += b;
    }
  
    const numColors = hexColors.length - skipped;
    const avgRed = Math.round(totalRed / numColors);
    const avgGreen = Math.round(totalGreen / numColors);
    const avgBlue = Math.round(totalBlue / numColors);
  
    // Convert average RGB back to hex
    
  
    return `#${toHex(avgRed)}${toHex(avgGreen)}${toHex(avgBlue)}`;
  }

  function toHex(color: number) {
    const hex = color.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  // Example usage:
  const colors = ['#FF0000', '#00FF00', '#0000FF']; // Red, Green, Blue
  const averageColor = averageHexColors(colors);
  console.log(averageColor); // Expected output: #555555 (average of R, G, B)

  