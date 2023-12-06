# Ruyi 包管理器

Ruyi 包管理器是设计为用于 RuyiSDK 的包管理器，用于管理工具链。

## 安装包管理器

目前，您可以从 [Ruyi Mirror](https://mirror.iscas.ac.cn/ruyisdk/ruyi/testing/) 下载预编译二进制文件并将其重命名为 `ruyi`。

```bash
wget https://mirror.iscas.ac.cn/ruyisdk/ruyi/testing/ruyi.20231030
mv ruyi.20231030 ruyi
chmod +x ruyi
```

然后将 `ruyi` 可执行文件加入 `$PATH`

```bash
export PATH="$PATH:/home/ruyi/"
```

## 命令

### Update

- 将 RuyiSDK 元数据同步到本地存储
- 默认情况下，存储库克隆到 `$XDG_CACHE_HOME/ruyi/packages-index`
- 如果 `$XDG_CACHE_HOME` 未设置，则默认为 `~/.cache`

```bash
ruyi update
```

### List

- 列出可用的工具链

```bash
ruyi list
```

### Install

安装一个选定的包。

```bash
ruyi install plct-20231026
```

### 移除一个包

移除一个选定的包

```bash
ruyi uninstall plct-20231026
```

### 列出可用的 Profiles

列出所有可用的 Profiles

```bash
ruyi list profiles
```
