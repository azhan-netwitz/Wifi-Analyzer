export const getMACColor = (mac: string, totalMACs: number, macIndex: number): string => {
  // Use HSL color space for better control over the color generation
  const hue = (macIndex * 360) / totalMACs;
  return `hsl(${hue}, 70%, 50%)`;
};

export const getMACColorMap = (macs: string[]): Record<string, string> => {
  const uniqueMACs = [...new Set(macs)].sort();
  return uniqueMACs.reduce((acc, mac, index) => {
    acc[mac] = getMACColor(mac, uniqueMACs.length, index);
    return acc;
  }, {} as Record<string, string>);
}; 