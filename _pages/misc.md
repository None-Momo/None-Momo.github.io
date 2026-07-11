---
layout: default
permalink: /misc/
title: misc
nav: true
nav_order: 4
---

<style>
  :root {
    --global-theme-color: #28a745;
    --global-hover-color: #28a745;
  }

  .misc-section {
    margin-top: 3rem;
  }

  .misc-tabs {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin: 2.5rem 0 0;
    border-bottom: 1px solid #e5e5e5;
  }

  .misc-tab {
    appearance: none;
    border: 0;
    border-bottom: 3px solid transparent;
    background: transparent;
    color: #333;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 700;
    padding: 0 0 0.75rem;
  }

  .misc-tab:hover,
  .misc-tab.is-active {
    color: var(--global-theme-color);
  }

  .misc-tab.is-active {
    border-bottom-color: var(--global-theme-color);
  }

  .misc-panel[hidden] {
    display: none;
  }

  .misc-section-title {
    margin: 0 0 1.25rem;
    font-size: 2rem;
    font-weight: 700;
    color: #000;
  }

  .misc-section-note {
    margin: 0 0 1.5rem;
    font-size: 1.05rem;
    color: #333;
  }
</style>

<div class="post">

  <div class="header-bar">
    <h1>Misc</h1>
    <h2>A curated corner of words and small personal things</h2>
  </div>

  <div class="misc-tabs" role="tablist" aria-label="Misc sections">
    <button class="misc-tab is-active" type="button" role="tab" aria-selected="true" aria-controls="words-panel" id="words-tab" data-misc-tab="words-panel">Words That Shaped Me</button>
    <button class="misc-tab" type="button" role="tab" aria-selected="false" aria-controls="personal-panel" id="personal-tab" data-misc-tab="personal-panel">Personal Odds and Ends</button>
  </div>

  <section class="misc-section misc-panel" id="words-panel" role="tabpanel" aria-labelledby="words-tab">
    <h2 class="misc-section-title">Words That Shaped Me</h2>
    <p class="misc-section-note">Pieces of writing that gave me language, courage, or a new way to look at research and life.</p>
    <p style="margin: 2rem auto 2.5rem; font-size: 1.25rem; font-weight: 700; color: #000; text-align: center">
      Words carry weight. Even though English is not my mother tongue,<br />these writings still move me to tears.
    </p>

    <ul class="post-list">

      <li>
        <h3>
          <a class="post-title" href="https://www.yumengma.com/#/notes/chi2026" target="_blank">Yumeng's Reflection of First CHI</a>
          <svg width="2rem" height="2rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </h3>
        <p>A PhD student's candid reflections on attending CHI for the very first time — navigating an unfamiliar academic world, forming unexpected connections, and discovering what it means to belong to the HCI research community.</p>
      </li>

      <li>
        <h3>
          <a class="post-title" href="https://www.shengdongzhao.com/_book/dedication.html" target="_blank">Prof Shen's Memory of His PhD Advisor</a>
          <svg width="2rem" height="2rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </h3>
        <p>A memorial dedicating a book to the author's late PhD advisor, Mark Chignell, reflecting on his profound influence and legacy.</p>
      </li>

      <li>
        <h3>
          <a class="post-title" href="https://ryanyen2.github.io/blog/the-fear-of-success/" target="_blank">Ryan (MIT) — The Fear of Success</a>
          <svg width="2rem" height="2rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </h3>
        <p>Researchers often fear releasing imperfect work, yet sharing incomplete maps of understanding is where real growth begins.</p>
      </li>

      <li>
        <h3>
          <a class="post-title" href="https://medium.com/bits-and-behavior/chi-2025-frayed-edges-4c38ea98069d" target="_blank">Prof Amy's Reflection of CHI 2025</a>
          <svg width="2rem" height="2rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </h3>
        <p>CHI 2025 brought meaningful scholarly connection but felt shadowed by authoritarianism's threat to research and a troubling LLM hype overshadowing deeper societal concerns.</p>
      </li>

      <li>
        <h3>
          <a class="post-title" href="https://medium.com/bits-and-behavior/on-the-inherent-injustice-of-admissions-ccada556409" target="_blank">Prof Amy's Reflection on the Injustice of Admissions</a>
          <svg width="2rem" height="2rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </h3>
        <p>College admissions are inherently unjust, denying deserving students access not by merit but by resource constraints — and only more public funding can fix it.</p>
      </li>

    </ul>

  </section>

  <section class="misc-section misc-panel" id="personal-panel" role="tabpanel" aria-labelledby="personal-tab" hidden>
    <h2 class="misc-section-title">Personal Odds and Ends</h2>
    <p class="misc-section-note">I love writing in Chinese, and I have left behind a few small pieces that still feel interesting to me.</p>

    <ul class="post-list">

      <li>
        <h3>
          <a class="post-title" href="{{ '/misc/ecclesiastes-3/' | relative_url }}">Ecclesiastes 3</a>
          <svg width="2rem" height="2rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </h3>
        <p>A Chinese reflection on Ecclesiastes 3, tracing seasons, time, and the quiet dignity of living within what we cannot fully control.</p>
      </li>

      <li>
        <h3>
          <a class="post-title" href="{{ '/misc/foreword-to-the-book-another-new-culture-movement/' | relative_url }}">Foreword to the Book Another New Culture Movement</a>
          <svg width="2rem" height="2rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </h3>
        <p>A passage that deeply moved me.</p>
      </li>

    </ul>

  </section>

</div>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll("[data-misc-tab]");
    const panels = document.querySelectorAll(".misc-panel");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.dataset.miscTab;

        tabs.forEach((item) => {
          const isActive = item === tab;
          item.classList.toggle("is-active", isActive);
          item.setAttribute("aria-selected", String(isActive));
        });

        panels.forEach((panel) => {
          panel.hidden = panel.id !== target;
        });
      });
    });
  });
</script>
