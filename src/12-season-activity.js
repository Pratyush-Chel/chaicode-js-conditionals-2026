/**
 * 🗺️ WanderLust Travel Planner
 *
 * WanderLust is a travel planning app that suggests fun activities
 * based on the month and the current temperature. Users enter the
 * month number and temperature, and the app recommends what to do!
 *
 * Step 1 — Determine the season from the month:
 *   - December, January, February  (12, 1, 2)   → "Winter"
 *   - March, April, May            (3, 4, 5)     → "Spring"
 *   - June, July, August           (6, 7, 8)     → "Summer"
 *   - September, October, November (9, 10, 11)   → "Autumn"
 *
 * Step 2 — Suggest an activity based on season AND temperature (°C):
 *   - Winter + temp < 0     → "skiing"
 *   - Winter + temp >= 0    → "ice skating"
 *   - Spring + temp > 20    → "hiking"
 *   - Spring + temp <= 20   → "museum visit"
 *   - Summer + temp > 35    → "swimming"
 *   - Summer + temp <= 35   → "cycling"
 *   - Autumn + temp > 15    → "nature walk"
 *   - Autumn + temp <= 15   → "reading at a cafe"
 *
 * Return an object: { season: string, activity: string }
 *
 * Rules:
 *   - If month is not 1–12, return null
 *
 * @param {number} month - Month of the year (1-12)
 * @param {number} temperature - Current temperature in Celsius
 * @returns {{ season: string, activity: string } | null}
 */
export function getSeasonActivity(month, temperature) {
  if (!Number.isInteger(month) || month < 1 || month > 12) return null;

  const seasons = [
    null,
    'Winter', 'Winter', 'Spring', 'Spring', 'Spring',
    'Summer', 'Summer', 'Summer', 'Autumn', 'Autumn', 'Autumn',
    'Winter',
  ];
  const season = seasons[month];

  switch (season) {
    case 'Winter':
      return { season, activity: temperature < 0 ? 'skiing' : 'ice skating' };
    case 'Spring':
      return { season, activity: temperature > 20 ? 'hiking' : 'museum visit' };
    case 'Summer':
      return { season, activity: temperature > 35 ? 'swimming' : 'cycling' };
    case 'Autumn':
      return { season, activity: temperature > 15 ? 'nature walk' : 'reading at a cafe' };
  }
}
