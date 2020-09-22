---
title: Paperが動作するJavaバージョン一覧
date: 2020-09-23
tags:
  - マインクラフト
  - サーバー開発
  - CraftBukkit
  - Spigot
  - Paper
slug: "/paper-and-java-versions"
---

### サーバー環境

| 項目名 | 内容 |
| - | - |
| サーバーOS | Debian GNU/Linux 10 (buster) |
| Javaランタイム | OpenJDK Runtime Environment |
| サーバーソフトウェア | Paper |

### 確認する項目

以下のすべてがうまくいけば ✅ とします。

- 正常に実行されている
- ワールドが正しく作成されている
- 接続する準備が整っている

プラグインの互換性やワールドのアップグレードまでは考慮されていない可能性があります。

### 対応Javaバージョン一覧

| サーバー | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
| - | - | - | - | - | - | - | - | - |
| Paper 1.8.8 | ✅ | ✅ | ✅ | ✅ | ✅ | ⚠️ | ⚠️ | ⚠️ |
| Paper 1.9.4 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Paper 1.10.2 | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Paper 1.11.2 | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Paper 1.12.2 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Paper 1.13.2 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| Paper 1.14.4 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| Paper 1.15.2 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Paper 1.16.3 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

##### ❌ SystemClassLoader not URLClassLoader

```
SystemClassLoader not URLClassLoader
```

Paper 1.10.2とPaper 1.11.2でJava 9以上を使用するとこのエラーで終了します。

これはMojang側の重要なバグで、ほとんどのJavaバージョンと互換性がないことを意味しています。

##### ⚠️ java.lang.NoSuchFieldException: modifiers

```
[18:41:13 WARN]: java.lang.NoSuchFieldException: modifiers
[18:41:13 WARN]:        at java.base/java.lang.Class.getDeclaredField(Class.java:2412)
[18:41:13 WARN]:        at org.github.paperspigot.PaperSpigotConfig.stackableBuckets(PaperSpigotConfig.java:192)
[18:41:13 WARN]:        at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
[18:41:13 WARN]:        at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
[18:41:13 WARN]:        at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
[18:41:13 WARN]:        at java.base/java.lang.reflect.Method.invoke(Method.java:567)
[18:41:13 WARN]:        at org.github.paperspigot.PaperSpigotConfig.readConfig(PaperSpigotConfig.java:84)
[18:41:13 WARN]:        at org.github.paperspigot.PaperSpigotConfig.init(PaperSpigotConfig.java:62)
[18:41:13 WARN]:        at net.minecraft.server.v1_8_R3.DedicatedServer.init(DedicatedServer.java:181)
[18:41:13 WARN]:        at net.minecraft.server.v1_8_R3.MinecraftServer.run(MinecraftServer.java:563)
[18:41:13 WARN]:        at java.base/java.lang.Thread.run(Thread.java:830)
```

Paper 1.8.8でJava 13以上を使用するとこのような警告が表示されますが、動作に問題はないようです。

##### ❌ Unsupported Java detected (?). Only up to Java ? is supported.

```
Unsupported Java detected (58.0). Only up to Java 12 is supported.
```

Paper 1.13.2以上でJava 14以上を使用するとこのエラーが表示されてから終了**することがあります**。

新しいバージョンを使えということみたいですが、新しいバージョンでもエラーが出るみたいですね！？
