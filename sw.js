/*! © 2026 Sumi — service worker: mở nhanh, dùng được khi mạng yếu */
const V = 'sumi-en-v6';
const CORE = ["./", "index.html", "style.css", "manifest.webmanifest", "icon-192.png", "pwa.js", "data/levels.js", "data/a1-1.js", "data/a1-2.js", "data/a1-3.js", "data/a1-4.js", "data/a1-5.js", "data/a1-6.js", "data/a2-1.js", "data/a2-2.js", "data/a2-3.js", "data/a2-4.js", "data/a2-5.js", "data/b1-1.js", "data/b1-2.js", "data/b1-3.js", "data/b1-4.js", "data/b2-1.js", "data/b2-2.js", "data/b2-3.js", "data/c1-1.js", "data/c1-2.js", "data/c1-3.js", "data/c2-1.js", "data/c2-2.js", "data/c2-3.js", "data/stats.js", "data/shadow-1.js", "data/shadow-2.js", "data/shadow-3.js", "data/audio.js", "icons.js", "avatars.js", "hiyo.js", "speech.js", "store.js", "firebase-config.js", "cloud.js", "extra.js", "data/dict-en.js", "dict.js", "community.js", "shadow.js", "app.js"];
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).catch(() => { }).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('sumi-en-') && k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  // Chỉ xử lý file của chính trang; âm thanh mp3 để trình duyệt tự tải (tránh lỗi tua audio)
  if (r.method !== 'GET' || u.origin !== location.origin || /\.mp3$/i.test(u.pathname) || r.headers.has('range')) return;
  // Mạng trước (luôn thấy bản mới nhất), mất mạng thì dùng bản đã lưu
  e.respondWith(fetch(r).then(res => {
    if (res.ok && res.type === 'basic') { const cp = res.clone(); caches.open(V).then(c => c.put(r, cp)); }
    return res;
  }).catch(() => caches.match(r, { ignoreSearch: true }).then(m => m || (r.mode === 'navigate' ? caches.match('./') : Response.error()))));
});
