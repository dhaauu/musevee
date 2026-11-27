/* ==========================================================================
   MusEvee Official Landing Page — Interactive App Simulator & Motion Engine
   100% Pure Vanilla JS + Authentic MusEvee Mograph CSS Transitions (No Video)
   ========================================================================== */

(() => {
  'use strict';

  // -------------------- Demo Tracks (Sharou Official Free BGM + Japanese & Romaji Lyrics) --------------------
  const TRACKS = [
    {
      title: '10°C',
      artist: 'Sharou',
      audioSrc: './assets/audio/sharou-10c.mp3',
      durationSec: 217,
      durationLabel: '03:37',
      lyricsOriginal: [
        '朝の空気が 少し冷たくて',
        '白い息が 光に溶けてゆく',
        '十度の風に 肩をすくめて',
        '静かな街を 歩いてゆこう',
        '温かいカップ 手のひらに包む',
        '遠くの鐘が 午前を告げる',
        '昨日の迷いも 澄んだ空へ',
        '新しい一日が そっと始まる'
      ],
      lyricsRomaji: [
        'Asa no kuuki ga sukoshi tsumetakute',
        'Shiroi iki ga hikari ni tokete yuku',
        'Juudo no kaze ni kata o sukumete',
        'Shizuka na machi o aruite yukou',
        'Atatakai kappu tenohira ni tsutsumu',
        'Tooku no kane ga gozen o tsugeru',
        'Kinou no mayoi mo sunda sora e',
        'Atarashii ichinichi ga sotto hajimaru'
      ]
    },
    {
      title: '3:03 PM',
      artist: 'Sharou',
      audioSrc: './assets/audio/sharou-303pm.wav',
      durationSec: 140,
      durationLabel: '02:20',
      lyricsOriginal: [
        '午後三時の 柔らかな陽射し',
        'カーテン越しに ゆらり揺れて',
        '時計の針も 少しのんびり',
        '紅茶の香りが 部屋を満たす',
        '読みかけの本 そっと閉じて',
        '窓の外には 流れる白い雲',
        '急がなくても きっと大丈夫',
        '穏やかな午後に 耳を澄ます'
      ],
      lyricsRomaji: [
        'Gogo sanji no yawarakana hizashi',
        'Kaaten-goshi ni yurari yurete',
        'Tokei no hari mo sukoshi nonbiri',
        'Koucha no kaori ga heya o mitasu',
        'Yomikake no hon sotto tojite',
        'Mado no soto ni wa nagareru shiroi kumo',
        'Isoganakute mo kitto daijoubu',
        'Odayaka na gogo ni mimi o sumasu'
      ]
    },
    {
      title: '2:23 AM',
      artist: 'Sharou',
      audioSrc: './assets/audio/sharou-223am.mp3',
      durationSec: 195,
      durationLabel: '03:15',
      lyricsOriginal: [
        '午前二時の 静まり返る部屋',
        '街の灯りが 遠くで瞬く',
        'ヘッドホンから 流れるメロディ',
        '夜の隙間に そっと寄り添う',
        '誰もいない 静かな道路',
        '小さな星が 窓辺に光る',
        '眠れない夜も 悪くないね',
        '朝が来るまで 音の海へ'
      ],
      lyricsRomaji: [
        'Gozen niji no shizumarikaeru heya',
        'Machi no akari ga tooku de matataku',
        'Heddohon kara nagareru merodii',
        'Yoru no sukima ni sotto yorisou',
        'Dare mo inai shizuka na douro',
        'Chiisana hoshi ga madobe ni hikaru',
        'Nemurenai yoru mo warukunai ne',
        'Asa ga kuru made oto no umi e'
      ]
    }
  ];

  // -------------------- Bilingual Dictionary (ID / EN) --------------------
  const I18N = {
    id: {
      navPlayground: 'Playground',
      navFeatures: 'Fitur',
      navDownload: 'Unduh',
      navFaq: 'FAQ',
      navFeedback: 'Kirim Masukan',
      navCta: 'Unduh',
      heroTitle1: 'Musik offline & online,',
      heroTitle2: 'dalam satu pemutar.',
      heroSubtitle:
        'Pemutar musik hybrid modern untuk Android yang menggabungkan koleksi lagu lokal dan streaming online dalam satu tampilan bersih. Putar musik bebas iklan dengan lirik berjalan, Romaji instan, dan unduh lagu offline lengkap dengan metadata.',
      heroDownloadBtn: 'Unduh APK',
      heroExploreBtn: 'Lihat Fitur',
      stat1Val: 'Hybrid',
      stat1Lbl: 'Lokal & Online',
      stat2Val: 'Bebas Iklan',
      stat2Lbl: 'Tanpa Langganan',
      stat3Val: 'Lirik & Romaji',
      stat3Lbl: 'Siap Offline',
      pgEyebrow: 'INTERACTIVE PLAYGROUND',
      pgTitle: 'Rasakan langsung pengalaman MusEvee.',
      pgDesc:
        'Coba langsung antarmuka asli MusEvee sebelum mengunduh. Pilih fitur di bawah untuk melihat cara kerja pemutar, lirik, Romaji, hingga kartu kutipan.',
      mode1Title: 'Now Playing & Morph Pill',
      mode2Title: 'Panggung Lirik',
      mode3Title: 'Romaji Instan',
      mode4Title: 'Share Card',
      replayBtn: 'Putar Ulang',
      sampleTrackLabel: 'Coba Lagu:',
      selCancel: 'Batal',
      selShare: 'Bagikan',
      queueTitle: 'Playback Queue',
      queueClear: 'Hapus',
      shareSheetTitle: 'Share Lyrics Card',
      shareSheetSub: 'Pratinjau kartu lirik sebelum dibagikan',
      switchToStory: 'Beralih ke Story',
      sheetSave: 'Simpan',
      sheetShare: 'Bagikan',
      stageTapHint: 'Tips: kamu juga bisa mengetuk ikon Antrean, Romaji, lirik, atau piringan langsung di dalam HP.',
      featEyebrow: 'FITUR UTAMA',
      featTitle: 'Satu aplikasi untuk seluruh musikmu.',
      featDesc:
        'Semua kebebasan memutar file offline, streaming lagu online, hingga menyimpan koleksi favorit tanpa iklan atau batasan langganan.',
      bento1Title: 'Pustaka Hybrid: Offline & Streaming',
      bento1Desc:
        'Putar koleksi audio lokal dan katalog musik online secara mulus di satu tempat. Kelola lagu berdasarkan Folder, Album, Artis, dan Playlist dengan dukungan MP3, FLAC, M4A, Tag Editor, serta pemutaran latar belakang bebas iklan.',
      bento1Tag1: 'Offline & Online',
      bento1Tag2: 'MP3 & FLAC',
      bento1Tag3: 'Folder & Tag Editor',
      bento1Tag4: 'Bebas Iklan',
      bento2Title: 'Lirik Berjalan, Romaji & Timing',
      bento2Desc:
        'Ikuti setiap bait lagu dengan lirik akurat lengkap dengan konversi Romaji satu ketukan untuk lagu Jepang. Tarik lirik otomatis dari LRCLIB atau atur timing presisi lalu simpan permanen ke file audio.',
      bento2Tag2: 'Romaji Instan',
      bento2Tag3: 'Lirik Offline',
      bento3Title: 'Kartu Kutipan Lirik & Story 9:16',
      bento3Desc:
        'Bagikan potongan lirik favoritmu dalam hitungan detik langsung dari layar pemutar. Pilih baris yang kamu suka dan ekspor sebagai kartu elegan atau Story 9:16 siap unggah.',
      bento3Tag1: 'Pilih Baris',
      bento3Tag3: 'Ekspor HD',
      bento4Title: 'Unduh Lagu & Auto-Metadata',
      bento4Desc:
        'Simpan lagu favoritmu untuk didengarkan kapan saja tanpa kuota internet. Judul, artis, album, sampul resolusi tinggi, dan lirik tertanam langsung otomatis ke folder pilihanmu.',
      bento4Tag1: 'Simpan Offline',
      bento5Title: 'Antrean & Pemutaran Latar Belakang',
      bento5Desc:
        'Nikmati musik terus berjalan lancar saat membuka aplikasi lain maupun ketika layar ponsel terkunci. Atur antrean putar lintas lagu lokal dan online dengan mudah tanpa gangguan iklan.',
      bento5Tag2: 'Antrean Fleksibel',
      dlTitle: 'Unduh MusEvee untuk Android',
      dlDesc:
        'Gratis, ringan, dan bebas iklan. Nikmati pemutar musik hybrid lengkap untuk koleksi offline maupun streaming langsung di ponsel Android-mu.',
      dlCtaPrimary: 'Unduh MusEvee v1.0.0',
      dlCtaFeedback: 'Kirim Masukan / Lapor Bug',
      installTitle: 'Cara Pasang APK di Android',
      installStep1: 'Unduh file <strong>MusEvee-v1.0.0-arm64.apk</strong> melalui tombol unduh di halaman ini.',
      installStep2: 'Buka file APK dan aktifkan izin <em>Pasang aplikasi tidak dikenal</em> untuk browser atau file manager kamu.',
      installStep3: 'Buka MusEvee, izinkan akses audio lokal, lalu mulai putar koleksi offline maupun streaming favoritmu.',
      faqTitle: 'Pertanyaan yang sering diajukan',
      faq1Q: 'Apakah MusEvee gratis dan bebas iklan?',
      faq1A:
        'Ya, MusEvee 100% gratis, bebas iklan, dan tanpa langganan. Kamu bisa memutar musik di latar belakang maupun saat layar terkunci tanpa gangguan.',
      faq2Q: 'Apakah MusEvee bisa dipakai offline dan online sekaligus?',
      faq2A:
        'Bisa! MusEvee adalah pemutar musik hybrid yang memutar koleksi audio lokal (MP3, FLAC, M4A) sekaligus katalog streaming online dalam satu antrean yang sama.',
      faq3Q: 'Apakah lirik dan Romaji tetap bisa dipakai tanpa internet?',
      faq3A:
        'Ya! Lirik yang tertanam di file audio maupun hasil penyesuaian timing akan langsung terbaca secara offline kapan saja.',
      faq4Q: 'Bagaimana cara memperbarui MusEvee ke versi terbaru?',
      faq4A:
        'Cukup unduh file APK versi terbaru dari halaman ini lalu pasang langsung di atas versi lama tanpa kehilangan playlist maupun pengaturanmu.',
      faqFeedbackTitle: 'Menemukan bug atau punya saran fitur?',
      faqFeedbackDesc:
        'Bantu kami menyempurnakan MusEvee di pembaruan berikutnya dengan mengirimkan laporan bug atau ide fiturmu.',
      faqFeedbackBtn: 'Kirim Masukan & Lapor Bug',
      footerNote: 'Satu pemutar musik hybrid untuk semua lagumu. • Demo BGM: しゃろう (Sharou)',
      ariaMenu: 'Menu',
      ariaLyricsSource: 'Sumber lirik',
      ariaSelectLyrics: 'Pilih lirik',
      ariaFavorite: 'Favorit',
      ariaLyricsPanel: 'Panggung Lirik',
      ariaVinylPanel: 'Now Playing',
      ariaRomaji: 'Toggle Romaji',
      ariaPrev: 'Sebelumnya',
      ariaPlayPause: 'Putar atau jeda',
      ariaNext: 'Berikutnya',
      ariaShuffle: 'Acak',
      ariaRepeat: 'Ulangi',
      ariaQueue: 'Antrean Putar',
      snackRomajiOn: 'Lirik dikonversi ke Romaji',
      snackRomajiOff: 'Kembali ke lirik asli',
      snackShareSaved: 'Kartu lirik tersimpan ke galeri',
      snackShareSent: 'Membuka menu bagikan sistem...',
      modeDescs: {
        'now-playing':
          'Fokus penuh pada musik yang sedang diputar tanpa gangguan visual. Akses antrean lagu, acak, dan mode ulang langsung dari satu kontrol yang adaptif dan responsif.',
        'lyrics-stage':
          'Nikmati bait demi bait lagu di ruang baca yang tenang dan bebas distraksi. Baris aktif selalu terjaga di tengah layar dan kamu bisa mengetuk baris mana saja untuk berpindah.',
        romaji:
          'Ikuti lagu Jepang tanpa hambatan membaca kanji atau kana. Cukup satu ketukan untuk mengubah seluruh lirik menjadi Romaji secara instan langsung di layar pemutar.',
        'share-card':
          'Abadikan kutipan lirik favoritmu untuk dibagikan ke teman atau media sosial. Pilih baris yang kamu suka, lalu ubah menjadi kartu lirik atau format Story 9:16 dalam sekejap.'
      }
    },
    en: {
      navPlayground: 'Playground',
      navFeatures: 'Features',
      navDownload: 'Download',
      navFaq: 'FAQ',
      navFeedback: 'Feedback',
      navCta: 'Download',
      heroTitle1: 'Offline & online music,',
      heroTitle2: 'in one clean player.',
      heroSubtitle:
        'A modern hybrid music player for Android combining your local library and online streaming in one clean interface. Play ad-free with live lyrics, instant Romaji, and offline downloads with automatic metadata.',
      heroDownloadBtn: 'Download APK',
      heroExploreBtn: 'View Features',
      stat1Val: 'Hybrid',
      stat1Lbl: 'Local & Online',
      stat2Val: 'Ad-Free',
      stat2Lbl: 'No Subscription',
      stat3Val: 'Lyrics & Romaji',
      stat3Lbl: 'Offline Ready',
      pgEyebrow: 'INTERACTIVE PLAYGROUND',
      pgTitle: 'Experience MusEvee firsthand.',
      pgDesc:
        'Try MusEvee’s actual interface before downloading. Pick a feature below to see how the player, lyrics stage, instant Romaji, and quote cards work.',
      mode1Title: 'Now Playing & Morph Pill',
      mode2Title: 'Lyrics Stage',
      mode3Title: 'Instant Romaji',
      mode4Title: 'Share Card',
      replayBtn: 'Replay',
      sampleTrackLabel: 'Try Track:',
      selCancel: 'Cancel',
      selShare: 'Share',
      queueTitle: 'Playback Queue',
      queueClear: 'Clear',
      shareSheetTitle: 'Share Lyrics Card',
      shareSheetSub: 'Preview your lyrics card before sharing',
      switchToStory: 'Switch to Story',
      sheetSave: 'Save',
      sheetShare: 'Share',
      stageTapHint: 'Tip: you can also tap the Queue, Romaji, lyrics, or vinyl disc directly inside the phone.',
      featEyebrow: 'CORE FEATURES',
      featTitle: 'One app for all your music.',
      featDesc:
        'Enjoy the freedom of local offline playback, online streaming, and offline saving without ads or subscription limits.',
      bento1Title: 'Hybrid Library: Offline & Streaming',
      bento1Desc:
        'Play local audio files and online catalogs seamlessly in one place. Organize by Folders, Albums, Artists, and Playlists with MP3, FLAC, M4A, Tag Editor, and ad-free background playback.',
      bento1Tag1: 'Offline & Online',
      bento1Tag2: 'MP3 & FLAC',
      bento1Tag3: 'Folders & Tag Editor',
      bento1Tag4: 'Ad-Free',
      bento2Title: 'Live Lyrics, Romaji & Timing',
      bento2Desc:
        'Follow every verse with accurate lyrics and one-tap Romaji conversion for Japanese songs. Fetch lyrics automatically from LRCLIB or fine-tune timing and save it right into your audio file.',
      bento2Tag2: 'Instant Romaji',
      bento2Tag3: 'Offline Lyrics',
      bento3Title: 'Lyrics Quote Card & 9:16 Story',
      bento3Desc:
        'Share your favorite lines in seconds straight from the player screen. Pick the verses you love and export a clean quote card or 9:16 Story ready to post.',
      bento3Tag1: 'Select Lines',
      bento3Tag3: 'HD Export',
      bento4Title: 'Offline Downloads & Auto-Metadata',
      bento4Desc:
        'Save tracks to listen anytime without mobile data. Titles, artists, albums, high-res artwork, and embedded lyrics are written straight into your chosen folder.',
      bento4Tag1: 'Save Offline',
      bento5Title: 'Smart Queue & Background Play',
      bento5Desc:
        'Keep your music playing smoothly while multitasking or with your screen locked. Manage one flexible queue across local and online tracks without ad interruptions.',
      bento5Tag2: 'Flexible Queue',
      dlTitle: 'Download MusEvee for Android',
      dlDesc:
        'Free, lightweight, and ad-free. Enjoy a complete hybrid music player for both offline files and online streaming on Android.',
      dlCtaPrimary: 'Download MusEvee v1.0.0',
      dlCtaFeedback: 'Send Feedback / Report Bug',
      installTitle: 'How to Install APK on Android',
      installStep1: 'Download <strong>MusEvee-v1.0.0-arm64.apk</strong> using the download button on this page.',
      installStep2: 'Open the APK file and enable <em>Install unknown apps</em> for your browser or file manager.',
      installStep3: 'Open MusEvee, grant local audio access, and start playing both offline and online favorites.',
      faqTitle: 'Frequently asked questions',
      faq1Q: 'Is MusEvee free and ad-free?',
      faq1A:
        'Yes. MusEvee is 100% free, ad-free, and requires no subscription — including background and lock-screen playback.',
      faq2Q: 'Can MusEvee play both offline and online music?',
      faq2A:
        'Yes! MusEvee is a hybrid music player that plays your local audio files (MP3, FLAC, M4A) alongside online streams inside the same queue.',
      faq3Q: 'Do lyrics and Romaji work without internet?',
      faq3A:
        'Yes! Lyrics embedded in your audio files and any saved timing adjustments load instantly offline anytime.',
      faq4Q: 'How do I update MusEvee to newer versions?',
      faq4A:
        'Simply download the latest APK from this page and install it over your existing app without losing playlists or settings.',
      faqFeedbackTitle: 'Found a bug or have a feature idea?',
      faqFeedbackDesc:
        'Help us improve MusEvee in upcoming updates by sharing your bug report or feature request.',
      faqFeedbackBtn: 'Send Feedback & Report Bug',
      footerNote: 'One hybrid music player for all your music. • Demo BGM: しゃろう (Sharou)',
      ariaMenu: 'Menu',
      ariaLyricsSource: 'Lyrics source',
      ariaSelectLyrics: 'Select lyrics',
      ariaFavorite: 'Favorite',
      ariaLyricsPanel: 'Lyrics Stage',
      ariaVinylPanel: 'Now Playing',
      ariaRomaji: 'Toggle Romaji',
      ariaPrev: 'Previous',
      ariaPlayPause: 'Play or pause',
      ariaNext: 'Next',
      ariaShuffle: 'Shuffle',
      ariaRepeat: 'Repeat',
      ariaQueue: 'Playback Queue',
      snackRomajiOn: 'Lyrics converted to Romaji',
      snackRomajiOff: 'Restored original lyrics',
      snackShareSaved: 'Lyrics card saved to gallery',
      snackShareSent: 'Opening Android share sheet...',
      modeDescs: {
        'now-playing':
          'Stay immersed in what’s playing without visual clutter. Reach your playback queue, shuffle, and repeat modes straight from one adaptive control bar.',
        'lyrics-stage':
          'Follow every verse on a calm, distraction-free lyrics stage. The current line stays centered in focus, and you can tap any line to jump right to it.',
        romaji:
          'Sing along to Japanese tracks without struggling through kanji or kana. One tap converts the entire lyrics into Romaji right on the player screen.',
        'share-card':
          'Turn your favorite lyric lines into clean quote cards for friends or social stories. Pick any lines directly on screen and switch between Card and 9:16 Story in one tap.'
      }
    }
  };

  // -------------------- State (Default: Light Mode, Indonesian, Paused, Original Japanese Lyrics) --------------------
  const state = {
    lang: 'id',
    theme: 'light',
    trackIdx: 0,
    isPlaying: false,
    activeMode: 'now-playing',
    activePanel: 1, // 0 = Lyrics Stage, 1 = Now Playing Vinyl
    activeLyricIdx: 3,
    romajiOn: false, // Start with original Japanese lyrics (Kanji/Kana)
    isQueueOpen: false,
    isSelecting: false,
    selectedLines: new Set([3, 4]),
    isShareSheetOpen: false,
    isStoryMode: false,
    progressPct: 0,
    choreoTimers: [],
    phoneSnackTimer: null,
    pageSnackTimer: null,
    modeSeq: 0
  };

  // -------------------- Real HTML5 Audio Engine --------------------
  const demoAudio = document.getElementById('demoAudio') || new Audio();
  demoAudio.preload = 'metadata';
  demoAudio.volume = 0.85;

  // -------------------- DOM References --------------------
  const htmlEl = document.documentElement;
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langToggleLabel = document.getElementById('langToggleLabel');

  // Hero elements
  const heroVinylDisc = document.getElementById('heroVinylDisc');
  const heroPrevBtn = document.getElementById('heroPrevBtn');
  const heroPlayBtn = document.getElementById('heroPlayBtn');
  const heroNextBtn = document.getElementById('heroNextBtn');
  const rotors = [
    document.getElementById('heroDiscRotor'),
    document.getElementById('heroMiniRotor'),
    document.getElementById('phoneDiscRotor')
  ];

  // Playground controls
  const modeBtns = Array.from(document.querySelectorAll('.mode-btn'));
  const modeDetailDesc = document.getElementById('modeDetailDesc');
  const replayModeBtn = document.getElementById('replayModeBtn');
  const trackChips = Array.from(document.querySelectorAll('.track-chip'));

  // Phone UI
  const phoneScreen = document.getElementById('phoneScreen');
  const npFavBtn = document.getElementById('npFavBtn');
  const npHeartSvg = document.getElementById('npHeartSvg');
  const phoneSelectBtn = document.getElementById('phoneSelectBtn');
  const npVinylDisc = document.getElementById('npVinylDisc');
  const introPrev = document.getElementById('introPrev');
  const introActive = document.getElementById('introActive');
  const introNext = document.getElementById('introNext');
  const phoneLyricsList = document.getElementById('phoneLyricsList');
  const selectionSplitBar = document.getElementById('selectionSplitBar');
  const selCancelBtn = document.getElementById('selCancelBtn');
  const selShareBtn = document.getElementById('selShareBtn');

  // Queue & Bottom Transport
  const queueRows = Array.from(document.querySelectorAll('.queue-row'));
  const pagerDot0 = document.getElementById('pagerDot0');
  const pagerDot1 = document.getElementById('pagerDot1');
  const npSeekTrack = document.getElementById('npSeekTrack');
  const npSeekFill = document.getElementById('npSeekFill');
  const npCurrentTime = document.getElementById('npCurrentTime');
  const npTotalTime = document.getElementById('npTotalTime');
  const phoneRomajiBtn = document.getElementById('phoneRomajiBtn');
  const phoneRomajiSvg = document.getElementById('phoneRomajiSvg');
  const transportMorphRow = document.getElementById('transportMorphRow');
  const npPrevBtn = document.getElementById('npPrevBtn');
  const npPlayBtn = document.getElementById('npPlayBtn');
  const npNextBtn = document.getElementById('npNextBtn');
  const tpShuffleBtn = document.getElementById('tpShuffleBtn');
  const tpRepeatBtn = document.getElementById('tpRepeatBtn');
  const phoneQueueBtn = document.getElementById('phoneQueueBtn');

  // Share Card Sheet
  const shareSheetBackdrop = document.getElementById('shareSheetBackdrop');
  const shareSheetHandle = document.getElementById('shareSheetHandle');
  const lyricsShareCard = document.getElementById('lyricsShareCard');
  const shareCardLines = document.getElementById('shareCardLines');
  const storySwitchRow = document.getElementById('storySwitchRow');
  const storySwitchBtn = document.getElementById('storySwitchBtn');
  const shareSaveBtn = document.getElementById('shareSaveBtn');
  const shareSendBtn = document.getElementById('shareSendBtn');

  // SnackBar
  const phoneSnackbar = document.getElementById('phoneSnackbar');
  const phoneSnackbarText = document.getElementById('phoneSnackbarText');

  // -------------------- Helpers --------------------
  function t(key) {
    return (I18N[state.lang] && I18N[state.lang][key]) || I18N.id[key] || '';
  }

  function clearChoreo() {
    state.choreoTimers.forEach((id) => clearTimeout(id));
    state.choreoTimers = [];
  }

  function schedule(fn, delayMs) {
    const seq = state.modeSeq;
    const id = setTimeout(() => {
      if (seq !== state.modeSeq) return;
      fn();
    }, delayMs);
    state.choreoTimers.push(id);
  }

  function formatSeconds(sec) {
    const s = Math.max(0, Math.floor(sec));
    const m = Math.floor(s / 60);
    const rem = s % 60;
    return `${m < 10 ? '0' : ''}${m}:${rem < 10 ? '0' : ''}${rem}`;
  }

  // -------------------- Floating SnackBar (Bottom-Up / Top-Down) --------------------
  function showPhoneSnackbar(message) {
    if (state.phoneSnackTimer) clearTimeout(state.phoneSnackTimer);
    phoneSnackbarText.textContent = message;
    phoneSnackbar.classList.remove('is-visible');
    void phoneSnackbar.offsetWidth;
    phoneSnackbar.classList.add('is-visible');
    state.phoneSnackTimer = setTimeout(() => {
      phoneSnackbar.classList.remove('is-visible');
    }, 2400);
  }

  // -------------------- Theme & Language --------------------
  function applyTheme(nextTheme) {
    state.theme = nextTheme;
    htmlEl.setAttribute('data-theme', nextTheme);
    try {
      localStorage.setItem('musevee_web_theme_v2', nextTheme);
    } catch (_) {}
  }

  function toggleTheme() {
    applyTheme(state.theme === 'light' ? 'dark' : 'light');
  }

  function applyLanguage(nextLang) {
    state.lang = nextLang;
    htmlEl.lang = nextLang;
    langToggleLabel.textContent = nextLang.toUpperCase();

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (!val) return;
      if (val.includes('<')) el.innerHTML = val;
      else el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      const val = t(key);
      if (val) el.setAttribute('aria-label', val);
    });

    updateModeSpecCard(state.activeMode);
    try {
      localStorage.setItem('musevee_web_lang_v2', nextLang);
    } catch (_) {}
  }

  // -------------------- Playback & Track Sync --------------------
  function updatePlayIcons() {
    const pauseMarkup =
      '<rect x="6" y="5" width="4" height="14" rx="1.2" /><rect x="14" y="5" width="4" height="14" rx="1.2" />';
    const playMarkup = '<polygon points="7,4.5 20,12 7,19.5" />';

    document.querySelectorAll('.js-play-icon').forEach((svg) => {
      svg.innerHTML = state.isPlaying ? pauseMarkup : playMarkup;
    });

    rotors.forEach((r) => {
      if (r) r.classList.toggle('is-paused', !state.isPlaying);
    });

    if (phoneScreen) {
      phoneScreen.classList.toggle('is-playing', state.isPlaying);
    }
  }

  function startAudioPlayback() {
    const track = TRACKS[state.trackIdx];
    const targetUrl = new URL(track.audioSrc, window.location.href).href;
    if (demoAudio.src !== targetUrl) {
      demoAudio.src = track.audioSrc;
      demoAudio.load();
    }
    const playPromise = demoAudio.play();
    state.isPlaying = true;
    updatePlayIcons();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {
        state.isPlaying = false;
        updatePlayIcons();
      });
    }
  }

  function pauseAudioPlayback() {
    demoAudio.pause();
    state.isPlaying = false;
    updatePlayIcons();
  }

  function togglePlayPause() {
    if (state.isPlaying) {
      pauseAudioPlayback();
    } else {
      startAudioPlayback();
    }
  }

  function loadCurrentAudio(shouldPlay) {
    const track = TRACKS[state.trackIdx];
    demoAudio.pause();
    demoAudio.src = track.audioSrc;
    demoAudio.currentTime = 0;
    demoAudio.load();
    if (shouldPlay) {
      startAudioPlayback();
    } else {
      state.isPlaying = false;
      updatePlayIcons();
    }
  }

  function updateSeekUI() {
    const track = TRACKS[state.trackIdx];
    const duration = Number.isFinite(demoAudio.duration) && demoAudio.duration > 0 ? demoAudio.duration : track.durationSec;
    const current = Number.isFinite(demoAudio.duration) && demoAudio.duration > 0
      ? demoAudio.currentTime
      : (state.progressPct / 100) * duration;
    npSeekFill.style.width = `${state.progressPct}%`;
    npCurrentTime.textContent = formatSeconds(current);
  }

  function getCurrentLyrics() {
    const track = TRACKS[state.trackIdx];
    return state.romajiOn ? track.lyricsRomaji : track.lyricsOriginal;
  }

  function updateTripletLyrics() {
    const lines = getCurrentLyrics();
    const i = state.activeLyricIdx;
    const prevText = lines[i - 1] || '';
    const activeText = lines[i] || '';
    const nextText = lines[i + 1] || '';

    introPrev.textContent = prevText;
    introActive.textContent = activeText;
    introNext.textContent = nextText;

    document.querySelectorAll('.js-hero-ly-prev').forEach((el) => (el.textContent = prevText));
    document.querySelectorAll('.js-hero-ly-active').forEach((el) => (el.textContent = activeText));
    document.querySelectorAll('.js-hero-ly-next').forEach((el) => (el.textContent = nextText));
  }

  function syncTrackUI() {
    const track = TRACKS[state.trackIdx];

    document.querySelectorAll('.js-track-title').forEach((el) => (el.textContent = track.title));
    document.querySelectorAll('.js-track-artist').forEach((el) => (el.textContent = track.artist));
    document.querySelectorAll('.js-track-cover').forEach((el) => {
      el.setAttribute('data-track', String(state.trackIdx));
    });

    npTotalTime.textContent = track.durationLabel;
    updateSeekUI();

    trackChips.forEach((chip) => {
      chip.classList.toggle('is-active', Number(chip.getAttribute('data-track-idx')) === state.trackIdx);
    });

    queueRows.forEach((row) => {
      const isMatch = Number(row.getAttribute('data-track-idx')) === state.trackIdx;
      row.classList.toggle('is-active', isMatch);
      const eq = row.querySelector('.queue-eq');
      if (eq) eq.style.opacity = isMatch ? '1' : '0';
    });

    renderLyrics(false);
    renderShareCardLines();
  }

  function setTrack(idx, opts) {
    const options = opts || {};
    const keepPlaying = typeof options.autoplay === 'boolean' ? options.autoplay : state.isPlaying;
    state.trackIdx = ((idx % TRACKS.length) + TRACKS.length) % TRACKS.length;
    state.activeLyricIdx = 3;
    state.selectedLines = new Set([3, 4]);
    state.progressPct = 0;
    loadCurrentAudio(keepPlaying);
    syncTrackUI();
  }

  // -------------------- Panel 0 Lyrics Rendering --------------------
  function renderLyrics(animateSwap) {
    const lines = getCurrentLyrics();
    updateTripletLyrics();

    if (phoneLyricsList.children.length !== lines.length) {
      phoneLyricsList.innerHTML = '';
      lines.forEach((line, idx) => {
        const div = document.createElement('div');
        div.className = 'lyric-row';
        div.setAttribute('data-line-idx', String(idx));
        div.textContent = line;
        div.addEventListener('click', () => handleLyricRowClick(idx));
        phoneLyricsList.appendChild(div);
      });
    } else {
      Array.from(phoneLyricsList.children).forEach((el, idx) => {
        if (animateSwap) {
          el.classList.remove('is-romaji-swap');
          setTimeout(() => {
            el.textContent = lines[idx];
            void el.offsetWidth;
            el.classList.add('is-romaji-swap');
          }, idx * 28);
        } else {
          el.textContent = lines[idx];
        }
      });
    }

    syncLyricClasses();
  }

  function syncLyricClasses() {
    phoneLyricsList.classList.toggle('is-selecting', state.isSelecting);
    const rows = Array.from(phoneLyricsList.children);
    rows.forEach((el, idx) => {
      const dist = Math.abs(idx - state.activeLyricIdx);
      el.classList.remove('dist-0', 'dist-1', 'is-selected');
      if (dist === 0) el.classList.add('dist-0');
      else if (dist === 1) el.classList.add('dist-1');

      if (state.isSelecting && state.selectedLines.has(idx)) {
        el.classList.add('is-selected');
      }
    });
  }

  function handleLyricRowClick(idx) {
    if (state.isSelecting) {
      if (state.selectedLines.has(idx)) {
        if (state.selectedLines.size > 1) state.selectedLines.delete(idx);
      } else {
        state.selectedLines.add(idx);
      }
      syncLyricClasses();
      renderShareCardLines();
    } else {
      state.activeLyricIdx = idx;
      if (state.isPlaying && Number.isFinite(demoAudio.duration) && demoAudio.duration > 0) {
        const targetSec = Math.min(Math.max(0, demoAudio.duration - 1), idx * 8 + 0.25);
        demoAudio.currentTime = targetSec;
        state.progressPct = (targetSec / demoAudio.duration) * 100;
        updateSeekUI();
      }
      updateTripletLyrics();
      syncLyricClasses();
    }
  }

  // -------------------- Phone Panel / Queue / Romaji / Share State --------------------
  function setPanel(panelIdx) {
    state.activePanel = panelIdx;
    phoneScreen.setAttribute('data-panel', String(panelIdx));
    pagerDot0.classList.toggle('is-active', panelIdx === 0);
    pagerDot1.classList.toggle('is-active', panelIdx === 1);
  }

  function setQueueOpen(open) {
    state.isQueueOpen = open;
    phoneScreen.classList.toggle('is-queue-open', open);
    transportMorphRow.classList.toggle('is-morphed', open);
    phoneQueueBtn.classList.toggle('is-dim', !open);
    if (open) {
      setSelectionMode(false);
      setShareSheetOpen(false);
    }
  }

  function setRomaji(enabled, withSnack) {
    state.romajiOn = enabled;
    phoneRomajiSvg.innerHTML = `<use href="#${enabled ? 'icon-romaji-on' : 'icon-romaji-off'}" />`;
    renderLyrics(true);
    renderShareCardLines();
    if (withSnack) {
      showPhoneSnackbar(enabled ? t('snackRomajiOn') : t('snackRomajiOff'));
    }
  }

  function setSelectionMode(active) {
    state.isSelecting = active;
    selectionSplitBar.classList.toggle('is-open', active);
    if (active) {
      setQueueOpen(false);
    }
    syncLyricClasses();
  }

  function renderShareCardLines() {
    const lines = getCurrentLyrics();
    const sorted = Array.from(state.selectedLines).sort((a, b) => a - b);
    shareCardLines.innerHTML = '';
    sorted.forEach((idx, i) => {
      if (i > 0 && idx > sorted[i - 1] + 1) {
        const gap = document.createElement('div');
        gap.className = 'share-card-line';
        gap.style.opacity = '0.45';
        gap.style.fontSize = '0.72rem';
        gap.textContent = '(...)';
        shareCardLines.appendChild(gap);
      }
      const lineEl = document.createElement('div');
      lineEl.className = 'share-card-line';
      lineEl.textContent = lines[idx] || '';
      shareCardLines.appendChild(lineEl);
    });
  }

  function setShareSheetOpen(open) {
    state.isShareSheetOpen = open;
    if (open) renderShareCardLines();
    shareSheetBackdrop.classList.toggle('is-open', open);
  }

  function setStoryMode(story) {
    state.isStoryMode = story;
    lyricsShareCard.classList.toggle('is-story', story);
    storySwitchBtn.classList.toggle('is-on', story);
    storySwitchBtn.setAttribute('aria-checked', String(story));
  }

  // -------------------- 4 Focused Interactive Mode Choreographies --------------------
  function updateModeSpecCard(mode) {
    const desc = I18N[state.lang].modeDescs[mode];
    if (desc && modeDetailDesc) modeDetailDesc.textContent = desc;
  }

  function setMode(mode, opts) {
    const options = opts || {};
    const animate = options.animate !== false;
    state.modeSeq += 1;
    clearChoreo();
    state.activeMode = mode;

    modeBtns.forEach((btn) => {
      const isMatch = btn.getAttribute('data-mode') === mode;
      btn.classList.toggle('is-active', isMatch);
      btn.setAttribute('aria-selected', String(isMatch));
    });

    updateModeSpecCard(mode);

    // Clean reset before mode choreography
    setShareSheetOpen(false);
    setSelectionMode(false);
    setQueueOpen(false);

    if (mode === 'now-playing') {
      setPanel(1);
      if (animate) {
        // Open Playback Queue + Morph Pill smoothly, then settle back to Vinyl Now Playing
        schedule(() => setQueueOpen(true), 680);
        schedule(() => setQueueOpen(false), 3000);
      }
    } else if (mode === 'lyrics-stage') {
      setPanel(0);
      state.activeLyricIdx = 2;
      updateTripletLyrics();
      syncLyricClasses();

      // Gentle vertical lyric progression in centered 3-line focus
      schedule(() => {
        state.activeLyricIdx = 3;
        updateTripletLyrics();
        syncLyricClasses();
      }, 650);

      schedule(() => {
        state.activeLyricIdx = 4;
        updateTripletLyrics();
        syncLyricClasses();
      }, 1750);
    } else if (mode === 'romaji') {
      setPanel(0);
      state.activeLyricIdx = 3;
      setRomaji(false, false);

      schedule(() => {
        setRomaji(true, true);
      }, 460);
    } else if (mode === 'share-card') {
      setPanel(0);
      state.activeLyricIdx = 3;
      state.selectedLines = new Set([3, 4]);
      setStoryMode(false);
      syncLyricClasses();

      // 1. Expand into inline selection mode + center-splitting Cancel/Share
      schedule(() => {
        setSelectionMode(true);
      }, 280);

      // 2. Open blurred Share Lyrics Card sheet
      schedule(() => {
        setShareSheetOpen(true);
      }, 1680);

      // 3. Flip frameless Switch to Story -> 9:16 frosted Story card
      schedule(() => {
        setStoryMode(true);
      }, 2950);
    }
  }

  // -------------------- Event Listeners --------------------
  themeToggleBtn.addEventListener('click', toggleTheme);

  langToggleBtn.addEventListener('click', () => {
    applyLanguage(state.lang === 'id' ? 'en' : 'id');
  });

  // Hero controls
  heroVinylDisc.addEventListener('click', togglePlayPause);
  heroPlayBtn.addEventListener('click', togglePlayPause);
  heroPrevBtn.addEventListener('click', () => setTrack(state.trackIdx - 1));
  heroNextBtn.addEventListener('click', () => setTrack(state.trackIdx + 1));

  // Mode buttons & replay
  modeBtns.forEach((btn) => {
    btn.addEventListener('click', () => setMode(btn.getAttribute('data-mode')));
  });
  replayModeBtn.addEventListener('click', () => setMode(state.activeMode));

  // Track chips
  trackChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      setTrack(Number(chip.getAttribute('data-track-idx')));
    });
  });

  // In-Phone interactions
  npVinylDisc.addEventListener('click', togglePlayPause);
  npPlayBtn.addEventListener('click', togglePlayPause);
  npPrevBtn.addEventListener('click', () => setTrack(state.trackIdx - 1));
  npNextBtn.addEventListener('click', () => setTrack(state.trackIdx + 1));
  tpShuffleBtn.addEventListener('click', () => tpShuffleBtn.classList.toggle('is-on'));
  tpRepeatBtn.addEventListener('click', () => tpRepeatBtn.classList.toggle('is-on'));

  npFavBtn.addEventListener('click', () => {
    const active = npFavBtn.classList.toggle('is-fav');
    npHeartSvg.setAttribute('fill', active ? 'currentColor' : 'none');
  });

  pagerDot0.addEventListener('click', () => {
    setQueueOpen(false);
    setPanel(0);
  });
  pagerDot1.addEventListener('click', () => {
    setQueueOpen(false);
    setSelectionMode(false);
    setPanel(1);
  });

  phoneRomajiBtn.addEventListener('click', () => setRomaji(!state.romajiOn, true));
  phoneQueueBtn.addEventListener('click', () => setQueueOpen(!state.isQueueOpen));
  phoneSelectBtn.addEventListener('click', () => {
    if (state.activePanel !== 0) setPanel(0);
    setSelectionMode(!state.isSelecting);
  });
  selCancelBtn.addEventListener('click', () => setSelectionMode(false));
  selShareBtn.addEventListener('click', () => setShareSheetOpen(true));

  queueRows.forEach((row) => {
    row.addEventListener('click', () => {
      setTrack(Number(row.getAttribute('data-track-idx')));
    });
  });

  npSeekTrack.addEventListener('click', (e) => {
    const rect = npSeekTrack.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    state.progressPct = pct;
    if (Number.isFinite(demoAudio.duration) && demoAudio.duration > 0) {
      demoAudio.currentTime = (pct / 100) * demoAudio.duration;
    }
    updateSeekUI();
  });

  // Real HTML5 Audio Lifecycle Sync
  demoAudio.addEventListener('loadedmetadata', () => {
    if (!Number.isFinite(demoAudio.duration) || demoAudio.duration <= 0) return;
    const track = TRACKS[state.trackIdx];
    track.durationSec = demoAudio.duration;
    track.durationLabel = formatSeconds(demoAudio.duration);
    npTotalTime.textContent = track.durationLabel;
    const queueSub = document.querySelector(`[data-queue-sub="${state.trackIdx}"]`);
    if (queueSub) {
      queueSub.textContent = `${track.artist} • ${track.durationLabel}`;
    }
    updateSeekUI();
  });

  demoAudio.addEventListener('timeupdate', () => {
    if (!Number.isFinite(demoAudio.duration) || demoAudio.duration <= 0) return;
    state.progressPct = (demoAudio.currentTime / demoAudio.duration) * 100;
    updateSeekUI();

    if (!state.isSelecting && !state.isShareSheetOpen && state.choreoTimers.length === 0 && state.isPlaying) {
      const lineCount = TRACKS[state.trackIdx].lyricsOriginal.length;
      const computedIdx = Math.floor(demoAudio.currentTime / 8) % lineCount;
      if (computedIdx !== state.activeLyricIdx) {
        state.activeLyricIdx = computedIdx;
        updateTripletLyrics();
        syncLyricClasses();
      }
    }
  });

  demoAudio.addEventListener('play', () => {
    if (!state.isPlaying) {
      state.isPlaying = true;
      updatePlayIcons();
    }
  });

  demoAudio.addEventListener('pause', () => {
    if (state.isPlaying && !demoAudio.ended) {
      state.isPlaying = false;
      updatePlayIcons();
    }
  });

  demoAudio.addEventListener('ended', () => {
    if (tpRepeatBtn.classList.contains('is-on')) {
      demoAudio.currentTime = 0;
      startAudioPlayback();
    } else {
      setTrack(state.trackIdx + 1, { autoplay: true });
    }
  });

  // Share Card sheet
  shareSheetHandle.addEventListener('click', () => setShareSheetOpen(false));
  shareSheetBackdrop.addEventListener('click', (e) => {
    if (e.target === shareSheetBackdrop) setShareSheetOpen(false);
  });
  storySwitchRow.addEventListener('click', (e) => {
    e.preventDefault();
    setStoryMode(!state.isStoryMode);
  });
  shareSaveBtn.addEventListener('click', () => showPhoneSnackbar(t('snackShareSaved')));
  shareSendBtn.addEventListener('click', () => showPhoneSnackbar(t('snackShareSent')));

  // FAQ Accordions
  document.querySelectorAll('.faq-q').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });
  });

  // Scroll Reveal
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-in'));
  }

  // -------------------- Init --------------------
  try {
    const savedTheme = localStorage.getItem('musevee_web_theme_v2');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      applyTheme(savedTheme);
    } else {
      applyTheme('light');
    }
    const savedLang = localStorage.getItem('musevee_web_lang_v2');
    if (savedLang === 'en' || savedLang === 'id') {
      state.lang = savedLang;
    }
  } catch (_) {
    applyTheme('light');
  }

  phoneRomajiSvg.innerHTML = `<use href="#${state.romajiOn ? 'icon-romaji-on' : 'icon-romaji-off'}" />`;
  loadCurrentAudio(false);
  syncTrackUI();
  updatePlayIcons();
  applyLanguage(state.lang);
  setMode('now-playing', { animate: false });
})();
