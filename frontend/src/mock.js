// Mock data for MyHeal CRM Timeline Dashboard

export const doctor = {
  name: "Мітюшова Ольга Олегівна",
  verified: true,
  position: "Лікар загальної практики - Сімейний лікар",
  subdivision:
    "Відділення №1 Медичного центру ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ",
  groups: "Лікар",
  organization: "ТОВ «СІНГАПУРСЬКИЙ МЕДИЧНИЙ ЦЕНТР»",
  type: "Первинна допомога",
  avatar:
    "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop&crop=faces",
};

// Large primary tiles (2 rows of 4)
export const primaryTiles = [
  { id: "timeline", label: "Таймлайн", icon: "Clock", active: true, isTimeline: true },
  { id: "my-calendar", label: "Мій календар", icon: "CalendarCheck", active: true },
  { id: "doctors-calendar", label: "Календар лікарів", icon: "CalendarDays", active: false },
  { id: "employees", label: "Працівники", icon: "Stethoscope", active: false },
  { id: "declarations", label: "Декларації та декларанти", icon: "ShieldPlus", active: false },
  { id: "patients", label: "Пацієнти", icon: "Contact", active: false },
  { id: "referrals", label: "Направлення", icon: "ClipboardCheck", active: false },
  { id: "my-cases", label: "Мої справи", icon: "RefreshCw", active: false },
];

// Smaller secondary list tiles (2 rows of 4)
export const secondaryTiles = [
  { id: "treatment-plans", label: "Плани лікування", icon: "FileStack" },
  { id: "nszu-reports", label: "Звіти НСЗУ", icon: "FolderClosed" },
  { id: "registries", label: "Реєстри", icon: "List" },
  { id: "reporting", label: "Звітність", icon: "BarChart3" },
  { id: "catalog", label: "Каталог препаратів, послуг, медичних виробів та ДЗР", icon: "BookOpenText" },
  { id: "surveys", label: "Опитування", icon: "FileText" },
  { id: "instructions", label: "Інструкції з функціоналу", icon: "Info" },
  { id: "whats-new", label: "Що нового в системі?", icon: "Megaphone" },
];

// Left navigation rail icons
export const sidebarItems = [
  { id: "timeline", icon: "Clock", active: true, tooltip: "Таймлайн" },
  { id: "calendar", icon: "CalendarCheck", active: false, tooltip: "Мій календар" },
  { id: "doctors-calendar", icon: "CalendarDays", active: false, tooltip: "Календар лікарів" },
  { id: "employees", icon: "Stethoscope", active: false, tooltip: "Працівники" },
  { id: "declarations", icon: "ShieldPlus", active: false, tooltip: "Декларації" },
  { id: "patients", icon: "Contact", active: false, tooltip: "Пацієнти" },
  { id: "referrals", icon: "ClipboardCheck", active: false, tooltip: "Направлення" },
  { id: "cases", icon: "RefreshCw", active: false, tooltip: "Мої справи" },
  { id: "plans", icon: "FileStack", active: false, tooltip: "Плани лікування" },
  { id: "reports", icon: "FolderClosed", active: false, tooltip: "Звіти" },
  { id: "registries", icon: "List", active: false, tooltip: "Реєстри" },
];

export const months = [
  "Січ.", "Лют.", "Бер.", "Кві.", "Тра.", "Черв.",
  "Лип.", "Серп.", "Вер.", "Жовт.", "Лист.", "Груд.",
];

// Doctor page left menu
export const doctorMenu = [
  { id: "showcase", label: "Вітрина лікаря", icon: "Store", to: null },
  { id: "timeline", label: "Таймлайн", icon: "Clock", to: "/", active: false },
  { id: "templates", label: "Шаблони медзаписів", icon: "FileText", to: null },
  { id: "forms", label: "Медичні форми", icon: "ClipboardList", to: null },
  { id: "services", label: "Послуги лікаря (iBoss)", icon: "Briefcase", to: null },
  { id: "my-patients", label: "Мої пацієнти", icon: "Users", to: "/patients" },
  { id: "provided", label: "Надані послуги (iBoss)", icon: "CheckSquare", to: null },
  { id: "cases", label: "Мої справи", icon: "RefreshCw", to: null },
  { id: "ratings", label: "Рейтинги та відгуки", icon: "Star", to: null },
  { id: "links", label: "Корисні посилання", icon: "Link2", to: null },
];

export const doctorCode = "722bd799-9a85-40c0-a297-90ec132c7bdd";

// Patient profile left menu
export const patientMenu = [
  { id: "profile", label: "Профіль", expandable: false },
  { id: "relations", label: "Зв'язки", expandable: true, sub: ["Родичі", "Контактні особи"] },
  { id: "history", label: "Історія прийомів", expandable: false },
  { id: "card", label: "Медична картка", expandable: true, sub: [
    "Номер мед. картки",
    "Направлення",
    "Історія захворювань",
    "Виписані рецепти/е-Записи",
    "Результати аналізів та діагностики",
    "Процедури",
    "Діагнози",
    "Алергії",
    "Щеплення",
  ] },
  { id: "documents", label: "Медичні документи", expandable: false },
  { id: "insurance", label: "Страхування", expandable: false },
  { id: "prescriptions", label: "Призначення", expandable: true, sub: ["Ліки", "Процедури"] },
  { id: "finance", label: "Фінанси", expandable: true, sub: ["Рахунки", "Платежі"] },
];

// Default patient profile (used when opening a patient card)
export const defaultPatientProfile = {
  name: "Сліпуха Андрій Володимирович",
  phone: "+38 (093) 432-50-70",
  gender: "male",
  age: "25 років",
  birth: "12.05.1997",
  verified: true,
};

// Treatment plans
export const treatmentPlans = [
  {
    id: "3005-7523-3772-2245",
    number: "3005-7523-3772-2245",
    status: "Активний",
    name: "E21.2 - Інші форми гіперпаратиреозу",
    period: "28.02.2024 11:38 - Не вказано",
    patient: "Ніцос Анна Андріївна",
    created: "28.02.2024 11:38",
    doctor: "Мітюшова Ольга Олегівна",
    items: [
      { type: "med", name: "ібупрофен 200 мг, кодеїн 10 мг, таблетки", planned: "28.02.2024 12:18 - Не вказано", qty: "1", status: "Заплановано" },
      { type: "med", name: "ібупрофен 200 мг, кодеїн 10 мг, таблетки", planned: "28.02.2024 11:48 - Не вказано", qty: "1", status: "Заплановано" },
      { type: "proc", name: "Лікувальний масаж або терапевтична маніпуляція щодо сполучної/м'яких тканин, не класифіковані в інших рубриках", planned: "28.02.2024 11:44 - Не вказано", qty: "3", status: "Виконано" },
    ],
  },
  {
    id: "1102-4456-9987-3321",
    number: "1102-4456-9987-3321",
    status: "Завершений",
    name: "J06.9 - Гостра інфекція верхніх дихальних шляхів",
    period: "10.01.2024 09:15 - 24.01.2024 18:00",
    patient: "Кущ Віталій Володимирович",
    created: "10.01.2024 09:15",
    doctor: "Мітюшова Ольга Олегівна",
    items: [
      { type: "med", name: "парацетамол 500 мг, таблетки", planned: "10.01.2024 10:00 - 17.01.2024", qty: "14", status: "Виконано" },
    ],
  },
  {
    id: "7788-1234-5566-0091",
    number: "7788-1234-5566-0091",
    status: "Відмінений",
    name: "I10 - Есенціальна (первинна) гіпертензія",
    period: "05.03.2024 10:00 - Не вказано",
    patient: "Домченко Лілія Іванівна",
    created: "05.03.2024 10:00",
    doctor: "Мітюшова Ольга Олегівна",
    items: [
      { type: "med", name: "амлодипін 5 мг, таблетки", planned: "05.03.2024 10:30 - Не вказано", qty: "30", status: "Відмінено" },
    ],
  },
  {
    id: "2244-8899-1010-7654",
    number: "2244-8899-1010-7654",
    status: "Активний",
    name: "K21.9 - Гастроезофагеальна рефлюксна хвороба без езофагіту",
    period: "12.04.2024 14:20 - Не вказано",
    patient: "Пільтяй Роман Володимирович",
    created: "12.04.2024 14:20",
    doctor: "Мітюшова Ольга Олегівна",
    items: [
      { type: "med", name: "омепразол 20 мг, капсули", planned: "12.04.2024 15:00 - Не вказано", qty: "28", status: "Заплановано" },
      { type: "proc", name: "Ендоскопія стравоходу", planned: "20.04.2024 09:00 - Не вказано", qty: "1", status: "Заплановано" },
    ],
  },
];

// Disease history episodes
export const diseaseEpisodes = [
  { id: 1, name: "I11.0 Гіпертензивна (гіпертонічна) хвороба серця з (застійною) серцевою недостатністю", type: "Лікування", start: "06.12.2024 15:15", updated: "06.12.2024 15:16" },
  { id: 2, name: "A05.1 Ботулізм", type: "Лікування", start: "29.11.2024 10:35", updated: "29.11.2024 10:51" },
  { id: 3, name: "A04.3 Ентерогеморагічна інфекція, спричинена Escherichia coli", type: "Діагностика", start: "29.11.2024 09:31", updated: "29.11.2024 09:49" },
  { id: 4, name: "B18.0 Хронічний вірусний гепатит B з дельта-агентом", type: "Лікування", start: "25.11.2024 16:59", updated: "25.11.2024 17:23" },
  { id: 5, name: "A01.1 Паратиф A", type: "Лікування", start: "27.11.2024 13:21", updated: "27.11.2024 15:02" },
  { id: 6, name: "B18.0 Хронічний вірусний гепатит B з дельта-агентом", type: "Лікування", start: "25.11.2024 12:11", updated: "25.11.2024 12:25" },
  { id: 7, name: "B06.9 Краснуха без ускладнень", type: "Лікування", start: "20.11.2024 12:26", updated: "20.11.2024 12:50" },
  { id: 8, name: "B18.0 Хронічний вірусний гепатит B з дельта-агентом", type: "Лікування", start: "20.11.2024 11:40", updated: "21.11.2024 16:17" },
];


// Patient search result cards
export const patientResults = [
  {
    id: 1,
    name: "Ніцос Анна Андріївна",
    hasDeclaration: true,
    esoz: true,
    gender: "female",
    birth: "28.05.1999",
    age: "23 роки",
    location: "Київ , Україна",
    phone: "+38 (095) 753-04-59",
    visits: 259,
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MHx8fHwxNzg2MTE5MTEyfDA&ixlib=rb-4.1.0&q=85&w=200&h=200&fit=crop&crop=faces",
  },
  {
    id: 2,
    name: "Ніцос Роман Андрійович",
    hasDeclaration: false,
    esoz: false,
    gender: "male",
    birth: "04.01.2006",
    age: "17 років",
    location: "Київ , Україна",
    phone: "+38 (012) 099-11-30",
    visits: 0,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwyfHxtYW4lMjBwb3J0cmFpdCUyMGhlYWRzaG90fGVufDB8fHx8MTc4NjExOTExMnww&ixlib=rb-4.1.0&q=85&w=200&h=200&fit=crop&crop=faces",
  },
];

// Appointments for doctor timeline
export const appointments = [
  {
    id: 1,
    time: "09:16",
    date: "05.08.2026",
    duration: "30 хв",
    status: "Завершено",
    synced: true,
    hasDeclaration: true,
    declarationNote: "",
    patient: "Пільтяй Роман Володимирович",
    gender: "male",
    birth: "12.10.1981",
    age: "44 роки",
  },
  {
    id: 2,
    time: "09:54",
    date: "05.08.2026",
    duration: "30 хв",
    status: "Завершено",
    synced: true,
    hasDeclaration: true,
    declarationNote: "",
    patient: "Коморнікова Олена Юріївна",
    gender: "female",
    birth: "10.06.1978",
    age: "48 років",
  },
  {
    id: 3,
    time: "11:30",
    date: "05.08.2026",
    duration: "30 хв",
    status: "Завершено",
    synced: true,
    hasDeclaration: true,
    declarationNote: "",
    patient: "Кущ Віталій Володимирович",
    gender: "male",
    birth: "20.06.1958",
    age: "68 років",
  },
  {
    id: 4,
    time: "12:08",
    date: "05.08.2026",
    duration: "30 хв",
    status: "Завершено",
    synced: true,
    hasDeclaration: true,
    declarationNote: "укладена з Вами",
    patient: "Домченко Лілія Іванівна",
    gender: "female",
    birth: "16.09.1964",
    age: "61 рік",
  },
  {
    id: 5,
    time: "12:10",
    date: "05.08.2026",
    duration: "30 хв",
    status: "Завершено",
    synced: true,
    hasDeclaration: true,
    declarationNote: "",
    patient: "Ткаченко Андрій Петрович",
    gender: "male",
    birth: "03.02.1990",
    age: "36 років",
  },
  {
    id: 6,
    time: "13:20",
    date: "05.08.2026",
    duration: "30 хв",
    status: "Завершено",
    synced: true,
    hasDeclaration: true,
    declarationNote: "",
    patient: "Сидоренко Ірина Василівна",
    gender: "female",
    birth: "27.11.1985",
    age: "40 років",
  },
];
