#!/usr/bin/env python3
"""Tạo lại giọng AI cho TỪ ĐƠN (từ vựng, tên chữ cái, từ đánh vần).
Kokoro đọc một từ đứng riêng thường quá nhanh, nuốt âm. Cách sửa: đọc như một câu ngắn
("Mother.") và chậm hơn (0.85). Mã file giữ nguyên nên không cần sửa data/audio.js.
  python3 tools/gen_word_audio.py <items.json> <kokoro-v1.0.onnx> <voices-v1.0.bin>
items.json: [{"key": "...", "text": "mother"}, ...]
"""
import json, os, sys, subprocess
ITEMS, MODEL, VOICES = sys.argv[1:4]
SITE = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
from kokoro_onnx import Kokoro
K = Kokoro(MODEL, VOICES)
VOICE = {'f': 'af_heart', 'm': 'am_michael'}
def write_mp3(a, sr, path):
    tmp = path + '.tmp.mp3'
    subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-f', 'f32le', '-ar', str(sr), '-ac', '1', '-i', '-',
                    '-af', 'silenceremove=start_periods=1:start_threshold=-50dB,areverse,silenceremove=start_periods=1:start_threshold=-50dB,areverse,apad=pad_dur=0.08',
                    '-b:a', '40k', tmp], input=a.astype('float32').tobytes(), check=True)
    os.replace(tmp, path)
items = json.load(open(ITEMS))
for i, it in enumerate(items):
    t = it['text'].strip()
    say = t[0].upper() + t[1:] + ('' if t[-1] in '.!?' else '.')
    for g in 'fm':
        a, sr = K.create(say, voice=VOICE[g], speed=0.85, lang='en-us')
        write_mp3(a, sr, os.path.join(SITE, 'audio', g, it['key'] + '.mp3'))
    if i % 50 == 0: print(i, '/', len(items), flush=True)
print('XONG', len(items))
