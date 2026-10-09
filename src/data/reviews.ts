export interface ReviewItem {
  id: string;
  name: string;
  avatar: string;
  role: string;
  rating: number;
  planName: string;
  content: string;
  tag: string;
  date: string;
}

export const reviewList: ReviewItem[] = [
  {
    id: 'review-1',
    name: 'Alex Chen',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    role: '全栈高级开发工程师',
    rating: 5,
    planName: '闪电猫套餐 (200GB/30天)',
    content: '作为开发者，我每天需要大量拉取 GitHub 镜像、调用 OpenAI API 以及查阅海外技术文档。闪电猫的专线节点真的非常稳定，Clash 节点一键导入，延迟低至 30ms，晚高峰毫无压迫感！',
    tag: '已验证买家',
    date: '2026-10-02'
  },
  {
    id: 'review-2',
    name: 'Linna 跨境外贸',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Linna',
    role: 'Amazon & TikTok 运营总监',
    rating: 5,
    planName: '霹雳猫套餐 (500GB/30天)',
    content: '公司团队多人同时在线管理海外店铺和观看 TikTok 4K 直播，之前用的机场经常断连导致风控封号。换了闪电猫的专线稳定节点后，原生 IP 干净且速度极快，绝对是安全机场中的天花板！',
    tag: '企业尊享用户',
    date: '2026-09-28'
  },
  {
    id: 'review-3',
    name: '张小喵',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mia',
    role: '影视追剧达人',
    rating: 5,
    planName: '迷你猫套餐 (100GB/30天)',
    content: '每月 20 块钱就能畅看 Netflix 和 4K YouTube，ClashParty 机场订阅导入方便极了。真的是超高性价比的便宜机场，画质拉满也不卡顿，魔法梯子强力推荐！',
    tag: '已验证买家',
    date: '2026-10-05'
  },
  {
    id: 'review-4',
    name: 'David Wong',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    role: '自由撰稿人 & AI 艺术家',
    rating: 5,
    planName: '流星猫 (600GB/年按年总量)',
    content: '我不经常看大视频，但经常使用 Midjourney 生成高精图片。闪电猫这个按年总量套餐太适合我了，600GB 不清零随心用，全球加速节点响应极快，非常省心！',
    tag: '已验证买家',
    date: '2026-09-15'
  }
];
