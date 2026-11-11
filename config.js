const INVITE = {
  // Countdown target (India time). Format: YYYY-MM-DDTHH:MM:SS+05:30
  weddingDate: "2026-12-06T00:00:00+05:30",

  images: {
    ganesha: "images/ganesha.png",
    deity: "images/venkateshwara-padmavathi.png"
  },

  groom: { kn: "ಚಿ॥ ರಾ॥ ಚ್ಯವನ್ ಶರ್ಮ ಎಂ.", en: "Chyavan Sharma M." },
  bride: { kn: "ಚಿ॥ ಸೌ॥ ಅನುಷ ದೀಕ್ಷಿತ್ ಬಿ.", en: "Anusha Dikshit B." },
  dateText: { kn: "06-12-2026 ನೇ ಭಾನುವಾರ", en: "Sunday, 6 December 2026" },

  // ---------- The formal invitation letter (types: verse, shloka, name, sub, para, title) ----------
  letter: [
    { type: "verse", text: { kn: "॥ ಶ್ರೀ ಮಹಾಗಣಪತಯೇ ನಮಃ ॥", en: "॥ Shri Mahaganapataye Namah ॥" } },
    { type: "verse", text: { kn: "॥ ಶ್ರೀ ಲಕ್ಷ್ಮೀ ವೆಂಕಟೇಶ್ವರಸ್ವಾಮಿ ಪ್ರಸನ್ನ ॥", en: "॥ Sri Lakshmi Venkateshwara Swamy Prasanna ॥" } },
    { type: "shloka", text: {
      kn: "ಕಲ್ಯಾಣಾದ್ಭುತ ಗಾತ್ರಾಯ ಕಾಮಿತಾರ್ಥ ಪ್ರದಾಯಿನೇ ಶ್ರೀಮದ್ವೆಂಕಟನಾಥಾಯ ಶ್ರೀನಿವಾಸಯತೇ ನಮಃ",
      en: "Kalyanadbhuta gatraya kamitartha pradayine, Srimad Venkatanathaya Srinivasayate Namah"
    } },
    { type: "name", text: { kn: "ಶ್ರೀಮತಿ ಭಾಗ್ಯಲಕ್ಷ್ಮಿ ಶ್ರೀ ಹಿರಿಯಣ್ಣಯ್ಯ ಯು. ಎ.", en: "Smt. Bhagyalakshmi & Sri Hiriyannayya U. A." } },
    { type: "sub", text: { kn: "(ಶ್ರೀ ಅಣ್ಣಪ್ಪನವರ ಪುತ್ರ)", en: "(Son of Sri Annappa)" } },
    { type: "para", text: { kn: "ಉಂಡಿಗನಾಳು, ಜಾವಗಲ್ ಹೋಬಳಿ, ಅರಸೀಕೆರೆ ತಾಲ್ಲೂಕು.", en: "Undiganalu, Javagal Hobli, Arasikere Taluk." } },
    { type: "para", text: { kn: "ಇವರು ಮಾಡುವ ವಿಜ್ಞಾಪನೆಗಳು", en: "present their humble invitation" } },
    { type: "para", text: {
      kn: "ಸ್ವಸ್ತಿಶ್ರೀ ವಿಜಯಾಭ್ಯುದಯ ಶಾಲಿವಾಹನ ಶಕ ವರ್ಷಂಗಳು 1948ನೇ ಶ್ರೀ ಪರಾಭವನಾಮ ಸಂವತ್ಸರದ ದಕ್ಷಿಣಾಯಣ ಕಾರ್ತೀಕಮಾಸ ಬಹುಳ ಕೃಷ್ಣಪಕ್ಷ ತ್ರಯೋದಶಿ ದಿನಾಂಕ : 06-12-2026 ನೇ ಭಾನುವಾರ ಬೆಳಿಗ್ಗೆ 8-25 ರಿಂದ 9-25 ಕ್ಕೆ ಸಲ್ಲುವ ಶುಭ \"ಧನಸ್ಸು\" ಲಗ್ನದಲ್ಲಿ",
      en: "Swasti Shri Vijayabhyudaya Shalivahana Shaka year 1948, Sri Parabhava Nama Samvatsara, Dakshinayana, Kartika Masa, Bahula Krishna Paksha, Trayodashi — Sunday, 06-12-2026, between 8:25 AM and 9:25 AM, in the auspicious \"Dhanassu\" lagna"
    } },
    { type: "para", text: { kn: "ನಮ್ಮ ಮೊಮ್ಮಗ", en: "Our grandson" } },
    { type: "name", text: { kn: "ಚಿ॥ ರಾ॥ ಚ್ಯವನ್ ಶರ್ಮ ಎಂ.", en: "Chyavan Sharma M." } },
    { type: "para", text: { kn: "ಶ್ರೀಮತಿ ಉಮಾ ಹೆಚ್. ಎನ್. ಮತ್ತು ಶ್ರೀ ಮಂಜುನಾಥ್ ಯು. ಹೆಚ್. ಇವರ ದ್ವಿತೀಯ ಪುತ್ರ", en: "Second son of Smt. Uma H. N. and Sri Manjunath U. H." } },
    { type: "name", text: { kn: "ಚಿ॥ ಸೌ॥ ಅನುಷ ದೀಕ್ಷಿತ್ ಬಿ.", en: "Anusha Dikshit B." } },
    { type: "para", text: { kn: "(ಶ್ರೀಮತಿ ಯು. ಎಸ್. ಮಮತ ಮತ್ತು ಶ್ರೀ ಸಿ. ಗೌರೀಶಂಕರ್‌ರವರ ಪುತ್ರಿ, ಕೋಲಾರ.)", en: "(Daughter of Smt. U. S. Mamatha and Sri C. Gaurishankar, Kolar.)" } },
    { type: "para", text: {
      kn: "ಇವರುಗಳ ವಿವಾಹ ಮಹೋತ್ಸವವನ್ನು ನೆಡೆಸಲು ಗುರು ಹಿರಿಯರು ನಿಶ್ಚಯಿಸಿರುವುದರಿಂದ ತಾವುಗಳು ಕುಟುಂಬ ಸಮೇತರಾಗಿ ಆಗಮಿಸಿ ವಧು-ವರರನ್ನು ಆಶೀರ್ವದಿಸಿ ನಮ್ಮ ಮನಸ್ಸಂತೋಷ ಪಡಿಸಬೇಕಾಗಿ ಕೋರುವ.",
      en: "As the elders have fixed the wedding ceremony of these two, we humbly request you to attend with your family, bless the bride and groom, and make us happy."
    } },
    { type: "title", text: { kn: "ತಮ್ಮ ಆಗಮನಾಭಿಲಾಷಿಗಳು :", en: "Eagerly awaiting your presence:" } },
    { type: "name", text: { kn: "ಶ್ರೀಮತಿ ಉಮಾ ಹೆಚ್.ಎನ್. ಮತ್ತು ಶ್ರೀ ಮಂಜುನಾಥ್ ಯು. ಹೆಚ್.", en: "Smt. Uma H. N. & Sri Manjunath U. H." } },
    { type: "name", text: { kn: "ಶ್ರೀಮತಿ ನಿಹಾರಿಕ ಎನ್. ಶ್ರೀ ಭಾರ್ಗವ ಶರ್ಮ ಎಂ.", en: "Smt. Niharika N. & Sri Bhargava Sharma M." } },
    { type: "name", text: { kn: "ಪುಟಾಣಿ : ನಿಭಾ ಶರ್ಮ ಬಿ.", en: "Little one: Nibha Sharma B." } }
  ],

  // ---------- Venues: paste Google Maps links in mapLink (between the quotes) ----------
  venues: {
    kolar: {
      name: { kn: "ನ್ಯೂ ಶಾಂತಿ ಕಲ್ಯಾಣ ಮಂಟಪ", en: "New Shanthi Kalyana Mantapa" },
      address: {
        kn: "ಕೋಲಾರ ಬೆಂಗಳೂರು ಬೈಪಾಸ್ ರಸ್ತೆ, ಕೊಂಡರಾಜನಹಳ್ಳಿ ಹತ್ತಿರ, ಕೋಲಾರ.",
        en: "Kolar–Bengaluru Bypass Road, near Kondarajanahalli, Kolar."
      },
      mapLink: ""   // <-- paste the Kolar venue Google Maps link here
    },
    arasikere: {
      name: { kn: "ಶ್ರೀ ರಾಮಸ್ವಾಮಿ ಸಮುದಾಯ ಭವನ (ರಾಮ ಮಂದಿರ)", en: "Sri Ramaswamy Community Hall (Rama Mandira)" },
      address: { kn: "ಅರಸೀಕೆರೆ.", en: "Arasikere." },
      mapLink: ""   // <-- paste the Arasikere venue Google Maps link here
    }
  },

  // ---------- Schedule (venue: "kolar", "arasikere" or leave out) ----------
  events: [
    {
      title: { kn: "ದೇವತಾಕಾರ್ಯ", en: "Devatakarya" },
      date: { kn: "04-12-2026 ನೇ ಶುಕ್ರವಾರ", en: "Friday, 4 December 2026" }
    },
    {
      title: { kn: "ಆರತಕ್ಷತೆ", en: "Reception" },
      date: { kn: "05-12-2026 ನೇ ಶನಿವಾರ", en: "Saturday, 5 December 2026" },
      time: { kn: "ಸಂಜೆ 6-30 ಕ್ಕೆ", en: "6:30 PM" },
      venue: "kolar"
    },
    {
      title: { kn: "ಮುಹೂರ್ತ", en: "Muhurta (Wedding)" },
      date: { kn: "06-12-2026 ಭಾನುವಾರ", en: "Sunday, 6 December 2026" },
      time: { kn: "ಬೆಳಿಗ್ಗೆ 8-25 ರಿಂದ 9-25", en: "8:25 AM to 9:25 AM" },
      note: { kn: "ಲಗ್ನ : ಧನಸ್ಸು", en: "Lagna: Dhanassu (Sagittarius)" },
      venue: "kolar"
    },
    {
      title: { kn: "ಆರತಕ್ಷತೆ", en: "Reception" },
      date: { kn: "09-12-2026 ಬುಧವಾರ", en: "Wednesday, 9 December 2026" },
      time: { kn: "ಬೆಳಿಗ್ಗೆ 12-00 ಕ್ಕೆ", en: "12:00 noon" },   // check this time
      venue: "arasikere"
    }
  ],

  // ---------- Well-wishers ----------
  wishers: [
    { kn: "ಶ್ರೀಮತಿ ಪದ್ಮ ಶ್ರೀ ನಾಗೇಶ್ ರಾವ್ ಹಾಗೂ ಕುಟುಂಬದವರು, ಹಳೇಬೀಡು", en: "Smt. Padma & Sri Nagesh Rao and family, Halebidu" },
    { kn: "ಶ್ಯಾ॥ ಸೂರಪ್ಪನವರ ವಂಶಸ್ಥರು, ಉಂಡಿಗನಾಳು", en: "Descendants of Sri Soorappa, Undiganalu" },
    { kn: "ಸೂರ್ಯನಾರಾಯಣಪ್ಪನವರ ವಂಶಸ್ಥರು, ಸವಾಸಿಹಳ್ಳಿ", en: "Descendants of Sri Suryanarayanappa, Savasihalli" },
    { kn: "ಶ್ರೀಮತಿ ಉಮಾ ಶ್ರೀ ನರಸಿಂಹಮೂರ್ತಿ ಕುಟುಂಬದವರು, ಮದನಪಲ್ಲಿ", en: "Smt. Uma & Sri Narasimhamurthy and family, Madanapalle" },
    { kn: "ಮತ್ತು ಕುಟುಂಬವರ್ಗದವರು ಹಾಗೂ ಬಂಧು-ಮಿತ್ರರು.", en: "and all family members, relatives and friends." }
  ],

  // ---------- Thank you + contact ----------
  thankYou: {
    title: { kn: "ಧನ್ಯವಾದಗಳು", en: "Thank You" },
    text: {
      kn: "ತಮ್ಮ ಉಪಸ್ಥಿತಿ ಮತ್ತು ಆಶೀರ್ವಾದ ನಮ್ಮ ದಿನವನ್ನು ವಿಶೇಷವಾಗಿಸುತ್ತದೆ.",
      en: "Your presence and blessings will make our day truly special."
    }
  },

  contact: {
    show: true,   // set to false to remove the whole contact block
    title: { kn: "ಇಂದಾ :", en: "From :" },
    names: { kn: "ಶ್ರೀಮತಿ ಉಮಾ ಹೆಚ್. ಎನ್. ಮತ್ತು ಶ್ರೀ ಮಂಜುನಾಥ್ ಯು. ಹೆಚ್.", en: "Smt. Uma H. N. & Sri Manjunath U. H." },
    address: {
      kn: "ಉಂಡಿಗನಾಳು, ಜಾವಗಲ್ ಹೋಬಳಿ, ಅರಸೀಕೆರೆ ತಾಲ್ಲೂಕು, ಹಾಸನ ಜಿಲ್ಲೆ.",
      en: "Undiganalu, Javagal Hobli, Arasikere Taluk, Hassan District."
    },
    phones: ["9632443856", "8431808511"]   // delete a number to hide it
  },

  // ---------- Fixed labels ----------
  ui: {
    verse: { kn: "॥ ಶ್ರೀ ಮಹಾಗಣಪತಯೇ ನಮಃ ॥", en: "॥ Shri Mahaganapataye Namah ॥" },
    open: { kn: "ಆಹ್ವಾನ ಪತ್ರಿಕೆ", en: "Wedding Invitation" },
    tagline: { kn: "ಶುಭ ವಿವಾಹ", en: "Auspicious Wedding" },
    weds: { kn: "ಮತ್ತು", en: "weds" },
    cdLabel: { kn: "ಶುಭ ಮುಹೂರ್ತಕ್ಕೆ ಉಳಿದಿರುವ ಸಮಯ", en: "Time left for the auspicious day" },
    days: { kn: "ದಿನ", en: "Days" },
    hours: { kn: "ಗಂಟೆ", en: "Hours" },
    mins: { kn: "ನಿಮಿಷ", en: "Mins" },
    secs: { kn: "ಸೆಕೆಂಡ್", en: "Secs" },
    scroll: { kn: "ಕೆಳಗೆ ಸ್ಕ್ರಾಲ್ ಮಾಡಿ ↓", en: "Scroll down ↓" },
    deityCaption: {
      kn: "ಶ್ರೀ ವೆಂಕಟೇಶ್ವರ ಮತ್ತು ಶ್ರೀ ಪದ್ಮಾವತಿ ದೇವಿಯ ಆಶೀರ್ವಾದದೊಂದಿಗೆ",
      en: "With the blessings of Sri Venkateshwara & Sri Padmavathi"
    },
    cardFront: { kn: "ಶುಭ ವಿವಾಹ", en: "Shubha Vivaha" },
    eventsTitle: { kn: "ಕಾರ್ಯಕ್ರಮಗಳು", en: "Schedule" },
    directions: { kn: "ದಾರಿ ತೋರಿಸಿ", en: "Get Directions" },
    wishersTitle: { kn: "ತಮ್ಮ ಸುಖಾಗಮನವನ್ನು ಬಯಸುವವರು", en: "With best compliments from" },
    contactBtn: { kn: "ಸಂಪರ್ಕಿಸಿ", en: "Contact" }
  }
};
