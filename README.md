# README

## 功能

可以用来生成typescript可用的wechatGame.d.ts

- 目前功能非常简单, 只是让ide不报错, 以及方便补全方法名称
- 具体的返回值和参数以及方法说明还没做

## 使用

- 可直接下载wechatGame.d.ts放置到项目路径下使用

- 有自定义需求的可以下载wxgame.lua进行自定义修改. 需要lua和*nix环境, Windows上可以自行安装mingw或者msys2等

    ```git
    git clone https://github.com/zty8023ys/wechatGame.d.ts.git
    cd wechatGame.d.ts/
    lua wxgame.lua
    ```

## 示例

```typescript
    declare module BannerAd {
        export function destroy(...args);
        export function hide(...args);
        export function offError(...args);
        export function offLoad(...args);
        export function offResize(...args);
        export function onError(...args);
        export function onLoad(...args);
        export function onResize(...args);
        export function show(...args);
    }
```
