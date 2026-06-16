# 英语老师小站

一个基于 VitePress 搭建的初中英语教师个人教学网站，可部署在 GitHub Pages 上。

## 功能

- 🏠 **首页**：展示最新教案、作业与学习资料
- 👩‍🏫 **个人介绍**：老师简介、教学理念、联系方式
- 📚 **教案中心**：按年级/单元发布教学设计
- 📝 **作业布置**：定期发布作业与参考答案
- 📖 **学习资料**：语法总结、词汇表、阅读技巧等
- ❤️ **打赏支持**：微信/支付宝赞赏二维码（需替换为真实图片）

## 本地开发

```bash
# 进入项目目录
cd teacher-pages

# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev
```

## 构建与预览

```bash
# 构建静态站点
npm run docs:build

# 本地预览
npm run docs:preview
```

## 部署到 GitHub Pages

1. 在 GitHub 上创建一个新仓库，例如 `english-teacher`。
2. 将本项目代码推送到该仓库：
   ```bash
   git init
   git add .
   git commit -m "init: teacher pages"
   git branch -M main
   git remote add origin https://github.com/beyondpzk/english-teacher.git
   git push -u origin main
   ```
3. 进入仓库 **Settings → Pages → Source**，选择 **GitHub Actions**。
4. 推送代码后，GitHub Actions 会自动构建并部署。
5. 访问 `https://beyondpzk.github.io/english-teacher/` 查看效果。

## 目录结构

```
.
├── .github/workflows/deploy.yml   # GitHub Actions 部署配置
├── .vitepress/
│   ├── config.mjs                 # VitePress 站点配置
│   └── theme/
│       ├── index.js               # 主题入口
│       └── style.css              # 自定义样式
├── lessons/                       # 教案
├── homework/                      # 作业
├── materials/                     # 学习资料
├── public/assets/img/             # 图片资源
├── about.md                       # 关于我
├── support.md                     # 打赏支持
├── index.md                       # 首页
├── package.json
└── README.md
```

## 自定义设置

### 1. 修改站点信息

编辑 `.vitepress/config.mjs`：
- `title`：站点标题
- `description`：站点描述
- `base`：如果仓库名不同，请修改为 `/仓库名/`
- `nav`：顶部导航链接

### 2. 替换图片

请替换以下占位图片为真实图片：
- `public/assets/img/teacher-avatar.png`：老师头像
- `public/assets/img/wechat-reward-placeholder.png`：微信赞赏码
- `public/assets/img/alipay-reward-placeholder.png`：支付宝红包码

### 3. 添加新内容

在 `lessons/`、`homework/`、`materials/` 目录下新建 Markdown 文件，然后在 `.vitepress/config.mjs` 的 `sidebar` 中添加对应链接。

## 许可

MIT
