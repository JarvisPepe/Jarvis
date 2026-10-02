export function ingestLiveRun(snapshot) {
  if (!snapshot?.run || snapshot.run.status !== 'SUCCESS') {
    throw new Error('Invalid JARVIS live-run snapshot');
  }

  return {
    status: 'LIVE',
    timestamp: snapshot.run.timestamp,
    todayImportant: (snapshot.todayImportant ?? []).slice(0, 5),
    weather: snapshot.weather ?? null,
    kids: snapshot.kids ?? [],
    calendar: snapshot.calendar ?? [],
    sports: snapshot.sports ?? [],
    fantasy: snapshot.fantasy ?? null,
    tips: snapshot.tips ?? null,
    alerts: snapshot.alerts ?? [],
    sourceStatus: snapshot.sourceStatus ?? {}
  };
}

export function hudStatus(sourceStatus) {
  return Object.fromEntries(
    Object.entries(sourceStatus).map(([source, status]) => [source, status])
  );
}
