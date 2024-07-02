/* Unmap the Ace Vim editor. */
api.iunmap("<Ctrl-i>");
api.unmap("<Ctrl-i>");

/* Unmap emoji completion in insert mode. */
api.iunmap(":");

/* Order: left-right hand, inside-out, home-bottom-top-row. */
api.Hints.setCharacters("fdsajklghvcxzmbnuioprewqty");

/* Always use the omnibar when switching tabs. */
settings.tabsThreshold = 0;

settings.theme = `
:root {
  --catppuccin-base: #1e1e2e;
  --catppuccin-blue: #89b4fa;
  --catppuccin-crust: #11111b;
  --catppuccin-flamingo: #f2cdcd;
  --catppuccin-green: #a6e3a1;
  --catppuccin-lavender: #b4befe;
  --catppuccin-mantle: #181825;
  --catppuccin-maroon: #eba0ac;
  --catppuccin-mauve: #cba6f7;
  --catppuccin-overlay0: #6c7086;
  --catppuccin-overlay1: #7f849c;
  --catppuccin-overlay2: #9399b2;
  --catppuccin-peach: #fab387;
  --catppuccin-pink: #f5c2e7;
  --catppuccin-red: #f38ba8;
  --catppuccin-rosewater: #f5e0dc;
  --catppuccin-sapphire: #74c7ec;
  --catppuccin-sky: #89dceb;
  --catppuccin-subtext0: #a6adc8;
  --catppuccin-subtext1: #bac2de;
  --catppuccin-surface0: #313244;
  --catppuccin-surface1: #45475a;
  --catppuccin-surface2: #585b70;
  --catppuccin-teal: #94e2d5;
  --catppuccin-text: #cdd6f4;
  --catppuccin-yellow: #f9e2af;
}

/*
  =============
  Bookmarks (b)
  =============
*/

.sk_theme {
  background: var(--catppuccin-base);
  color: var(--catppuccin-text);
  font-family: "JetBrains Mono";
}

.sk_theme .prompt,
.sk_theme .separator,
.sk_theme .resultPage {
  color: var(--catppuccin-yellow);
}

.sk_theme input {
  color: inherit;
}

/* Disable alternating colors */
.sk_theme #sk_omnibarSearchResult > ul > li:nth-child(odd) {
  background: inherit;
}

.sk_theme #sk_omnibarSearchResult > ul > li.focused {
  background-color: var(--catppuccin-surface0);
}

.sk_theme .omnibar_highlight {
  color: var(--catppuccin-green);
}

.sk_theme .omnibar_folder {
  color: var(--catppuccin-mauve);
}

.sk_theme .omnibar_timestamp {
  color: var(--catppuccin-maroon);
}

.sk_theme .url {
  color: var(--catppuccin-sky);
}

/*
  =======
  URL (t)
  =======
*/

.sk_theme .omnibar_visitcount {
  color: var(--catppuccin-peach);
}

/*
  ========
  Help (?)
  ========
*/

.sk_theme .feature_name {
  color: var(--catppuccin-peach);
}

.sk_theme kbd {
  background-color: var(--catppuccin-mantle);
  color: inherit;
}

.sk_theme .annotation {
  color: inherit;
}

/*
  ==============
  Rich hints (;)
  ==============
*/

#sk_keystroke {
  background-color: var(--catppuccin-base);
  color: var(--catppuccin-pink);
}

.expandRichHints kbd > .candidates {
  color: var(--catppuccin-pink);
}

.expandRichHints span.annotation {
  color: var(--catppuccin-lavender);
}
`;
