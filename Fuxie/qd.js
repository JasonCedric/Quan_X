name: Task
desc: 威锋 阿里云盘 喜马拉雅自动签到
openUrl: http://boxjs.com/项目地址/
#author: test001
homepage: https://github.com/主页/
manual: https://github.com/项目地址/
icon: https://raw.githubusercontent.com/jasoncedric/Quan_X/main/icon/AppleFitness+.png
category: 签到

cron:
  script:
    - name: WeiFeng
      cron: '12 12 * * *'
      timeout: 60

    - name: AliYunPan
      cron: '*/20 0-20 * * *'
      timeout: 60

    - name: XiMaLaYa
      cron: '13 12 * * *'
      timeout: 60

    - name: NeteaseCloudMusic
      cron: '15 12 * * *'
      timeout: 60

script-providers:
  WeiFeng:
    url: https://raw.githubusercontent.com/githubdulong/Script/master/weifeng.js
    interval: 86400

  AliYunPan:
    url: https://gist.githubusercontent.com/Sliverkiss/33800a98dcd029ba09f8b6fc6f0f5162/raw/aliyun.js
    interval: 86400

  XiMaLaYa:
    url: https://raw.githubusercontent.com/ClydeTime/Surge/main/Script/Task/xmly.js
    interval: 86400

  NeteaseCloudMusic:
    url: https://raw.githubusercontent.com/leiyiyan/resource/main/script/netease_musician/task.js
    interval: 86400
