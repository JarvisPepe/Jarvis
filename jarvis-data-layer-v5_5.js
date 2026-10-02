/* JARVIS V5.5 DATA LAYER CONTRACT
 * The HUD should consume one normalized object with these top-level domains:
 * meta, todayImportant, weather, kids, calendar, weekend, sports, tips, sourceStatus.
 * A future live gateway can populate window.JARVIS_DATA using this contract.
 * No credentials, tokens or private connector secrets belong in this file.
 */
export function normalizeSnapshot(snapshot) {
  if (!snapshot || typeof snapshot !== 'object') throw new Error('Invalid JARVIS snapshot');
  return {
    meta: snapshot.meta ?? { version: '5.5.0', date: new Date().toISOString().slice(0,10), location: 'Wilen bei Wollerau' },
    todayImportant: Array.isArray(snapshot.todayImportant) ? snapshot.todayImportant.slice(0,5) : [],
    weather: snapshot.weather ?? null,
    kids: snapshot.kids ?? { dylan:null, riley:null },
    calendar: Array.isArray(snapshot.calendar) ? snapshot.calendar : [],
    weekend: snapshot.weekend ?? null,
    sports: Array.isArray(snapshot.sports) ? snapshot.sports : [],
    tips: Array.isArray(snapshot.tips) ? snapshot.tips : [],
    sourceStatus: snapshot.sourceStatus ?? {}
  };
}
