export type BillingCycle = 'monthly' | 'quarterly' | 'semi-annual' | 'annual';

export interface RegularPlan {
  id: string;
  name: string;
  badge?: string;
  type: 'regular';
  trafficLimit: string;
  trafficResetRule: string;
  scenario: string;
  prices: {
    monthly: number;
    quarterly: number;
    'semi-annual': number;
    annual: number;
  };
  features: {
    lineType: string;
    aiSupport: string;
    mediaSupport: string;
    nodeCoverage: string;
    deviceLimit: string;
    speedEstimate: string;
    clientCompatibility: string;
  };
  verificationStatus: string;
  note?: string;
}

export interface SpecialAnnualPlan {
  id: string;
  name: string;
  badge?: string;
  type: 'special-annual';
  price: number;
  billingCycleText: string;
  trafficLimit: string;
  trafficResetRule: string;
  scenario: string;
  features: {
    lineType: string;
    aiSupport: string;
    mediaSupport: string;
    nodeCoverage: string;
    deviceLimit: string;
    speedEstimate: string;
    clientCompatibility: string;
  };
  verificationStatus: string;
  note: string;
}

export interface AnnualTotalTrafficPlan {
  id: string;
  name: string;
  badge?: string;
  type: 'annual-total';
  price: number;
  validity: string;
  billingCycleText: string;
  trafficLimit: string;
  trafficResetRule: string;
  scenario: string;
  features: {
    lineType: string;
    aiSupport: string;
    mediaSupport: string;
    nodeCoverage: string;
    deviceLimit: string;
    speedEstimate: string;
    clientCompatibility: string;
  };
  verificationStatus: string;
  note: string;
}

export type PlanItem = RegularPlan | SpecialAnnualPlan | AnnualTotalTrafficPlan;

export const regularPlans: RegularPlan[] = [
  {
    id: 'mini-cat',
    name: '迷你猫',
    type: 'regular',
    trafficLimit: '100GB / 每30天',
    trafficResetRule: '每30天自动重置流量配额',
    scenario: '轻度日常浏览、移动端通讯、学术资料查阅与邮件收发',
    prices: {
      monthly: 20,
      quarterly: 57,
      'semi-annual': 108,
      annual: 192
    },
    features: {
      lineType: 'IEPL 专线+中继多路传输',
      aiSupport: '支持 ChatGPT / Claude / Gemini',
      mediaSupport: '支持 YouTube / Netflix / Disney+ 高清播放',
      nodeCoverage: '港台日韩美新等 30+ 核心区域',
      deviceLimit: '支持无缝多设备并发连接',
      speedEstimate: '最高可达 1000Mbps 峰值带宽',
      clientCompatibility: 'Clash / ClashParty / Shadowrocket 等通用内核'
    },
    verificationStatus: '官方实时在售保障'
  },
  {
    id: 'speed-cat',
    name: '闪电猫',
    badge: '最受欢迎',
    type: 'regular',
    trafficLimit: '200GB / 每30天',
    trafficResetRule: '每30天自动重置流量配额',
    scenario: '标准日常办公、4K/8K高清流媒体视频、多平台多设备协同',
    prices: {
      monthly: 40,
      quarterly: 114,
      'semi-annual': 216,
      annual: 384
    },
    features: {
      lineType: '全节点广深/上海 IEPL 极速专线',
      aiSupport: '完美解锁 OpenAI / Midjourney / Claude',
      mediaSupport: '解锁 4K/8K 全球超清流媒体',
      nodeCoverage: '覆盖全球 40+ 优质数据中心',
      deviceLimit: '支持个人全套系统多端协同',
      speedEstimate: '全天候保障高频稳定节点',
      clientCompatibility: 'Clash / ClashParty / Shadowrocket 等通用内核'
    },
    verificationStatus: '官方热销爆款推荐'
  },
  {
    id: 'thunder-cat',
    name: '霹雳猫',
    badge: '高配进阶',
    type: 'regular',
    trafficLimit: '500GB / 每30天',
    trafficResetRule: '每30天自动重置流量配额',
    scenario: '大流量下载、高频远程开发、家庭多端共享及重度视频用户',
    prices: {
      monthly: 100,
      quarterly: 285,
      'semi-annual': 540,
      annual: 960
    },
    features: {
      lineType: '双路冗余 BGP+IEPL 专线',
      aiSupport: '支持高频 API 请求与大模型训练',
      mediaSupport: '支持超高清流媒体无延迟播放',
      nodeCoverage: '全球 50+ 节点独享带宽体验',
      deviceLimit: '支持多端同时在线使用',
      speedEstimate: '低延迟专线游戏与直播优化',
      clientCompatibility: 'Clash / ClashParty / Shadowrocket 等通用内核'
    },
    verificationStatus: '进阶极速专享套餐'
  },
  {
    id: 'thor-cat',
    name: '雷神猫',
    badge: '海量带宽',
    type: 'regular',
    trafficLimit: '1000GB / 每30天',
    trafficResetRule: '每30天自动重置流量配额',
    scenario: '极重度网络使用、多设备全天候在线、跨国文件同步与流媒体',
    prices: {
      monthly: 200,
      quarterly: 570,
      'semi-annual': 1080,
      annual: 1920
    },
    features: {
      lineType: '最高优先级专线通道与定制节点',
      aiSupport: '企业级 AI 自动化工作流支持',
      mediaSupport: '支持多终端并发 4K/8K 视频',
      nodeCoverage: '全量 60+ 高速节点完全开放',
      deviceLimit: '个人全场景多设备无限制',
      speedEstimate: '超大带宽无封顶限速',
      clientCompatibility: 'Clash / ClashParty / Shadowrocket 等通用内核'
    },
    verificationStatus: '旗舰海量流量方案'
  }
];

export const specialAnnualPlan: SpecialAnnualPlan = {
  id: 'special-annual-small',
  name: '特惠年付小包',
  badge: '特惠轻量',
  type: 'special-annual',
  price: 98,
  billingCycleText: '¥98 / 年（年付一次性结清）',
  trafficLimit: '50GB / 每30天',
  trafficResetRule: '每30天重置50GB流量配额',
  scenario: '备用节点、低频查阅邮件、外贸消息收发或日常应急通信',
  features: {
    lineType: '基础专线加速线路',
    aiSupport: '支持基础 AI 交互与搜索引擎',
    mediaSupport: '支持标清/高清视频顺畅播放',
    nodeCoverage: '亚太核心节点覆盖',
    deviceLimit: '支持个人常用移动设备',
    speedEstimate: '满足日常顺畅科学上网需求',
    clientCompatibility: 'Clash / ClashParty / Shadowrocket 等通用内核'
  },
  verificationStatus: '超高性价比入门首选',
  note: '性价比极高，适合轻度科学上网及备用节点需求。'
};

export const annualTotalTrafficPlans: AnnualTotalTrafficPlan[] = [
  {
    id: 'meteor-cat',
    name: '流星猫',
    badge: '按年总量',
    type: 'annual-total',
    price: 260,
    validity: '365天有效',
    billingCycleText: '¥260 / 年（有效时长365天）',
    trafficLimit: '全年总计 600GB',
    trafficResetRule: '全年总量，用完为止，不按月重置',
    scenario: '每月用量波动较大、节假日或出差集中使用、不需要每月强制清零的用户',
    features: {
      lineType: 'IEPL 专线中继混合线路',
      aiSupport: '支持常规 AI 助手使用',
      mediaSupport: '支持主流音视频流媒体',
      nodeCoverage: '主流区域节点接入',
      deviceLimit: '个人设备随心连接',
      speedEstimate: '高速稳定不限月用量',
      clientCompatibility: 'Clash / ClashParty / Shadowrocket 等通用内核'
    },
    verificationStatus: '灵活不清零套餐',
    note: '流量规则：全年总量 600GB，有效期内用完即止，不执行每30天重置规则。'
  },
  {
    id: 'flying-cat',
    name: '飞天猫',
    badge: '超大总量',
    type: 'annual-total',
    price: 1800,
    validity: '365天有效',
    billingCycleText: '¥1800 / 年（有效时长365天）',
    trafficLimit: '全年总计 5000GB',
    trafficResetRule: '全年总量，用完为止，不按月重置',
    scenario: '长期大容量数据传输、年度大流量项目支持、无需受限于月度清零的专业场景',
    features: {
      lineType: '全节点 IEPL 顶级专线',
      aiSupport: '支持高频大模型与开发环境',
      mediaSupport: '支持多端全时流媒体娱乐',
      nodeCoverage: '全区域节点优先接入',
      deviceLimit: '个人设备随时随地无缝连接',
      speedEstimate: '独享专线通道极速连接',
      clientCompatibility: 'Clash / ClashParty / Shadowrocket 等通用内核'
    },
    verificationStatus: '年度海量不清零旗舰',
    note: '流量规则：全年总量 5000GB，有效期内用完即止，不执行每30天重置规则。'
  }
];

export const allPlans = [
  ...regularPlans,
  specialAnnualPlan,
  ...annualTotalTrafficPlans
];

export const cycleLabels: Record<BillingCycle, { name: string; desc: string }> = {
  monthly: { name: '月付', desc: '按30天单月结算' },
  quarterly: { name: '季付', desc: '按季一次性结算' },
  'semi-annual': { name: '半年付', desc: '按半年一次性结算' },
  annual: { name: '年付', desc: '按年一次性结算（享有最大折扣）' }
};
