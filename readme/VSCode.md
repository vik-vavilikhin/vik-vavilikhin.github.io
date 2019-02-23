
## [Редактор Visual Studio Code](https://code.visualstudio.com/)
  ### Список плагинов:
    [Align][pl_01] - Выравние кода. Mac: ctrl+cmd+a Linux/Windows: ctrl+alt+a  
    [All Autocomplete][pl_02] - Обеспечивает автозаполнение элементов кода Visual Studio на основе всех открытых редакторов/  
    
  > [Path Autocomplete](https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete "Автозаполнение пути файла (Относительный путь - `./`, Абсолютный путь - `/`)") - Автозаполнение пути файла (Относительный путь - `./`, Абсолютный путь - `/`)  
  > [Color Highlight](https://github.com/sergiirocks/vscode-ext-color-highlight "Подсветка цвета") - Подсветка цвета  
  > [Color Picker](https://marketplace.visualstudio.com/items?itemName=anseki.vscode-color "Панель цветов") - Панель цветов  

  [pl_01]: https://marketplace.visualstudio.com/items?itemName=steve8708.Align "Выравние кода. Mac: ctrl+cmd+a Linux/Windows: ctrl+alt+a"
  [pl_02]: https://marketplace.visualstudio.com/items?itemName=Atishay-Jain.All-Autocomplete "Автозаполнение в коде на основе всех открытых редакторов"




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

 > **"Настройки редактора Visual Studio Code")**  
 ```
 {
  "files.defaultLanguage": "html",
  "files.autoSave": "onFocusChange",
  "open-in-browser.default": "Chrome",
  "emmet.triggerExpansionOnTab": true,

  "window.menuBarVisibility": "toggle",
  "window.zoomLevel": 0,

  "workbench.startupEditor": "newUntitledFile",
  // "workbench.statusBar.feedback.visible": false,
  "workbench.statusBar.visible": true,
  "workbench.editor.tabSizing": "shrink",
  "workbench.sideBar.location": "left",
  "workbench.colorTheme": "Seti Monokai",
  "workbench.iconTheme": "file-icons",
  "workbench.colorCustomizations": {
    "editorIndentGuide.activeBackground": "#5c5c5c"
  },

  "editor.tabSize": 2,
  // "editor.insertSpaces": false,
  "editor.detectIndentation": false,
  "editor.glyphMargin": false,
  "editor.smoothScrolling": true,
  "editor.multiCursorModifier": "ctrlCmd",
  "editor.formatOnPaste": true,
  "editor.renderWhitespace": "boundary",
  "editor.fontSize": 15,
  "editor.renderLineHighlight": "line",

  // ========== Настройка длины строки ===============
  // Установить перенос строки по достижении края области редактора
  // "editor.wordWrap": "on",
  // Установить ширину строки (символов)
  "editor.wordWrapColumn": 93,
  // Установить перенос строки при достижении установленной ширины
  "editor.wordWrap": "wordWrapColumn",
  // Установить вертикальную линию на границе, установленной ширины
  "editor.rulers": [93],

  // ========== Настройка всплывающих поодсказок =====
  // убирает ВСЕ всплывающие подсказки
  // P.S. Чтобы отобразить подсказки
  // нажать: `ctrl+k ctrl+i` или через поиск `F1 > Show Hover`
  // "editor.hover.enabled": false,
  // убирает всплывающие подсказки в HTML
  // "[html]": {
  //   "editor.hover.enabled": false
  // },
  "editor.quickSuggestions": {
    // "other": false,
    "comments": false,
    "strings": false
  },
  
  // ========== Настройка терминала ==================
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
  
  // ========== PHP ==================================
  "php.suggest.basic": false,
  "php.executablePath": "D:/xampp/php/php.exe",
  "php.validate.executablePath": "D:/xampp/php/php.exe",

  // ========== React.js =============================
  "files.associations": {
    "*.js": "javascriptreact"
  },
  
  "emmet.syntaxProfiles": {
    "javascript": "jsx"
  },
  
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  
  "workbench.panel.defaultLocation": "right",
  "breadcrumbs.symbolSortOrder": "type",
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "html",
      "autoFix": true
    }
  ],
  
  // ========== Live Sass Compile ====================
  "liveSassCompile.settings.generateMap": false,
  "liveSassCompile.settings.excludeList": [
    "**/node_modules/**",
    ".vscode/**"
  ],
  "liveSassCompile.settings.formats": [
    // This is Default.
    // {
    //   "format": "expanded",
    //   "extensionName": ".css",
    //   "savePath": null
    // },
    // You can add more
    {
      "format": "compressed",
      "extensionName": ".css",
      "savePath": "/css"
    },
    // More Complex
    // {
    //   "format": "compressed",
    //   "extensionName": ".min.css",
    //   "savePath": "~/../css/"
    // },
    
    // My settings.
    // {
    //   "format": "expanded",
    //   "extensionName": ".css",
    //   "savePath": "/"
    // },
  ],
  "git.enableSmartCommit": true,
  "git.autofetch": true,
  "git.confirmSync": false,
}
 ```  
 
> _[Слайдер для фотографий fotorama](http://fotorama.io/ "Слайдер для фотографий fotorama")_  
> _[Слайдер для любого контента slick](http://kenwheeler.github.io/slick/ "Слайдер для любого контента slick")_  
> _[Слайдер с фотографиями и всплывающими окнами magnific-popup](http://dimsemenov.com/plugins/magnific-popup/ "Слайдер с фотографиями и всплывающими окнами magnific-popup")_  
