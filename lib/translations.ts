export type Language = "en" | "ka";

export const translations = {
  en: {
    nav: {
      shop: "Shop",
      benefits: "Benefits",
      featured: "Featured",
      admin: "Admin"
    },
    home: {
      pill: "Handmade clay essentials",
      heroTitle: "Peach-pink lighters, retro and sweet.",
      heroDescription:
        "Dalenian shapes clay cases for your favorite lighters: soft edges, warm glaze, and a nostalgic palette that feels curated.",
      shopCollection: "Shop the collection",
      whyDalenian: "Why Dalenian",
      featuredTitle: "Featured lighter cases",
      viewAll: "View all",
      benefitsTitle: "Why the clay matters",
      benefit1Title: "Premium material",
      benefit1Text: "Warm, tactile clay finished with a soft satin glaze.",
      benefit2Title: "Everyday protection",
      benefit2Text: "Rounded edges protect from scuffs and pocket wear.",
      benefit3Title: "Signature style",
      benefit3Text: "A muted 70s palette with peach and oat tones.",
      ctaTitle: "Carry a tiny retro artifact.",
      ctaDescription:
        "Explore limited runs, custom finishes, and soft‑tone palettes.",
      shopNow: "Shop now",
      startCheckout: "Start checkout",
      counter1Label: "Satisfied clients",
      counter2Label: "Different orders",
      counter3Label: "Different clay accessories"
    },
    shop: {
      title: "Shop",
      filters: "Filters",
      sort: "Sort",
      priceAsc: "Price: Low to High",
      priceDesc: "Price: High to Low",
      newest: "Newest",
      noProducts: "No products found."
    },
    product: {
      addToCart: "Add to Cart",
      description: "Description",
      details: "Details at a glance",
      fits: "Fits",
      finish: "Finish",
      care: "Care",
      inBox: "In the box"
    },
    footer: {
      tagline: "Handmade clay lighter cases with a premium peach glow.",
      copyright: "All rights reserved."
    }
  },
  ka: {
    nav: {
      shop: "მაღაზია",
      benefits: "პრემიუმი",
      featured: "რეკომენდებული",
      admin: "ადმინი"
    },
    home: {
      pill: "ხელნაკეთი თიხის აქსესუარები",
      heroTitle: "ნაყოვნების-ვარდისფერი ასანთები, რეტრო და ტკბილი.",
      heroDescription:
        "Dalenian ქმნის თიხის საფარებს თქვენი საყვარელი ასანთებისთვის: რბილი კიდეები, თბილი გლაზურა და ნოსტალგიური პალიტრა, რომელიც კურატორობას ატარებს.",
      shopCollection: "ნახეთ კოლექცია",
      whyDalenian: "რატომ Dalenian",
      featuredTitle: "რეკომენდებული ასანთის საფრები",
      viewAll: "ყველას ნახვა",
      benefitsTitle: "რატომ არის თიხა მნიშვნელოვანი",
      benefit1Title: "პრემიუმ მასალა",
      benefit1Text: "თბილი, ტაქტილური თიხა, დასრულებული რბილი ატლასის გლაზურით.",
      benefit2Title: "ყოველდღიური დაცვა",
      benefit2Text: "მომრგვალო კიდეები იცავს ნაკაწრებისა და ჯიბის ცვეთისგან.",
      benefit3Title: "ხელმოწერის სტილი",
      benefit3Text: "70-იანების ჩაკეტილი პალიტრა ნაყოვნების და ვაშლის ტონებით.",
      ctaTitle: "გადაიტანეთ პატარა რეტრო არტეფაქტი.",
      ctaDescription:
        "გამოიკვლიეთ შეზღუდული სერიები, მორგებული დასრულებები და რბილი ტონის პალიტრები.",
      shopNow: "იყიდე ახლა",
      startCheckout: "დაიწყე შეკვეთა",
      counter1Label: "კმაყოფილი კლიენტი",
      counter2Label: "სხვადასხვა შეკვეთა",
      counter3Label: "სხვადასხვა თიხის აქსესუარი"
    },
    shop: {
      title: "მაღაზია",
      filters: "ფილტრები",
      sort: "დალაგება",
      priceAsc: "ფასი: დაბლიდან მაღლამდე",
      priceDesc: "ფასი: მაღლიდან დაბლამდე",
      newest: "უახლესი",
      noProducts: "პროდუქტები არ მოიძებნა."
    },
    product: {
      addToCart: "კალათაში დამატება",
      description: "აღწერა",
      details: "დეტალები ერთი შეხედვით",
      fits: "ვარგისია",
      finish: "დასრულება",
      care: "მოვლა",
      inBox: "ყუთში"
    },
    footer: {
      tagline: "ხელნაკეთი თიხის ასანთის საფრები პრემიუმ ნაყოვნების ბზინვარებით.",
      copyright: "ყველა უფლება დაცულია."
    }
  }
} as const;

export function getTranslations(lang: Language) {
  return translations[lang];
}
