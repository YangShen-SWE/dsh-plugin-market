import type { Plugin } from "@/types/plugin";

export const plugin: Plugin = {
  slug: "yangshen-swe-dsh-plugin-simple-pet",
  name: "简易桌宠（Simple Desktop Pet）",
  description: "Windows 桌宠，支持 DeepSeek 账单与 Codex 配额、原生 DSH 设置和统计、保存后热更新、右键无弹窗及默认关闭的预热。",
  longDescription: "适用于 Windows 桌面版 DeepSeek Harness 的可拖动桌宠，支持换肤、动画、大小调整，以及集成到 DSH 设置页的设置与统计。桌宠集中显示当前会话的 token、账单与缓存命中信息，以及 DeepSeek 余额和 Codex 官方配额。\n\nCodex 配额依赖宿主提供公共进程内连接适配器，以及已安装、启用并登录的兼容订阅插件，不能仅凭 DSH 版本保证可用。配额默认每 5 秒实际查询一次，可在设置中调整为 1 至 3600 秒。启动、定时与额度恢复预热分别控制，默认全部关闭；手动开启后会发送真实模型请求并消耗额度。预热按账户与额度窗口持久化去重，仅对确定未发送的失败进行有限重试。\n\n仅支持 Windows 桌面环境，依赖 PowerShell 5.1 与 WPF。安装前请把下方“配置名称”改为 desktop，或自己的 Windows 桌面配置名；网页、Linux 与 macOS 环境不会弹出桌宠。安装后需要重新启动对应的桌面版 DSH。v0.6.1 将设置／统计集成至 DSH → 设置 → 桌宠，适配宿主深浅主题及窄屏布局；修改先成为草稿，显式保存后约一秒热更新。右键不再弹出菜单或窗口，保留左键拖动，坐标独立保存避免覆盖选项。保留六款皮肤、超小／小／中／大四档尺寸、PowerShell 5.1 原子保存修复和独立统计；保存使用宿主鉴权与修订冲突保护。Codex 显示额度新鲜度、电脑时区重置时间及 Token 图表。升级不会自动启用预热，需完整退出并重启 DSH。",
  author: { name: "YangShen-SWE", url: "https://github.com/YangShen-SWE" },
  tags: ["Fun", "UI", "Tool", "Model"],
  category: "tool",
  repository: "https://github.com/YangShen-SWE/dsh-plugin-simple-pet",
  homepage: "https://github.com/YangShen-SWE/dsh-plugin-simple-pet",
  documentation: "https://github.com/YangShen-SWE/dsh-plugin-simple-pet#readme",
  license: "MIT（源码与文档）；美术素材另行授权",
  installMethods: [
    {
      name: "GitHub Release",
      description: "仅限 Windows 桌面版：请先将上方配置名称改为 desktop，再复制并执行命令，安装后重启桌面版 DSH。",
      command: "dsh plugin --profile desktop add https://github.com/YangShen-SWE/dsh-plugin-simple-pet/releases/latest/download/dsh-plugin-simple-pet.tgz",
    },
    {
      name: "GitHub 源码",
      description: "备选方式：从公开源码仓库安装；同样需要 Windows 桌面配置，安装后重启桌面版 DSH。",
      command: "dsh plugin --profile desktop add github:YangShen-SWE/dsh-plugin-simple-pet",
    },
  ],
  links: [
    { name: "v0.6.1 发布说明", url: "https://github.com/YangShen-SWE/dsh-plugin-simple-pet/releases/tag/v0.6.1" },
    { name: "更新记录", url: "https://github.com/YangShen-SWE/dsh-plugin-simple-pet/blob/main/CHANGELOG.md" },
    { name: "美术素材授权", url: "https://github.com/YangShen-SWE/dsh-plugin-simple-pet/blob/main/ARTWORK-LICENSE.md" },
  ],
  featured: false,
  deprecated: false,
};
