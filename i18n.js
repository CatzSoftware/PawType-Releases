// PawType 產品頁的語系切換：頁面原文的繁體中文就是鍵，英文對照都在這個檔；選英文時把畫面上的文字與說明屬性換掉。
(function () {
  // 純文字與屬性的對照。鍵是去掉頭尾空白後的原文
  var text = {
    'PawType 注音輸入法': 'PawType Zhuyin Input Method',
    'PawType：不用切換中英的注音輸入法。一直用英文打字，打到聲調鍵就變中文；打錯自動修正、轉錯一鍵還原、專業詞庫即時切換。': 'PawType is a Zhuyin input method with no Chinese/English switching. Keep typing in English, and a tone key turns the Zhuyin you just typed into Chinese. Typos fix themselves, wrong conversions undo with one key, and industry dictionaries switch instantly.',
    'PawType 首頁': 'PawType home',
    '頁首連結': 'Header links',
    '語言': 'Language',
    '取得 PawType': 'Get PawType',
    'PawType 是給注音使用者的輸入法：一直用英文打字，打到聲調鍵，那一段注音就變成中文。寫程式、回訊息、中英夾雜的筆記，Shift 再也不用按來按去。': 'PawType is an input method for Zhuyin typists. Keep typing in English; when you hit a tone key, the Zhuyin you just typed becomes Chinese. Code, chat replies, notes that mix both languages: no more toggling with Shift.',
    'Windows 下載': 'Download for Windows',
    'macOS 下載': 'Download for macOS',
    '正式版即將推出': 'Coming soon',
    '目前版本 {0}': 'Current version {0}',
    '打字示範': 'Typing demo',
    '任何程式的輸入框': 'Any app’s text field',
    '你按的鍵': 'Keys you press',
    '畫面上': 'On screen',
    '打錯、轉錯，都不用重打': 'Typos and wrong conversions, no retyping',
    '打字最煩的不是打不快，是打錯之後要一個鍵一個鍵退回去。PawType 把這件事接手了。': 'The worst part of typing isn’t speed. It’s backing out a mistake one key at a time. PawType handles that for you.',
    '注音順序打反，自動排回來': 'Zhuyin out of order? It reorders itself',
    '把介音打在聲母前面、多按了一個鍵，按下聲調時 PawType 會自己排回正確的音。猜錯了？馬上按一下 Backspace 就退回你原本打的樣子。': 'Typed the medial before the initial, or hit an extra key? When you press the tone, PawType puts the syllable back in the right order. Wrong guess? Press Backspace right away to get back exactly what you typed.',
    '你打的': 'You type',
    '排回': 'Reordered',
    '組不成音的，一整塊刪掉': 'Impossible syllables delete as one block',
    '打到不可能的注音組合，PawType 當下就把它標成一塊。一次 Backspace 整塊消失，不用盯著一串亂碼慢慢退。': 'When you type a Zhuyin combination that can’t exist, PawType marks it as one block right away. One Backspace removes the whole block, so you don’t have to back out a string of junk key by key.',
    '按一次': 'Press once',
    '英文被轉成中文？一鍵還原': 'English turned into Chinese? Undo with one key',
    '英文單字剛好長得像注音、被轉成了中文，按 Shift 或 Esc 立刻變回你打的英文，繼續往下打。': 'If an English word happens to look like Zhuyin and gets converted, press Shift or Esc to turn it straight back into the English you typed, and keep going.',
    '被轉成': 'Converted to',
    '按 Shift': 'Press Shift',
    '你的行業用語，排在最前面': 'Your industry’s terms come first',
    '同一組注音，工程師要的字和一般人不一樣。切到「軟體開發」詞庫，介面、建置、執行緒這些詞就排在同音字前面；平常打字用「個人」，它會記住你的選字習慣；專業詞庫則照詞表、不被個人習慣打亂。所有程式立刻生效，不用重開。': 'For the same Zhuyin, an engineer wants different words than everyone else. Switch to the Software Development dictionary and terms like interface, build and thread rank ahead of their homophones. For everyday typing, use Personal, which learns your choices. Industry dictionaries follow their word lists and aren’t thrown off by personal habits. The change applies to every app immediately, with no restart.',
    '選擇詞庫': 'Choose a dictionary',
    '個人': 'Personal',
    '軟體開發': 'Software',
    '打的注音': 'Zhuyin typed',
    '轉出來': 'Output',
    '還有這些，讓每天的打字少一點摩擦': 'More ways to take the friction out of everyday typing',
    '越用越懂你': 'Learns as you go',
    '記住你選過的字，也記住你在哪個詞後面選了什麼；同一個音在不同上下文會先出不同的字。': 'It remembers the characters you pick and what you picked after which word, so the same sound offers different characters first in different contexts.',
    '快捷文字本': 'Snippets',
    '全形標點順手打': 'Full-width punctuation at your fingertips',
    '整句一起轉': 'Whole-sentence conversion',
    '依整句前後文選字，不是一個字一個字猜；詞頻來自大量文本統計，口語用法也排得對。': 'Characters are chosen from the context of the whole sentence, not guessed one at a time. Word frequencies come from a large text corpus, so colloquial usage ranks correctly too.',
    '大量英文時暫停中文': 'Pause Chinese for long English',
    'Caps Lock 開著時完全不轉中文，貼程式碼、打指令都不受干擾。': 'With Caps Lock on, nothing converts to Chinese, so pasting code and typing commands are never disrupted.',
    '選字窗看得出常用度': 'See how common each candidate is',
    '候選字依常用程度由深到淺上色，一眼就知道哪個最常用。': 'Candidates are shaded from dark to light by how common they are, so the most common one stands out at a glance.',
    '放心用': 'Use it with confidence',
    '不連網': 'Works offline',
    '選字、學習全在你的電腦上完成，打的字不會上傳到任何地方。': 'Candidate selection and learning happen entirely on your computer. Nothing you type is uploaded anywhere.',
    '反應即時': 'Instant response',
    '一般按鍵在幾十微秒內處理完，打再快也跟得上。': 'A typical keystroke is processed in tens of microseconds, so it keeps up however fast you type.',
    'Windows 與 macOS': 'Windows and macOS',
    '兩個平台一樣的打法；自訂詞庫可以放進同步資料夾，換電腦也一樣順手。': 'The same typing on both platforms. Put your custom dictionary in a synced folder and it feels the same on any computer.',
    'PawType 正在做正式版前的最後調整。完成後會在這裡提供 Windows 與 macOS 的安裝檔。': 'PawType is getting its final touches before release. Windows and macOS installers will be available here when it’s ready.',
    '下載 PawType': 'Download PawType',
    '提供 Windows 與 macOS 版本。': 'Available for Windows and macOS.',
    'PawType 注音輸入法 · 本網站以 Google Analytics 統計瀏覽人數與來源，會使用 Cookie': 'PawType Zhuyin Input Method · This site uses Google Analytics and cookies to count visits and where they come from'
  };

  // 句子裡夾著標籤的段落，中英語序不同，整段替換。鍵是標了 data-i18n-html 的元素內容
  var html = {
    '中英混打，<br><em>不用再切換</em>。': 'Type Chinese and English<br><em>without switching</em>.',
    '英文照常出現；注音打到聲調鍵（<kbd>3</kbd> <kbd>4</kbd> <kbd>6</kbd> <kbd>7</kbd> 或空白）才轉中文。': 'English appears as usual. Zhuyin turns into Chinese only when you hit a tone key (<kbd>3</kbd> <kbd>4</kbd> <kbd>6</kbd> <kbd>7</kbd> or Space).',
    '<span class="zy" lang="zh-Hant">ㄧㄐㄝˊ</span>（順序反了）': '<span class="zy" lang="zh-Hant">ㄧㄐㄝˊ</span> (out of order)',
    '輸入時先按 <kbd>`</kbd> 再按 <kbd>Tab</kbd> 切換。首發附「軟體開發」與「課程教學」，更多職業類別陸續加入。': 'While typing, press <kbd>`</kbd> then <kbd>Tab</kbd> to switch. The first release includes Software Development and Teaching, with more professions to come.',
    '先按 <kbd>`</kbd> 再按空白，叫出自己存的信箱、地址、簽名，挑一個就貼上。': 'Press <kbd>`</kbd> then Space to bring up your saved email addresses, addresses and signatures, and pick one to paste it.',
    '<kbd>`</kbd><kbd>,</kbd> 是「，」、<kbd>`</kbd><kbd>[</kbd> 是「「」；箭頭、星號、括號按鍵形狀分組，數字鍵直接挑。': '<kbd>`</kbd><kbd>,</kbd> gives <span lang="zh-Hant">，</span> and <kbd>`</kbd><kbd>[</kbd> gives <span lang="zh-Hant">「</span>. Arrows, stars and brackets are grouped by key shape, and you pick with the number keys.'
  };

  var STORE = 'pawtype-site-language';
  // 訪客選過就用選的；沒選過時，瀏覽器語言是中文就顯示繁體中文，其餘顯示英文
  function pickLocale() {
    var saved = null;
    try { saved = localStorage.getItem(STORE); } catch (error) {}
    if (saved === 'zh-Hant' || saved === 'en') return saved;
    return /^zh\b/i.test(navigator.language || '') ? 'zh-Hant' : 'en';
  }
  var locale = pickLocale();
  var english = locale === 'en';

  // 給頁面腳本用：回傳目前語言的字串，{0}、{1} 依序換成 values
  window.t = function (key, values) {
    var message = english && Object.prototype.hasOwnProperty.call(text, key) ? text[key] : key;
    return message.replace(/\{(\d+)\}/g, function (whole, index) { return values && values[index] != null ? values[index] : whole; });
  };

  function lookup(table, key) { return Object.prototype.hasOwnProperty.call(table, key) ? table[key] : null; }

  function translatePage() {
    document.documentElement.lang = 'en';
    var title = lookup(text, document.title.trim());
    if (title !== null) document.title = title;
    document.querySelectorAll('[data-i18n-html]').forEach(function (element) {
      var found = lookup(html, element.innerHTML.trim());
      if (found !== null) element.innerHTML = found;
    });
    // 標了 lang 的元素（語言名稱、注音與中文示範）與整段替換過的元素不逐字翻
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var nodes = [];
    for (var node = walker.nextNode(); node; node = walker.nextNode()) {
      if (!node.parentElement.closest('[lang]:not(html), [data-i18n-html], script, style')) nodes.push(node);
    }
    nodes.forEach(function (node) {
      var found = lookup(text, node.nodeValue.trim());
      if (found === null) return;
      var edges = node.nodeValue.match(/^(\s*)[\s\S]*?(\s*)$/);
      node.nodeValue = edges[1] + found + edges[2];
    });
    document.querySelectorAll('[aria-label], [title], meta[name="description"]').forEach(function (element) {
      ['aria-label', 'title', 'content'].forEach(function (name) {
        var found = element.hasAttribute(name) ? lookup(text, element.getAttribute(name).trim()) : null;
        if (found !== null) element.setAttribute(name, found);
      });
    });
  }
  if (english) translatePage();

  // 切換後記住選擇並重新載入，讓下載按鈕這些由腳本填的字一起換
  document.querySelectorAll('.lang button').forEach(function (button) {
    button.setAttribute('aria-pressed', String(button.dataset.lang === locale));
    button.addEventListener('click', function () {
      if (button.dataset.lang === locale) return;
      try { localStorage.setItem(STORE, button.dataset.lang); } catch (error) {}
      location.reload();
    });
  });
})();
