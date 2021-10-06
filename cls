[33mcommit 6840a28445216b00fec93d7727e3e20f417e4855[m[33m ([m[1;32mmaster[m[33m)[m
Author: mr.Rhenium <mr.rhenium75614@gmail.com>
Date:   Fri Oct 1 19:48:55 2021 +0530

    1st Weeks completed

[1mdiff --git a/public/assets/images/alberto.png b/public/assets/images/alberto.png[m
[1mnew file mode 100644[m
[1mindex 0000000..afcf53a[m
Binary files /dev/null and b/public/assets/images/alberto.png differ
[1mdiff --git a/public/assets/images/buffet.png b/public/assets/images/buffet.png[m
[1mnew file mode 100644[m
[1mindex 0000000..9c35105[m
Binary files /dev/null and b/public/assets/images/buffet.png differ
[1mdiff --git a/public/assets/images/elaicheesecake.png b/public/assets/images/elaicheesecake.png[m
[1mnew file mode 100644[m
[1mindex 0000000..de2430f[m
Binary files /dev/null and b/public/assets/images/elaicheesecake.png differ
[1mdiff --git a/public/assets/images/logo.png b/public/assets/images/logo.png[m
[1mnew file mode 100644[m
[1mindex 0000000..fee0a33[m
Binary files /dev/null and b/public/assets/images/logo.png differ
[1mdiff --git a/public/assets/images/uthappizza.png b/public/assets/images/uthappizza.png[m
[1mnew file mode 100644[m
[1mindex 0000000..2fe3aab[m
Binary files /dev/null and b/public/assets/images/uthappizza.png differ
[1mdiff --git a/public/assets/images/vadonut.png b/public/assets/images/vadonut.png[m
[1mnew file mode 100644[m
[1mindex 0000000..982aa7c[m
Binary files /dev/null and b/public/assets/images/vadonut.png differ
[1mdiff --git a/public/assets/images/zucchipakoda.png b/public/assets/images/zucchipakoda.png[m
[1mnew file mode 100644[m
[1mindex 0000000..94ac97e[m
Binary files /dev/null and b/public/assets/images/zucchipakoda.png differ
[1mdiff --git a/public/bootstrap.css b/public/bootstrap.css[m
[1mnew file mode 100644[m
[1mindex 0000000..f78e177[m
[1m--- /dev/null[m
[1m+++ b/public/bootstrap.css[m
[36m@@ -0,0 +1,11222 @@[m
[32m+[m[32m@charset "UTF-8";[m
[32m+[m[32m/*![m
[32m+[m[32m * Bootstrap v5.1.1 (https://getbootstrap.com/)[m
[32m+[m[32m * Copyright 2011-2021 The Bootstrap Authors[m
[32m+[m[32m * Copyright 2011-2021 Twitter, Inc.[m
[32m+[m[32m * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)[m
[32m+[m[32m */[m
[32m+[m[32m:root {[m
[32m+[m[32m  --bs-blue: #0d6efd;[m
[32m+[m[32m  --bs-indigo: #6610f2;[m
[32m+[m[32m  --bs-purple: #6f42c1;[m
[32m+[m[32m  --bs-pink: #d63384;[m
[32m+[m[32m  --bs-red: #dc3545;[m
[32m+[m[32m  --bs-orange: #fd7e14;[m
[32m+[m[32m  --bs-yellow: #ffc107;[m
[32m+[m[32m  --bs-green: #198754;[m
[32m+[m[32m  --bs-teal: #20c997;[m
[32m+[m[32m  --bs-cyan: #0dcaf0;[m
[32m+[m[32m  --bs-white: #fff;[m
[32m+[m[32m  --bs-gray: #6c757d;[m
[32m+[m[32m  --bs-gray-dark: #343a40;[m
[32m+[m[32m  --bs-gray-100: #f8f9fa;[m
[32m+[m[32m  --bs-gray-200: #e9ecef;[m
[32m+[m[32m  --bs-gray-300: #dee2e6;[m
[32m+[m[32m  --bs-gray-400: #ced4da;[m
[32m+[m[32m  --bs-gray-500: #adb5bd;[m
[32m+[m[32m  --bs-gray-600: #6c757d;[m
[32m+[m[32m  --bs-gray-700: #495057;[m
[32m+[m[32m  --bs-gray-800: #343a40;[m
[32m+[m[32m  --bs-gray-900: #212529;[m
[32m+[m[32m  --bs-primary: #0d6efd;[m
[32m+[m[32m  --bs-secondary: #6c757d;[m
[32m+[m[32m  --bs-success: #198754;[m
[32m+[m[32m  --bs-info: #0dcaf0;[m
[32m+[m[32m  --bs-warning: #ffc107;[m
[32m+[m[32m  --bs-danger: #dc3545;[m
[32m+[m[32m  --bs-light: #f8f9fa;[m
[32m+[m[32m  --bs-dark: #212529;[m
[32m+[m[32m  --bs-primary-rgb: 13, 110, 253;[m
[32m+[m[32m  --bs-secondary-rgb: 108, 117, 125;[m
[32m+[m[32m  --bs-success-rgb: 25, 135, 84;[m
[32m+[m[32m  --bs-info-rgb: 13, 202, 240;[m
[32m+[m[32m  --bs-warning-rgb: 255, 193, 7;[m
[32m+[m[32m  --bs-danger-rgb: 220, 53, 69;[m
[32m+[m[32m  --bs-light-rgb: 248, 249, 250;[m
[32m+[m[32m  --bs-dark-rgb: 33, 37, 41;[m
[32m+[m[32m  --bs-white-rgb: 255, 255, 255;[m
[32m+[m[32m  --bs-black-rgb: 0, 0, 0;[m
[32m+[m[32m  --bs-body-color-rgb: 33, 37, 41;[m
[32m+[m[32m  --bs-body-bg-rgb: 255, 255, 255;[m
[32m+[m[32m  --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";[m
[32m+[m[32m  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;[m
[32m+[m[32m  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));[m
[32m+[m[32m  --bs-body-font-family: var(--bs-font-sans-serif);[m
[32m+[m[32m  --bs-body-font-size: 1rem;[m
[32m+[m[32m  --bs-body-font-weight: 400;[m
[32m+[m[32m  --bs-body-line-height: 1.5;[m
[32m+[m[32m  --bs-body-color: #212529;[m
[32m+[m[32m  --bs-body-bg: #fff;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m*,[m
[32m+[m[32m*::before,[m
[32m+[m[32m*::after {[m
[32m+[m[32m  box-sizing: border-box;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m@media (prefers-reduced-motion: no-preference) {[m
[32m+[m[32m  :root {[m
[32m+[m[32m    scroll-behavior: smooth;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mbody {[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  font-family: var(--bs-body-font-family);[m
[32m+[m[32m  font-size: var(--bs-body-font-size);[m
[32m+[m[32m  font-weight: var(--bs-body-font-weight);[m
[32m+[m[32m  line-height: var(--bs-body-line-height);[m
[32m+[m[32m  color: var(--bs-body-color);[m
[32m+[m[32m  text-align: var(--bs-body-text-align);[m
[32m+[m[32m  background-color: var(--bs-body-bg);[m
[32m+[m[32m  -webkit-text-size-adjust: 100%;[m
[32m+[m[32m  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mhr {[m
[32m+[m[32m  margin: 1rem 0;[m
[32m+[m[32m  color: inherit;[m
[32m+[m[32m  background-color: currentColor;[m
[32m+[m[32m  border: 0;[m
[32m+[m[32m  opacity: 0.25;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mhr:not([size]) {[m
[32m+[m[32m  height: 1px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mh6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {[m
[32m+[m[32m  margin-top: 0;[m
[32m+[m[32m  margin-bottom: 0.5rem;[m
[32m+[m[32m  font-weight: 500;[m
[32m+[m[32m  line-height: 1.2;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mh1, .h1 {[m
[32m+[m[32m  font-size: calc(1.375rem + 1.5vw);[m
[32m+[m[32m}[m
[32m+[m[32m@media (min-width: 1200px) {[m
[32m+[m[32m  h1, .h1 {[m
[32m+[m[32m    font-size: 2.5rem;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mh2, .h2 {[m
[32m+[m[32m  font-size: calc(1.325rem + 0.9vw);[m
[32m+[m[32m}[m
[32m+[m[32m@media (min-width: 1200px) {[m
[32m+[m[32m  h2, .h2 {[m
[32m+[m[32m    font-size: 2rem;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mh3, .h3 {[m
[32m+[m[32m  font-size: calc(1.3rem + 0.6vw);[m
[32m+[m[32m}[m
[32m+[m[32m@media (min-width: 1200px) {[m
[32m+[m[32m  h3, .h3 {[m
[32m+[m[32m    font-size: 1.75rem;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mh4, .h4 {[m
[32m+[m[32m  font-size: calc(1.275rem + 0.3vw);[m
[32m+[m[32m}[m
[32m+[m[32m@media (min-width: 1200px) {[m
[32m+[m[32m  h4, .h4 {[m
[32m+[m[32m    font-size: 1.5rem;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mh5, .h5 {[m
[32m+[m[32m  font-size: 1.25rem;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mh6, .h6 {[m
[32m+[m[32m  font-size: 1rem;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mp {[m
[32m+[m[32m  margin-top: 0;[m
[32m+[m[32m  margin-bottom: 1rem;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mabbr[title],[m
[32m+[m[32mabbr[data-bs-original-title] {[m
[32m+[m[32m  -webkit-text-decoration: underline dotted;[m
[32m+[m[32m  text-decoration: underline dotted;[m
[32m+[m[32m  cursor: help;[m
[32m+[m[32m  -webkit-text-decoration-skip-ink: none;[m
[32m+[m[32m  text-decoration-skip-ink: none;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32maddress {[m
[32m+[m[32m  margin-bottom: 1rem;[m
[32m+[m[32m  font-style: normal;[m
[32m+[m[32m  line-height: inherit;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mol,[m
[32m+[m[32mul {[m
[32m+[m[32m  padding-left: 2rem;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mol,[m
[32m+[m[32mul,[m
[32m+[m[32mdl {[m
[32m+[m[32m  margin-top: 0;[m
[32m+[m[32m  margin-bottom: 1rem;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mol ol,[m
[32m+[m[32mul ul,[m
[32m+[m[32mol ul,[m
[32m+[m[32mul ol {[m
[32m+[m[32m  margin-bottom: 0;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mdt {[m
[32m+[m[32m  font-weight: 700;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mdd {[m
[32m+[m[32m  margin-bottom: 0.5rem;[m
[32m+[m[32m  margin-left: 0;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mblockquote {[m
[32m+[m[32m  margin: 0 0 1rem;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mb,[m
[32m+[m[32mstrong {[m
[32m+[m[32m  font-weight: bolder;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32msmall, .small {[m
[32m+[m[32m  font-size: 0.875em;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mmark, .mark {[m
[32m+[m[32m  padding: 0.2em;[m
[32m+[m[32m  background-color: #fcf8e3;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32msub,[m
[32m+[m[32msup {[m
[32m+[m[32m  position: relative;[m
[32m+[m[32m  font-size: 0.75em;[m
[32m+[m[32m  line-height: 0;[m
[32m+[m[32m  vertical-align: baseline;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32msub {[m
[32m+[m[32m  bottom: -0.25em;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32msup {[m
[32m+[m[32m  top: -0.5em;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32ma {[m
[32m+[m[32m  color: #0d6efd;[m
[32m+[m[32m  text-decoration: underline;[m
[32m+[m[32m}[m
[32m+[m[32ma:hover {[m
[32m+[m[32m  color: #0a58ca;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32ma:not([href]):not([class]), a:not([href]):not([class]):hover {[m
[32m+[m[32m  color: inherit;[m
[32m+[m[32m  text-decoration: none;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mpre,[m
[32m+[m[32mcode,[m
[32m+[m[32mkbd,[m
[32m+[m[32msamp {[m
[32m+[m[32m  font-family: var(--bs-font-monospace);[m
[32m+[m[32m  font-size: 1em;[m
[32m+[m[32m  direction: ltr /* rtl:ignore */;[m
[32m+[m[32m  unicode-bidi: bidi-override;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mpre {[m
[32m+[m[32m  display: block;[m
[32m+[m[32m  margin-top: 0;[m
[32m+[m[32m  margin-bottom: 1rem;[m
[32m+[m[32m  overflow: auto;[m
[32m+[m[32m  font-size: 0.875em;[m
[32m+[m[32m}[m
[32m+[m[32mpre code {[m
[32m+[m[32m  font-size: inherit;[m
[32m+[m[32m  color: inherit;[m
[32m+[m[32m  word-break: normal;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mcode {[m
[32m+[m[32m  font-size: 0.875em;[m
[32m+[m[32m  color: #d63384;[m
[32m+[m[32m  word-wrap: break-word;[m
[32m+[m[32m}[m
[32m+[m[32ma > code {[m
[32m+[m[32m  color: inherit;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mkbd {[m
[32m+[m[32m  padding: 0.2rem 0.4rem;[m
[32m+[m[32m  font-size: 0.875em;[m
[32m+[m[32m  color: #fff;[m
[32m+[m[32m  background-color: #212529;[m
[32m+[m[32m  border-radius: 0.2rem;[m
[32m+[m[32m}[m
[32m+[m[32mkbd kbd {[m
[32m+[m[32m  padding: 0;[m
[32m+[m[32m  font-size: 1em;[m
[32m+[m[32m  font-weight: 700;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mfigure {[m
[32m+[m[32m  margin: 0 0 1rem;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mimg,[m
[32m+[m[32msvg {[m
[32m+[m[32m  vertical-align: middle;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mtable {[m
[32m+[m[32m  caption-side: bottom;[m
[32m+[m[32m  border-collapse: collapse;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mcaption {[m
[32m+[m[32m  padding-top: 0.5rem;[m
[32m+[m[32m  padding-bottom: 0.5rem;[m
[32m+[m[32m  color: #6c757d;[m
[32m+[m[32m  text-align: left;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mth {[m
[32m+[m[32m  text-align: inherit;[m
[32m+[m[32m  text-align: -webkit-match-parent;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mthead,[m
[32m+[m[32mtbody,[m
[32m+[m[32mtfoot,[m
[32m+[m[32mtr,[m
[32m+[m[32mtd,[m
[32m+[m[32mth {[m
[32m+[m[32m  border-color: inherit;[m
[32m+[m[32m  border-style: solid;[m
[32m+[m[32m  border-width: 0;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mlabel {[m
[32m+[m[32m  display: inline-block;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mbutton {[m
[32m+[m[32m  border-radius: 0;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mbutton:focus:not(:focus-visible) {[m
[32m+[m[32m  outline: 0;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32minput,[m
[32m+[m[32mbutton,[m
[32m+[m[32mselect,[m
[32m+[m[32moptgroup,[m
[32m+[m[32mtextarea {[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  font-family: inherit;[m
[32m+[m[32m  font-size: inherit;[m
[32m+[m[32m  line-height: inherit;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mbutton,[m
[32m+[m[32mselect {[m
[32m+[m[32m  text-transform: none;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m[role=button] {[m
[32m+[m[32m  cursor: pointer;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mselect {[m
[32m+[m[32m  word-wrap: normal;[m
[32m+[m[32m}[m
[32m+[m[32mselect:disabled {[m
[32m+[m[32m  opacity: 1;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m[list]::-webkit-calendar-picker-indicator {[m
[32m+[m[32m  display: none;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mbutton,[m
[32m+[m[32m[type=button],[m
[32m+[m[32m[type=reset],[m
[32m+[m[32m[type=submit] {[m
[32m+[m[32m  -webkit-appearance: button;[m
[32m+[m[32m}[m
[32m+[m[32mbutton:not(:disabled),[m
[32m+[m[32m[type=button]:not(:disabled),[m
[32m+[m[32m[type=reset]:not(:disabled),[m
[32m+[m[32m[type=submit]:not(:disabled) {[m
[32m+[m[32m  cursor: pointer;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m::-moz-focus-inner {[m
[32m+[m[32m  padding: 0;[m
[32m+[m[32m  border-style: none;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mtextarea {[m
[32m+[m[32m  resize: vertical;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mfieldset {[m
[32m+[m[32m  min-width: 0;[m
[32m+[m[32m  padding: 0;[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  border: 0;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mlegend {[m
[32m+[m[32m  float: left;[m
[32m+[m[32m  width: 100%;[m
[32m+[m[32m  padding: 0;[m
[32m+[m[32m  margin-bottom: 0.5rem;[m
[32m+[m[32m  font-size: calc(1.275rem + 0.3vw);[m
[32m+[m[32m  line-height: inherit;[m
[32m+[m[32m}[m
[32m+[m[32m@media (min-width: 1200px) {[m
[32m+[m[32m  legend {[m
[32m+[m[32m    font-size: 1.5rem;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m[32mlegend + * {[m
[32m+[m[32m  clear: left;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m::-webkit-datetime-edit-fields-wrapper,[m
[32m+[m[32m::-webkit-datetime-edit-text,[m
[32m+[m[32m::-webkit-datetime-edit-minute,[m
[32m+[m[32m::-webkit-datetime-edit-hour-field,[m
[32m+[m[32m::-webkit-datetime-edit-day-field,[m
[32m+[m[32m::-webkit-datetime-edit-month-field,[m
[32m+[m[32m::-webkit-datetime-edit-year-field {[m
[32m+[m[32m  padding: 0;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m::-webkit-inner-spin-button {[m
[32m+[m[32m  height: auto;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m[type=search] {[m
[32m+[m[32m  outline-offset: -2px;[m
[32m+[m[32m  -webkit-appearance: textfield;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m/* rtl:raw:[m
[32m+[m[32m[type="tel"],[m
[32m+[m[32m[type="url"],[m
[32m+[m[32m[type="email"],[m
[32m+[m[32m[type="number"] {[m
[32m+[m[32m  direction: ltr;[m
[32m+[m[32m}[m
[32m+[m[32m*/[m
[32m+[m[32m::-webkit-search-decoration {[m
[32m+[m[32m  -webkit-appearance: none;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m::-webkit-color-swatch-wrapper {[m
[32m+[m[32m  padding: 0;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m::file-selector-button {[m
[32m+[m[32m  font: inherit;[m
[32m+[m[32m}[m
[32m+[