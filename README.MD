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

package.json
```json
"config":{
    "commitizen":{
        "path":"node_modules/cz-conventional-changelog"
    }
}
```