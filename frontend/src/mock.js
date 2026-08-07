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
