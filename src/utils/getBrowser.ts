export function getBrowser() {
  const ua = navigator.userAgent;

  if (/Edg/i.test(ua)) return 'edge';
  if (/OPR|Opera/i.test(ua)) return 'opera';
  if (/CriOS/i.test(ua)) return 'chrome-ios';
  if (/FxiOS/i.test(ua)) return 'firefox-ios';
  if (/Chrome/i.test(ua)) return 'chrome';
  if (/Firefox/i.test(ua)) return 'firefox';
  if (/Safari/i.test(ua)) return 'safari';

  return 'unknown';
}
