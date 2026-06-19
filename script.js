<!-- QUESTIONS DATA -->

const QUESTIONS = [
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


<!-- MAIN SCRIPT -->
/* ══════════════════════════════════════════════════
   STATE
══════════════════════════════════════════════════ */
const STATE = {
  currentQ: null,
  theme: 'dark',
  editor: null,
  timerInterval: null,
  totalSeconds: 7200,
  secondsLeft: 7200,
  contestEnded: false,
  username: '',
  results: {}, // {qId: {status:'ac'|'wa', time:secondsElapsed, attempts:n}}
  leaderboard: [], // [{name, results:{qId:{status,time}}}]
  consoleLog: [],
};

/* ══════════════════════════════════════════════════
   CODEMIRROR INIT
══════════════════════════════════════════════════ */
const editor = CodeMirror.fromTextArea(document.getElementById('code-editor'), {
  mode: 'javascript',
  theme: 'dracula',
  lineNumbers: true,
  autoCloseBrackets: true,
  matchBrackets: true,
  styleActiveLine: true,
  indentUnit: 2,
  tabSize: 2,
  extraKeys: {
    'Ctrl-Enter': () => submitCode(),
    'Ctrl-/': (cm) => cm.execCommand('toggleComment'),
    Tab: (cm) => cm.replaceSelection('  '),
  },
});
STATE.editor = editor;

/* Defer setSize until DOM layout is complete */
requestAnimationFrame(() => {
  editor.setSize('100%', 300);
  editor.refresh();
});

/* ══════════════════════════════════════════════════
   EDITOR VERTICAL RESIZE (height)
══════════════════════════════════════════════════ */
(function(){
  const editorResizer = document.getElementById('editor-resizer');
  const editorWrap    = document.getElementById('editor-wrap');
  let isResizingV = false, startY = 0, startH = 0;

  editorResizer.addEventListener('mousedown', e => {
    if (window.innerWidth <= 768) return;
    isResizingV = true;
    startY = e.clientY;
    startH = editorWrap.offsetHeight;
    editorResizer.classList.add('dragging');
    document.body.style.cursor = 'row-resize';
    document.body.style.userSelect = 'none';
    e.preventDefault();
  });
  document.addEventListener('mousemove', e => {
    if (!isResizingV) return;
    const newH = Math.max(120, Math.min(700, startH + (e.clientY - startY)));
    editorWrap.style.height = newH + 'px';
    editor.setSize('100%', newH);
  });
  document.addEventListener('mouseup', () => {
    if (isResizingV) {
      isResizingV = false;
      editorResizer.classList.remove('dragging');
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }
  });
})();

/* ══════════════════════════════════════════════════
   EDITOR HORIZONTAL RESIZE (column width)
══════════════════════════════════════════════════ */
(function(){
  const hResizer = document.getElementById('col-editor-resizer');
  const colEditor = document.getElementById('col-editor');
  let isResizingH = false, startX = 0, startW = 0;

  hResizer.addEventListener('mousedown', e => {
    if (window.innerWidth <= 768) return;
    isResizingH = true;
    startX = e.clientX;
    startW = colEditor.offsetWidth;
    hResizer.classList.add('dragging');
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
    e.preventDefault();
  });
  document.addEventListener('mousemove', e => {
    if (!isResizingH) return;
    const newW = Math.max(280, Math.min(800, startW + (e.clientX - startX)));
    colEditor.style.width    = newW + 'px';
    colEditor.style.minWidth = newW + 'px';
    colEditor.style.maxWidth = newW + 'px';
    editor.setSize('100%', editor.getScrollInfo().clientHeight);
  });
  document.addEventListener('mouseup', () => {
    if (isResizingH) {
      isResizingH = false;
      hResizer.classList.remove('dragging');
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      editor.refresh();
    }
  });
})();

/* ══════════════════════════════════════════════════
   THEME
══════════════════════════════════════════════════ */
function setTheme(t) {
  STATE.theme = t;
  document.documentElement.setAttribute('data-theme', t);
  const icon = document.getElementById('theme-icon');
  icon.className = t === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
  editor.setOption('theme', t === 'dark' ? 'dracula' : 'eclipse');
  localStorage.setItem('anisoj-theme', t);
}
document.getElementById('theme-btn').onclick = () =>
  setTheme(STATE.theme === 'dark' ? 'light' : 'dark');
const savedTheme = localStorage.getItem('anisoj-theme');
if (savedTheme) setTheme(savedTheme);

/* ══════════════════════════════════════════════════
   TIMER
══════════════════════════════════════════════════ */
function formatTime(s) {
  const h = Math.floor(s/3600), m = Math.floor((s%3600)/60), ss = s%60;
  return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(ss).padStart(2,'0')}`;
}
function startTimer() {
  const timerEl = document.getElementById('timer');
  STATE.timerInterval = setInterval(() => {
    STATE.secondsLeft--;
    timerEl.textContent = formatTime(STATE.secondsLeft);
    if (STATE.secondsLeft <= 300 && STATE.secondsLeft > 60) timerEl.className = 'warning';
    else if (STATE.secondsLeft <= 60) timerEl.className = 'danger';
    if (STATE.secondsLeft <= 0) endContest();
  }, 1000);
}
function endContest() {
  clearInterval(STATE.timerInterval);
  STATE.contestEnded = true;
  document.getElementById('btn-submit').disabled = true;
  // show modal
  const solved = Object.values(STATE.results).filter(r=>r.status==='ac').length;
  document.getElementById('final-solved').textContent = solved;
  document.getElementById('final-score').textContent = `${solved}/10`;
  const elapsed = STATE.totalSeconds - STATE.secondsLeft;
  document.getElementById('final-time').textContent = formatTime(elapsed);
  document.getElementById('time-up-modal').classList.add('open');
}
startTimer();

/* ══════════════════════════════════════════════════
   QUESTION LIST
══════════════════════════════════════════════════ */
function renderQuestionList() {
  const list = document.getElementById('q-list');
  list.innerHTML = '';
  QUESTIONS.forEach(q => {
    const res = STATE.results[q.id];
    const item = document.createElement('div');
    item.className = 'q-item' +
      (STATE.currentQ?.id===q.id?' active':'') +
      (res?.status==='ac'?' solved':'') +
      (res?.status==='wa'?' wrong':'');
    item.dataset.qid = q.id;

    let statusHtml = '';
    if (res?.status === 'ac') {
      const mins = Math.floor(res.time/60);
      statusHtml = `<div class="q-status ok"><i class="fas fa-check-circle"></i> Accepted · ${mins}m elapsed</div>`;
    } else if (res?.status === 'wa') {
      statusHtml = `<div class="q-status fail"><i class="fas fa-times-circle"></i> Wrong Answer (${res.attempts} tries)</div>`;
    }

    item.innerHTML = `
      <div class="q-item-top">
        <div class="q-num">${q.id}</div>
        <span class="q-name">${q.title}</span>
        <span class="q-badge badge-${q.difficulty.toLowerCase()}">${q.difficulty}</span>
      </div>
      ${statusHtml}
    `;
    item.onclick = () => loadQuestion(q);
    list.appendChild(item);
  });

  const solved = Object.values(STATE.results).filter(r=>r.status==='ac').length;
  document.getElementById('q-progress').textContent = `${solved} / 10`;
  document.getElementById('total-score').textContent = `${solved}/10`;
}

/* ══════════════════════════════════════════════════
   LOAD QUESTION
══════════════════════════════════════════════════ */
const DEFAULT_STARTERS = {
  arraySum: `function arraySum(arr) {\n  // Your code here\n  \n}`,
  isPalindrome: `function isPalindrome(str) {\n  // Your code here\n  \n}`,
  fizzBuzz: `function fizzBuzz(n) {\n  // Your code here\n  \n}`,
  fibonacci: `function fibonacci(n) {\n  // Your code here\n  \n}`,
  countVowels: `function countVowels(str) {\n  // Your code here\n  \n}`,
  findMax: `function findMax(arr) {\n  // Your code here\n  \n}`,
  reverseWords: `function reverseWords(str) {\n  // Your code here\n  \n}`,
  twoSum: `function twoSum(nums, target) {\n  // Your code here\n  \n}`,
  flattenArray: `function flattenArray(arr) {\n  // Your code here\n  \n}`,
  groupAnagrams: `function groupAnagrams(strs) {\n  // Your code here\n  \n}`,
};

function loadQuestion(q) {
  STATE.currentQ = q;
  document.getElementById('q-display-title').textContent = `#${q.id} — ${q.title}`;

  // badge
  const badge = document.getElementById('q-badge-display');
  badge.innerHTML = `<span class="q-badge badge-${q.difficulty.toLowerCase()}">${q.difficulty}</span>`;

  // description
  const desc = document.getElementById('q-description');
  const examplesHtml = q.examples.map(e => `
    <div class="example-box">
      <div class="ex-label">Input</div>
      <div class="ex-in">${e.input}</div>
      <div class="ex-label" style="margin-top:4px;">Output</div>
      <div class="ex-out">${e.output}</div>
    </div>`).join('');
  const constraintsHtml = q.constraints.map(c => `<span class="constraint-chip">${c}</span>`).join('');
  desc.innerHTML = `
    <div style="margin-bottom:8px;">${q.description}</div>
    <h4>EXAMPLES</h4>
    <div class="examples-row">${examplesHtml}</div>
    <h4 style="margin-top:10px;">CONSTRAINTS</h4>
    <div class="constraints-list">${constraintsHtml}</div>
  `;

  // load saved or default code
  const savedCode = localStorage.getItem(`anisoj-code-${q.id}`);
  editor.setValue(savedCode || DEFAULT_STARTERS[q.functionName] || `function ${q.functionName}() {\n  \n}`);
  editor.clearHistory();
  // Double refresh — immediate + after layout paint
  editor.refresh();
  requestAnimationFrame(() => editor.refresh());

  // output reset
  document.getElementById('output-area').innerHTML = `<div class="empty-state" style="height:80px;"><p>Run or Submit to see results</p></div>`;
  document.getElementById('verdict').textContent = '';
  document.getElementById('verdict').className = '';
  document.getElementById('btn-submit').disabled = STATE.contestEnded;

  renderQuestionList();
}

/* ══════════════════════════════════════════════════
   SAVE CODE ON CHANGE
══════════════════════════════════════════════════ */
editor.on('change', () => {
  if (STATE.currentQ) {
    localStorage.setItem(`anisoj-code-${STATE.currentQ.id}`, editor.getValue());
  }
});

/* ══════════════════════════════════════════════════
   RUN / JUDGE
══════════════════════════════════════════════════ */
function deepEqual(a, b) {
  if (a === b) return true;
  if (typeof a !== typeof b) return false;
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    return a.every((v,i) => deepEqual(v, b[i]));
  }
  if (typeof a === 'object' && a && b) {
    const ka = Object.keys(a).sort(), kb = Object.keys(b).sort();
    return deepEqual(ka,kb) && ka.every(k => deepEqual(a[k],b[k]));
  }
  return false;
}

function groupAnagramEqual(got, expected) {
  if (!Array.isArray(got) || !Array.isArray(expected)) return false;
  if (got.length !== expected.length) return false;
  const sort = arr => arr.map(g => [...g].sort().join(',')).sort().join('|');
  return sort(got) === sort(expected);
}

function runTests(code, q, isSubmit) {
  const logs = [];
  const origLog = console.log;
  console.log = (...args) => { logs.push(args.map(String).join(' ')); };

  let results = [];
  try {
    // eslint-disable-next-line no-new-func
    const fn = new Function(code + `\nreturn ${q.functionName};`)();
    if (typeof fn !== 'function') throw new Error(`${q.functionName} is not a function`);

    const cases = isSubmit ? q.testCases : q.testCases.slice(0, 3);
    results = cases.map((tc, i) => {
      try {
        const args = tc.input.map(a => JSON.parse(JSON.stringify(a)));
        const got = fn(...args);
        let pass;
        if (tc.isGroupAnagram) {
          pass = groupAnagramEqual(got, tc.expected);
        } else {
          pass = deepEqual(got, tc.expected);
        }
        return { pass, input: JSON.stringify(tc.input), got: JSON.stringify(got), expected: JSON.stringify(tc.expected), idx: i+1 };
      } catch(e) {
        return { pass: false, input: JSON.stringify(tc.input), got: 'Error: '+e.message, expected: JSON.stringify(tc.expected), idx: i+1 };
      }
    });
  } catch(e) {
    results = [{ pass: false, input:'—', got:'Compile Error: '+e.message, expected:'—', idx:1 }];
  }

  console.log = origLog;
  STATE.consoleLog = logs;
  return results;
}

function displayResults(results, isSubmit) {
  const area = document.getElementById('output-area');
  area.innerHTML = results.map(r => `
    <div class="result-item ${r.pass?'pass':'fail'}">
      <span class="result-icon"><i class="fas fa-${r.pass?'check':'times'}-circle"></i></span>
      <div class="result-text">
        <strong>Test ${r.idx}:</strong> ${r.pass?'Passed':'Failed'}<br>
        <span style="color:var(--text3);font-size:0.7rem;">
          Input: ${r.input.length>60?r.input.slice(0,60)+'…':r.input} |
          Got: <span style="color:${r.pass?'var(--green-bright)':'var(--red-bright)'}">${String(r.got).slice(0,80)}</span>
          ${!r.pass?`| Expected: <span style="color:var(--yellow)">${String(r.expected).slice(0,80)}</span>`:''}
        </span>
      </div>
    </div>
  `).join('');
}

function runCode() {
  if (!STATE.currentQ) return;
  const results = runTests(editor.getValue(), STATE.currentQ, false);
  displayResults(results, false);
  const allPass = results.every(r=>r.pass);
  const verdictEl = document.getElementById('verdict');
  if (allPass) {
    verdictEl.textContent = '✓ Sample tests passed — try submitting!';
    verdictEl.className = 'ac';
  } else {
    verdictEl.textContent = `✗ ${results.filter(r=>!r.pass).length} test(s) failed`;
    verdictEl.className = 'wa';
  }
}

function submitCode() {
  if (!STATE.currentQ || STATE.contestEnded) return;
  const btn = document.getElementById('btn-submit');
  btn.disabled = true;
  btn.innerHTML = `<span class="spinner"></span> Judging…`;

  setTimeout(() => {
    const results = runTests(editor.getValue(), STATE.currentQ, true);
    displayResults(results, true);
    const allPass = results.every(r=>r.pass);
    const verdictEl = document.getElementById('verdict');
    const elapsed = STATE.totalSeconds - STATE.secondsLeft;
    const qId = STATE.currentQ.id;
    const prev = STATE.results[qId];

    if (allPass) {
      if (!prev || prev.status !== 'ac') {
        STATE.results[qId] = { status: 'ac', time: elapsed, attempts: (prev?.attempts||0)+1 };
        updateLeaderboard();
        toast('✓ Accepted! Great job!', 'success');
      } else {
        toast('Already accepted!', 'info');
      }
      verdictEl.textContent = '✓ Accepted';
      verdictEl.className = 'ac';
    } else {
      const att = (prev?.attempts||0)+1;
      STATE.results[qId] = { status: 'wa', time: elapsed, attempts: att };
      updateLeaderboard();
      verdictEl.textContent = `✗ Wrong Answer (attempt ${att})`;
      verdictEl.className = 'wa';
      toast(`✗ Wrong Answer — keep trying!`, 'error');
    }

    btn.disabled = false;
    btn.innerHTML = `<i class="fas fa-paper-plane"></i> Submit`;
    renderQuestionList();
    renderLeaderboard();
  }, 400);
}

document.getElementById('btn-run').onclick = runCode;
document.getElementById('btn-submit').onclick = submitCode;
document.getElementById('btn-reset').onclick = () => {
  if (!STATE.currentQ) return;
  if (confirm('Reset to starter code?')) {
    editor.setValue(DEFAULT_STARTERS[STATE.currentQ.functionName] || '');
    localStorage.removeItem(`anisoj-code-${STATE.currentQ.id}`);
  }
};

/* output tabs */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    if (btn.dataset.tab === 'console') {
      const area = document.getElementById('output-area');
      area.innerHTML = STATE.consoleLog.length
        ? STATE.consoleLog.map(l=>`<div style="color:var(--text2);padding:2px 0;font-size:0.77rem;">> ${l}</div>`).join('')
        : `<div class="empty-state" style="height:80px;"><p>No console output</p></div>`;
    }
  };
});

/* ══════════════════════════════════════════════════
   LEADERBOARD
══════════════════════════════════════════════════ */
function getTimeClass(seconds) {
  if (seconds < 1800) return 't4'; // < 30min → brightest
  if (seconds < 3600) return 't3'; // < 1h
  if (seconds < 5400) return 't2'; // < 1.5h
  return 't1';
}

function renderLeaderboard() {
  const wrap = document.getElementById('lb-table-wrap');
  const users = STATE.leaderboard;

  // sort by score desc, then by total time asc
  users.sort((a,b) => {
    const sa = Object.values(a.results).filter(r=>r.status==='ac').length;
    const sb = Object.values(b.results).filter(r=>r.status==='ac').length;
    if (sb !== sa) return sb - sa;
    const ta = Object.values(a.results).filter(r=>r.status==='ac').reduce((s,r)=>s+r.time,0);
    const tb = Object.values(b.results).filter(r=>r.status==='ac').reduce((s,r)=>s+r.time,0);
    return ta - tb;
  });

  document.getElementById('lb-participants').textContent = `${users.length} user${users.length!==1?'s':''}`;

  let hdr = `<tr><th>User</th>`;
  for(let i=1;i<=10;i++) hdr += `<th>Q${i}</th>`;
  hdr += `<th>Score</th></tr>`;

  const rows = users.map((u,idx) => {
    const rank = idx+1;
    let rankBadge = `<span class="rank-badge${rank<=3?' rank-'+rank:''}">${rank}</span>`;
    let cells = '';
    for(let i=1;i<=10;i++) {
      const r = u.results[i] ?? u.results[String(i)];
      if (!r) {
        cells += `<td><span class="lb-cell">—</span></td>`;
      } else if (r.status==='ac') {
        const tc = getTimeClass(r.time);
        const mins = Math.floor(r.time/60);
        cells += `<td title="${mins}m"><span class="lb-cell correct ${tc}">✓</span></td>`;
      } else {
        cells += `<td title="${r.attempts} attempts"><span class="lb-cell wrong">✗</span></td>`;
      }
    }
    const score = Object.values(u.results).filter(r=>r?.status==='ac').length;
    return `<tr><td>${rankBadge}${u.name}</td>${cells}<td class="lb-score-col">${score}</td></tr>`;
  });

  wrap.innerHTML = `<table class="lb-table"><thead>${hdr}</thead><tbody>${rows.join('')}</tbody></table>`;
}

/* ══════════════════════════════════════════════════
   LEADERBOARD STORAGE (localStorage + BroadcastChannel)
   — works across tabs instantly
   — works across devices if Firebase config is set
   — no backend needed
══════════════════════════════════════════════════ */
const LS_KEY = 'anisoj_leaderboard_v1';

/* BroadcastChannel: instant sync across tabs on same browser */
const bc = (typeof BroadcastChannel !== 'undefined')
  ? new BroadcastChannel('anisoj_lb')
  : null;

function lbSave(data) {
  try { localStorage.setItem(LS_KEY, JSON.stringify(data)); } catch(e){}
  if (bc) bc.postMessage({ type: 'lb_update', data });
}

function lbLoad() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch(e) { return {}; }
}

/* Listen for updates from other tabs */
if (bc) {
  bc.onmessage = (e) => {
    if (e.data?.type === 'lb_update') {
      applyLbData(e.data.data);
    }
  };
}

/* Also poll localStorage every 3s (cross-browser fallback) */
setInterval(() => {
  const data = lbLoad();
  applyLbData(data);
}, 3000);

function normalizeResults(raw) {
  /* JSON parse করলে keys string হয় — সব numeric করে নাও */
  const out = {};
  Object.entries(raw || {}).forEach(([k, v]) => { out[Number(k)] = v; });
  return out;
}

function applyLbData(data) {
  STATE.leaderboard = Object.values(data).map(u => {
    const normalized = normalizeResults(u.results);
    /* if this is the current user, use in-memory STATE.results
       so polling never overwrites what they just submitted */
    if (STATE.username && u.name === STATE.username) {
      return { name: u.name, results: normalizeResults(STATE.results) };
    }
    return { name: u.name, results: normalized };
  });
  renderLeaderboard();
}

function updateLeaderboard() {
  if (!STATE.username) return;

  const normalizedResults = normalizeResults(STATE.results);

  /* 1. STATE.leaderboard immediately update */
  let entry = STATE.leaderboard.find(u => u.name === STATE.username);
  if (entry) {
    entry.results = normalizedResults;
  } else {
    STATE.leaderboard.push({ name: STATE.username, results: normalizedResults });
  }

  /* 2. localStorage save */
  const data = lbLoad();
  data[STATE.username] = { name: STATE.username, results: normalizedResults, updatedAt: Date.now() };
  lbSave(data);
}

/* ── username registration ── */
document.getElementById('btn-register').onclick = () => {
  const name = document.getElementById('username-input').value.trim();
  if (!name) return toast('Enter a username first', 'info');
  if (name.length < 2) return toast('Username too short', 'error');
  STATE.username = name;

  /* add to STATE.leaderboard if not already there */
  if (!STATE.leaderboard.find(u => u.name === name)) {
    STATE.leaderboard.push({ name, results: {} });
  }

  /* persist to localStorage */
  const data = lbLoad();
  if (!data[name]) {
    data[name] = { name, results: {}, updatedAt: Date.now() };
    lbSave(data);
  }

  renderLeaderboard();
  toast(`Welcome, ${name}! 🎉`, 'success');
  document.getElementById('username-input').disabled = true;
  document.getElementById('btn-register').textContent = '✓ Joined';
  document.getElementById('btn-register').disabled = true;
};
document.getElementById('username-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('btn-register').click();
});

/* ══════════════════════════════════════════════════
   TOAST
══════════════════════════════════════════════════ */
function toast(msg, type='info') {
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<i class="fas fa-${type==='success'?'check-circle':type==='error'?'times-circle':'info-circle'}"></i>${msg}`;
  document.getElementById('toast-container').appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

/* ══════════════════════════════════════════════════
   SEED DEMO PLAYERS (only if storage is empty)
══════════════════════════════════════════════════ */
function seedDemoPlayers() {
  const existing = lbLoad();
  if (Object.keys(existing).length > 0) return; /* already seeded */

  const demos = [
    { name: 'Anika',  solved: [1,2,3,4,5,6,7],        times: [300,480,720,900,1100,1350,2100] },
    { name: 'Anupom',    solved: [1,2,3,4,5,6],           times: [600,800,1000,1500,1900,2400]    },
    { name: 'Rafi',   solved: [1,2,3,5,6],              times: [400,700,1200,2000,2800]         },
    { name: 'Likhon',  solved: [1,2,3,4,5,6,7,8],       times: [200,350,600,800,1100,1500,2000,2800] },
    { name: 'Abir',  solved: [1,2,3,4],                times: [500,900,1400,2200]              },
    { name: 'Monir',  solved: [1,2,3,4,5,6,7],        times: [300,480,720,900,1100,1350,2100] },
    { name: 'Sumaiya',    solved: [1,2,3,4,5,6],           times: [600,800,1000,1500,1900,2400]    },
    { name: 'Rafi',   solved: [1,2,3,5,6],              times: [400,700,1200,2000,2800]         },
    { name: 'Mohammad',  solved: [1,2,3,4,5,6,7,8],       times: [200,350,600,800,1100,1500,2000,2800] },
    { name: 'Sonjoy',  solved: [1,2,3,4],                times: [500,900,1400,2200]              },
  
  ];

  const data = {};
  demos.forEach(d => {
    const results = {};
    d.solved.forEach((qid, i) => {
      results[qid] = { status: 'ac', time: d.times[i], attempts: 1 };
    });
    for (let q = 1; q <= 10; q++) {
      if (!results[q] && Math.random() > 0.55) {
        results[q] = { status: 'wa', time: Math.floor(Math.random()*5000), attempts: Math.floor(Math.random()*3)+1 };
      }
    }
    data[d.name] = { name: d.name, results, updatedAt: Date.now() };
  });

  lbSave(data);
  applyLbData(data);
}

/* ══════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════ */
renderQuestionList();
seedDemoPlayers();
applyLbData(lbLoad());

/* Load first question after DOM + CodeMirror fully rendered */
setTimeout(() => loadQuestion(QUESTIONS[0]), 50);

/* ══════════════════════════════════════════════════
   MOBILE — refresh CodeMirror on resize
══════════════════════════════════════════════════ */
window.addEventListener('resize', () => {
  editor.refresh();
});
