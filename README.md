# RuyiSDK docs

文档包括RuyiSDK的总体介绍和各个组成部分的介绍和使用方法。

## 关于docs仓库

仓库分支介绍：

- `main` 分支：用于提交开发中文档。
- `zh` 分支：该分支接收相对成熟的文档，文档内容会在 [RuyiSDK 官网的文档板块](https://ruyisdk.org/docs)展示。
- `gh-pages` 分支：用于存放构建后的静态页面。
- `restructure-zh` 分支：用于临时存放针对`zh` 分支进行重构的文档，由于涉及目录和文件名的重定义和规范化，计划重构完成后再合入`zh` 分支。

### 贡献文档

欢迎大家一起参与RuyiSDK文档贡献。贡献方法：

1. fork 本仓库；
2. 参考分支定位切换到合适的分支；
3. 贡献文档，书写前请阅读 [《RuyiSDK 文档写作规范》](./DOCUMENTATION_STYLEGUIDE.zh.md)；
4. 提交修改并创建 pull request 将文档贡献提交到 docs 仓库，等待仓库管理员审核合入。

请阅读[《贡献者指南》](./CONTRIBUTING.zh.md) ([English version](./CONTRIBUTING.md)) 以获取完整的贡献流程、DCO 签名要求等信息。

## 预览

本仓库作为 `ruyisdk-website` 的 submodule，由主仓库统一构建。如需本地预览，参考[ruyisdk-website/README.md](https://github.com/ruyisdk/ruyisdk-website/tree/main#running-locally)。
