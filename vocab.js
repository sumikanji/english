/*! © 2026 Sumi English — Từ vựng theo chủ đề: học và kiểm tra */
(function () {
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = t => String(t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = a => a[Math.random() * a.length | 0];
  const wait = ms => new Promise(r => setTimeout(r, ms));
  const SP = () => window.SESpeech, ST = () => window.SEStore, UI = () => window.SEUI;
  const T = () => window.SE_VOCAB_TOPICS || [];
  const best = (id, m) => ST().cfg('voc_' + id + '_' + m);
  const setBest = (id, m, v) => { if (v > (best(id, m) || 0)) ST().cfg('voc_' + id + '_' + m, v); };
  const QN = 10;

  // ---------- Các chế độ luyện của từng loại chủ đề ----------
  const MODES = {
    abc: [['learn', 'Học bảng chữ cái'], ['letter', 'Nghe tên, đoán chữ cái'], ['spell', 'Nghe đánh vần, viết từ']],
    num: [['learn', 'Học các số'], ['listen', 'Nghe số, gõ chữ số'], ['read', 'Nhìn số, đọc to']],
    time: [['learn', 'Học từ'], ['mean', 'Nghe chọn nghĩa'], ['clock', 'Nghe giờ, chọn đồng hồ'], ['date', 'Nghe ngày tháng'], ['say', 'Nói từ']],
    word: [['learn', 'Học từ'], ['mean', 'Nghe chọn nghĩa'], ['spell', 'Nghe và viết từ'], ['say', 'Nói từ']]
  };
  const say = (t, o) => SP().speak(t, o || {});
  // Đọc đúng tên chữ cái (một số giọng đọc chữ in hoa thành "capital B", nên dùng cách viết theo âm)
  const LETTER_NAME = { A: 'ay', B: 'bee', C: 'see', D: 'dee', E: 'ee', F: 'ef', G: 'gee', H: 'aitch', I: 'eye', J: 'jay', K: 'kay', L: 'el', M: 'em', N: 'en', O: 'oh', P: 'pee', Q: 'cue', R: 'ar', S: 'ess', T: 'tee', U: 'you', V: 'vee', W: 'double you', X: 'ex', Y: 'why', Z: 'zee' };
  const sayLetter = L => say(LETTER_NAME[L.toUpperCase()] || L.toLowerCase(), { rate: 0.8 });

  // ================= Danh sách chủ đề =================
  function viewList(app) {
    app.innerHTML = '<section class="card panel pop"><div class="panel-h"><h2>Từ vựng theo chủ đề</h2><p>Bảng chữ cái, chữ số, ngày giờ và ' + (T().length - 3) + ' chủ đề đời thường. Mỗi từ đi kèm một câu ví dụ để bạn biết cách dùng. Học xong thì luyện nghe, viết và nói.</p></div></section>' +
      '<div class="voc-grid">' + T().map((t, i) => {
        const done = (MODES[t.kind] || MODES.word).slice(1).map(m => best(t.id, m[0])).filter(v => v != null);
        return '<a class="card voc-card" href="#/vocab/' + t.id + '"><span class="num">' + (i + 1) + '</span><b>' + esc(t.t) + '</b><small class="en">' + esc(t.en) + '</small><small class="muted">' + t.w.length + (t.kind === 'abc' ? ' chữ cái' : t.kind === 'num' ? ' số' : ' từ') + (done.length ? ' · cao nhất ' + Math.max(...done) + '/' + QN : '') + '</small></a>';
      }).join('') + '</div>';
  }

  // ================= Trang chủ đề =================
  function viewTopic(app, t, mode) {
    const modes = MODES[t.kind] || MODES.word;
    mode = mode || 'learn';
    app.innerHTML = '<a class="back" href="#/vocab">← Các chủ đề</a>' +
      '<div class="voc-head"><h1>' + esc(t.t) + '</h1><span class="muted">' + esc(t.en) + '</span></div>' +
      '<nav class="voc-modes">' + modes.map(m => '<a class="chip' + (m[0] === mode ? ' on' : '') + '" href="#/vocab/' + t.id + '/' + m[0] + '">' + m[1] + (m[0] !== 'learn' && best(t.id, m[0]) != null ? ' · ' + best(t.id, m[0]) + '/' + QN : '') + '</a>').join('') + '</nav>' +
      '<section class="card panel pop" id="vp"></section>';
    const P = $('#vp');
    const fn = { learn: learn, mean: quizMean, spell: t.kind === 'abc' ? quizSpellAbc : quizSpell, say: quizSay, letter: quizLetter, listen: quizNumListen, read: quizNumRead, clock: quizClock, date: quizDate }[mode] || learn;
    return fn(P, t);
  }

  // ----- Học: danh sách thẻ, chạm để nghe từ và câu ví dụ -----
  function learn(P, t) {
    const abc = t.kind === 'abc', num = t.kind === 'num';
    P.innerHTML = '<div class="row" style="margin-bottom:12px"><button class="chip play" id="all">Nghe tất cả</button><button class="chip" id="slow">Đọc chậm</button><button class="chip" id="hvi">Ẩn nghĩa</button></div>' +
      (abc ? '<div class="abc-grid">' + t.w.map((w, i) => '<button class="abc" data-i="' + i + '"><b>' + w[0] + '<i>' + w[0].toLowerCase() + '</i></b><small>' + esc(w[1]) + '</small></button>').join('') + '</div><div class="abc-ex" id="abcx"></div>'
        : '<div class="voc-list" id="vl">' + t.w.map((w, i) => '<div class="voc-item" data-i="' + i + '"><button class="voc-w"><span class="w">' + esc(w[0]) + (num ? '<small> · ' + esc(w[1]) + '</small>' : '') + '</span>' + (num ? '' : '<span class="m">' + esc(w[1]) + '</span>') + '</button><button class="voc-ex"><span class="ex">' + esc(w[2]) + '</span><span class="exv">' + esc(w[3]) + '</span></button></div>').join('') + '</div>');
    let slow = false, run = 0;
    $('#slow', P).onclick = e => { slow = !slow; e.currentTarget.classList.toggle('on', slow); };
    $('#hvi', P).onclick = e => { const on = P.classList.toggle('hide-vi'); e.currentTarget.classList.toggle('on', on); };
    const items = abc ? $$('.abc', P) : $$('.voc-item', P);
    const spoken = w => num ? w[1] : w[0];
    const here = location.hash;
    const alive = () => location.hash === here;
    const play = async (i, withEx) => {
      if (!alive()) return;
      items.forEach(b => b.classList.toggle('play', +b.dataset.i === i));
      const w = t.w[i];
      if (abc) { $('#abcx', P).innerHTML = '<b>' + w[0] + '</b> · <button class="voc-ex" id="abce"><span class="ex">' + esc(w[2]) + '</span> <span class="exv">' + esc(w[3]) + '</span></button>'; $('#abce', P).onclick = () => { run++; say(w[2], { slow }); }; await sayLetter(w[0]); await wait(250); if (withEx && alive()) await say(w[2], { slow }); }
      else { await say(spoken(w), { slow, rate: 0.85 }); if (withEx) { await wait(250); if (alive()) await say(w[2], { slow }); } }
      const b = items[i]; b && b.classList.remove('play');
    };
    // Chạm vào từ: chỉ đọc từ. Chạm vào câu ví dụ: đọc câu.
    items.forEach(b => {
      const i = +b.dataset.i;
      if (abc) { b.onclick = () => { run++; play(i, false); }; return; }
      b.querySelector('.voc-w').onclick = () => { run++; play(i, false); };
      b.querySelector('.voc-ex').onclick = async () => { run++; items.forEach(x => x.classList.remove('play', 'play-ex')); b.classList.add('play-ex'); await say(t.w[i][2], { slow }); b.classList.remove('play-ex'); };
    });
    $('#all', P).onclick = async () => { const my = ++run; for (let i = 0; i < t.w.length && my === run && alive(); i++) { items[i].scrollIntoView({ block: 'nearest', behavior: 'smooth' }); await play(i, false); await wait(350); } };
  }

  // ----- Khung bài kiểm tra 10 câu -----
  function runQuiz(P, t, mode, makeQ) {
    let k = 0, right = 0;
    const res = [];
    const next = () => {
      if (k >= QN) {
        setBest(t.id, mode, right); ST().touch(right); UI().refreshTop();
        P.innerHTML = '<div class="result"><div class="hy">' + UI().hiyo(right >= 8 ? 'cheer' : right >= 5 ? 'joy' : 'think') + '</div><div class="panel-h"><h2>Đúng ' + right + '/' + QN + '</h2><p>' + (right >= 8 ? 'Tuyệt vời! Bạn đã nắm chắc chủ đề này.' : right >= 5 ? 'Khá lắm! Làm thêm một lượt nữa sẽ nhớ hơn.' : 'Quay lại phần Học, nghe thêm vài lần rồi thử lại nhé.') + '</p></div></div>' +
          '<div class="next-bar"><a class="btn" href="#/vocab/' + t.id + '/learn">Xem lại từ</a><button class="btn primary" id="again">Làm lượt mới</button></div>';
        $('#again', P).onclick = () => runQuiz(P, t, mode, makeQ);
        return;
      }
      P.innerHTML = '<div class="progress-dots">' + Array.from({ length: QN }, (_, j) => '<i class="' + (j < k ? res[j] : j === k ? 'cur' : '') + '"></i>').join('') + '</div><div id="qb"></div>';
      makeQ($('#qb', P), ok => { res[k] = ok ? 'ok' : 'bad'; if (ok) right++; k++; setTimeout(next, 900); });
    };
    next();
  }
  // Câu hỏi chọn đáp án
  function choiceQ(el, o) {
    let tried = false;
    el.innerHTML = '<div class="game-q"><div class="row center"><button class="btn small primary" id="pl">Nghe lại</button>' + (o.slow !== false ? '<button class="btn small" id="sl">Nghe chậm</button>' : '') + '</div><b>' + o.ask + '</b></div>' +
      '<div class="opts' + (o.big ? ' big' : '') + (o.list ? ' list' : '') + '">' + o.opts.map(x => '<button class="opt" data-v="' + esc(x) + '">' + esc(x) + '</button>').join('') + '</div><div class="reveal" id="rv"></div>';
    $('#pl', el).onclick = () => o.play(false);
    if ($('#sl', el)) $('#sl', el).onclick = () => o.play(true);
    $$('.opt', el).forEach(b => b.onclick = () => {
      const ok = b.dataset.v === o.answer;
      if (!ok) { tried = true; b.classList.add('bad'); UI().beep(false); setTimeout(() => o.play(false), 300); return; }
      b.classList.add('ok'); UI().beep(true);
      $$('.opt', el).forEach(x => x.disabled = true);
      $('#rv', el).innerHTML = o.reveal || '';
      o.done(!tried);
    });
    o.play(false);
  }
  // Câu hỏi gõ đáp án
  function typeQ(el, o) {
    let tries = 0;
    el.innerHTML = '<div class="game-q"><div class="row center"><button class="btn small primary" id="pl">Nghe lại</button><button class="btn small" id="sl">Nghe chậm</button></div><b>' + o.ask + '</b></div>' +
      '<form class="type-q" id="tf"><input id="ti" autocomplete="off" autocapitalize="off" spellcheck="false" inputmode="' + (o.numeric ? 'numeric' : 'text') + '" placeholder="' + (o.numeric ? 'Gõ chữ số…' : 'Gõ từ bạn nghe được…') + '"><button class="btn primary" type="submit">Kiểm tra</button></form>' +
      '<div class="row center" style="margin-top:8px"><button class="btn small ghost" id="giveup">Xem đáp án</button></div><div class="reveal" id="rv"></div>';
    const inp = $('#ti', el);
    setTimeout(() => inp.focus(), 50);
    $('#pl', el).onclick = () => o.play(false);
    $('#sl', el).onclick = () => o.play(true);
    const finish = ok => { inp.disabled = true; $$('button', el).forEach(b => { if (b.id !== 'pl' && b.id !== 'sl') b.disabled = true; }); $('#rv', el).innerHTML = o.reveal; o.done(ok); };
    $('#tf', el).onsubmit = e => {
      e.preventDefault();
      if (o.check(inp.value)) { inp.classList.add('ok'); UI().beep(true); finish(tries === 0); }
      else { tries++; inp.classList.add('bad'); UI().beep(false); setTimeout(() => inp.classList.remove('bad'), 500); UI().toast('Chưa đúng, nghe lại nhé'); o.play(true); if (tries >= 3) finish(false); }
    };
    $('#giveup', el).onclick = () => { UI().beep(false); finish(false); };
    o.play(false);
  }
  const normTxt = s => String(s).toLowerCase().replace(/[’']/g, "'").replace(/[^a-z0-9' ]/g, ' ').replace(/\s+/g, ' ').trim();

  // ----- Nghe từ, chọn nghĩa -----
  function quizMean(P, t) {
    const pool = shuffle(t.w);
    let n = 0;
    runQuiz(P, t, 'mean', (el, done) => {
      const w = pool[n++ % pool.length];
      const opts = shuffle([w[1]].concat(shuffle(t.w.filter(x => x[1] !== w[1]).map(x => x[1])).slice(0, 3)));
      choiceQ(el, { ask: 'Từ này nghĩa là gì?', opts, answer: w[1], list: true, play: s => say(w[0], { slow: s, rate: 0.85 }), reveal: esc(w[0]) + '<small>' + esc(w[2]) + '</small>', done: ok => { say(w[0]); done(ok); } });
    });
  }
  // ----- Nghe từ, gõ lại -----
  function quizSpell(P, t) {
    const pool = shuffle(t.w);
    let n = 0;
    runQuiz(P, t, 'spell', (el, done) => {
      const w = pool[n++ % pool.length];
      typeQ(el, { ask: 'Nghe và gõ lại từ (gợi ý: ' + esc(w[1]) + ')', play: s => say(w[0], { slow: s, rate: 0.85 }), check: v => normTxt(v) === normTxt(w[0]), reveal: esc(w[0]) + '<small>' + esc(w[2]) + '</small>', done });
    });
  }
  // ----- Nhìn nghĩa, nói từ -----
  function quizSay(P, t) {
    const pool = shuffle(t.w);
    let n = 0;
    runQuiz(P, t, 'say', (el, done) => {
      const w = pool[n++ % pool.length];
      let fin = false;
      el.innerHTML = '<div class="game-q"><b>Nói bằng tiếng Anh:</b><div class="q-vi big">' + esc(w[1]) + '</div></div><div id="sb"></div><div class="row center" style="margin-top:10px"><button class="btn small" id="sh">Xem đáp án</button><button class="btn small primary" id="nx" disabled>Tiếp →</button></div>';
      let bestS = 0, peek = false;
      UI().speakBox($('#sb', el), { en: w[0], onScore: s => { bestS = Math.max(bestS, s); $('#nx', el).disabled = false; } });
      const se = $('#se', el); se.style.display = 'none';
      new MutationObserver(() => { se.style.display = ''; }).observe($('#sc', el), { childList: true });
      $('#sh', el).onclick = () => { peek = true; se.style.display = ''; say(w[0]); $('#nx', el).disabled = false; };
      $('#nx', el).onclick = () => { if (fin) return; fin = true; done(bestS >= 80 && !peek); };
    });
  }
  // ----- Bảng chữ cái: nghe tên, đoán chữ -----
  const CONFUSE = [['B', 'D', 'P', 'T', 'V', 'E', 'G', 'C', 'Z'], ['A', 'H', 'J', 'K'], ['F', 'S', 'X', 'L', 'M', 'N'], ['I', 'Y'], ['O', 'U', 'Q', 'W'], ['R', 'A']];
  function quizLetter(P, t) {
    runQuiz(P, t, 'letter', (el, done) => {
      const L = pick(t.w)[0];
      const grp = CONFUSE.find(g => g.includes(L)) || [];
      const others = shuffle(grp.filter(x => x !== L)).slice(0, 3);
      while (others.length < 5) { const x = pick(t.w)[0]; if (x !== L && !others.includes(x)) others.push(x); }
      choiceQ(el, { ask: 'Bạn nghe thấy chữ cái nào?', opts: shuffle([L].concat(others)), answer: L, big: true, play: () => sayLetter(L), reveal: L + ' ' + L.toLowerCase(), done });
    });
  }
  // ----- Bảng chữ cái: nghe đánh vần, viết từ -----
  const SPELL = ['cat', 'dog', 'sun', 'bus', 'pen', 'cup', 'map', 'red', 'box', 'hat', 'egg', 'fish', 'book', 'milk', 'cake', 'rain', 'tree', 'blue', 'jump', 'zoo', 'van', 'queen', 'water', 'happy', 'phone', 'house', 'quick', 'yellow', 'juice', 'vegetable', 'kitchen', 'bridge', 'family', 'Vietnam'];
  function quizSpellAbc(P, t) {
    const pool = shuffle(SPELL);
    let n = 0;
    runQuiz(P, t, 'spell', (el, done) => {
      const w = pool[n++ % pool.length];
      const here = location.hash;
      const play = async slow => { for (const c of w.toUpperCase()) { if (location.hash !== here) return; await sayLetter(c); await wait(slow ? 500 : 200); } };
      typeQ(el, { ask: 'Nghe đánh vần từng chữ cái rồi gõ lại cả từ', play, check: v => normTxt(v) === normTxt(w), reveal: esc(w) + '<small>' + w.toUpperCase().split('').join(' – ') + '</small>', done: ok => { say(w); done(ok); } });
    });
  }
  // ----- Số: nghe số, gõ chữ số -----
  const numRange = k => k < 3 ? rnd(0, 20) : k < 6 ? rnd(21, 100) : k < 8 ? rnd(101, 999) : rnd(1000, 99999);
  function quizNumListen(P, t) {
    let k = 0;
    runQuiz(P, t, 'listen', (el, done) => {
      const n = numRange(k++);
      typeQ(el, { numeric: true, ask: 'Nghe số và gõ lại bằng chữ số', play: s => say(String(n), { slow: s }), check: v => v.replace(/[^\d]/g, '') === String(n), reveal: n.toLocaleString('en-US') + '<small>' + esc(window.SESpeech.norm(String(n)).join(' ')) + '</small>', done });
    });
  }
  // ----- Số: nhìn số, đọc to -----
  function quizNumRead(P, t) {
    let k = 0;
    runQuiz(P, t, 'read', (el, done) => {
      const n = numRange(k++);
      let fin = false, bestS = 0;
      el.innerHTML = '<div class="game-q"><b>Đọc to số này bằng tiếng Anh:</b><div class="big-num">' + n.toLocaleString('en-US') + '</div></div><div id="sb"></div><div class="row center" style="margin-top:10px"><button class="btn small primary" id="nx" disabled>Tiếp →</button></div>';
      UI().speakBox($('#sb', el), { en: window.SESpeech.norm(String(n)).join(' '), onScore: s => { bestS = Math.max(bestS, s); $('#nx', el).disabled = false; } });
      const se = $('#se', el); se.style.display = 'none';
      new MutationObserver(() => { se.style.display = ''; }).observe($('#sc', el), { childList: true });
      $('#nx', el).onclick = () => { if (fin) return; fin = true; done(bestS >= 80); };
    });
  }
  // ----- Giờ: nghe giờ, chọn đồng hồ -----
  const W = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
  const hh = h => W[h % 12 || 12];
  function timePhrase(h, m) {
    if (m === 0) return "It's " + hh(h) + " o'clock.";
    if (m === 15) return "It's quarter past " + hh(h) + '.';
    if (m === 30) return "It's half past " + hh(h) + '.';
    if (m === 45) return "It's quarter to " + hh(h + 1) + '.';
    return "It's " + hh(h) + ' ' + (m < 10 ? 'oh ' + m : m) + '.';
  }
  const tstr = (h, m) => (h % 12 || 12) + ':' + String(m).padStart(2, '0');
  function quizClock(P, t) {
    runQuiz(P, t, 'clock', (el, done) => {
      const h = rnd(1, 12), m = pick([0, 15, 30, 45, 0, 15, 30, 45, 5, 10, 20, 25, 40, 50, 55]);
      const ans = tstr(h, m);
      const set = new Set([ans]);
      const cand = [tstr(h, (m + 30) % 60), tstr(h + 1, m), tstr(h - 1 + 12, m), tstr(m === 45 ? h + 1 : h, m === 15 ? 45 : m === 45 ? 15 : (m + 15) % 60), tstr(h, (m + 10) % 60)];
      for (const c of shuffle(cand)) { if (set.size >= 4) break; set.add(c); }
      const ph = timePhrase(h, m);
      choiceQ(el, { ask: 'Mấy giờ?', opts: shuffle([...set]), answer: ans, big: true, play: s => say(ph, { slow: s }), reveal: esc(ph), done });
    });
  }
  // ----- Ngày tháng: nghe, chọn -----
  const DAYS = [['Monday', 'Thứ Hai'], ['Tuesday', 'Thứ Ba'], ['Wednesday', 'Thứ Tư'], ['Thursday', 'Thứ Năm'], ['Friday', 'Thứ Sáu'], ['Saturday', 'Thứ Bảy'], ['Sunday', 'Chủ nhật']];
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const ord = n => n + (n % 10 === 1 && n !== 11 ? 'st' : n % 10 === 2 && n !== 12 ? 'nd' : n % 10 === 3 && n !== 13 ? 'rd' : 'th');
  function quizDate(P, t) {
    runQuiz(P, t, 'date', (el, done) => {
      const di = rnd(0, 6), mi = rnd(0, 11), d = rnd(1, 28);
      const lab = (a, b, c) => DAYS[a][1] + ', ' + c + '/' + (b + 1);
      const ans = lab(di, mi, d);
      const set = new Set([ans]);
      const cand = [lab((di + 1) % 7, mi, d), lab(di, (mi + 1) % 12, d), lab(di, mi, d % 28 + 1), lab((di + 6) % 7, mi, d), lab(di, (mi + 11) % 12, d), lab(di, mi, (d + 9) % 28 + 1)];
      for (const c of shuffle(cand)) { if (set.size >= 4) break; set.add(c); }
      const ph = DAYS[di][0] + ', ' + MONTHS[mi] + ' ' + ord(d) + '.';
      choiceQ(el, { ask: 'Bạn nghe thấy ngày nào? (ngày/tháng)', opts: shuffle([...set]), answer: ans, list: true, play: s => say(ph, { slow: s }), reveal: esc(ph), done });
    });
  }

  window.SEVocab = {
    view: (app, id, mode) => {
      const t = id && T().find(x => x.id === id);
      return t ? viewTopic(app, t, mode) : viewList(app);
    }
  };
})();
