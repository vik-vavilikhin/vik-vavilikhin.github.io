Репозиторий [Jekyll][1].

[1]: https://github.com/vik-vavilikhin/vik-vavilikhin.github.io/tree/master/Jekyll             "Jekyll"  


- - - - - - - - - - - - - - -  
# Вавилихин Виктор
Курс обучения: Веб-разработчик 10.0.  
Автор Артём Исламов. Glo Academy.  
- - - - - - - - - - - - - - -  
# Домашние задания.  
## Список ресурсов
#### [Редактор Visual Studio Code](https://code.visualstudio.com/)
  * ##### [Список плагинов:](Screenshots/vscove_list_plugins.png)  
  > [Align](https://marketplace.visualstudio.com/items?itemName=steve8708.Align "Выравние кода. Mac: ctrl+cmd+a Linux/Windows: ctrl+alt+a") - Выравние кода. Mac: ctrl+cmd+a Linux/Windows: ctrl+alt+a  
  > [All Autocomplete](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight "Автозаполнение в коде на основе всех открытых редакторов") - Автозаполнение в коде на основе всех открытых редакторов  
  > [Path Autocomplete](https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete "Автозаполнение пути файла (Относительный путь - `./`, Абсолютный путь - `/`)") - Автозаполнение пути файла (Относительный путь - `./`, Абсолютный путь - `/`)  
  > [Color Highlight](https://github.com/sergiirocks/vscode-ext-color-highlight "Подсветка цвета") - Подсветка цвета  
  > [Color Picker](https://marketplace.visualstudio.com/items?itemName=anseki.vscode-color "Панель цветов") - Панель цветов  
  * #### [Темы оформления для Visual Studio Code](https://marketplace.visualstudio.com/search?term=theme&target=VSCode&category=All%20categories&sortBy=Relevance)  
  > [Theme - Seti-Monokai](https://marketplace.visualstudio.com/items?itemName=SmukkeKim.theme-setimonokai)  
  > [One Monokai Theme](https://marketplace.visualstudio.com/items?itemName=azemoh.one-monokai)  
  > [One Dark Theme](https://marketplace.visualstudio.com/items?itemName=azemoh.theme-onedark)  
  > [file-icons](https://marketplace.visualstudio.com/items?itemName=file-icons.file-icons "Коллекция иконок для файлов") - Коллекция иконок для файлов  
  * ##### [Настройки для Visual Studio Code](https://marketplace.visualstudio.com/search?target=VSCode&category=All%20categories&sortBy=Downloads)  
  > [Russian Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-ru "Русский языковой пакет для Visual Studio Code") - Русский языковой пакет для Visual Studio Code  
  > [Shell launcher](https://marketplace.visualstudio.com/items?itemName=Tyriar.shell-launcher "Конфигурация и запуск терминалов в редакторе") - Конфигурация и запуск терминалов в редакторе  
  > [VSCode Browser Sync](https://marketplace.visualstudio.com/items?itemName=jasonlhy.vscode-browser-sync "Browser Sync для VSCode") - Browser Sync для VSCode без необходимости установки gulp  
  * ##### [Синтаксические дополнениея для Visual Studio Code](https://marketplace.visualstudio.com/search?term=syntax&target=VSCode&category=All%20categories&sortBy=Relevance)  
  > [Sass](https://marketplace.visualstudio.com/items?itemName=robinbentley.sass-indented "Синтаксис SASS") - Синтаксис SASS  
### [Adobe Photoshop CC 2017](http://www.adobe.com/ru/products/photoshop.html)
### [Ссылка на скачивание патча для Mac](https://yadi.sk/d/cRmb_ho133xcvr)
### [Ссылка на скачивание патча для Windows](http://photoshop-besplatno.ru/adobe-photoshop-cc.html)
### [Сайт Punto Switcher](https://yandex.ru/soft/punto/)
### [Зарегистрация на codepen](https://codepen.io)
- - - - - - - - - - - - - - -  
## Домашние задания
[Урок 1](https://jp-studio.ru/blog/etapy-sozdaniya-sajta-s-nulya "") - Полный цикл создания сайтов.  
[Урок 2](https://yadi.sk/d/C-jgVSjH3aMvqb "Нарезка макета") - Работа с графикой для разработчика.  
Урок 3 - Настройка рабочего пространства.  
 > **Структура папок пректа**  
 > ![](Screenshots/folder_structure_project.png "Структура папок пректа")  
 > **[Настройки редактора Visual Studio Code](Screenshots/configuration_vscode.png "Настройки редактора Visual Studio Code")**  
 ```
 {
	"files.defaultLanguage": "html",
	"emmet.triggerExpansionOnTab": true,

	"window.menuBarVisibility": "toggle",
	"window.zoomLevel": 0,

	"workbench.startupEditor": "newUntitledFile",
	"workbench.statusBar.visible": true,
	"workbench.editor.tabSizing": "shrink",
	"workbench.sideBar.location": "left",
	"workbench.colorCustomizations": {
		"editorIndentGuide.activeBackground": "#5c5c5c"
	},

	"editor.tabSize": 3,
	"editor.insertSpaces": false,
	"editor.detectIndentation": false,
	"editor.glyphMargin": false,
	"editor.smoothScrolling": true,
	"editor.wordWrap": "on",
	"editor.multiCursorModifier": "ctrlCmd",
	"editor.formatOnPaste": true,
	"editor.renderWhitespace": "boundary",
	"editor.fontSize": 15,
	"editor.renderLineHighlight": "line",
	"editor.quickSuggestions": {
		"other": false,
		"comments": false,
		"strings": false
	},
	"terminal.integrated.shell.windows": "C:\\WINDOWS\\System32\\bash.exe",
	"shellLauncher.shells.windows": [
		// Для запуска:
		// 	Ctrl+Shift+P ==> Shell launcher
		{
			"shell": "C:\\Windows\\sysnative\\cmd.exe",
			"label": "cmd"
		},
		{
			"shell": "C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
			"label": "PowerShell"
		},
		{
			"shell": "C:\\WINDOWS\\System32\\bash.exe",
			"label": "Bash"
		},
		{
			"shell": "D:\\Git\\git-cmd.exe",
			"label": "Git-cmd"
		}
	],

	"workbench.colorTheme": "Seti Monokai",
	"workbench.iconTheme": "file-icons",
	"files.autoSave": "onFocusChange",
}
 ```  
[Урок 4](https://codepen.io/vik-vavilikhin/pen/bjzMPz "Знакомство с основами HTML") - Знакомство с основами HTML. Верстка на HTML. ([Правила оформления HTML-кода](http://up-skills.ru/code-rules/html-rules/ "Правила оформления HTML-кода")).  
[Урок 5](https://codepen.io/vik-vavilikhin/pen/vabMZx?editors=1100 "Знакомство с основами CSS") - Знакомство с основами CSS. Подключение стилей CSS. ([Правила написания CSS-кода](http://up-skills.ru/code-rules/css-rules/ "Правила написания CSS-кода")).  
[Урок 6](https://codepen.io/vik-vavilikhin/pen/LBaYxq?editors=1100 "Позиционирование в CSS") - Позиционирование в CSS.  
[Урок 7](https://vav-itegry.github.io/Lesson_07/ "Верстка первого макета") - Верстка первого макета. Простая верстка на HTML и CSS.  
[Урок 8](https://vav-itegry.github.io/Lesson_08/ "Ускорение верстки в разы") - Ускорение верстки в разы. Подключение фреймворка bootstrap.  
[Урок 9](https://vav-itegry.github.io/Lesson_09/ "Верстка при помощи bootstrap") - Верстка при помощи bootstrap. Верстка макета с применением фреймворка bootstrap.  
[Урок 10](https://vav-itegry.github.io/Lesson_10/main.less "Препроцессор LESS для CSS") - Препроцессор LESS для CSS.  
[Урок 11](https://inter-net.pro/soft/snippet-vscode "Как сделать свой сниппет в Visual Studio Code") - Сниппеты.  
 > **[Сниппет HTML](Screenshots/snippet_html_vscode.png "Сниппет HTML")**  
 ```
 {
	// Example:
	"Print to console": {
		"prefix": "bs4",
		"body": [
			"<!doctype html>",
			"<html lang='en'>",
			"<head>",
			"  <!-- Required meta tags -->",
			"  <meta charset='utf-8'>",
			"  <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>",
			"",
			"  <!-- Bootstrap CSS -->",
			"  <link rel='stylesheet' href='https: //stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css' integrity='sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO' crossorigin='anonymous'>",
			"",
			"  <title>Hello, world!</title>",
			"</head>",
			"<body>",
			"  <h1>Hello, world!</h1>",
			"",
			"  <!-- Optional JavaScript -->",
			"  <!-- jQuery first, then Popper.js, then Bootstrap JS -->",
			"  <script src='https://code.jquery.com/jquery-3.3.1.slim.min.js' integrity='sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo' crossorigin='anonymous'></script>",
			"  <script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js' integrity='sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49' crossorigin='anonymous'></script>",
			"  <script src='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js' integrity='sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy' crossorigin='anonymous'></script>",
			"</body>",
			"</html>"
		],
		"description": "Стартовый шаблон Bootstrap 4"
	}
}
 ```  
 > **[Сниппет CSS](Screenshots/snippet_css_vscode.png "Сниппет CSS")**  
 ```
 {
	"Print to console": {
		"prefix": "reset",
		"body": [
			"body,div,dl,dt,dd,ul,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,input,textarea,p,blockquote,th,td {",
			"   margin: 0;",
			"   padding: 0;",
			"}",
			"table {",
			"   border-collapse: collapse;",
			"   border-spacing: 0;",
			"}",
			"fieldset,img,abbr {",
			"   border: 0;",
			"}",
			"address,caption,cite,code,dfn,em,strong,th,var {",
			"   font-style: normal;",
			"   font-weight: normal;",
			"}",
			"ul li {",
			"   list-style: none;",
			"}",
			"caption,th {",
			"   text-align: left;",
			"}",
			"h1,h2,h3,h4,h5,h6 {",
			"   font-size: 100%;",
			"   font-weight: normal;",
			"}",
			"sup {",
			"   vertical-align: text-top;",
			"}",
			"sub {",
			"   vertical-align: text-bottom;",
			"}",
			"input,textarea,select {",
			"   font-family: inherit;",
			"   font-size: inherit;",
			"   font-weight: inherit;",
			"}",
			"legend {",
			"   color: #000;",
			"}",
			"article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section,main {",
			"   display: block;",
			"}",
			"img {",
			"   max-width: 100%;",
			"   height: auto;",
			"}"
		],
		"description": "Reset"
	}
}
 ```  
[Урок 12](https://github.com/vav-itegry/vav-itegry.github.io "Хостинг от GitHub") - Хостинг от GitHub.  
[Урок 13](https://vav-itegry.github.io/Lesson_13/ "Адаптивная верстка") - Адаптивная верстка.  
_[Практика. Часть 1](https://vav-itegry.github.io/Lesson_13-14/ "Подготовка файлов. Верстка шапки сайта") - Подготовка файлов. Верстка шапки сайта_  
[Урок 14](https://vav-itegry.github.io/Lesson_14/ "Подключение шрифтов") - Подключение шрифтов.  
_[Практика. Часть 2](https://vav-itegry.github.io/Lesson_14-15/ "Подключение шрифтов. Верстка первого экрана") - Подключение шрифтов. Верстка первого экрана_  
[Урок 15](https://vav-itegry.github.io/Lesson_15/ "Псевдоклассы и псевдоэлементы") - Псевдоклассы и псевдоэлементы.  
_[Практика. Часть 3](https://vav-itegry.github.io/Lesson_15-16/ "Эффекты при наведении и адаптив первого экрана") - Эффекты при наведении и адаптив первого экрана_  
[Урок 16](https://vav-itegry.github.io/Lesson_16/ "Слайдер на сайте") - Слайдер на сайте.  
> _[Слайдер для фотографий fotorama](http://fotorama.io/ "Слайдер для фотографий fotorama")_  
> _[Слайдер для любого контента slick](http://kenwheeler.github.io/slick/ "Слайдер для любого контента slick")_  
> _[Слайдер с фотографиями и всплывающими окнами magnific-popup](http://dimsemenov.com/plugins/magnific-popup/ "Слайдер с фотографиями и всплывающими окнами magnific-popup")_  

_[Практика. Часть 4](https://vav-itegry.github.io/Lesson_16-17/ "Верстка блока с преимуществами. Слайдер.") - Верстка блока с преимуществами. Слайдер._  
[Урок 17](https://vav-itegry.github.io/Lesson_17/ "Всплывающие окна.") - Всплывающие окна.  
_[Практика. Часть 5](https://vav-itegry.github.io/Lesson_17-18/ "Верстка всплывающих окон на сайте") - Верстка всплывающих окон на сайте_  
[Урок 18](https://vav-itegry.github.io/Lesson_18/ "Табы и аккордеон на сайте") - Табы и аккордеон на сайте.  
> _[Форма вторизации (табы)](https://vav-itegry.github.io/Lesson_18_form/ "Форма вторизации (табы)")_  
> _[Аккордеон](https://vav-itegry.github.io/Lesson_18_accordion/ "Аккордеон")_  

_[Практика. Часть 6](https://vav-itegry.github.io/Lesson_18-19/ "Верстка блока с ценами") - Верстка блока с ценами_  
[Урок 19](https://vav-itegry.github.io/Lesson_19/ "Анимация на CSS3") - Анимация на CSS3.  
_[Практика. Часть 7](https://vav-itegry.github.io/Lesson_19-20/ "Верстка блока с отзывами") - Верстка блока с отзывами_  
[Урок 20](https://vav-itegry.github.io/Lesson_20/ "Видео-фон на сайте.") - Видео-фон на сайте.  
_[Практика. Часть 8](https://vav-itegry.github.io/Lesson_20-21/ "Доверстали блок с отзывами") - Доверстали блок с отзывами_  
[Урок 21](https://vav-itegry.github.io/Lesson_21/ "Parallax эффект для сайта.") - Parallax эффект для сайта.  
_[Практика. Часть 9](https://vav-itegry.github.io/Lesson_21-22/ "Верстаем схему работы и все включено") - Верстаем схему работы и все включено_  
[Урок 22](https://vav-itegry.github.io/Lesson_22/ "Гео-карты для сайта.") - Гео-карты для сайта.  
_[Практика. Часть 10](https://vav-itegry.github.io/Lesson_22-23/ "Верстаем блок 'Развеиваем сомнения'") - Верстаем блок "Развеиваем сомнения"_  
[Урок 23](https://link-host.net/ "Верстаем блок Хостинг") - Хостинг.  
_[Практика. Часть 11](https://vav-itegry.github.io/Lesson_23-24/ "'Верстаем блок 'Материалы'") - Верстаем блок "Материалы"_  
Урок 24 - Аналитика для сайта ([Яндекс.Метрика](https://metrika.yandex.ru/), [Google Аналитика](https://analytics.google.com)).  
_[Практика. Часть 12](https://vav-itegry.github.io/Lesson_24-25/ "Верстаем блок 'Экскурсия' и 'Доп. услуги'") - Верстаем блок "Экскурсия" и "Доп. услуги"_  
[Урок 25](https://vav-itegry.github.io/Lesson_25/ "Формы на сайте.") - Формы на сайте.  
_[Практика. Часть 13](https://vav-itegry.github.io/Lesson_25-26/ "Верстаем блок 'Контакты' и 'Подвал'") - Верстаем блок "Контакты" и "Подвал"_  
[Урок 26](https://vav-itegry.github.io/Lesson_26/ "Как делаются многостраничные сайты.") - Как делаются многостраничные сайты.  
[Урок 27.1](http://vav-integry.ru/ready-works/Lesson_27/ "WordPress - движок для сайта. Часть-1") - WordPress - движок для сайта. Часть-1  
[Урок 27.2](http://vav-integry.ru/ready-works/Lesson_28/ "WordPress - движок для сайта. Часть-2") - WordPress - движок для сайта. Часть-2  
Урок 28 - Тестирование верстки ([Валидатор](https://validator.w3.org/), [GooglePage Speed](https://developers.google.com/speed/pagespeed/insights/)).  
_[Практика. Часть 14](https://vav-itegry.github.io/Lesson_28-29/ "Анимация, маска и админка") - Анимация, маска и админка_  

- - - - - - - - - - - - - - -
### В процессе изучения  
[Урок 29](https://vav-itegry.github.io/Lesson_29/ "Работа над портфолио и резюме.") - Работа над портфолио и резюме.  
[Урок 30](https://vav-itegry.github.io/Lesson_30/ "Поиск заказчика.") - Поиск заказчика.  
[Урок 31](https://vav-itegry.github.io/Lesson_31/ "Ведение клиентов. Общение и CRM.") - Ведение клиентов. Общение и CRM.  
[Выпускной проект](https://vav-itegry.github.io/Lesson_end/ "Ну что ж, поехали!") - Ну что ж, поехали!  
