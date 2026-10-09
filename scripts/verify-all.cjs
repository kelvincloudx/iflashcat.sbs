const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'dist');
const TARGET_AFF_URL = 'https://varnexa.lingdongaff.com/#/?code=HHoxxHGa';
const EXPECTED_DOMAIN = 'https://iflashcat.sbs';

console.log('====================================================');
console.log('⚡ 开始全面自动化验收测试 (SpeedCAT iflashcat.sbs) ⚡');
console.log('====================================================\n');

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;

function check(title, condition, extraInfo = '') {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`[PASS] ${title} ${extraInfo}`);
  } else {
    failedChecks++;
    console.error(`[FAIL] ${title} ${extraInfo}`);
  }
}

// 1. Check Dist directory and generated files
check('dist 目录存在', fs.existsSync(DIST_DIR));
const expectedHtmlFiles = [
  'index.html',
  'pricing/index.html',
  'faq/index.html',
  'guides/index.html',
  'guides/speedcat-first-purchase/index.html',
  'guides/speedcat-plan-cycles/index.html',
  'guides/speedcat-subscription-management/index.html',
  'guides/speedcat-devices/index.html',
  'guides/speedcat-rule-mode/index.html',
  'guides/speedcat-traffic-planning/index.html',
  'guides/speedcat-connection-checklist/index.html',
  'guides/speedcat-streaming-ai/index.html'
];

expectedHtmlFiles.forEach(relPath => {
  const fullPath = path.join(DIST_DIR, relPath);
  check(`静态文件生成: /${relPath}`, fs.existsSync(fullPath));
});

// 2. Check Robots.txt and Sitemap.xml
const robotsPath = path.join(DIST_DIR, 'robots.txt');
check('robots.txt 存在', fs.existsSync(robotsPath));
if (fs.existsSync(robotsPath)) {
  const robotsTxt = fs.readFileSync(robotsPath, 'utf8');
  check('robots.txt 允许抓取且引用 sitemap', robotsTxt.includes('Allow: /') && robotsTxt.includes('sitemap.xml'));
}

const sitemapPath = path.join(DIST_DIR, 'sitemap.xml');
check('sitemap.xml 存在', fs.existsSync(sitemapPath));
if (fs.existsSync(sitemapPath)) {
  const sitemapXml = fs.readFileSync(sitemapPath, 'utf8');
  check('sitemap 包含首页', sitemapXml.includes('https://iflashcat.sbs/'));
  check('sitemap 包含套餐页', sitemapXml.includes('https://iflashcat.sbs/pricing/'));
  check('sitemap 包含教程页', sitemapXml.includes('https://iflashcat.sbs/guides/'));
  check('sitemap 包含FAQ页', sitemapXml.includes('https://iflashcat.sbs/faq/'));
  const articleSlugs = [
    'speedcat-first-purchase',
    'speedcat-plan-cycles',
    'speedcat-subscription-management',
    'speedcat-devices',
    'speedcat-rule-mode',
    'speedcat-traffic-planning',
    'speedcat-connection-checklist',
    'speedcat-streaming-ai'
  ];
  articleSlugs.forEach(slug => {
    check(`sitemap 包含文章 /guides/${slug}/`, sitemapXml.includes(`https://iflashcat.sbs/guides/${slug}/`));
  });
}

// 3. Check All HTML Files for SEO, Canonical, Brand, Footer PBN links, AFF Links, Keywords
const allHtmlPaths = [];
function collectHtml(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      collectHtml(full);
    } else if (item.endsWith('.html')) {
      allHtmlPaths.push(full);
    }
  }
}
if (fs.existsSync(DIST_DIR)) {
  collectHtml(DIST_DIR);
}

console.log(`\n检查 ${allHtmlPaths.length} 个 HTML 页面质量规范:`);

const requiredKeywords = [
  '便宜机场', '安全机场', '机场推荐', '科学上网', '魔法梯子',
  '稳定节点', 'clash节点', 'clash机场', 'clashparty机场', '翻墙出海', '全球加速'
];

allHtmlPaths.forEach(htmlPath => {
  const rel = path.relative(DIST_DIR, htmlPath);
  const content = fs.readFileSync(htmlPath, 'utf8');

  // Aff link check
  check(`[${rel}] 包含官方注册推广链接`, content.includes(TARGET_AFF_URL));

  // Canonical tag check
  check(`[${rel}] 包含规范 Canonical 标签`, content.includes('<link rel="canonical"'));

  // SEO GEO tag check
  check(`[${rel}] 包含 GEO 定位标签`, content.includes('name="geo.region"'));

  // PBN Footer Links (核心任务 2) Check
  check(`[${rel}] 页脚包含 PBN 外链 jichangreview.net (机场测评)`, content.includes('jichangreview.net') && content.includes('机场测评'));
  check(`[${rel}] 页脚包含 PBN 外链 jichangguide.net (机场教程)`, content.includes('jichangguide.net') && content.includes('机场教程'));

  // Check dofollow status (Must NOT have nofollow on these PBN links)
  const pbnReviewMatch = content.match(/<a[^>]*href=["']https?:\/\/jichangreview\.net["'][^>]*>/i);
  const pbnGuideMatch = content.match(/<a[^>]*href=["']https?:\/\/jichangguide\.net["'][^>]*>/i);

  if (pbnReviewMatch) {
    const reviewTag = pbnReviewMatch[0];
    check(`[${rel}] 机场测评 外链 target="_blank"`, reviewTag.includes('target="_blank"'));
    check(`[${rel}] 机场测评 外链 无 nofollow (dofollow 传递权重)`, !reviewTag.includes('nofollow'));
  }
  if (pbnGuideMatch) {
    const guideTag = pbnGuideMatch[0];
    check(`[${rel}] 机场教程 外链 target="_blank"`, guideTag.includes('target="_blank"'));
    check(`[${rel}] 机场教程 外链 无 nofollow (dofollow 传递权重)`, !guideTag.includes('nofollow'));
  }
});

// Check Homepage specifically for Keywords, Reviews & FAQ
const indexHtmlPath = path.join(DIST_DIR, 'index.html');
if (fs.existsSync(indexHtmlPath)) {
  const indexContent = fs.readFileSync(indexHtmlPath, 'utf8');

  console.log('\n检查首页关键字集成:');
  requiredKeywords.forEach(kw => {
    check(`首页包含关键字: "${kw}"`, indexContent.includes(kw));
  });

  console.log('\n检查首页核心板块:');
  check('首页包含用户评价板块', indexContent.includes('用户评价') || indexContent.includes('review-card') || indexContent.includes('口碑认证'));
  check('首页包含常见问题 FAQ 板块', indexContent.includes('常见问题 FAQ') || indexContent.includes('faq-item') || indexContent.includes('FAQPage'));
  check('首页包含 7 大套餐价格表', indexContent.includes('迷你猫') && indexContent.includes('闪电猫') && indexContent.includes('流星猫') && indexContent.includes('飞天猫'));
}

console.log('\n====================================================');
console.log(`验收完成: 总计测试 ${totalChecks} 项 | 通过 ${passedChecks} 项 | 失败 ${failedChecks} 项`);
console.log('====================================================\n');

if (failedChecks > 0) {
  process.exit(1);
}
