/* ═══════════════════════════════════════════
   MORPHE 共通JavaScript
   進化モーフ・スクロール・フローティングCTA
   ═══════════════════════════════════════════ */

(function() {
  'use strict';

  /* ── DOMContentLoaded前に実行する場合の保護 ── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    initScrollProgress();
    initMorphEvolution();
    initFloatingCTA();
    initActiveNav();
    initAnchorSmoothScroll();
  }

  /* ═══ スクロール進捗バー ═══ */
  function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;

    let ticking = false;
    function update() {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const pct = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      bar.style.width = pct + '%';
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
    update();
  }

  /* ═══ 進化するモーフ（10ステージ） ═══ */
  const morphStages = [
    { threshold: 0.00, src: 'morph_egg.png',       label: 'STAGE 0', bubble: 'まだ眠っています…' },
    { threshold: 0.04, src: 'morph_hatching.png',  label: 'STAGE 1', bubble: '生まれます！' },
    { threshold: 0.10, src: 'morph_idle.png',      label: 'STAGE 2', bubble: 'こんにちは！' },
    { threshold: 0.25, src: 'morph_worried.png',   label: 'STAGE 3', bubble: 'わかります…' },
    { threshold: 0.40, src: 'morph_tools.png',     label: 'STAGE 4', bubble: '解決しよう！' },
    { threshold: 0.55, src: 'morph_design.png',    label: 'STAGE 5', bubble: '創造の時間！' },
    { threshold: 0.70, src: 'morph_thinking.png',  label: 'STAGE 6', bubble: '一緒に考えよう' },
    { threshold: 0.82, src: 'morph_happy.png',     label: 'STAGE 7', bubble: '嬉しい！' },
    { threshold: 0.92, src: 'morph_ascended.png',  label: 'STAGE 8', bubble: '完全進化！' },
    { threshold: 0.97, src: 'morph_welcome.png',   label: 'STAGE 9', bubble: 'ようこそ！' }
  ];

  function initMorphEvolution() {
    const morphEvo = document.getElementById('morph-evolution');
    if (!morphEvo) return;

    const morphEvoImg = document.getElementById('morphEvoImg');
    const morphStageLabel = document.getElementById('morphStageLabel');
    const morphBubble = document.getElementById('morphBubble');
    if (!morphEvoImg || !morphStageLabel || !morphBubble) return;

    /* assetsへのパスを自動判定（コーポレートTOP=/assets, LP=/assets） */
    const assetsBase = morphEvoImg.dataset.assetsBase || '/assets';

    let currentStageIndex = 0;
    let bubbleTimeoutId = null;

    function getStageForProgress(progress) {
      let stageIndex = 0;
      for (let i = morphStages.length - 1; i >= 0; i--) {
        if (progress >= morphStages[i].threshold) {
          stageIndex = i;
          break;
        }
      }
      return stageIndex;
    }

    function updateMorphStage(progress) {
      const newStageIndex = getStageForProgress(progress);
      if (newStageIndex !== currentStageIndex) {
        currentStageIndex = newStageIndex;
        const stage = morphStages[newStageIndex];

        morphEvoImg.style.opacity = '0';
        morphEvoImg.style.transform = 'scale(0.7)';
        setTimeout(() => {
          morphEvoImg.src = `${assetsBase}/${stage.src}`;
          morphEvoImg.style.opacity = '1';
          morphEvoImg.style.transform = 'scale(1)';
        }, 250);

        morphStageLabel.textContent = stage.label;
        morphBubble.textContent = stage.bubble;

        morphEvo.classList.add('show-bubble', 'celebrate');
        clearTimeout(bubbleTimeoutId);
        bubbleTimeoutId = setTimeout(() => {
          morphEvo.classList.remove('show-bubble', 'celebrate');
        }, 2200);
      }
    }

    /* スクロール監視 */
    let ticking = false;
    function handleScroll() {
      if (ticking) return;
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const totalHeight = document.body.scrollHeight - window.innerHeight;

        /* セレクションHEROがある場合はそこを過ぎたら表示 */
        const selectionHero = document.querySelector('.selection-hero');
        const heroOffset = selectionHero ? selectionHero.offsetHeight : 0;

        const showMorph = selectionHero
          ? scrollY > heroOffset - 200
          : scrollY > 200;

        morphEvo.classList.toggle('visible', showMorph);

        if (showMorph) {
          if (selectionHero) {
            const adjustedScroll = scrollY - heroOffset;
            const adjustedTotal = totalHeight - heroOffset;
            const adjustedProgress = adjustedScroll / Math.max(adjustedTotal, 1);
            updateMorphStage(adjustedProgress);
          } else {
            const progress = scrollY / Math.max(totalHeight, 1);
            updateMorphStage(progress);
          }
        }

        ticking = false;
      });
      ticking = true;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    /* クリックで吹き出し再表示 */
    morphEvo.addEventListener('click', () => {
      morphEvo.classList.add('show-bubble', 'celebrate');
      clearTimeout(bubbleTimeoutId);
      bubbleTimeoutId = setTimeout(() => {
        morphEvo.classList.remove('show-bubble', 'celebrate');
      }, 2200);
    });
  }

  /* ═══ フローティング相談ボタン ═══ */
  function initFloatingCTA() {
    const cta = document.querySelector('.floating-cta');
    if (!cta) return;

    let ticking = false;
    function update() {
      /* スクロール400px超えたら表示 */
      const visible = window.scrollY > 400;
      cta.classList.toggle('visible', visible);
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
  }

  /* ═══ 現在ページのナビをハイライト ═══ */
  function initActiveNav() {
    const path = window.location.pathname;
    document.querySelectorAll('.nav-links a').forEach(link => {
      const href = link.getAttribute('href');
      if (href === path || (path === '/' && href === '/')) {
        link.classList.add('active');
      } else if (href !== '/' && path.startsWith(href)) {
        link.classList.add('active');
      }
    });
  }

  /* ═══ アンカーリンクのスムーススクロール ═══ */
  function initAnchorSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const target = link.getAttribute('href');
        if (target === '#' || target === '#contact') {
          /* #contactはcontact.htmlへのリダイレクトに頼る場合あり */
          return;
        }
        const el = document.querySelector(target);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

})();
