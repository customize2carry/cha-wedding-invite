const INVITE = {
  // Format: YYYY-MM-DDTHH:MM:SS (24-hour)
  weddingDate: "2027-01-01T10:00:00",

  images: {
    ganesha: "images/ganesha.png",
    deity: "images/venkateshwara-padmavathi.png"
  },

  groom: { kn: "[ವರನ ಹೆಸರು]", en: "Groom Name" },
  bride: { kn: "[ವಧುವಿನ ಹೆಸರು]", en: "Bride Name" },

  note: {
    title: { kn: "ನಮ್ಮ ಮಾತು", en: "A Note From Us" },
    text: {
      kn: "ಹಿರಿಯರ ಆಶೀರ್ವಾದ ಮತ್ತು ಬಂಧು-ಮಿತ್ರರ ಪ್ರೀತಿಯೊಂದಿಗೆ ನಮ್ಮ ಹೊಸ ಜೀವನದ ಪಯಣವನ್ನು ಆರಂಭಿಸುತ್ತಿದ್ದೇವೆ. ತಾವು ಕುಟುಂಬ ಸಮೇತ ಆಗಮಿಸಿ ನವದಂಪತಿಗಳನ್ನು ಆಶೀರ್ವದಿಸಬೇಕೆಂದು ಆದರದಿಂದ ಆಹ್ವಾನಿಸುತ್ತೇವೆ.",
      en: "With the blessings of our elders and the love of family and friends, we begin a new chapter of our lives. We warmly invite you and your family to bless the couple."
    }
  },

  families: [
    {
      label: { kn: "ವರನ ಕುಟುಂಬ", en: "Groom's Family" },
      names: { kn: "ಶ್ರೀ [ತಂದೆ] ಮತ್ತು ಶ್ರೀಮತಿ [ತಾಯಿ]", en: "Mr. [Father] & Mrs. [Mother]" },
      place: { kn: "[ಊರು]", en: "[Place]" }
    },
    {
      label: { kn: "ವಧುವಿನ ಕುಟುಂಬ", en: "Bride's Family" },
      names: { kn: "ಶ್ರೀ [ತಂದೆ] ಮತ್ತು ಶ್ರೀಮತಿ [ತಾಯಿ]", en: "Mr. [Father] & Mrs. [Mother]" },
      place: { kn: "[ಊರು]", en: "[Place]" }
    }
  ],

  events: [
    {
      title: { kn: "ನಿಶ್ಚಿತಾರ್ಥ", en: "Engagement" },
      date: { kn: "31 ಡಿಸೆಂಬರ್ 2026", en: "31 December 2026" },
      time: { kn: "ಸಂಜೆ 6:00", en: "6:00 PM" },
      venue: { kn: "[ಸ್ಥಳದ ಹೆಸರು]", en: "[Venue Name]" },
      address: { kn: "[ವಿಳಾಸ], ಹಾಸನ", en: "[Address], Hassan" },
      mapLink: "https://maps.google.com"
    },
    {
      title: { kn: "ವಿವಾಹ ಮಹೋತ್ಸವ", en: "Wedding Ceremony" },
      date: { kn: "1 ಜನವರಿ 2027", en: "1 January 2027" },
      time: { kn: "ಬೆಳಿಗ್ಗೆ 10:00", en: "10:00 AM" },
      venue: { kn: "[ಸ್ಥಳದ ಹೆಸರು]", en: "[Venue Name]" },
      address: { kn: "[ವಿಳಾಸ], ಹಾಸನ", en: "[Address], Hassan" },
      mapLink: "https://maps.google.com"
    },
    {
      title: { kn: "ಆರತಕ್ಷತೆ", en: "Reception" },
      date: { kn: "1 ಜನವರಿ 2027", en: "1 January 2027" },
      time: { kn: "ಸಂಜೆ 7:00", en: "7:00 PM" },
      venue: { kn: "[ಸ್ಥಳದ ಹೆಸರು]", en: "[Venue Name]" },
      address: { kn: "[ವಿಳಾಸ], ಹಾಸನ", en: "[Address], Hassan" },
      mapLink: "https://maps.google.com"
    }
  ],

  thankYou: {
    title: { kn: "ಧನ್ಯವಾದಗಳು", en: "Thank You" },
    text: {
      kn: "ತಮ್ಮ ಉಪಸ್ಥಿತಿ ಮತ್ತು ಆಶೀರ್ವಾದ ನಮ್ಮ ದಿನವನ್ನು ವಿಶೇಷವಾಗಿಸುತ್ತದೆ.",
      en: "Your presence and blessings will make our day truly special."
    },
    signoff: {
      kn: "ಪ್ರೀತಿಯಿಂದ, [ವರ] ಮತ್ತು [ವಧು] ಹಾಗೂ ಕುಟುಂಬಸ್ಥರು",
      en: "With love, [Groom] & [Bride] and Families"
    }
  },

  // Fixed labels used across the page
  ui: {
    verse: { kn: "॥ ಶ್ರೀ ಗಣೇಶಾಯ ನಮಃ ॥", en: "॥ Shri Ganeshaya Namah ॥" },
    open: { kn: "ಆಹ್ವಾನ ಪತ್ರಿಕೆ", en: "Wedding Invitation" },
    tagline: { kn: "ವಿವಾಹ ಮಹೋತ್ಸವದ ಆಮಂತ್ರಣ", en: "Wedding Invitation" },
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
    tapOpen: { kn: "ತೆರೆಯಲು ಒತ್ತಿ", en: "Tap to open" },
    familiesTitle: { kn: "ನಮ್ಮ ಕುಟುಂಬಗಳು", en: "Our Families" },
    eventsTitle: { kn: "ಕಾರ್ಯಕ್ರಮಗಳು", en: "Celebrations" },
    directions: { kn: "ದಾರಿ ತೋರಿಸಿ", en: "Get Directions" }
  }
};
