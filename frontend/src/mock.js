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
