const { test } = require('node:test');
const assert = require('node:assert/strict');
const { read, load } = require('./helpers');

// 入力欄と結果欄だけを持つ最小の document で calculate() を動かす
function page(pages, thickness = '0.11') {
  const els = {
    pageInput: { value: pages },
    thicknessInput: { value: thickness },
    results: { innerHTML: '' },
  };
  const api = load({
    functions: ['normalizeNumber', 'spineWidth', 'calculate'],
    globals: { document: { getElementById: (id) => els[id] } },
  });
  api.calculate();
  return { ...api, html: els.results.innerHTML, text: els.results.innerHTML.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ') };
}

test('背幅 = ページ数 ÷ 2 × 紙厚 + 0.8mm（README の計算式）', () => {
  const { spineWidth } = page('');
  assert.equal(spineWidth(160, 0.11).toFixed(2), '9.60');
  assert.equal(spineWidth(200, 0.09).toFixed(2), '9.80');
  assert.equal(spineWidth(16, 0.15).toFixed(2), '2.00');
});

test('全角数字を半角に正規化する', () => {
  const { normalizeNumber } = page('');
  assert.equal(normalizeNumber('１６０'), '160');
});

test('16・8 ページ刻みで前後の案と「近い」を示す', () => {
  const { text } = page('150');
  assert.match(text, /16ページ単位.*案A: 144ページ \(9台\) 近い 6ページ減らす.*案B: 160ページ \(10台\) 10ページ増やす/);
  assert.match(text, /8ページ単位.*案A: 144ページ \(18台\) 6ページ減らす.*案B: 152ページ \(19台\) 近い 2ページ増やす/);
});

test('ちょうど割り切れるときはそのまま示す', () => {
  const { text } = page('160');
  assert.match(text, /ちょうど 160ページ \(10台\)/);
  assert.match(text, /約 9\.60 mm/);
});

test('全角入力でも計算する', () => {
  assert.match(page('１６０').text, /ちょうど 160ページ/);
});

test('0 ページ案は出さない（8 ページ未満の入力）', () => {
  const { text } = page('5');
  assert.doesNotMatch(text, /案A: 0ページ/);
  assert.match(text, /案B: 16ページ/);
});

test('不正な入力はエラー、空欄は何も表示しない', () => {
  for (const bad of ['abc', '0', '-16', '1.5']) {
    assert.match(page(bad).text, /正の整数を入力してください/, bad);
  }
  assert.equal(page('').html, '');
});

test('外部送信するコードがない', () => {
  assert.doesNotMatch(read('index.html'), /\bfetch\(|sendBeacon|XMLHttpRequest|WebSocket/);
});
