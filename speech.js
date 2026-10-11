/*! © 2026 Sumi English — giọng đọc (TTS) và chấm phát âm (nhận dạng giọng nói) */
(function () {
  const synth = window.speechSynthesis || null;
  let voices = [];
  // Đoán giới tính giọng theo tên (trình duyệt không cung cấp thông tin này)
  const FEMALE = /female|woman|samantha|victoria|karen|moira|tessa|fiona|zira|aria|jenny|ava|allison|susan|serena|kate|kathy|vicki|libby|sonia|natasha|michelle|emma|olivia|nicky|catherine|martha|hazel|heera|veena|joanna|salli|kimberly|ivy|amy|google us english|nora|zoe|ana|clara|emily|sara|linda|heather|elizabeth/i;
  const MALE = /\bmale\b|\bman\b|daniel|alex|fred|tom|aaron|arthur|guy|david|mark|ryan|christopher|eric|george|james|oliver|thomas|rishi|lee|matthew|brian|joey|justin|roger|steffan|william|liam|noah|andrew|brandon|jacob|tony|ralph|gordon|evan|nathan/i;
  function genderOf(v) { const n = v.name; if (/female/i.test(n)) return 'f'; if (/\bmale\b/i.test(n)) return 'm'; return FEMALE.test(n) ? 'f' : MALE.test(n) ? 'm' : '?'; }
  function loadVoices() {
    if (!synth) return;
    const all = synth.getVoices().filter(v => /^en[-_]/i.test(v.lang));
    const score = v => (/en[-_]US/i.test(v.lang) ? 20 : /en[-_]GB/i.test(v.lang) ? 12 : 5) +
      (/natural|neural|online|enhanced|premium/i.test(v.name) ? 10 : 0) +
      (/google|samantha|aria|jenny|guy|ava|allison|daniel|karen|serena/i.test(v.name) ? 6 : 0) - (/compact|eloquence|novelty|whisper|bad news|bells|bubbles|cellos|zarvox|trinoids|organ|boing|albert|jester|wobble|superstar|grandma|grandpa|rocko|shelley|flo|reed|sandy|eddy/i.test(v.name) ? 30 : 0);
    voices = all.sort((a, b) => score(b) - score(a));
    listeners.forEach(f => { try { f(); } catch (e) { } });
  }
  const listeners = [];
  if (synth) { loadVoices(); synth.onvoiceschanged = loadVoices; }

  let rate = 0.95;
  const gender = 'f';    // chỉ dùng giọng nữ
  let voiceName = '';    // tên giọng cụ thể (nếu người dùng chọn)
  let token = 0;
  // Chọn giọng: giọng chính theo giới tính đã chọn; người còn lại trong hội thoại dùng giọng thứ hai cùng giới (nếu có)
  function pickVoice(who) {
    if (!voices.length) return { v: null, pitch: who === 'B' ? 1.25 : 1.1 };
    const same = voices.filter(v => genderOf(v) === gender);
    let main = voiceName && voices.find(v => v.name === voiceName && genderOf(v) !== 'm');
    if (!main) main = same[0] || null;
    if (!main) return { v: voices[0], pitch: 1.15, fake: true };
    if (who !== 'B') return { v: main, pitch: 1 };
    const other = same.find(v => v !== main);
    return other ? { v: other, pitch: 1 } : { v: main, pitch: 1.12 };
  }

  // speak(text, {who:'A'|'B', slow}) → Promise khi đọc xong
  function speak(text, o) {
    o = o || {};
    if (!synth) return Promise.resolve();
    const my = ++token;
    synth.cancel();
    return new Promise(res => {
      const u = new SpeechSynthesisUtterance(text.replace(/…/g, '...'));
      u.lang = 'en-US';
      const pv = pickVoice(o.who);
      if (pv.v) u.voice = pv.v;
      u.pitch = pv.pitch;
      u.rate = o.slow ? 0.6 : (o.rate || rate);
      let done = false;
      const fin = () => { if (done) return; done = true; clearTimeout(tm); res(my === token); };
      u.onend = fin; u.onerror = fin;
      const tm = setTimeout(fin, 1500 + text.length * 130 / u.rate);
      // Chrome đôi khi "kẹt" nếu gọi ngay sau cancel()
      setTimeout(() => synth.speak(u), 30);
    });
  }
  function stop() { token++; if (synth) synth.cancel(); }

  // ---------- Chuẩn hoá câu để so khớp ----------
  const ONES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  function numWords(n) {
    n = +n;
    if (n < 20) return ONES[n];
    if (n < 100) return TENS[Math.floor(n / 10)] + (n % 10 ? ' ' + ONES[n % 10] : '');
    if (n < 1000) return ONES[Math.floor(n / 100)] + ' hundred' + (n % 100 ? ' ' + numWords(n % 100) : '');
    if (n < 10000) return numWords(Math.floor(n / 1000)) + ' thousand' + (n % 1000 ? ' ' + numWords(n % 1000) : '');
    return String(n).split('').map(d => ONES[+d]).join(' ');
  }
  const CONTR = {
    "i'm": 'i am', "you're": 'you are', "we're": 'we are', "they're": 'they are', "he's": 'he is', "she's": 'she is', "it's": 'it is',
    "that's": 'that is', "what's": 'what is', "there's": 'there is', "here's": 'here is', "who's": 'who is', "where's": 'where is', "when's": 'when is', "let's": 'let us',
    "don't": 'do not', "doesn't": 'does not', "didn't": 'did not', "isn't": 'is not', "aren't": 'are not', "wasn't": 'was not', "weren't": 'were not',
    "can't": 'can not', "cannot": 'can not', "couldn't": 'could not', "won't": 'will not', "wouldn't": 'would not', "shouldn't": 'should not', "haven't": 'have not', "hasn't": 'has not',
    "i'll": 'i will', "you'll": 'you will', "we'll": 'we will', "they'll": 'they will', "he'll": 'he will', "she'll": 'she will', "it'll": 'it will',
    "i'd": 'i would', "you'd": 'you would', "we'd": 'we would', "they'd": 'they would', "she'd": 'she would', "he'd": 'he would',
    "i've": 'i have', "you've": 'you have', "we've": 'we have', "they've": 'they have', "o'clock": 'oclock',
    'gonna': 'going to', 'wanna': 'want to', 'kinda': 'kind of', 'gotta': 'got to', 'till': 'until', 'til': 'until', 'ok': 'okay', 'mr': 'mister', 'mrs': 'missus', 'ms': 'miss', 'dr': 'doctor',
    'p.m.': 'pm', 'a.m.': 'am', 'wi-fi': 'wifi', 'e-mail': 'email', 'percent': 'percent', '%': ' percent'
  };
  function norm(s) {
    s = String(s).toLowerCase().replace(/[’‘`]/g, "'").replace(/\bp\.m\./g, 'pm').replace(/\ba\.m\./g, 'am').replace(/wi-fi/g, 'wifi').replace(/(\d)%/g, '$1 percent').replace(/\$(\d+)/g, '$1 dollars');
    s = s.replace(/(\d+)(st|nd|rd|th)\b/g, '$1');
    s = s.replace(/\d+/g, m => ' ' + numWords(m) + ' ');
    s = s.replace(/[^a-z' ]+/g, ' ');
    const out = [];
    s.split(/\s+/).forEach(w => {
      w = w.replace(/^'+|'+$/g, '');
      if (!w) return;
      const c = CONTR[w];
      if (c) out.push(...c.split(' '));
      else out.push(w.replace(/'s$/, 's').replace(/'/g, ''));
    });
    return out;
  }
  function lev(a, b) {
    const m = a.length, n = b.length;
    if (!m || !n) return m || n;
    let prev = Array.from({ length: n + 1 }, (_, j) => j);
    for (let i = 1; i <= m; i++) {
      const cur = [i];
      for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = cur;
    }
    return prev[n];
  }
  // Mức giống nhau của 2 từ (0–1)
  function wsim(a, b, strict) {
    if (a === b) return 1;
    if (strict) return 0;
    if (a.length <= 3 || b.length <= 3) return 0;
    const s = 1 - lev(a, b) / Math.max(a.length, b.length);
    return s >= 0.75 ? s : 0;
  }
  // So khớp: căn chỉnh (LCS có trọng số) giữa câu mẫu và câu nhận được
  function compare(target, heard, strict) {
    const T = norm(target), H = norm(heard);
    const m = T.length, n = H.length;
    const dp = Array.from({ length: m + 1 }, () => new Float32Array(n + 1));
    for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) {
      const s = wsim(T[i - 1], H[j - 1], strict);
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1], s ? dp[i - 1][j - 1] + s : 0);
    }
    const ok = new Array(m).fill(0);
    let i = m, j = n;
    while (i > 0 && j > 0) {
      const s = wsim(T[i - 1], H[j - 1], strict);
      if (s && Math.abs(dp[i][j] - (dp[i - 1][j - 1] + s)) < 1e-6) { ok[i - 1] = s; i--; j--; }
      else if (dp[i - 1][j] >= dp[i][j - 1]) i--; else j--;
    }
    const got = ok.reduce((a, b) => a + b, 0);
    const extra = Math.max(0, n - m);
    const score = m ? Math.max(0, Math.round(100 * got / m - extra * 4)) : 0;
    return { score, ok, heard };
  }
  // Ghép điểm vào từng từ hiển thị của câu gốc (giữ dấu câu)
  function markWords(target, res) {
    const parts = target.split(/\s+/);
    let k = 0;
    return parts.map(p => {
      const n = norm(p).length;
      if (!n) return { w: p, ok: 1 };
      let s = 0;
      for (let q = 0; q < n; q++) s += res.ok[k + q] || 0;
      k += n;
      return { w: p, ok: s / n };
    });
  }

  // ---------- Nhận dạng giọng nói ----------
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  let rec = null;
  function canListen() { return !!SR; }
  // listen(target, {onInterim, strict}) → Promise<{score, ok, heard} | {error}>
  function listen(target, o) {
    o = o || {};
    stop();
    return new Promise(resolve => {
      if (!SR) return resolve({ error: 'unsupported' });
      try { if (rec) rec.abort(); } catch (e) { }
      const r = new SR();
      rec = r;
      r.lang = 'en-US'; r.interimResults = true; r.maxAlternatives = 5; r.continuous = false;
      let best = null, finished = false, lastText = '';
      const done = (v) => { if (finished) return; finished = true; clearTimeout(cap); resolve(v); };
      r.onresult = e => {
        let interim = '';
        for (let i = e.resultIndex; i < e.results.length; i++) {
          const R = e.results[i];
          if (R.isFinal) {
            for (let a = 0; a < R.length; a++) {
              const c = compare(target, R[a].transcript, o.strict);
              if (!best || c.score > best.score) best = c;
            }
          } else interim += R[0].transcript;
        }
        if (interim) { lastText = interim; o.onInterim && o.onInterim(interim); }
      };
      r.onerror = e => done({ error: e.error || 'error' });
      r.onend = () => {
        if (best) done(best);
        else if (lastText) done(compare(target, lastText, o.strict));
        else done({ error: 'no-speech' });
      };
      const cap = setTimeout(() => { try { r.stop(); } catch (e) { } }, o.maxMs || 9000);
      try { r.start(); } catch (e) { done({ error: 'start' }); }
    });
  }
  function stopListening() { try { rec && rec.stop(); } catch (e) { } }

  window.SESpeech = {
    speak, stop, listen, stopListening, canListen, compare, markWords, norm,
    canSpeak: () => !!synth,
    setRate: r => { rate = r; }, getRate: () => rate,
    setGender: () => { }, getGender: () => gender,
    setVoice: n => { voiceName = n || ''; }, getVoice: () => voiceName,
    voiceList: () => voices.map(v => ({ name: v.name, lang: v.lang, g: genderOf(v) })),
    onVoices: f => listeners.push(f)
  };
})();
