// Proficiency rank: higher = more frequent use
export const FREQ_RANK = {
  daily: 5,
  weekly: 4,
  occasional: 3,
  learning: 2,
};

export const FREQ_LABEL = {
  daily: 'daily',
  weekly: 'weekly',
  occasional: 'occasional',
  learning: 'learning',
};

export const FREQ_COLOR = {
  daily: 'var(--accent)',
  weekly: 'var(--accent)',
  occasional: 'var(--warn)',
  learning: 'var(--fg-2)',
};

// 5-cell bar — e.g. daily → ▰▰▰▰▰, occasional → ▰▰▰▱▱
export function freqBar(freq) {
  const rank = FREQ_RANK[freq] || 0;
  return '▰'.repeat(rank) + '▱'.repeat(5 - rank);
}

// "4y", "<1y", "2.5y"
export function formatYears(years) {
  if (years == null) return '';
  if (years < 1) return '<1y';
  if (Number.isInteger(years)) return `${years}y`;
  return `${years}y`;
}
