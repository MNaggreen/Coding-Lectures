/* чтобы скопировать проект 
заходим непосредственно в репозитории прокета - посмотреть файлы -
 есть зеленая кнопка 
clone or download там есть ссылка команду терминала
 */

/* далее ссылку которую мы взяли
вставляем в команду 
git clone https://github.com/MNaggreen/test2.git project_2*/
/* где 1 это каманда, 2 ссылка, 3 имя папки */

/* дальше как обычно пишем 
git add -A
git commit -a -m"index.html new ver." 
git push Данные сразу загружаються на сервер*/


/* то есть на гитхабе проект измениться тоже
который оригинальный
т.к. мы клонировали репозиторий */

/* чтобы загрузить обновленный файлы с 
github
в старую папку
git pull */

/* есть одна ошибка 
если если мы хотим загрузить изменения
ипосле команды 
git push 
выдает ошибку
значит кто то уже делал изменения и версия нашего
проекта локального ниже чем версия которую мы хотим обновить
значит сначала делаем 
git pull 
это так называемое сливание 
merge
Наших проектов*/


/* далее пишеим комиь любой

нажимаем
ctrl + c 

пишем
:wq! */







/* gitignore это файл который нам нужен для того чтобы
сказать терминалу какие файлы не загружать на github */


/* как смотреть репозитории
нужно программа git kraken
устанавливаем и регистрируемся
в ней нажимае Open
 open repositry
 там можно смотреть изменения 
 делать pull push Наших репозиториев
 */