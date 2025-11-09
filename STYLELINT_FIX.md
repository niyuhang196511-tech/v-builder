# Stylelint 配置修复说明

## 问题原因

- Stylelint v15+ 移除了所有格式化规则
- 旧的配置包（如 `stylelint-config-standard`）包含已弃用的格式化规则
- VS Code 扩展可能缓存了旧的配置

## 解决方案

### 1. 配置文件更新 ✅

- 移除了包含格式化规则的配置包
- 创建了纯净的质量检查配置
- 添加了对 SCSS 和 Vue 的支持

### 2. 如果 VS Code 中仍显示错误，请尝试：

1. **重新加载 VS Code 窗口**：
    - 按 `Ctrl+Shift+P` 打开命令面板
    - 输入 "Developer: Reload Window"
    - 回车执行

2. **重启 Stylelint 扩展**：
    - 按 `Ctrl+Shift+P` 打开命令面板
    - 输入 "Stylelint: Restart Stylelint Server"
    - 回车执行

3. **清除 VS Code 工作区缓存**：
    - 关闭 VS Code
    - 删除项目根目录下的 `.vscode` 文件夹（如果存在且不需要保留其他设置）
    - 重新打开 VS Code

### 3. 验证配置

运行以下命令确认配置工作正常：

```bash
pnpm lint:style
```

## 当前配置特点

- ✅ 只检查样式质量，不检查格式
- ✅ 支持 CSS、SCSS、Vue 文件
- ✅ 排除 HTML 文件
- ✅ 与 Prettier 完美配合
- ✅ 与 Stylelint v16+ 兼容
