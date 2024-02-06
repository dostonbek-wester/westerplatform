import {
  FileCopy,
  Flag,
  LaptopChromebook,
  Traffic,
  Visibility,
} from "@mui/icons-material";

export const Data = [
  {
    id: 1,
    title: "dasturlash asoslari",
    icon: <LaptopChromebook />,
    lessons: [
      {
        id: 11,
        title: "darslarni qanday o'zlashtiramiz?",
        video_link: "https://youtu.be/ZqFjXM8k-PY",
        icon: <Visibility />,
        pathname: "/python/dqo",
      },
    ],
  },
  {
    id: 0,
    title: "yangilik!",
    icon: "",
    lessons: [],
  },
  {
    id: 3,
    title: "ilk qadamlar",
    icon: <Flag />,
    lessons: [
      {
        id: 31,
        title: "#01 kerakli dasturlar",
        video_link: "https://youtu.be/fTaLQKNuOXU",
        description: "Bu video bu haqida",
        pathname: "/python/01-kd",
      },
      {
        id: 32,
        title: "#02 hello World",
        video_link: "https://youtu.be/dguiNk8eHPY",
        description: "Bu video bu haqida",
        pathname: "/python/02-hw",
      },
      {
        id: 33,
        title: "#03 print(), sintaksisi va arifmetik amallar",
        video_link: "https://youtu.be/djtv5NMIBSY",
        description: "Bu video bu haqida",
        pathname: "/python/03-svaa",
      },
    ],
  },
  {
    id: 4,
    title: "O'zgaruvchilar va ma'lumot turlari",
    icon: <FileCopy />,
    lessons: [
      {
        id: 41,
        title: "#04 o'zgaruvchilar",
        video_link: "https://youtu.be/4-Sj_owtx3Q",
        description: "Bu video bu haqida",
        pathname: "/python/04-o",
      },
      {
        id: 42,
        title: "#05 string (matn)",
        video_link: "https://youtu.be/ne2ZoZ7q3UY",
        description: "Bu video bu haqida",
        pathname: "/python/05-s",
      },
      {
        id: 43,
        title: "#06 sonlar ",
        video_link: "https://youtu.be/_1eGzQpAtC8",
        description: "Bu video bu haqida",
        pathname: "/python/06-s",
      },
      {
        id: 44,
        title: "#07 list (ro'yhat) ",
        video_link: "https://youtu.be/92UuA1jneuQ",
        description: "Bu video bu haqida",
        pathname: "/python/07-l",
      },
      {
        id: 45,
        title: "#08 ro'yhatlar bilan ishash",
        video_link: "https://youtu.be/019Dzhf0rB0",
        description: "Bu video bu haqida",
        pathname: "/python/08-rbi",
      },
      {
        id: 46,
        title: "#09 for takrorlash",
        video_link: "https://youtu.be/982dbRh0Efg",
        description: "Bu video bu haqida",
        pathname: "/python/09-ft",
      },
    ],
  },
  {
    id: 5,
    title: "shartlar va tarmoqlash",
    icon: <Traffic />,
    lessons: [
      {
        id: 51,
        title: "#10 if-else",
        video_link: "https://youtu.be/QH5Q_dyj3dI",
        description: "Bu video bu haqida",
        pathname: "/python/10-ie",
      },
      {
        id: 52,
        title: "#11 bir nechta shartlarni tekshirish",
        video_link: "https://youtu.be/PQTJT44_5L8",
        description: "Bu video bu haqida",
        pathname: "/python/11-bnst",
      },
    ],
  },
];
