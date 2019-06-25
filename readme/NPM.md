| [HOME](https://github.com/vik-vavilikhin/vik-vavilikhin.github.io) &rarr; NPM |

-------------------------------------------------------------------------------
## [NPM](https://www.npmjs.com/) (Node Package Manager)
менеджер пакетов, входящий в состав [Node.js](https://nodejs.org/en/)
-------------------------------------------------------------------------------
С помощью `npm-check-updates` можно узнать какие зависимости обновились с момента их установки с помощью npm/bower.
<!-- ==================== -->
Устанавливаем:  
`$ npm i -g npm-check-updates`

И проверяем что в `package.json` устарело:  
`$ ncu`
```
# async          ^1.4.2  →  ^2.0.0-rc.2
# cheerio       ^0.19.0  →      ^0.20.0
# front-matter   ^1.0.0  →       ^2.0.6
# glob          ^5.0.14  →       ^7.0.3
# html-to-text   ^1.5.0  →       ^2.1.0
# inquirer       ^0.9.0  →      ^0.12.0
#
# Run with -u to upgrade package.json
```

Проверяем что есть нового для `bower.json`:  
`$ ncu -m bower`
```
# angular  ~1.4.9  →  ~1.5.3
#
# Run with -u to upgrade bower.json
```

Обновить версии пакетов в package.json/bower.json можно ключом `-u` (Windows), `-a` (Linux):
```
$ ncu -u
$ ncu -m bower -u
```