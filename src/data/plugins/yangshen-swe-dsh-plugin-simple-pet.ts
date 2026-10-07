import type { Plugin } from "@/types/plugin";

export const plugin: Plugin = {
  slug: "yangshen-swe-dsh-plugin-simple-pet",
  name: "简易桌宠（Simple Desktop Pet）",
  description: "Windows 桌宠，支持 DeepSeek 账单与 Codex 配额、自适应界面、主题滚动条、超小尺寸及默认关闭的预热。",
  longDescription: "适用于 Windows 桌面版 DeepSeek Harness 的可拖动桌宠，支持换肤、动画、大小调整和独立设置窗口。桌宠集中显示当前会话的 token、账单与缓存命中信息，以及 DeepSeek 余额和 Codex 官方配额。\n\nCodex 配额依赖宿主提供公共进程内连接适配器，以及已安装、启用并登录的兼容订阅插件，不能仅凭 DSH 版本保证可用。配额默认每 5 秒实际查询一次，可在设置中调整为 1 至 3600 秒。启动、定时与额度恢复预热分别控制，默认全部关闭；手动开启后会发送真实模型请求并消耗额度。预热按账户与额度窗口持久化去重，仅对确定未发送的失败进行有限重试。\n\n仅支持 Windows 桌面环境，依赖 PowerShell 5.1 与 WPF。安装前请把下方“配置名称”改为 desktop，或自己的 Windows 桌面配置名；网页、Linux 与 macOS 环境不会弹出桌宠。安装后需要重新启动对应的桌面版 DSH。v0.6.0 新增可调整大小的自适应设置／统计布局、无横向滚动的图表和图库、青色圆角纵向滚动条，以及超小尺寸（保留小／中／大）。Codex 图表单位正确显示 Token，保留 PowerShell 5.1 原子保存修复、历史与预热开关；升级不会自动启用预热。",
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
    { name: "v0.6.0 发布说明", url: "https://github.com/YangShen-SWE/dsh-plugin-simple-pet/releases/tag/v0.6.0" },
    { name: "更新记录", url: "https://github.com/YangShen-SWE/dsh-plugin-simple-pet/blob/main/CHANGELOG.md" },
    { name: "美术素材授权", url: "https://github.com/YangShen-SWE/dsh-plugin-simple-pet/blob/main/ARTWORK-LICENSE.md" },
  ],
  featured: false,
  deprecated: false,
};
