# Проект "Ритуал журнал"

## Инструкция по установке

1. Скачать и установить [Node.js](https://nodejs.org/ru/download)
- Скачивание:
Установщик Windows -> выбираем любое место и скачиваем
- Установка:
Во время установки ничего менять не нужно, просто нажимать "Next", "Finish" и т.п.

2. Скачать и установить [Git](https://git-scm.com/downloads)
- Скачивание:
Download for Windows -> если операционная 64 бита, то "64-bit Git for Windows Setup", если 32 - то "32-bit Git for Windows Setup" (все современные ПК, как правило, идут 64 битные).
- Установка:
Все то же самое - ничего не меняем, прожимаем далее до самого конца и ждем окончания установки.

3. Проверка успешности установки:
- Открываем командную строку/cmd (можно просто в пуске в поиске вбить)
- В появившемся черном окошке вбиваем `node -v` - нам показывает установленную версию Node js (должно быть что то вроде этого "v18.10.0")
- В появившемся черном окошке вбиваем `git -v` - нам показывает установленную версию Git (должно быть что то вроде этого "git version 2.41.0.windows.3"). 

Если все так, то все классно. Окно командной строки не закрываем, в ней будет дальнейшая работа. Идем далее.

4. Теперь скачиваем сам проект с удаленного сервера (туда я загружаю все внесенные в проект изменения).
- Заходим в "Мой компьютер", открываем диск и папку, куда хотим скачать проект. Копируем путь к этой папке сверху.
- Заходим в командную строку и пишем команду `cd *сюда вставляем путь Ctrl+V*` (должно получиться что-то вроде этого "cd C:\Ilya\coding"). Жмем Enter.
- Теперь вводим следующую команду `git clone https://github.com/lostie21yo/funeral-app2`
Это ссылка данного репозитория (хранилища с нашим проектом). Происходит скачивание. Ждем.

5. Устанавливаем все программные библиотеки, благодаря которым данный проект может существовать.
- В окне командной строки переходим внутрь папки проекта `cd funeral-app2`
- Вводим команду: `npm install`. Данная команда некоторое время будет устанавливать разные требуемые проекту пакеты.
На этом установка подошла к концу.

6. Теперь ты можешь открывать приложение локально у себя на компьютере.
- Для этого в командной строке вводим `npm start`
- Сервер запускается. Приложение откроется во вкладке браузера.

## Работа с Blender

Как я понял, ты хочешь работать непосредственно с загрузкой моделей. Тут все достаточно просто.

1. Александр отправляет модели в формате .obj с доп файлом .mtl, модели в таком формате весят существенно больше и работать с ними в вебе сложнее. По этой причине модели загружаются в приложение в формате .glb. Преобразовать формат .obj в .glb можно в программе Blender (бесплатная программа, [ссылка на оф. сайт, где можно ее скачать](https://www.blender.org/))

2. Не пугайся. Тут дело за малым. Все что нужно - это сначала загрузить модели .obj в blender. 
- Удалить всё лишнее со сцены (по умолчанию там будет кубик, камера и свет). Выделяешь лкм - удаляешь (Del).
- Сверху в левом углу есть кнопка "File". Жмем. В выпадающем списке есть "Import". Жмем.
- В этом списке выбираем "Wavefront (.obj)" и далее просто указываем где лежит модель в формате .obj.
- Выбираем, нажимаем снизу "Import Wavefront OBJ" и модель должна появиться в окне.
- Тут получается тебе нужно эту модель позиционировать, может менять масштаб и т.п., советую найти какой нибудь простенький урок на ютубе (в основном горячими клавишами манипуляции проводят)

3. После всех манипуляций, нужно сохранить эту модель в формате .glb.
- Для этого открываем ту же кнопку "File". Там жмём "Export". В списке выбираем "glTF (.glb/.gltf)".
- Теперь просто выбираем папку, где сохранить это модель.

## Загрузка модели в формате .glb в приложение

Осталось немного.
1. В папке с проектом (funeral-app2) переходим public -> models. Тут лежат папки всех классов.

2. Выбираешь нужную папку, исходя из класса новой модели. Там лежат непосредственно сами файлы с моделями.

3. Перемещаешь новую модель сюда.

4. Теперь ее остается переименовать определенным образом, чтоб она фильтровалась как нужно.
Все что идет до скобки `[` - это название продукции

Внутри квадратных скобок указывается следующее `[материал_ширина_тип(религиозность)]` (сюда смотрит верхний фильтр в приложении)
- материал может быть `granite`, `marble` (мрамор) и `u` (универсальная модель по параметру материала, т.е. относится и туда и сюда)
- ширина сейчас не столько важна, но все же пока такая картина. Ширина может быть `100`, `120`, `150`, `170`, `200`. Параметр `u` работает так же - универсальная ширина.
- тип(религиозность) может быть следующим `orthodox` (православный), `muslim` (мусульманский), `standard` (стандартный) и `u` (универсальный). Здесь может возникнуть путаница со стандартным и универсальный. Так сделано для корректной фильтрации. При установке параметра `standard` модель становится универсальной иключительно в рамках религиозности в то время, как параметр `u` делает модель универсальной глобально (для всех трех уровней фильтрации материал-ширина-тип). Возможно этот момент стоит обсудить в разговоре.

В круглых скобках указывается цвет или высота (называю его нижним фильтром). Круглые скобки опциональные и могут вообще не указываться.
- Цвет может принимать следующие варианты: `black` (черный), `green` (зеленый), `brown` (коричневый), `silver` (серебряный)
- Высота может принимать следующие варианты: `60`, `70`, `80`, `90`, `100`, `120`

5. Пару примеров моделей:
- `Памятник вола Габро [granite_u_u] (60).glb`
Памятник вола Габро из гранита (granite) универсальный по ширине (u) и универсальный по типу (u) высотой 60 см (60).
- `Крест Эконом [u_u_orthodox] (silver)`
Крест Эконом универсальный по материалу, универсальный по ширине, православного типа и имеет серебристый цвет.

6. После добавления моделей в папки программа их не видит в режиме реального времени. Нужно запустить сервер заного.
- Останавливаем сервер (если он работает). Для этого в командной строке жмем горячие клавиши Ctrl+C, вводим `y`. Enter.
- Запускаем сервер  командой `npm start`.
- Добавленные модели, если все верно указано, должны появится для выбора в соответствующих кнопках (не забудь про фильтрацию).

На этом все, надеюсь понятно объяснил. Если что-то неясно и есть вопросы, пиши в телеграмме, постараюсь помочь. 