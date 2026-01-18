const USER_KEY = 'neurosync_user';
const ROBOTS_KEY = 'neurosync_robots';
const PHRASES_KEY = 'neurosync_phrases';

export function saveUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}
export function getUser() {
  try { return JSON.parse(localStorage.getItem(USER_KEY)); } catch { return null; }
}
export function clearUser() { localStorage.removeItem(USER_KEY); }

export function getRobots() {
  try { return JSON.parse(localStorage.getItem(ROBOTS_KEY)) || []; } catch { return []; }
}
export function saveRobots(list) { localStorage.setItem(ROBOTS_KEY, JSON.stringify(list)); }

export function getPhrases() {
  try { return JSON.parse(localStorage.getItem(PHRASES_KEY)) || []; } catch { return []; }
}
export function savePhrases(list) { localStorage.setItem(PHRASES_KEY, JSON.stringify(list)); }