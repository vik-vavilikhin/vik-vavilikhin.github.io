<p>
  <span>| <a href="https://github.com/vik-vavilikhin/vik-vavilikhin.github.io">HOME</a> |</span>
</p>
<hr>

<h2><a href="https://www.npmjs.com/">NPM</a> (Node Package Manager)</h2>
<p>менеджер пакетов, входящий в состав <a href="https://nodejs.org/en/">Node.js</a></p>

<p>С помощью npm-check-updates можно узнать какие зависимости обновились с момента их установки с помощью npm/bower.<br>
Устанавливаем:</p>
<code>$ npm i -g npm-check-updates</code>

<p>И проверяем что в package.json устарело:</p>
<code>$ ncu</code>
<pre>
# async          ^1.4.2  →  ^2.0.0-rc.2
# cheerio       ^0.19.0  →      ^0.20.0
# front-matter   ^1.0.0  →       ^2.0.6
# glob          ^5.0.14  →       ^7.0.3
# html-to-text   ^1.5.0  →       ^2.1.0
# inquirer       ^0.9.0  →      ^0.12.0
#
# Run with -u to upgrade package.json
</pre>

<p>Проверяем что есть нового для bower.json:</p>
<code>$ ncu -m bower</code>
<pre>
# angular  ~1.4.9  →  ~1.5.3
#
# Run with -u to upgrade bower.json
</pre>

<c>Обновить версии пакетов в package.json/bower.json можно ключом <code>-u</code> (Windows), <code>-a</code> (Linux):</p>
<pre>
  $ ncu -u
  $ ncu -m bower -u
</pre>