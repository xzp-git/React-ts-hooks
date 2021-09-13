## git提交规范
1. ### 安装husky
- 作用：为`git` 添加钩子函数
`npm i husky -D`

2. ### 全局安装 commitizen
- 作用 `git cz` 代替 `git commit`
`npm i commitizen -g`

3. ### 安装cz-conventional-changelog
- 作用 `cz-conventional-changelog`是一个`commitizen`的adapter，它实现的是`conventional-changelog-angular`,一套业界公认和常用的convention
`npm i cz-conventional-changelog -D`

- package.json
```json
"config":{
    "commitizen":{
        "path":"node_modules/cz-conventional-changelog"
    }
}
```
4. ### 安装commitlint
- 作用 用来在代码提交前校验代码是否符合标准
- 也需要一个识别器 @commitlint/config-conventional
`npm i @commitlint/config-conventional @commitlint/cli -D`

- package.json
```json
"commitlint": {
    "extends": [
      "@commitlint/config-conventional"
    ]
  },
```

5. ### 配置husky
```json
"husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS" //提交时检查 提交信息是否符合规范 
    }
  },
```

6. ### 生成变更日志
- 安装 `npm i -g conventional-changelog-cli`
- 生成最新的日志 `conventional-changelog -p angular -i CHANGELOG.md -s`

7. ###代码格式化
`npm i lint-staged -S`

```json
"husky": {
    "hooks": {
      "pre-commit":"lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
      "post-commit":"conventional-changelog -p angular -i CHANGELOG.md -s -r 0"
    }
  },
  "lint-staged": {
    "*.tsx": "eslint --fix"
  }
```