export type Lang = "en" | "fa";

export interface Bi {
  en: string;
  fa: string;
}

function bi(en: string, fa: string): Bi {
  return { en, fa };
}

export const dict = {
  nav: {
    menu: bi("Menu", "منو"),
    story: bi("Our Story", "داستان ما"),
    catering: bi("Catering", "کیترینگ"),
    locations: bi("Locations", "شعبه‌ها"),
    giftcards: bi("Gift Cards", "کارت هدیه"),
    cateringQuote: bi("Catering Quote", "استعلام کیترینگ"),
    orderPickup: bi("Order Pickup", "سفارش برای بردن"),
  },
  hero: {
    kicker: bi("DC · MARYLAND · VIRGINIA — 34 LOCATIONS", "واشنگتن · مریلند · ویرجینیا — ۳۴ شعبه"),
    headlineMain: bi("Flame-grilled Persian kabob, ", "کباب ایرانی روی آتش، "),
    headlineAccent: bi("built on authenticity.", "بر پایه‌ی اصالت."),
    sub: bi(
      "Fresh pita from a traditional clay oven. Kabobs marinated for hours, grilled to order. The same standard Mike Daryoush set in a Bethesda luncheonette in 1989 — never cutting corners.",
      "نان تازه از تنور سنتی گلی. کباب‌هایی که ساعت‌ها مزه‌دار شده و به سفارش روی آتش گریل می‌شوند. همان استانداردی که میک داریوش در سال ۱۹۸۹ در رستوران کوچک بتزدا بنا نهاد — بدون کم‌فروشی."
    ),
    findLocation: bi("Find a Location", "پیدا کردن نزدیک‌ترین شعبه"),
    meta1: bi("Founded, Bethesda MD", "تأسیس در بتزدا، مریلند"),
    meta2: bi("DMV Locations", "شعبه در منطقه DMV"),
    meta3: bi("Halal Proteins", "پروتئین حلال"),
  },
  live: {
    label: bi("ON THE GRILL NOW", "همین حالا روی گریل"),
    location: bi("HYATTSVILLE, MD", "هایتزویل، مریلند"),
    dish1name: bi("Moby's Kubideh", "کوبیده موبی"),
    dish1desc: bi("Ground beef · house seasoning · open flame", "گوشت چرخ‌کرده · ادویه‌ی مخصوص · آتش مستقیم"),
    dish2name: bi("Joojeh Kabob", "جوجه کباب"),
    dish2desc: bi("Saffron-lemon marinated chicken breast", "سینه مرغ مزه‌دار شده با زعفران و لیمو"),
    foot: bi(
      "Pickup ready in ~15 min · call ahead, most locations answer fast",
      "آماده برای بردن در حدود ۱۵ دقیقه · از قبل تماس بگیرید، اکثر شعبه‌ها سریع پاسخ می‌دهند"
    ),
  },
  menu: {
    kicker: bi("The Menu", "منو"),
    title: bi("Six signatures off the skewer.", "شش کباب امضادار، مستقیم از سیخ."),
    desc: bi(
      "Every kabob is hand-threaded and fire-grilled to order. Full menu spans appetizers, salads, family platters, and Persian entrées — all halal, most gluten-free without bread.",
      "هر کباب با دست به سیخ کشیده شده و به سفارش روی آتش گریل می‌شود. منوی کامل شامل پیش‌غذا، سالاد، پلاترهای خانوادگی و غذاهای اصلی ایرانی است — همه حلال، بیشترشان بدون نان بدون گلوتن."
    ),
    viewFull: bi("View Full Menu", "مشاهده منوی کامل"),
  },
  tag: {
    halal: bi("HALAL", "حلال"),
    gf: bi("GF*", "بدون گلوتن*"),
    veg: bi("VEGETARIAN", "گیاهی"),
    spicy: bi("SPICY", "تند"),
  },
  fullMenu: {
    backLink: bi("← Back to Home", "← بازگشت به صفحه اصلی"),
    kicker: bi("The Full Menu", "منوی کامل"),
    title: bi("Everything off the grill.", "همه‌چیز، مستقیم از روی آتش."),
    desc: bi(
      "Every category, every dish — appetizers through dessert. All halal, most gluten-free without bread.",
      "همه‌ی دسته‌ها، همه‌ی غذاها — از پیش‌غذا تا دسر. همه حلال، بیشترشان بدون نان بدون گلوتن."
    ),
    glutenFreeTitle: bi("Moby Dick's Gluten Free Options", "گزینه‌های بدون گلوتن موبی دیک"),
    glutenFreeText: bi(
      "Please know that we practice caution and proper procedures when preparing gluten-free items, however, gluten is present in all of our kitchens. All ingredients have been verified as gluten-free by the third-party consultant, MenuTrinfo®, LLC, but our products can change at any time and the products listed might not always be the products served. Moby Dick cannot be held responsible for ingredient substitutions made by our manufacturers. In consuming our gluten-free items, be aware that there still may be a chance of cross-contact so we cannot guarantee these products for those with Celiac disease or food allergy. Guests are advised to consider this information as it relates to their individual dietary needs and requirements.",
      "لطفاً توجه داشته باشید که ما در تهیه‌ی غذاهای بدون گلوتن نهایت دقت و رویه‌های صحیح را رعایت می‌کنیم، اما گلوتن در تمام آشپزخانه‌های ما حضور دارد. تمام مواد اولیه توسط مشاور شخص ثالث، MenuTrinfo®، LLC به‌عنوان بدون گلوتن تأیید شده‌اند، اما محصولات ما ممکن است در هر زمان تغییر کنند و اقلام فهرست‌شده همیشه دقیقاً همان چیزی نباشند که سرو می‌شود. موبی دیک مسئولیتی در قبال جایگزینی مواد اولیه توسط تولیدکنندگان ما ندارد. هنگام مصرف اقلام بدون گلوتن ما، توجه داشته باشید که همچنان احتمال تماس متقابل وجود دارد، بنابراین نمی‌توانیم این محصولات را برای افراد مبتلا به بیماری سلیاک یا حساسیت غذایی تضمین کنیم. به مهمانان توصیه می‌شود این اطلاعات را با توجه به نیازها و الزامات غذایی فردی خود در نظر بگیرند."
    ),
    noticeTitle: bi("* Notice", "* توجه"),
    noticeText: bi(
      "Contains or may contain raw undercooked ingredients. Consuming raw or undercooked eggs, steaks, hamburgers, fish, and seafood may increase your risk of food-borne illnesses. We use nuts and nut-based oil in some of our menu items. If you are allergic to nuts, or any other food, please let your server know.",
      "این غذا حاوی مواد اولیه‌ی خام یا نیم‌پز است یا ممکن است باشد. مصرف تخم‌مرغ، استیک، همبرگر، ماهی و غذاهای دریایی خام یا نیم‌پز می‌تواند خطر بیماری‌های ناشی از غذا را افزایش دهد. ما در برخی از اقلام منوی خود از آجیل و روغن‌های حاوی آجیل استفاده می‌کنیم. اگر به آجیل یا هر ماده‌ی غذایی دیگری حساسیت دارید، لطفاً به سرویس‌دهنده اطلاع دهید."
    ),
  },
  dish: {
    kubideh: {
      name: bi("Kubideh Kabob", "کباب کوبیده"),
      desc: bi(
        "Fresh beef marinated in our signature seasoning and ground with onion, then slow grilled to a tender finish.",
        "گوشت گاو تازه با ادویه‌ی مخصوص ما مزه‌دار و با پیاز چرخ شده، سپس آرام روی آتش گریل می‌شود تا لطیف شود."
      ),
    },
    joojeh: {
      name: bi("Joojeh Kabob", "جوجه کباب"),
      desc: bi(
        "Grilled chicken breast marinated in saffron and lemon, slowly fire-grilled to a succulent, tender finish.",
        "سینه مرغ مزه‌دار شده با زعفران و لیمو، آرام روی آتش گریل می‌شود تا آبدار و لطیف شود."
      ),
    },
    gyro: {
      name: bi("Moby's Gyro", "ژیروی موبی"),
      desc: bi(
        "Sliced, marinated gyro beef in warm house pita with lettuce, tomato, onion, feta, and yogurt-cucumber sauce.",
        "گوشت گاو ورقه‌شده و مزه‌دار در نان پیتای گرم خانگی، همراه با کاهو، گوجه، پیاز، پنیر فتا و سس ماست خیار."
      ),
    },
    lamb: {
      name: bi("Ground Lamb Kabob", "کباب بره چرخ‌کرده"),
      desc: bi(
        "Fresh ground lamb marinated in our signature seasoning, grilled the traditional way — rich and smoky.",
        "گوشت بره چرخ‌کرده تازه با ادویه‌ی مخصوص ما مزه‌دار و به روش سنتی گریل می‌شود — پرمایه و دودی."
      ),
    },
    salmon: {
      name: bi("Salmon Kabob", "کباب ماهی سالمون"),
      desc: bi(
        "Fresh salmon cubed and marinated in our signature seasoning, grilled to a light, juicy finish.",
        "ماهی سالمون تازه، خرد و با ادویه‌ی مخصوص ما مزه‌دار شده و گریل می‌شود تا سبک و آبدار شود."
      ),
    },
    falafel: {
      name: bi("Falafel", "فلافل"),
      desc: bi(
        "Chickpeas and fava beans ground with onion, sesame, cilantro and garlic — crisp outside, light within.",
        "نخود و باقلا با پیاز، کنجد، گشنیز و سیر چرخ شده — بیرون ترد و داخل سبک."
      ),
    },
  },
  story: {
    kicker: bi("Our Story", "داستان ما"),
    title: bi("Built on one ingredient: authenticity.", "بر پایه‌ی یک عنصر: اصالت."),
    lede: bi(
      '"One day, owner Mike Daryoush decided to build a traditional clay oven, like the kind used in his home country of Iran — just to bake fresh pita."',
      "«یک روز، میک داریوش صاحب رستوران تصمیم گرفت یک تنور گلی سنتی بسازد، از همان نوعی که در ایران، کشور مادری‌اش، استفاده می‌شد — فقط برای پختن نان تازه.»"
    ),
    years: bi('Years of  "Never Cutting Corners"', "سال بدون کم‌فروشی"),
    t1: {
      title: bi("Moby's Luncheonette opens", "افتتاح رستوران موبی لانچونت"),
      desc: bi(
        "Mike Daryoush opens a traditional American breakfast and lunch counter in Bethesda, MD.",
        "میک داریوش یک رستوران سنتی صبحانه و ناهار آمریکایی در بتزدا، مریلند افتتاح می‌کند."
      ),
    },
    t2: {
      title: bi("The clay oven changes everything", "تنور گلی همه‌چیز را تغییر می‌دهد"),
      desc: bi(
        "Fresh, house-baked pita becomes so popular it pulls the whole menu toward Persian cuisine — and a new name: Moby Dick.",
        "نان پیتای تازه و خانگی آنقدر محبوب می‌شود که کل منو را به سمت غذای ایرانی می‌برد — و یک نام جدید: موبی دیک."
      ),
    },
    t3: {
      title: bi("Georgetown location opens", "افتتاح شعبه‌ی جورج‌تاون"),
      desc: bi(
        "The second restaurant proves the recipe travels. Fifteen more follow across the DMV by 2013.",
        "دومین رستوران ثابت می‌کند که این دستور غذا قابل گسترش است. تا سال ۲۰۱۳، پانزده شعبه‌ی دیگر در منطقه‌ی DMV باز می‌شود."
      ),
    },
    t4: {
      title: bi("Official Kabob Partner of D.C. United", "شریک رسمی کباب تیم دی.سی. یونایتد"),
      desc: bi(
        "34 locations strong, bringing flame-grilled kabobs to match days across the district.",
        "با ۳۴ شعبه‌ی فعال، کباب‌های روی آتش را به روزهای بازی در سراسر منطقه می‌آورد."
      ),
    },
  },
  values: {
    kicker: bi("Vision & Values", "چشم‌انداز و ارزش‌ها"),
    title: bi("Food with character.", "غذایی با هویت."),
    desc: bi(
      "Since our first restaurant opened in 1989, we continue to realize our purpose by never cutting corners — in the quality of our food, or how it's prepared and served to you.",
      "از زمان افتتاح اولین رستوران‌مان در سال ۱۹۸۹، همچنان به هدف خود پایبندیم: هرگز کم‌فروشی نکردن — چه در کیفیت غذا و چه در نحوه‌ی آماده‌سازی و سرو آن به شما."
    ),
    v1: {
      title: bi("Slow & Flame-Grilled", "آرام‌پز و کباب‌شده روی آتش"),
      desc: bi(
        "Slow-braised stews and flame-grilled meats, made from house seasonings and marinades developed over three decades.",
        "خورش‌های آرام‌پز و گوشت‌های گریل‌شده روی آتش، با ادویه‌ها و مزه‌دارکننده‌های خانگی که در طول سه دهه توسعه یافته‌اند."
      ),
    },
    v2: {
      title: bi("Baked Fresh, Daily", "پخت تازه، هر روز"),
      desc: bi(
        "Whole pita bread baked in a traditional clay oven — the same technique that started it all in 1989.",
        "نان پیتای کامل که در تنور سنتی گلی پخته می‌شود — همان روشی که همه‌چیز را در سال ۱۹۸۹ آغاز کرد."
      ),
    },
    v3: {
      title: bi("Persian Technique, Mediterranean Flair", "تکنیک ایرانی، لطافت مدیترانه‌ای"),
      desc: bi(
        "Traditional Persian cooking with the highest-quality ingredients, served fast and casual across the DMV.",
        "پخت سنتی ایرانی با باکیفیت‌ترین مواد اولیه، سرو سریع و بی‌تکلف در سراسر منطقه‌ی DMV."
      ),
    },
  },
  catering: {
    kicker: bi("Catering", "کیترینگ"),
    title: bi("Make your next event a hit.", "رویداد بعدی‌تان را به یاد ماندنی کنید."),
    desc: bi(
      "We offer a range of catering packages to meet your requirements — and can customize one for you. Platters serve 3 to 25+, halal throughout.",
      "ما بسته‌های کیترینگ متنوعی متناسب با نیاز شما ارائه می‌دهیم — و می‌توانیم یکی را مخصوص شما تنظیم کنیم. پلاترها برای ۳ تا بیش از ۲۵ نفر، همگی حلال."
    ),
    cta: bi("Get a Catering Quote", "دریافت استعلام کیترینگ"),
  },
  app: {
    kicker: bi("Moby Dick App", "اپلیکیشن موبی دیک"),
    title: bi("Order ahead, earn rewards.", "از قبل سفارش دهید، امتیاز بگیرید."),
    desc: bi(
      "Our app features a revamped rewards program — order for pickup, track visits, and unlock offers before you're even in the door.",
      "اپلیکیشن ما دارای برنامه‌ی امتیازی تازه‌سازی‌شده است — سفارش برای بردن دهید، مراجعات خود را پیگیری کنید و پیش از رسیدن به رستوران، تخفیف‌ها را باز کنید."
    ),
    appstore: bi("App Store", "اپ استور"),
    googleplay: bi("Google Play", "گوگل پلی"),
  },
  locations: {
    kicker: bi("Locations", "شعبه‌ها"),
    title: bi("34 locations. One recipe.", "۳۴ شعبه. یک دستور غذا."),
    searchPlaceholder: bi("Enter your ZIP or city", "کد پستی یا شهر خود را وارد کنید"),
    searchBtn: bi("Search", "جستجو"),
    footnote: bi(
      "34 locations live · pulled from the same store locator that powers mobyskabob.com/locations",
      "۳۴ شعبه‌ی فعال · برگرفته از همان سامانه‌ی یاب شعبه‌ی mobyskabob.com/locations"
    ),
    noResults: bi("No locations match your search.", "شعبه‌ای مطابق جستجوی شما یافت نشد."),
  },
  state: {
    md: bi("MARYLAND", "مریلند"),
    va: bi("VIRGINIA", "ویرجینیا"),
    dc: bi("WASHINGTON, DC", "واشنگتن دی‌سی"),
    umd: bi("COLLEGE PARK, MD", "کالج پارک، مریلند"),
  },
  badge: {
    original: bi("ORIGINAL · 1989", "شعبه‌ی اصلی · ۱۹۸۹"),
    nowOpen: bi("NOW OPEN", "تازه افتتاح شد"),
    newest: bi("NEWEST · 2024", "جدیدترین · ۲۰۲۴"),
  },
  footer: {
    desc: bi(
      "Authentic Persian cuisine with a Mediterranean flair. Family-owned across DC, Maryland & Virginia since 1989. All proteins halal.",
      "غذای اصیل ایرانی با لطافتی مدیترانه‌ای. خانوادگی، فعال در واشنگتن، مریلند و ویرجینیا از سال ۱۹۸۹. تمام پروتئین‌ها حلال."
    ),
    explore: bi("Explore", "کاوش"),
    specialOffers: bi("Special Offers", "تخفیف‌های ویژه"),
    company: bi("Company", "درباره ما"),
    visionValues: bi("Vision & Values", "چشم‌انداز و ارزش‌ها"),
    news: bi("In the News", "اخبار"),
    blog: bi("Blog", "وبلاگ"),
    privacy: bi("Privacy Policy", "حریم خصوصی"),
    order: bi("Order", "سفارش"),
    pickupOnline: bi("Pickup Online", "سفارش آنلاین برای بردن"),
    getApp: bi("Get the App", "دریافت اپلیکیشن"),
    uberEats: bi("Order on Uber Eats", "سفارش از اوبر ایتس"),
    cateringMenu: bi("Catering Menu", "منوی کیترینگ"),
    hq: bi("Headquarters", "دفتر مرکزی"),
    addr1: bi("3329 75th Avenue", "۳۳۲۹ خیابان ۷۵ام"),
    addr2: bi("Hyattsville, MD 20785", "هایتزویل، مریلند ۲۰۷۸۵"),
    copyright: bi("© 2027 Moby Dick House of Kabob. All rights reserved.", "© ۲۰۲۷ موبی دیک هاوس آف کباب. تمام حقوق محفوظ است."),
  },
} as const;

export const locationList: { city: string; state: keyof typeof dict.state; badge?: keyof typeof dict.badge }[] = [
  { city: "Bethesda", state: "md", badge: "original" },
  { city: "Georgetown", state: "dc" },
  { city: "Dupont Circle", state: "dc" },
  { city: "Arlington", state: "va" },
  { city: "Shirlington", state: "va" },
  { city: "Falls Church", state: "va" },
  { city: "McLean", state: "va" },
  { city: "Tyson's Corner", state: "va" },
  { city: "Annandale", state: "va" },
  { city: "Fairfax City", state: "va" },
  { city: "Fairfax", state: "va" },
  { city: "Kingstowne", state: "va" },
  { city: "Springfield", state: "va" },
  { city: "Herndon", state: "va" },
  { city: "Sterling", state: "va" },
  { city: "Ashburn", state: "va" },
  { city: "Manassas", state: "va" },
  { city: "Gainesville", state: "va" },
  { city: "Great Falls", state: "va", badge: "nowOpen" },
  { city: "Potomac", state: "md" },
  { city: "Cabin John", state: "md", badge: "nowOpen" },
  { city: "Kensington", state: "md" },
  { city: "Rockville", state: "md" },
  { city: "North Bethesda", state: "md" },
  { city: "Gaithersburg", state: "md" },
  { city: "Germantown", state: "md" },
  { city: "Olney", state: "md" },
  { city: "Burtonsville", state: "md" },
  { city: "UMD", state: "umd" },
  { city: "Pikesville", state: "md" },
  { city: "Baltimore", state: "md" },
  { city: "Urbana", state: "md" },
  { city: "Buckeystown", state: "md" },
  { city: "Annapolis", state: "md", badge: "newest" },
];
