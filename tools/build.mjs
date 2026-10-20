// Wraps the artifact page (mallang.html, no skeleton) into a standalone index.html for GitHub Pages.
import { readFileSync, writeFileSync } from 'node:fs';
const body = readFileSync(new URL('../mallang.html', import.meta.url), 'utf8');
const head = `<!doctype html>
<html lang="zh">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="말랑 捏捏铺 — 3D 半透明果冻捏捏，按、拉、两指捏、转着看，还能上传照片做成捏捏。">
<meta property="og:title" content="말랑 捏捏铺">
<meta property="og:description" content="3D 半透明果冻捏捏，按住捏、拖着拉、松手弹。">
</head>
<body>
`;
writeFileSync(new URL('../index.html', import.meta.url), head + body + '\n</body>\n</html>\n');
console.log('index.html written');
