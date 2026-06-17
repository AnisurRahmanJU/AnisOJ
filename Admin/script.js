
/* ════════════════════════════════════════
   CONSTANTS
════════════════════════════════════════ */
const LS_KEY    = 'anisoj_leaderboard_v1';
const LS_Q_KEY  = 'anisoj_questions_v1';
const LS_PW_KEY = 'anisoj_contest_pw_v1';

/* default questions (same as index.html) */
const DEFAULT_QUESTIONS = [
  {id:1,title:"Array Sum",difficulty:"Easy",description:`Write a function <code>arraySum(arr)</code> that takes an array of numbers and returns their sum.`,examples:[{input:"arraySum([1, 2, 3, 4, 5])",output:"15"},{input:"arraySum([-1, 0, 1])",output:"0"},{input:"arraySum([10, 20, 30])",output:"60"}],constraints:["Array length: 1 ≤ n ≤ 1000","Elements: -10⁶ ≤ arr[i] ≤ 10⁶"],testCases:[{input:[[1,2,3,4,5]],expected:15},{input:[[-1,0,1]],expected:0},{input:[[10,20,30]],expected:60},{input:[[0]],expected:0},{input:[[-5,-10,15]],expected:0}],functionName:"arraySum"},
  {id:2,title:"Palindrome Check",difficulty:"Easy",description:`Write a function <code>isPalindrome(str)</code> that returns <code>true</code> if the string is a palindrome (reads the same forwards and backwards), ignoring case. Otherwise return <code>false</code>.`,examples:[{input:'isPalindrome("racecar")',output:"true"},{input:'isPalindrome("Hello")',output:"false"},{input:'isPalindrome("Madam")',output:"true"}],constraints:["String length: 1 ≤ n ≤ 10⁴","Only alphabetic characters"],testCases:[{input:["racecar"],expected:true},{input:["Hello"],expected:false},{input:["Madam"],expected:true},{input:["a"],expected:true},{input:["abba"],expected:true}],functionName:"isPalindrome"},
  {id:3,title:"FizzBuzz Array",difficulty:"Easy",description:`Write a function <code>fizzBuzz(n)</code> that returns an array of strings from 1 to n where:<br>• Multiples of 3 → <code>"Fizz"</code><br>• Multiples of 5 → <code>"Buzz"</code><br>• Multiples of both → <code>"FizzBuzz"</code><br>• Others → number as string`,examples:[{input:"fizzBuzz(5)",output:'["1","2","Fizz","4","Buzz"]'},{input:"fizzBuzz(15)[14]",output:'"FizzBuzz"'}],constraints:["1 ≤ n ≤ 10⁴"],testCases:[{input:[5],expected:["1","2","Fizz","4","Buzz"]},{input:[1],expected:["1"]},{input:[3],expected:["1","2","Fizz"]},{input:[15],expected:["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]},{input:[6],expected:["1","2","Fizz","4","Buzz","Fizz"]}],functionName:"fizzBuzz"},
  {id:4,title:"Fibonacci Sequence",difficulty:"Medium",description:`Write a function <code>fibonacci(n)</code> that returns the <strong>nth Fibonacci number</strong> (0-indexed).<br>Sequence: 0, 1, 1, 2, 3, 5, 8, 13, ...`,examples:[{input:"fibonacci(0)",output:"0"},{input:"fibonacci(6)",output:"8"},{input:"fibonacci(10)",output:"55"}],constraints:["0 ≤ n ≤ 40"],testCases:[{input:[0],expected:0},{input:[1],expected:1},{input:[6],expected:8},{input:[10],expected:55},{input:[15],expected:610}],functionName:"fibonacci"},
  {id:5,title:"Count Vowels",difficulty:"Easy",description:`Write a function <code>countVowels(str)</code> that counts the number of vowels (a,e,i,o,u) in a string. Case-insensitive.`,examples:[{input:'countVowels("Hello World")',output:"3"},{input:'countVowels("rhythm")',output:"0"},{input:'countVowels("AEIOU")',output:"5"}],constraints:["String length: 0 ≤ n ≤ 10⁵"],testCases:[{input:["Hello World"],expected:3},{input:["rhythm"],expected:0},{input:["AEIOU"],expected:5},{input:[""],expected:0},{input:["Programming"],expected:3}],functionName:"countVowels"},
  {id:6,title:"Find Maximum",difficulty:"Easy",description:`Write a function <code>findMax(arr)</code> that finds and returns the maximum value in an array <strong>without using Math.max()</strong> or array sort methods.`,examples:[{input:"findMax([3,1,4,1,5,9,2,6])",output:"9"},{input:"findMax([-5,-1,-3])",output:"-1"},{input:"findMax([42])",output:"42"}],constraints:["Array length: 1 ≤ n ≤ 10⁵","Elements: -10⁹ ≤ arr[i] ≤ 10⁹"],testCases:[{input:[[3,1,4,1,5,9,2,6]],expected:9},{input:[[-5,-1,-3]],expected:-1},{input:[[42]],expected:42},{input:[[0,0,0]],expected:0},{input:[[100,200,150]],expected:200}],functionName:"findMax"},
  {id:7,title:"Reverse Words",difficulty:"Medium",description:`Write a function <code>reverseWords(str)</code> that reverses the order of words in a sentence. Handle leading/trailing spaces.`,examples:[{input:'reverseWords("Hello World")',output:'"World Hello"'},{input:'reverseWords("  the sky is blue  ")',output:'"blue is sky the"'},{input:'reverseWords("JS is fun")',output:'"fun is JS"'}],constraints:["String length: 0 ≤ n ≤ 10⁴"],testCases:[{input:["Hello World"],expected:"World Hello"},{input:["  the sky is blue  "],expected:"blue is sky the"},{input:["JS is fun"],expected:"fun is JS"},{input:["a"],expected:"a"},{input:["one two three"],expected:"three two one"}],functionName:"reverseWords"},
  {id:8,title:"Two Sum",difficulty:"Medium",description:`Write a function <code>twoSum(nums, target)</code> that returns the indices of two numbers adding to <code>target</code>. Return <code>[i, j]</code> where <code>i &lt; j</code>. Exactly one solution exists.`,examples:[{input:"twoSum([2,7,11,15], 9)",output:"[0,1]"},{input:"twoSum([3,2,4], 6)",output:"[1,2]"},{input:"twoSum([3,3], 6)",output:"[0,1]"}],constraints:["2 ≤ nums.length ≤ 10⁴","-10⁹ ≤ nums[i] ≤ 10⁹","Exactly one valid answer"],testCases:[{input:[[2,7,11,15],9],expected:[0,1]},{input:[[3,2,4],6],expected:[1,2]},{input:[[3,3],6],expected:[0,1]},{input:[[1,5,3,7],8],expected:[1,3]},{input:[[0,4,3,0],0],expected:[0,3]}],functionName:"twoSum"},
  {id:9,title:"Flatten Array",difficulty:"Hard",description:`Write a function <code>flattenArray(arr)</code> that deeply flattens a nested array of any depth into a single-level array. <strong>Do not use Array.prototype.flat()</strong>.`,examples:[{input:"flattenArray([1,[2,[3,[4]],5]])",output:"[1,2,3,4,5]"},{input:"flattenArray([[1,2],[3,4]])",output:"[1,2,3,4]"},{input:"flattenArray([1,2,3])",output:"[1,2,3]"}],constraints:["Nesting depth: up to 10 levels","Total elements: up to 10⁴"],testCases:[{input:[[1,[2,[3,[4]],5]]],expected:[1,2,3,4,5]},{input:[[[1,2],[3,4]]],expected:[1,2,3,4]},{input:[[1,2,3]],expected:[1,2,3]},{input:[[[[[5]]]]],expected:[5]},{input:[[1,[2,3],[4,[5,6]]]],expected:[1,2,3,4,5,6]}],functionName:"flattenArray"},
  {id:10,title:"Group Anagrams",difficulty:"Hard",description:`Write a function <code>groupAnagrams(strs)</code> that groups anagrams together. Return an array of groups. Order within groups and between groups does not matter.`,examples:[{input:'groupAnagrams(["eat","tea","tan","ate","nat","bat"])',output:'[["bat"],["nat","tan"],["ate","eat","tea"]]'},{input:'groupAnagrams([""])',output:'[[""]]'},{input:'groupAnagrams(["a"])',output:'[["a"]]'}],constraints:["1 ≤ strs.length ≤ 10⁴","0 ≤ strs[i].length ≤ 100","Lowercase letters only"],testCases:[{input:[["eat","tea","tan","ate","nat","bat"]],expected:[["bat"],["nat","tan"],["ate","eat","tea"]],isGroupAnagram:true},{input:[[""]], expected:[[""]], isGroupAnagram:true},{input:[["a"]],expected:[["a"]],isGroupAnagram:true},{input:[["abc","bca","cab","xyz"]],expected:[["abc","bca","cab"],["xyz"]],isGroupAnagram:true},{input:[["ab","ba","cd","dc","ef"]],expected:[["ab","ba"],["cd","dc"],["ef"]],isGroupAnagram:true}],functionName:"groupAnagrams"},
];

/* ════════════════════════════════════════
   STATE
════════════════════════════════════════ */
let leaderboardData = {};   // {name: {name, results, updatedAt}}
let questions = [];          // active question list
let selectedQIdx = null;     // index in questions array
let confirmCallback = null;

/* ════════════════════════════════════════
   STORAGE HELPERS  (localStorage fallback + JSONBin cloud)
════════════════════════════════════════ */

/* ── localStorage ── */
function lbLoad() {
  try { return JSON.parse(localStorage.getItem(LS_KEY) || '{}'); } catch(e) { return {}; }
}
function lbSave(data) {
  try { localStorage.setItem(LS_KEY, JSON.stringify(data)); } catch(e) {}
  if (bc) bc.postMessage({ type: 'lb_update', data });
}
function qLoad() {
  try { const r = localStorage.getItem(LS_Q_KEY); return r ? JSON.parse(r) : null; } catch(e) { return null; }
}
function qSave(qs) {
  try { localStorage.setItem(LS_Q_KEY, JSON.stringify(qs)); } catch(e) {}
  if (bc) bc.postMessage({ type: 'q_update', data: qs });
}

/* ── JSONBin Cloud Config ── */
const CFG_KEY = 'anisoj_cloud_cfg_v1';

function cfgLoad() {
  try { return JSON.parse(localStorage.getItem(CFG_KEY) || 'null'); } catch(e) { return null; }
}
function cfgSave(cfg) {
  try { localStorage.setItem(CFG_KEY, JSON.stringify(cfg)); } catch(e) {}
}

function isCloudReady() {
  const c = cfgLoad();
  return !!(c && c.apiKey && c.binId);
}

/* ── JSONBin API calls ── */
async function cloudRead() {
  const c = cfgLoad();
  if (!c?.apiKey || !c?.binId) return null;
  try {
    const res = await fetch(`https://api.jsonbin.io/v3/b/${c.binId}/latest`, {
      headers: { 'X-Master-Key': c.apiKey, 'X-Bin-Meta': 'false' }
    });
    if (!res.ok) throw new Error(res.status);
    return await res.json();
  } catch(e) { console.warn('CloudRead error:', e); return null; }
}

async function cloudWrite(data) {
  const c = cfgLoad();
  if (!c?.apiKey || !c?.binId) return false;
  try {
    const res = await fetch(`https://api.jsonbin.io/v3/b/${c.binId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': c.apiKey
      },
      body: JSON.stringify(data)
    });
    return res.ok;
  } catch(e) { console.warn('CloudWrite error:', e); return false; }
}

async function cloudCreateBin(apiKey) {
  const res = await fetch('https://api.jsonbin.io/v3/b', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Master-Key': apiKey,
      'X-Bin-Name': 'AnisOJ-Leaderboard',
      'X-Private': 'false'
    },
    body: JSON.stringify({ leaderboard: {}, questions: [], contestPw: '', createdAt: Date.now() })
  });
  if (!res.ok) throw new Error('HTTP ' + res.status);
  const j = await res.json();
  return j.metadata.id;
}

/* ── Merge cloud + local, cloud wins for other users ── */
function mergeData(cloud, local) {
  const merged = Object.assign({}, local);
  Object.entries(cloud || {}).forEach(([k, v]) => {
    if (!merged[k] || (v.updatedAt || 0) > (merged[k].updatedAt || 0)) {
      merged[k] = v;
    }
  });
  return merged;
}

/* ── Full cloud sync (read → merge → write) ── */
let cloudSyncing = false;
async function cloudSync(force = false) {
  if (cloudSyncing) return;
  if (!isCloudReady()) return;
  cloudSyncing = true;
  updateCloudStatusBadge('syncing');
  try {
    const remote = await cloudRead();
    if (!remote) { updateCloudStatusBadge('error'); return; }

    const localLb = lbLoad();
    const mergedLb = mergeData(remote.leaderboard || {}, localLb);

    /* If local has newer entries, push back to cloud */
    const needPush = JSON.stringify(mergedLb) !== JSON.stringify(remote.leaderboard || {});
    if (needPush || force) {
      const payload = {
        leaderboard: mergedLb,
        questions: remote.questions || [],
        contestPw: remote.contestPw || '',
        updatedAt: Date.now()
      };
      await cloudWrite(payload);
    }

    /* Apply merged data */
    try { localStorage.setItem(LS_KEY, JSON.stringify(mergedLb)); } catch(e) {}
    leaderboardData = mergedLb;
    renderLeaderboard();

    /* Sync questions if cloud has them */
    if (remote.questions && remote.questions.length > 0) {
      try { localStorage.setItem(LS_Q_KEY, JSON.stringify(remote.questions)); } catch(e) {}
    }

    /* Sync contest password */
    if (remote.contestPw !== undefined) {
      try { localStorage.setItem(LS_PW_KEY, remote.contestPw); } catch(e) {}
      renderPwPanel();
    }

    updateCloudStatusBadge('ok');
    const now = new Date().toLocaleTimeString();
    const el = document.getElementById('cloud-last-sync');
    if (el) el.textContent = `Last synced: ${now}`;
  } catch(e) {
    updateCloudStatusBadge('error');
  } finally {
    cloudSyncing = false;
  }
}

/* Push leaderboard + questions + pw to cloud (called after any save) */
async function cloudPush() {
  if (!isCloudReady()) return;
  const payload = {
    leaderboard: lbLoad(),
    questions: qLoad() || [],
    contestPw: pwLoad(),
    updatedAt: Date.now()
  };
  await cloudWrite(payload);
  updateCloudStatusBadge('ok');
  const el = document.getElementById('cloud-last-sync');
  if (el) el.textContent = `Last synced: ${new Date().toLocaleTimeString()}`;
}

function updateCloudStatusBadge(state) {
  const badge = document.getElementById('cloud-status-badge');
  if (!badge) return;
  const map = {
    ok:      ['var(--green-cell)', 'var(--green-bright)', 'var(--green-cell-border)', '<i class="fas fa-circle-check"></i> Connected'],
    syncing: ['var(--bg3)', 'var(--accent)', 'var(--border)', '<i class="fas fa-rotate fa-spin"></i> Syncing...'],
    error:   ['var(--red-cell)', 'var(--red-bright)', 'var(--red-cell-border)', '<i class="fas fa-triangle-exclamation"></i> Error'],
    off:     ['var(--red-cell)', 'var(--red-bright)', 'var(--red-cell-border)', '<i class="fas fa-circle-xmark"></i> Not Connected'],
  };
  const [bg, color, border, html] = map[state] || map.off;
  badge.style.background = bg;
  badge.style.color = color;
  badge.style.border = `1px solid ${border}`;
  badge.innerHTML = html;
}

/* Also update sync status badge in header leaderboard panel */
function updateSyncBar() {
  const bar = document.querySelector('.sync-bar');
  if (!bar) return;
  if (isCloudReady()) {
    bar.innerHTML = '<div class="sync-dot"></div> ☁ Cloud sync active — data visible on all devices';
  } else {
    bar.innerHTML = '<div class="sync-dot" style="background:var(--yellow);"></div> localStorage only — <a href="#" onclick="document.querySelector(\'[data-tab=setup]\').click();return false;" style="color:var(--accent);">Setup Cloud Sync</a>';
  }
}

/* ── Cloud Setup UI handlers ── */
function toggleCfgEye(inputId, iconId) {
  const inp = document.getElementById(inputId);
  const ico = document.getElementById(iconId);
  if (!inp) return;
  inp.type = inp.type === 'password' ? 'text' : 'password';
  ico.className = inp.type === 'password' ? 'fas fa-eye' : 'fas fa-eye-slash';
}

function loadCfgToForm() {
  const c = cfgLoad();
  if (c) {
    document.getElementById('cfg-apikey').value = c.apiKey || '';
    document.getElementById('cfg-binid').value  = c.binId  || '';
  }
  updateCloudStatusBadge(isCloudReady() ? 'ok' : 'off');
}

document.getElementById('btn-create-bin').onclick = async () => {
  const key = document.getElementById('cfg-apikey').value.trim();
  if (!key) return toast('API Key দিন আগে', 'error');
  const btn = document.getElementById('btn-create-bin');
  btn.disabled = true; btn.innerHTML = '<i class="fas fa-rotate fa-spin"></i> Creating...';
  try {
    const binId = await cloudCreateBin(key);
    document.getElementById('cfg-binid').value = binId;
    cfgSave({ apiKey: key, binId });
    updateCloudStatusBadge('ok');
    updateSyncBar();
    toast('Bin তৈরি হয়েছে! Bin ID সেভ হয়েছে।', 'success');
    await cloudPush();
  } catch(e) {
    toast('Error: ' + e.message + ' — API Key ঠিক আছে?', 'error');
    updateCloudStatusBadge('error');
  }
  btn.disabled = false; btn.innerHTML = '<i class="fas fa-plus-circle"></i> Create New Bin';
};

document.getElementById('btn-save-cfg').onclick = async () => {
  const key   = document.getElementById('cfg-apikey').value.trim();
  const binId = document.getElementById('cfg-binid').value.trim();
  if (!key)   return toast('API Key দিন', 'error');
  if (!binId) return toast('Bin ID দিন, অথবা Create New Bin করুন', 'error');
  cfgSave({ apiKey: key, binId });
  updateCloudStatusBadge('syncing');
  updateSyncBar();
  toast('Config সেভ হয়েছে। Sync করছি...', 'info');
  await cloudSync(true);
};

document.getElementById('btn-test-cfg').onclick = async () => {
  const btn = document.getElementById('btn-test-cfg');
  btn.disabled = true; btn.innerHTML = '<i class="fas fa-rotate fa-spin"></i> Testing...';
  const data = await cloudRead();
  if (data !== null) {
    toast('সংযোগ সফল! Cloud ডেটা পাওয়া গেছে।', 'success');
    updateCloudStatusBadge('ok');
  } else {
    toast('সংযোগ ব্যর্থ। API Key বা Bin ID চেক করুন।', 'error');
    updateCloudStatusBadge('error');
  }
  btn.disabled = false; btn.innerHTML = '<i class="fas fa-wifi"></i> Test Connection';
};

document.getElementById('btn-clear-cfg').onclick = () => {
  confirm('Cloud Config মুছবেন?', 'API Key ও Bin ID মুছে যাবে। localStorage তে ডেটা থাকবে।', 'Clear', () => {
    localStorage.removeItem(CFG_KEY);
    document.getElementById('cfg-apikey').value = '';
    document.getElementById('cfg-binid').value = '';
    updateCloudStatusBadge('off');
    updateSyncBar();
    toast('Cloud config মুছা হয়েছে।', 'success');
  });
};

/* BroadcastChannel — live sync across tabs */
const bc = (typeof BroadcastChannel !== 'undefined') ? new BroadcastChannel('anisoj_lb') : null;
if (bc) {
  bc.onmessage = (e) => {
    if (e.data?.type === 'lb_update') { leaderboardData = e.data.data; renderLeaderboard(); }
    if (e.data?.type === 'q_update')  { questions = e.data.data; renderQList(); updateQBadge(); }
    if (e.data?.type === 'pw_update') { renderPwPanel(); }
  };
}

/* Poll every 5s — cloud sync if ready, else localStorage */
setInterval(async () => {
  if (isCloudReady()) {
    await cloudSync();
  } else {
    leaderboardData = lbLoad();
    renderLeaderboard();
  }
}, 5000);

/* ════════════════════════════════════════
   THEME
════════════════════════════════════════ */
function setTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  document.getElementById('theme-icon').className = t === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
  localStorage.setItem('anisoj-theme', t);
}
document.getElementById('theme-btn').onclick = () => {
  const cur = document.documentElement.getAttribute('data-theme');
  setTheme(cur === 'dark' ? 'light' : 'dark');
};
const savedTheme = localStorage.getItem('anisoj-theme');
if (savedTheme) setTheme(savedTheme);

/* ════════════════════════════════════════
   TAB NAVIGATION
════════════════════════════════════════ */
document.querySelectorAll('.tab-nav-btn').forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll('.tab-nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  };
});

/* ════════════════════════════════════════
   TOAST
════════════════════════════════════════ */
function toast(msg, type = 'info') {
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  const icons = { success: 'check-circle', error: 'times-circle', info: 'info-circle' };
  t.innerHTML = `<i class="fas fa-${icons[type] || 'info-circle'}"></i>${msg}`;
  document.getElementById('toast-container').appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

/* ════════════════════════════════════════
   CONFIRM DIALOG
════════════════════════════════════════ */
function confirm(title, msg, okLabel, cb) {
  document.getElementById('confirm-title').textContent = title;
  document.getElementById('confirm-msg').textContent = msg;
  document.getElementById('confirm-ok').textContent = okLabel || 'Confirm';
  confirmCallback = cb;
  document.getElementById('confirm-overlay').classList.add('open');
}
document.getElementById('confirm-cancel').onclick = () => {
  document.getElementById('confirm-overlay').classList.remove('open');
  confirmCallback = null;
};
document.getElementById('confirm-ok').onclick = () => {
  document.getElementById('confirm-overlay').classList.remove('open');
  if (confirmCallback) confirmCallback();
  confirmCallback = null;
};

/* ════════════════════════════════════════
   LEADERBOARD RENDERING
════════════════════════════════════════ */
function getTimeClass(seconds) {
  if (seconds < 1800) return 't4';
  if (seconds < 3600) return 't3';
  if (seconds < 5400) return 't2';
  return 't1';
}

function renderLeaderboard() {
  const users = Object.values(leaderboardData);
  users.sort((a, b) => {
    const sa = Object.values(a.results || {}).filter(r => r?.status === 'ac').length;
    const sb = Object.values(b.results || {}).filter(r => r?.status === 'ac').length;
    if (sb !== sa) return sb - sa;
    const ta = Object.values(a.results || {}).filter(r => r?.status === 'ac').reduce((s, r) => s + r.time, 0);
    const tb = Object.values(b.results || {}).filter(r => r?.status === 'ac').reduce((s, r) => s + r.time, 0);
    return ta - tb;
  });

  const totalQ = questions.length || 10;

  /* Stats */
  const totalSolves = users.reduce((s, u) => s + Object.values(u.results || {}).filter(r => r?.status === 'ac').length, 0);
  const totalWrong  = users.reduce((s, u) => s + Object.values(u.results || {}).filter(r => r?.status === 'wa').length, 0);
  document.getElementById('stat-participants').textContent = users.length;
  document.getElementById('stat-solves').textContent = totalSolves;
  document.getElementById('stat-wrong').textContent = totalWrong;
  document.getElementById('stat-top').textContent = users.length ? users[0].name : '—';
  document.getElementById('lb-count-badge').textContent = users.length;

  /* Header row */
  let hdr = `<tr><th>Rank</th><th style="text-align:left">User</th>`;
  for (let i = 1; i <= totalQ; i++) {
    const q = questions[i - 1];
    hdr += `<th title="${q ? q.title : 'Q' + i}">Q${i}</th>`;
  }
  hdr += `<th>Score</th><th>Actions</th></tr>`;
  document.getElementById('lb-thead').innerHTML = hdr;

  /* Rows */
  const rows = users.map((u, idx) => {
    const rank = idx + 1;
    const rankBadge = `<span class="rank-badge${rank <= 3 ? ' rank-' + rank : ''}">${rank}</span>`;
    let cells = '';
    for (let i = 1; i <= totalQ; i++) {
      const r = u.results?.[i] ?? u.results?.[String(i)];
      if (!r) {
        cells += `<td><span class="lb-cell">—</span></td>`;
      } else if (r.status === 'ac') {
        const tc = getTimeClass(r.time);
        const mins = Math.floor(r.time / 60);
        cells += `<td title="${mins}m solved"><span class="lb-cell correct ${tc}">✓</span></td>`;
      } else {
        cells += `<td title="${r.attempts} attempt(s)"><span class="lb-cell wrong">✗</span></td>`;
      }
    }
    const score = Object.values(u.results || {}).filter(r => r?.status === 'ac').length;
    return `<tr>
      <td><span class="rank-badge${rank<=3?' rank-'+rank:''}">${rank}</span></td>
      <td><span class="user-name">${escHtml(u.name)}</span></td>
      ${cells}
      <td><span class="score-badge">${score}/${totalQ}</span></td>
      <td>
        <button class="btn btn-danger btn-sm" onclick="deleteUser('${escHtml(u.name)}')">
          <i class="fas fa-trash"></i> Delete
        </button>
      </td>
    </tr>`;
  });

  document.getElementById('lb-tbody').innerHTML = rows.length
    ? rows.join('')
    : `<tr><td colspan="${totalQ + 4}" style="padding:30px;text-align:center;color:var(--text3);">
        <i class="fas fa-users-slash" style="margin-right:8px;"></i>No participants yet
      </td></tr>`;
}

function escHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ════════════════════════════════════════
   DELETE USER
════════════════════════════════════════ */
function deleteUser(name) {
  confirm(
    'Delete User',
    `Remove "${name}" from the leaderboard? This cannot be undone. index.html will no longer show this user.`,
    'Delete User',
    () => {
      const data = lbLoad();
      delete data[name];
      lbSave(data);
      leaderboardData = data;
      renderLeaderboard();
      toast(`User "${name}" deleted from leaderboard.`, 'success');
    }
  );
}

/* CLEAR ALL */
document.getElementById('btn-clear-all').onclick = () => {
  confirm(
    'Clear All Leaderboard Data',
    'This will permanently delete ALL user data from the leaderboard. index.html will show an empty board. This cannot be undone.',
    'Clear Everything',
    () => {
      lbSave({});
      leaderboardData = {};
      renderLeaderboard();
      toast('All leaderboard data cleared.', 'success');
    }
  );
};

/* REFRESH */
document.getElementById('btn-refresh').onclick = () => {
  leaderboardData = lbLoad();
  renderLeaderboard();
  toast('Leaderboard refreshed.', 'info');
};

/* ════════════════════════════════════════
   QUESTIONS
════════════════════════════════════════ */
function loadQuestions() {
  const stored = qLoad();
  questions = stored ? stored : JSON.parse(JSON.stringify(DEFAULT_QUESTIONS));
}

function updateQBadge() {
  document.getElementById('q-count-badge').textContent = questions.length;
}

function renderQList() {
  const list = document.getElementById('q-list-admin');
  list.innerHTML = '';
  questions.forEach((q, idx) => {
    const item = document.createElement('div');
    item.className = 'q-admin-item' + (selectedQIdx === idx ? ' selected' : '');
    item.innerHTML = `
      <div class="q-num-badge">${idx + 1}</div>
      <span class="q-admin-title">${escHtml(q.title)}</span>
      <span class="diff-badge diff-${q.difficulty}">${q.difficulty}</span>
    `;
    item.onclick = () => selectQuestion(idx);
    list.appendChild(item);
  });
}

function selectQuestion(idx) {
  selectedQIdx = idx;
  renderQList();
  renderQEditor(questions[idx]);
  document.getElementById('q-editor-actions').style.display = 'flex';
}

function renderQEditor(q) {
  const wrap = document.getElementById('q-editor-wrap');

  // Build test case HTML
  let tcHtml = '';
  (q.testCases || []).forEach((tc, i) => {
    tcHtml += `
    <div class="tc-item" id="tc-item-${i}">
      <div class="tc-num">${i+1}</div>
      <div class="tc-fields">
        <div class="tc-label">Input (JSON array of args)</div>
        <input class="tc-input" id="tc-input-${i}" value="${escAttr(JSON.stringify(tc.input))}" placeholder='e.g. [[1,2,3]]'/>
        <div class="tc-label" style="margin-top:4px;">Expected Output (JSON)</div>
        <input class="tc-input" id="tc-expected-${i}" value="${escAttr(JSON.stringify(tc.expected))}" placeholder='e.g. 6'/>
        ${tc.isGroupAnagram ? `<div class="tc-label" style="color:var(--yellow);margin-top:4px;"><i class="fas fa-triangle-exclamation"></i> Group Anagram Mode</div>` : ''}
      </div>
      <button class="tc-remove" onclick="removeTc(${i})" title="Remove test case"><i class="fas fa-xmark"></i></button>
    </div>`;
  });

  let exHtml = '';
  (q.examples || []).forEach((ex, i) => {
    exHtml += `
    <div class="tc-item" id="ex-item-${i}">
      <div class="tc-num">${i+1}</div>
      <div class="tc-fields">
        <div class="tc-label">Input</div>
        <input class="tc-input" id="ex-input-${i}" value="${escAttr(ex.input)}" placeholder='e.g. arraySum([1,2,3])'/>
        <div class="tc-label" style="margin-top:4px;">Output</div>
        <input class="tc-input" id="ex-output-${i}" value="${escAttr(ex.output)}" placeholder='e.g. 6'/>
      </div>
      <button class="tc-remove" onclick="removeEx(${i})" title="Remove example"><i class="fas fa-xmark"></i></button>
    </div>`;
  });

  wrap.innerHTML = `
  <div class="form-wrap">
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Question Title</label>
        <input class="form-input" id="qe-title" value="${escAttr(q.title)}" placeholder="e.g. Array Sum"/>
      </div>
      <div class="form-group">
        <label class="form-label">Difficulty</label>
        <select class="form-select" id="qe-diff">
          <option value="Easy" ${q.difficulty==='Easy'?'selected':''}>Easy</option>
          <option value="Medium" ${q.difficulty==='Medium'?'selected':''}>Medium</option>
          <option value="Hard" ${q.difficulty==='Hard'?'selected':''}>Hard</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Function Name</label>
      <input class="form-input" id="qe-fn" value="${escAttr(q.functionName)}" placeholder="e.g. arraySum"/>
    </div>
    <div class="form-group">
      <label class="form-label">Description (HTML allowed)</label>
      <textarea class="form-textarea" id="qe-desc" style="min-height:100px;">${escHtml(q.description)}</textarea>
    </div>
    <div class="form-group">
      <label class="form-label">Constraints (one per line)</label>
      <textarea class="form-textarea" id="qe-constraints" style="min-height:60px;">${(q.constraints||[]).join('\n')}</textarea>
    </div>

    <div class="form-group">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
        <label class="form-label" style="margin:0;">Examples</label>
        <button class="btn btn-ghost btn-sm" onclick="addExample()"><i class="fas fa-plus"></i> Add Example</button>
      </div>
      <div class="tc-editor" id="ex-editor">${exHtml}</div>
    </div>

    <div class="form-group">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
        <label class="form-label" style="margin:0;">Test Cases (hidden from users)</label>
        <button class="btn btn-ghost btn-sm" onclick="addTc()"><i class="fas fa-plus"></i> Add Test Case</button>
      </div>
      <div class="tc-editor" id="tc-editor">${tcHtml}</div>
    </div>
  </div>`;
}

function escAttr(s) {
  return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

/* ADD / REMOVE test cases */
function addTc() {
  if (selectedQIdx === null) return;
  const q = questions[selectedQIdx];
  q.testCases = q.testCases || [];
  q.testCases.push({ input: [], expected: null });
  renderQEditor(q);
}
function removeTc(idx) {
  if (selectedQIdx === null) return;
  const q = questions[selectedQIdx];
  q.testCases.splice(idx, 1);
  // collect current form values first
  collectFormToQ();
  renderQEditor(questions[selectedQIdx]);
}
function addExample() {
  if (selectedQIdx === null) return;
  const q = questions[selectedQIdx];
  q.examples = q.examples || [];
  q.examples.push({ input: '', output: '' });
  renderQEditor(q);
}
function removeEx(idx) {
  if (selectedQIdx === null) return;
  collectFormToQ();
  questions[selectedQIdx].examples.splice(idx, 1);
  renderQEditor(questions[selectedQIdx]);
}

/* Read form back into questions[selectedQIdx] */
function collectFormToQ() {
  if (selectedQIdx === null) return;
  const q = questions[selectedQIdx];
  q.title       = document.getElementById('qe-title')?.value.trim() || q.title;
  q.difficulty  = document.getElementById('qe-diff')?.value || q.difficulty;
  q.functionName= document.getElementById('qe-fn')?.value.trim() || q.functionName;
  q.description = document.getElementById('qe-desc')?.value || q.description;
  q.constraints = (document.getElementById('qe-constraints')?.value || '').split('\n').filter(s => s.trim());

  // examples
  const exEditor = document.getElementById('ex-editor');
  if (exEditor) {
    const exItems = exEditor.querySelectorAll('.tc-item');
    q.examples = Array.from(exItems).map((_, i) => ({
      input:  document.getElementById(`ex-input-${i}`)?.value || '',
      output: document.getElementById(`ex-output-${i}`)?.value || '',
    }));
  }

  // test cases
  const tcEditor = document.getElementById('tc-editor');
  if (tcEditor) {
    const tcItems = tcEditor.querySelectorAll('.tc-item');
    q.testCases = Array.from(tcItems).map((_, i) => {
      let inp, exp;
      try { inp = JSON.parse(document.getElementById(`tc-input-${i}`)?.value || '[]'); } catch(e) { inp = []; }
      try { exp = JSON.parse(document.getElementById(`tc-expected-${i}`)?.value ?? 'null'); } catch(e) { exp = null; }
      return { input: inp, expected: exp };
    });
  }
}

/* SAVE question */
document.getElementById('btn-save-q').onclick = () => {
  if (selectedQIdx === null) return;
  collectFormToQ();
  qSave(questions);
  renderQList();
  updateQBadge();
  toast('Question saved! index.html will pick up changes.', 'success');
};

/* DELETE question */
document.getElementById('btn-delete-q').onclick = () => {
  if (selectedQIdx === null) return;
  const q = questions[selectedQIdx];
  confirm(
    'Delete Question',
    `Delete "${q.title}"? This will remove it from the contest in index.html.`,
    'Delete Question',
    () => {
      questions.splice(selectedQIdx, 1);
      // re-number IDs
      questions.forEach((q, i) => { q.id = i + 1; });
      qSave(questions);
      selectedQIdx = null;
      renderQList();
      updateQBadge();
      document.getElementById('q-editor-wrap').innerHTML = `<div class="empty-state"><i class="fas fa-pen-to-square"></i><p>Question deleted. Select another or add new.</p></div>`;
      document.getElementById('q-editor-actions').style.display = 'none';
      toast('Question deleted.', 'success');
    }
  );
};

/* ADD NEW question */
document.getElementById('btn-add-q').onclick = () => {
  const newQ = {
    id: questions.length + 1,
    title: 'New Question',
    difficulty: 'Easy',
    functionName: 'solve',
    description: 'Write a function <code>solve()</code> that...',
    examples: [{ input: 'solve()', output: 'result' }],
    constraints: ['1 ≤ n ≤ 100'],
    testCases: [{ input: [], expected: null }],
  };
  questions.push(newQ);
  selectedQIdx = questions.length - 1;
  qSave(questions);
  renderQList();
  updateQBadge();
  renderQEditor(newQ);
  document.getElementById('q-editor-actions').style.display = 'flex';
  toast('New question created. Fill in the details and save.', 'info');
};

/* ════════════════════════════════════════
   CONTEST PASSWORD
════════════════════════════════════════ */
function pwLoad() {
  try { return localStorage.getItem(LS_PW_KEY) || ''; } catch(e) { return ''; }
}
function pwSave(pw) {
  try {
    if (pw) localStorage.setItem(LS_PW_KEY, pw);
    else localStorage.removeItem(LS_PW_KEY);
  } catch(e) {}
  if (bc) bc.postMessage({ type: 'pw_update', data: pw });
}

function renderPwPanel() {
  const pw = pwLoad();
  const badge   = document.getElementById('pw-status-badge');
  const wrap    = document.getElementById('pw-current-wrap');
  const display = document.getElementById('pw-display');
  const label   = document.getElementById('pw-set-label');

  if (pw) {
    badge.innerHTML  = '<i class="fas fa-circle-check"></i> Active';
    badge.style.background = 'var(--green-cell)';
    badge.style.color      = 'var(--green-bright)';
    badge.style.border     = '1px solid var(--green-cell-border)';
    display.textContent    = pw;
    wrap.style.display     = 'block';
    label.textContent      = 'Change Password';
  } else {
    badge.innerHTML  = '<i class="fas fa-circle-xmark"></i> Not Set';
    badge.style.background = 'var(--red-cell)';
    badge.style.color      = 'var(--red-bright)';
    badge.style.border     = '1px solid var(--red-cell-border)';
    wrap.style.display     = 'none';
    label.textContent      = 'Set Contest Password';
  }
}

/* Save password */
document.getElementById('btn-set-pw').onclick = () => {
  const val = document.getElementById('pw-input').value.trim();
  if (!val) return toast('Enter a password first.', 'error');
  if (val.length < 3) return toast('Password must be at least 3 characters.', 'error');
  pwSave(val);
  document.getElementById('pw-input').value = '';
  renderPwPanel();
  toast('Contest password saved! Participants can now join with it.', 'success');
};

/* Enter key on input */
document.getElementById('pw-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('btn-set-pw').click();
});

/* Toggle show/hide */
document.getElementById('btn-pw-toggle').onclick = () => {
  const inp  = document.getElementById('pw-input');
  const icon = document.getElementById('pw-eye-icon');
  if (inp.type === 'password') {
    inp.type = 'text';
    icon.className = 'fas fa-eye-slash';
  } else {
    inp.type = 'password';
    icon.className = 'fas fa-eye';
  }
};

/* Generate random password */
document.getElementById('btn-gen-pw').onclick = () => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#';
  let pw = '';
  for (let i = 0; i < 8; i++) pw += chars[Math.floor(Math.random() * chars.length)];
  const inp = document.getElementById('pw-input');
  inp.value = pw;
  inp.type  = 'text';
  document.getElementById('pw-eye-icon').className = 'fas fa-eye-slash';
  toast('Random password generated — click Save to apply.', 'info');
};

/* Remove password */
document.getElementById('btn-remove-pw').onclick = () => {
  const cur = pwLoad();
  if (!cur) return toast('No password is currently set.', 'info');
  confirm(
    'Remove Contest Password',
    'This will allow anyone to join the contest without a password. Are you sure?',
    'Remove Password',
    () => {
      pwSave('');
      renderPwPanel();
      toast('Contest password removed. Contest is now open to all.', 'success');
    }
  );
};

/* Copy password to clipboard */
document.getElementById('btn-copy-pw').onclick = () => {
  const pw = pwLoad();
  if (!pw) return;
  navigator.clipboard.writeText(pw).then(() => {
    toast('Password copied to clipboard!', 'success');
  }).catch(() => {
    /* fallback */
    const el = document.createElement('textarea');
    el.value = pw;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    el.remove();
    toast('Password copied!', 'success');
  });
};

/* ════════════════════════════════════════
   INIT
════════════════════════════════════════ */
loadQuestions();
leaderboardData = lbLoad();
renderLeaderboard();
renderQList();
updateQBadge();
renderPwPanel();
loadCfgToForm();
updateSyncBar();
/* Initial cloud pull */
if (isCloudReady()) cloudSync(false);
