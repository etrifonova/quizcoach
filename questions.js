const questions = [
    // {
    //   question: "Аппетит приходит во время еды, ",
    //   answer: "а жадность - во время аппетита",
    // },
  
    // {
    //   question: "Бабушка гадала, надвое сказала, ",
    //   answer: "то ли дождик, то ли снег, то ли будет, то ли нет",
    // },
  
    // { question: "Бедность - не порок, ", answer: "а несчастье" },
  
    // { question: "В здоровом теле здоровый дух - ", answer: "редкая удача" },
  
    // {
    //   question: "В семье не без урода, ",
    //   answer: "а из-за урода все не в угоду",
    // },
  
    // {
    //   question: "Везет, как субботнему утопленнику - ",
    //   answer: "баню топить не надо",
    // },
  
    // {
    //   question: "Ворон ворону глаз не выклюет, ",
    //   answer: "а и выклюет, да не вытащит",
    // },
  
    // { question: "Всяк правду ищет, ", answer: "да не всяк её творит" },
  
    // {
    //   question: "Где тонко, там и рвётся, ",
    //   answer: "где толсто, там и наслаивается",
    // },
  
    // {
    //   question: "Гладко было на бумаге, ",
    //   answer: "да забыли про овраги, а по ним ходить",
    // },
  
    // { question: "Гол как сокол, ", answer: "а остер как топор" },
  
    // { question: "Голод не тетка, ", answer: "пирожка не поднесет" },
  
    // { question: "Горбатого могила исправит, ", answer: "а упрямого - дубина" },
  
    // {
    //   question: "Губа не дура, ",
    //   answer: "язык не лопата: знают, что горько, что сладко",
    // },
  
    // { question: "Два сапога пара, ", answer: "да оба левые" },
  
    // { question: "Двое третьего ждут, ", answer: "а семеро одного не ждут" },
  
    // { question: "Девичий стыд - до порога, ", answer: "переступила и забыла" },
  
    // { question: "Дело мастера боится, ", answer: "а иной мастер дела" },
  
    // { question: "Дорога ложка к обеду, ", answer: "а там хоть под лавку" },
  
    // {
    //   question: "Дуракам закон не писан, ",
    //   answer:
    //     "если писан - то не читан, если читан - то не понят, если понят - то не так",
    // },
  
    // { question: "Живем, хлеб жуем, ", answer: "а иногда и подсаливаем" },
  
    // {
    //   question: "За битого двух небитых дают, ",
    //   answer: "да не больно-то берут",
    // },
  
    // {
    //   question: "За двумя зайцами погонишься - ",
    //   answer: "ни одного кабана не поймаешь",
    // },
  
    // {
    //   question: "За морем веселье, ",
    //   answer: "да чужое, а у нас и горе, да своё",
    // },
  
    // {
    //   question: "Зайца ноги носят, ",
    //   answer: "волка зубы кормят, лису хвост бережет",
    // },
  
    // { question: "И делу время, ", answer: "и потехе час" },
  
    // { question: "И слепая лошадь везёт, ", answer: "коли зрячий на возу сидит" },
  
    // { question: "Комар лошадь не повалит, ", answer: "пока медведь не подсобит" },
  
    // {
    //   question: "Кто старое помянет - ",
    //   answer: "тому глаз вон, а кто забудет - тому оба",
    // },
  
    // { question: "Курочка по зернышку клюет, ", answer: "а весь двор в помёте" },
  
    // { question: "Лиха беда начало, ", answer: "а там уж близок и конец" },
  
    // { question: "Лиха беда почин - ", answer: "есть дыра, будет и прореха" },
  
    // {
    //   question: "Молодые бранятся - ",
    //   answer: "тешатся, а старики бранятся - бесятся",
    // },
  
    // {
    //   question: "На (обиженных) сердитых воду возят, ",
    //   answer: "а на добрых сами катаются",
    // },
  
    // {
    //   question: "На чужой каравай рот не разевай, ",
    //   answer: "пораньше вставай да свой затевай",
    // },
  
    // { question: "Не все коту масленица, ", answer: "будет и пост" },
  
    // {
    //   question: "Не печалится дятел, ",
    //   answer: "что петь не может, его и так весь лес слышит",
    // },
  
    // { question: "Ни рыба, ни мясо, ", answer: "ни кафтан, ни ряса" },
  
    // {
    //   question: "Новая метла по-новому метёт, ",
    //   answer: "а как сломается - под лавкой валяется",
    // },
  
    // { question: "Один в поле не воин, ", answer: "а путник" },
  
    // { question: "От работы кони дохнут, ", answer: "а люди - крепнут" },
    // { question: "От овса кони не рыщут, ", answer: "а от добра добра не ищут" },
    // { question: "Палка, о двух концах, ", answer: "туда и сюда бьет" },
    // { question: "Повторенье - мать ученья, ", answer: "утешенье дураков" },
    // { question: "Повторение - мать учения и прибежище для лентяев" },
    // {
    //   question: "Под лежачий камень вода не течёт, ",
    //   answer: "а под катящийся - не успевает",
    // },
    // { question: "Пьяному море по колено, ", answer: "а лужа - по уши" },
    // {
    //   question: "Пыль столбом, дым коромыслом, ",
    //   answer: "а изба не топлена, не метена",
    // },
    // {
    //   question: "Работа - не волк, ",
    //   answer: "в лес не убежит, потому ее, окаянную, делать и надо",
    // },
    // {
    //   question: "Расти большой, ",
    //   answer: "да не будь лапшой, тянись верстой, да не будь простой",
    // },
    // {
    //   question: "Рыбак рыбака видит издалека, ",
    //   answer: "потому стороной и обходит",
    // },
    // { question: "Рука руку моет, ", answer: "да обе свербят" },
    // {
    //   question: "С пчелой поладишь - ",
    //   answer: "медку достанешь, с жуком свяжешься - в навозе окажешься",
    // },
    // { question: "Свой глаз - алмаз, ", answer: "а чужой - стекло" },
    // {
    //   question: "Семь бед - один ответ, ",
    //   answer: "восьмая беда - совсем никуда",
    // },
    // { question: "Смелого пуля боится, ", answer: "а труса и в кустах найдёт" },
    // {
    //   question: "Собака на сене лежит, ",
    //   answer: "сама не ест и скотине не дает",
    // },
    // { question: "Собаку съели, ", answer: "хвостом подавились" },
    // {
    //   question: "Старость не радость, ",
    //   answer: "сядешь - не встанешь, побежишь - не остановишься",
    // },
    // {
    //   question: "Старый конь борозды не испортит, ",
    //   answer: "а и глубоко не вспашет",
    // },
    // {
    //   question: "Тише едешь - ",
    //   answer: "дальше будешь от того места, куда едешь",
    // },
    // { question: "У страха глаза велики, ", answer: "да ничего не видят" },
    // {
    //   question: "Ударили по одной щеке - ",
    //   answer: "подставь другую, но не позволь себя ударить",
    // },
    // { question: "Ума палата, ", answer: "а ключ потерян" },
    // {
    //   question: "Хлеб на стол - и стол престол, ",
    //   answer: "а хлеба ни куска - и стол доска",
    // },
    // { question: "Хлопот полон рот, ", answer: "а прикусить нечего" },
    // { question: "Чудеса в решете - ", answer: "дыр много, а выскочить некуда" },
    // { question: "Шито-крыто, ", answer: "а узелок-то тут" },
    // { question: "Язык мой - враг мой, ", answer: "прежде ума глаголет" },
    // { question: "Язык мой - враг мой, ", answer: "прежде ума рыщет, беды ищет" },

    /* Годы публикации книг */
    { question: "В каком году опубликован роман \"Унесенные ветром\"?", answer: "1936", hint: "В этом году прошли Зимние и Летние Олимпийские игры в нацистской Германии и началась гражданская война в Испании.", comment: "1936 - год публикации романа \"Унесенные ветром\"" },
    { question: "В каком году опубликована басня \"Стрекоза и муравей\"", answer: "1808", hint: "В этом году началась Русско-шведская война и произошел Ромовый бунт (мятеж) в Австралии.", comment: "1808 - год публикации басни \"Стрекоза и муравей\"" },
    { question: "В каком году опубликован роман \"Алиса в Стране чудес\"?", answer: "1865", hint: "В этом году завершилась Гражданская война в США и было совершено первое восхождение на Маттерхорн (Альпы)", comment: "1865 - год публикации романа \"Алиса в Стране чудес\"" },
    { question: "В каком году опубликован роман \"1984\"?", answer: "1949", hint: "В этом году в СССР торжественно отметили 70-летие И. В. Сталина и образовалась Германская Демократическая Республика.", comment: "1949 - год публикации романа \"1984\"" },
    { question: "В каком году опубликован роман \"Евгений Онегин\"?", answer: "1833", hint: "В этом году был основан город Чикаго и Майкл Фарадей в результате работ по исследованию природы электрического тока в растворах кислот, солей и щелочей открыл законы электролиза.", comment: "1833 - год публикации романа \"Евгений Онегин\"" },
    { question: "В каком году опубликован роман \"Преступление и наказание\"?", answer: "1866", hint: "В этом году 27 июля компания «Грейт Истерн» успешно проложила трансатлантический телеграфный кабель между Ирландией и Северной Америкой, после чего был запущен трансатлантический электротелеграф, а 16 апреля этого года было совершено неудачное покушение Д. В. Каракозова на императора Александра II у ворот Летнего сада в Санкт-Петербурге.", comment: "1866 - год публикации романа \"Преступление и наказание\"" },
    { question: "В каком году опубликован роман \"Дворянское гнездо\"?", answer: "1859", hint: "В этом году 14 февраля Орегон становится 33-м Штатом США, а 25 апреля началась прокладка Суэцкого канала, продолжавшаяся 10 лет.", comment: "1859 - год публикации романа \"Дворянское гнездо\"" },
    { question: "В каком году опубликован роман \"Гранатовый браслет\"?", answer: "1911", hint: "В этом году 31 мая был спущен на воду британский лайнер «Титаник», крупнейший пассажирский пароход мира, а 14 декабря норвежский полярный исследователь Руал Амундсен с четырьмя спутниками впервые в истории достиг Южного полюса.", comment: "1911 - год публикации романа \"Гранатовый браслет\"" },
    { question: "В каком году опубликован роман \"Тихий Дон\"?", answer: "1928", hint: "В этом году 7 января состоялся первый полёт самолёта У-2 («Кукурузник») конструкции Н. Н. Поликарпова, 1 ноября в Турции был введён латинский алфавит.", comment: "1928 - год публикации романа \"Тихий Дон\"" },
    { question: "В каком году опубликован роман \"Доктор Живаго\"?", answer: "1957", hint: "В этом году 20 января Дуайт Эйзенхауэр вступил в должность президента США на 2-й срок, а 28 февраля в Москве открылся I-й Всесоюзный съезд советских художников, учредивший Союз художников СССР.", comment: "1957 - год публикации романа \"Доктор Живаго\"" },
    { question: "В каком году опубликован роман \"Ярмарка тщеславия\"?", answer: "1848", hint: "В этом году 24 января на реке Сакраменто обнаружено золото, что послужило началом «золотой лихорадки» в США, а 15 февраля в Лондоне был опубликован «Манифест коммунистической партии» Карла Маркса и Фридриха Энгельса.", comment: "1848 - год публикации романа \"Ярмарка тщеславия\"" },
    { question: "В каком году опубликован роман \"Мартин Иден\"?", answer: "1909", hint: "В этом году ", comment: "1909 - год публикации романа \"Мартин Иден\"" },
    { question: "В каком году опубликован роман \"Портрет Дориана Грея\"?", answer: "1890", hint: "В этом году 20 марта ушёл в отставку Отто фон Бисмарк, первый канцлер объединённой Германской империи, а 25 сентября был основан национальный парк Секвойя (США).", comment: "1890 - год публикации романа \"Портрет Дориана Грея\"" },

    /* Годы рождения писателей */
    { question: "В каком году родился Александр Сергеевич Пушкин?", answer: "1799", hint: "В этом году в Англии впервые в мире был введён подоходный налог, а 10 декабря во Франции была введена метрическая система.", comment: "1799 - год рождения А.С. Пушкина" },
    { question: "В каком году родился Федор Михайлович Достоевский?", answer: "1821", hint: "В этом году была провозглашена Первая Мексиканская империя и завершилась война за независимость Мексики, а 10 августа штат Миссури был принят в состав Соединённых Штатов Америки.", comment: "1821 - год рождения Ф.М. Достоевского" },
    { question: "В каком году родился Александр Иванович Куприн?", answer: "1870", hint: "В этом году 30 марта — в США вступила в силу Пятнадцатая поправка к конституции США, утвердившая активное избирательное право для цветного населения и бывших рабов, а 1 ноября — в США Бюро погоды (позднее переименованное в Национальную метеорологическую службу) делает свой первый официальный метеорологический прогноз.", comment: "1870 - год рождения А.В. Куприна" },
    { question: "В каком году родился Иван Сергеевич Тургенев?", answer: "1818", hint: "В этом году 12 февраля в годовщину победы при Чакабуко в Сантьяго и других городах Чили торжественно была провозглашена Декларация о независимости, а 22 августа был спущен на воду пароход Саванна, который первым из пароходов пересёк Атлантический океан.", comment: "1818 - год рождения И.В. Тургенева" },
    { question: "В каком году родился Оскар Уайльд (полное имя - Оскар Фингал О'Флаэрти Уиллс Уайльд)?", answer: "1854", hint: "В этом году 16 февраля основана крепость Верный (с 1921 года — Алма-Ата, столица Республики Казахстан в 1929—1997 годах), а 28 февраля в г. Рипон, штат Висконсин, основана Республиканская партия США", comment: "1854 - год рождения О. Уайльда" },
    { question: "В каком году родился Уильям Теккерей (полное имя - Уильям Мейкпис Теккерей)?", answer: "1811", hint: "В этом году 31 октября в России был открыт Царскосельский лицей, а 12 октября был подписан договор, по которому Буэнос-Айрес признал независимость Парагвая.", comment: "1811 - год рождения У. Теккерея" },
    { question: "В каком году родился Александр Сергеевич Грибоедов?", answer: "1795", hint: "В этом году 26 октября произошел Третий раздел Речи Посполитой, в результате которого она прекратило свое существование как независимого государства, а Россия получает герцогство Курляндское.", comment: "1795 - год рождения А.С. Грибоедова" },
    { question: "В каком году родился Джек Лондон (настоящее имя - Джон Гриффит Чейни)?", answer: "1876", hint: "В этом году 30 ноября Яблочков Павел Николаевич получил патент на создание трансформатора, что считается датой появления первого трансформатора, а 25 июня Александр Белл впервые продемонстрировал свой телефон на первой Всемирной электротехнической выставке в Филадельфии.", comment: "1876 - год рождения Джека Лондона" },
    { question: "В каком году родился Марк Твен (настоящее имя - Сэмюэл Ленгхорн Клеменс)?", answer: "1835", hint: "В этом году 10 сентября открыта первая железная дорога в Германии между Нюрнбергом и Фюртом протяжённостью 10 км, а 11 октября русская система мер упорядочена указом Николая I «О системе российских мер и весов».", comment: "1835 - год рождения Марка Твена" },
    { question: "В каком году родился Александр Дюма-отец?", answer: "1802", hint: "В этом году английский мореплаватель Мэтью Флиндерс обследовал восточное и северное побережье Австралии, нанёс на карту Большой Барьерный риф и произвёл съёмку залива Карпентария (залив Арафурского моря на севере Австралии).", comment: "1802 - год рождения Александра Дюма-отца" },
    { question: "В каком году родился Александр Дюма-сын?", answer: "1824", hint: "В этом году 10 февраля конгресс Перу отстранил от власти президента маркиза де Торре-Тагле и назначил Симона Боливара диктатором, а также был открыт мегалозавр, который считается первым описанным динозавром.", comment: "1824 - год рождения Александра Дюма-сына" },
    { question: "В каком году родился О. Генри (настоящее имя - Уильям Сидни Портер)?", answer: "1862", hint: "В этом году английский путешественник Джон Спик стал первым белым человеком, прибывшим на территорию современной Уганды, а 20 сентября в Великом Новгороде был открыт памятник «Тысячелетие России» (монумент, воздвигнутый в Новгороде в 1862 году в честь тысячелетнего юбилея летописного призвания варягов, с которым традиционно связывается начало русской государственности)", comment: "1862 - год рождения О.Генри" },
    // { question: "", answer: "" },
    
  ];

  module.exports = questions;