export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqList: FAQItem[] = [
  {
    id: 'what-is-speedcat',
    category: '服务介绍',
    question: '什么是闪电猫 SpeedCAT？为什么推荐使用闪电猫稳定节点？',
    answer: '闪电猫 SpeedCAT 是一家专业的高速科学上网与魔法梯子服务商。采用全节点 IEPL 专线传输与中继多路全球加速技术，专注于为用户提供超低延迟、高可靠度的稳定节点。无论是全天候翻墙出海、观看 4K/8K 海外流媒体，还是高效使用 ChatGPT、Claude 等 AI 工具，闪电猫都能提供媲美原生网络体验的高速代理服务。'
  },
  {
    id: 'how-to-register',
    category: '注册购买',
    question: '如何注册并选购闪电猫 SpeedCAT 的便宜机场套餐？',
    answer: '点击本页面的“前往闪电猫官网注册”按钮（或者页面顶部的立即注册链接），您将直接跳转至闪电猫官方控制台后台。注册账号后，可以在商店中根据个人需求挑选“迷你猫（¥20/月）”、“闪电猫（¥40/月）”或特惠年付小包（¥98/年）等多种阶梯套餐。支持微信、支付宝等快捷支付方式。'
  },
  {
    id: 'client-support',
    category: '客户端配置',
    question: '闪电猫支持哪些代理客户端？如何配置 Clash 与 ClashParty 机场订阅？',
    answer: '闪电猫全面兼容通用内核代理软件，支持 Clash、ClashParty、Shadowrocket（小火箭）、Surge、v2rayN、Clash Verge 等全平台客户端。购买套餐后，只需在控制台一键复制“一键导入订阅”或通用链接，粘贴至 Clash 或 ClashParty 的 Profiles / 订阅列表中即可一秒同步全球加速节点。'
  },
  {
    id: 'traffic-reset-rules',
    category: '流量与计费',
    question: '闪电猫套餐的流量重置规则是怎样的？按月重置与按年总量有何区别？',
    answer: '闪电猫常规套餐（迷你猫、闪电猫、霹雳猫、雷神猫及特惠年付小包）均为每 30 天自动重置一次可用流量配额，即使您选择年付，也会按月注入对应的流量；而“流星猫（600GB/年）”和“飞天猫（5000GB/年）”属于按年总量套餐，全年流量不清零，随用随扣，适合用量波动较大的用户。'
  },
  {
    id: 'node-stability-and-speed',
    category: '节点质量',
    question: '闪电猫的节点线路稳定吗？支持流媒体解锁与 AI 生产力工具吗？',
    answer: '非常稳定。闪电猫拥有智能负载均衡和多路专线冗余保障，晚高峰时期依然能保持低延迟无丢包。全量节点支持 YouTube 4K/8K 零缓冲、Netflix / Disney+ 原生解锁，并深度优化了 OpenAI (ChatGPT)、Claude、Midjourney 等 AI 平台的访问规则，有效防范 IP 被封风险。'
  },
  {
    id: 'connection-troubleshooting',
    category: '售后排查',
    question: '导入订阅后提示“节点超时”或无法上网怎么排查？',
    answer: '若遇到节点超时，请先检查本地网络连接是否正常，并尝试在客户端中点击“更新订阅/刷新配置”。如果仍然报错，请确认控制台中的套餐是否已到期或流量已耗尽。客户端建议开启“规则模式（Rule）”并确保本地系统时间与网络标准时间同步。'
  }
];
