import type { Bi } from "./i18n";

function bi(en: string, fa: string): Bi {
  return { en, fa };
}

export type MenuTag = "halal" | "gf" | "veg" | "spicy";

export interface FullMenuItem {
  name: Bi;
  desc?: Bi;
  calories?: string;
  tags: MenuTag[];
}

export interface FullMenuCategory {
  category: Bi;
  note?: Bi;
  items: FullMenuItem[];
}

export const fullMenu: FullMenuCategory[] = [
  {
    category: bi("Appetizers", "پیش‌غذا"),
    items: [
      {
        name: bi("Kashk Bademjan", "کشک بادمجان"),
        desc: bi(
          "Fresh eggplant sautéed and whipped with fresh garlic, traditional Persian herbs, a hint of salt and pepper, and garnished with caramelized onion and creamy yogurt.",
          "بادمجان تازه سرخ‌شده و له‌شده با سیر تازه، سبزیجات معطر ایرانی، کمی نمک و فلفل، تزئین‌شده با پیاز کاراملی و ماست خامه‌ای."
        ),
        calories: "600 cal.",
        tags: ["veg", "gf"],
      },
      {
        name: bi("Must-o-Mooseer", "موسیر و ماست"),
        desc: bi(
          "Creamy yogurt mixed with minced shallots and traditional Persian herbs, and a dash of salt. Served with our fresh out of the oven pita bread.",
          "ماست خامه‌ای مخلوط‌شده با موسیر خردشده و سبزیجات معطر ایرانی و کمی نمک. همراه با نان پیتای تازه از تنور."
        ),
        calories: "100 cal.",
        tags: ["veg", "gf"],
      },
      {
        name: bi("Hummus", "حمص"),
        desc: bi(
          "A rich and delicious combination of mashed chickpeas, zesty tahini sauce, garlic and a touch of lemon juice all made from scratch. Served with a pita bread (adds 400 cal.) *Gluten Free without bread.",
          "ترکیبی غنی و خوشمزه از نخود له‌شده، سس طحینی تند، سیر و کمی آبلیمو، همگی تازه تهیه‌شده. همراه با نان پیتا سرو می‌شود (۴۰۰ کالری اضافه می‌کند) *بدون نان بدون گلوتن است."
        ),
        calories: "430 cal.",
        tags: ["veg", "gf"],
      },
      {
        name: bi("Spicy Hummus", "حمص تند"),
        desc: bi(
          "Creamy mashed chickpeas blended with tahini, garlic, and fresh lemon juice, finished with a bold spicy kick. Served with pita bread. *Gluten Free without bread.",
          "حمص خامه‌ای با طحینی، سیر و آبلیمو تازه، با طعمی تند و پرانرژی. همراه با نان پیتا سرو می‌شود. *بدون نان بدون گلوتن است."
        ),
        calories: "70 cal.",
        tags: ["veg", "gf", "spicy"],
      },
      {
        name: bi("Dolmeh", "دلمه برگ مو"),
        desc: bi(
          "Zesty fresh grape leaves stuffed with perfectly seasoned rice and hearty veggies then steamed to a light and tender finish.",
          "برگ‌های مو تازه و پرطعم، پر شده با برنج به‌خوبی چاشنی‌زده‌شده و سبزیجات، سپس بخارپز شده تا لطیف و سبک شود."
        ),
        calories: "250 cal.",
        tags: ["veg"],
      },
      {
        name: bi("Falafel", "فلافل"),
        desc: bi(
          "Bite-sized and perfectly seasoned veggie patties made from chickpeas and fava beans ground with onion, sesame seed, fresh cilantro, minced garlic, and sea salt, then fried to a crisp but light and fluffy texture inside, with a side of zesty tahini sauce.",
          "پتی‌های گیاهی کوچک و خوش‌طعم از نخود و باقلا چرخ‌شده با پیاز، کنجد، گشنیز تازه و سیر، سرخ‌شده تا بیرون ترد و داخل سبک و کرکی شود، همراه با سس طحینی تند."
        ),
        calories: "690 cal.",
        tags: ["veg"],
      },
      {
        name: bi("Chicken Wings (Bone-in Chicken)", "بال مرغ (با استخوان)"),
        desc: bi(
          "Bone-in Chicken Wings, expertly marinated in Moby's secret spices and flame-kissed for irresistible flavor in every bite.",
          "بال‌های مرغ با استخوان، به‌خوبی مزه‌دار شده با ادویه‌ی مخصوص موبی و کبابی‌شده روی آتش برای طعمی فراموش‌نشدنی در هر گاز."
        ),
        calories: "430 cal.",
        tags: [],
      },
      {
        name: bi("Kookoo Sabzi", "کوکو سبزی"),
        desc: bi("Fresh greens, herbs, and eggs frittata.", "کوکویی از سبزیجات تازه، گیاهان معطر و تخم‌مرغ."),
        calories: "240 cal.",
        tags: ["veg"],
      },
    ],
  },
  {
    category: bi("Salads", "سالادها"),
    items: [
      {
        name: bi("Moby Dick's House Salad", "سالاد خانگی موبی دیک"),
        desc: bi(
          "Garden fresh greens and lettuce, succulent tomato, crisp cucumber, onion, rich feta cheese crumbles, Kalamata olives and juicy pepperoncini served with Moby Dick's delicious House Lemon Vinaigrette Dressing.",
          "سبزیجات تازه و کاهو، گوجه‌فرنگی آبدار، خیار ترد، پیاز، پنیر فتای خوش‌طعم، زیتون کالاماتا و فلفل دلمه‌ای ترشی، همراه با سس ویناگرت لیمویی خانگی موبی دیک."
        ),
        calories: "90–170 cal. (Small | Large)",
        tags: ["gf"],
      },
      {
        name: bi("Shirazi Salad", "سالاد شیرازی"),
        desc: bi(
          "A colorful and light mix of crisp chopped cucumber, tomato, and onion with fresh Persian herbs tossed in Moby Dick's flavorful House Lemon Vinaigrette Dressing.",
          "ترکیبی رنگارنگ و سبک از خیار، گوجه‌فرنگی و پیاز خردشده با سبزیجات معطر ایرانی، مخلوط‌شده با سس ویناگرت لیمویی خانگی موبی دیک."
        ),
        calories: "100–300 cal.",
        tags: [],
      },
      {
        name: bi("Mediterranean Salad", "سالاد مدیترانه‌ای"),
        desc: bi(
          "Garden fresh greens and lettuce, succulent tomatoes, sweet and juicy raisins, onion, rich feta cheese crumbles, crisp walnuts and fresh parsley served with Pomegranate Vinaigrette dressing.",
          "سبزیجات تازه و کاهو، گوجه‌فرنگی آبدار، کشمش شیرین و آبدار، پیاز، پنیر فتای خوش‌طعم، گردوی ترد و جعفری تازه، همراه با سس ویناگرت انار."
        ),
        calories: "470 cal.",
        tags: ["gf"],
      },
      {
        name: bi("Dressing", "سس‌ها"),
        desc: bi(
          "Ranch Dressing, Italian Dressing, House Dressing, Pomegranate Dressing.",
          "سس رنچ، سس ایتالیایی، سس خانگی، سس انار."
        ),
        tags: ["gf"],
      },
    ],
  },
  {
    category: bi("Sandwiches", "ساندویچ‌ها"),
    note: bi(
      "All sandwiches are served on our warm, fresh-baked house pita bread with fresh lettuce, tomato, onion, and feta cheese with creamy yogurt cucumber sauce on the side.",
      "همه‌ی ساندویچ‌ها روی نان پیتای گرم و تازه‌ی خانگی سرو می‌شوند، همراه با کاهو تازه، گوجه‌فرنگی، پیاز و پنیر فتا، به همراه سس ماست خیار در کنار."
    ),
    items: [
      {
        name: bi("Moby's Kubideh", "کوبیده موبی"),
        desc: bi(
          "No one does Kubideh kabobs like we do. Top cuts of beef, ground with onion, seasoned to perfection with our signature Moby Dick's seasoning and grilled to a tender and juicy finish.",
          "هیچ‌کس مثل ما کباب کوبیده درست نمی‌کند. بهترین تکه‌های گوشت گاو، چرخ‌شده با پیاز، به‌خوبی مزه‌دار شده با ادویه‌ی مخصوص موبی دیک و کبابی‌شده تا لطیف و آبدار شود."
        ),
        calories: "760 cal.",
        tags: ["halal"],
      },
      {
        name: bi("Moby's Joojeh Kabob", "جوجه کباب موبی"),
        desc: bi(
          "Our famous Joojeh kabob set the standard. Fresh Chicken breast perfectly marinated for hours in our signature Moby Dick's house blend seasoning and slowly fire grilled to a tender and moist finish.",
          "جوجه کباب معروف ما استاندارد را تعیین کرده است. سینه مرغ تازه که ساعت‌ها با ادویه‌ی مخصوص خانگی موبی دیک مزه‌دار شده و آرام روی آتش گریل می‌شود تا لطیف و آبدار شود."
        ),
        calories: "890 cal.",
        tags: ["halal"],
      },
      {
        name: bi("Moby's Gyro", "ژیروی موبی"),
        desc: bi(
          "Our succulent Gyro meat is to die for. Generously sliced, marinated and seasoned gyro beef, with fresh lettuce, tomato, and feta cheese crumbles all blanketed in a warm freshly baked pita, served with a side of creamy yogurt cucumber sauce.",
          "گوشت ژیروی لذیذ ما را باید امتحان کنید. گوشت گاو ورقه‌شده و به‌خوبی مزه‌دار شده، همراه با کاهو تازه، گوجه‌فرنگی و پنیر فتا، همه در نان پیتای تازه‌ی گرم پیچیده شده و با سس ماست خیار سرو می‌شود."
        ),
        calories: "1330 cal.",
        tags: ["halal"],
      },
      {
        name: bi("Ground Chicken Kabob", "کباب مرغ چرخ‌کرده"),
        desc: bi(
          "Spicy Ground Chicken Kabob done right. Savory and spicy chicken, ground with onion and Moby Dick's signature house seasoning and grilled to perfection.",
          "کباب مرغ چرخ‌کرده‌ی تند، آن‌طور که باید باشد. مرغ خوش‌طعم و تند، چرخ‌شده با پیاز و ادویه‌ی مخصوص خانگی موبی دیک و کبابی‌شده تا بی‌نقص شود."
        ),
        calories: "740 cal.",
        tags: ["halal", "spicy"],
      },
      {
        name: bi("Ground Lamb Kabob", "کباب بره چرخ‌کرده"),
        desc: bi(
          "Fresh lamb, ground with onion and Moby Dick's signature house seasoning and grilled to perfection.",
          "بره‌ی تازه‌ی چرخ‌کرده، با پیاز و ادویه‌ی مخصوص خانگی موبی دیک مزه‌دار شده و کبابی‌شده تا بی‌نقص شود."
        ),
        calories: "750 cal.",
        tags: ["halal", "spicy"],
      },
    ],
  },
  {
    category: bi("Lunch Specials", "ویژه‌ی ناهار"),
    note: bi(
      "All Lunch Specials are served with our creamy yogurt cucumber and a piece of our warm freshly baked bread.",
      "همه‌ی ویژه‌های ناهار همراه با ماست خیار خامه‌ای ما و یک تکه از نان تازه و گرم ما سرو می‌شوند."
    ),
    items: [
      {
        name: bi("MONDAY: Adas Polo", "دوشنبه: عدس پلو"),
        desc: bi(
          "Fragrant basmati rice with lentils, dates, raisins, and caramelized onions, served with tender baked chicken. Warmly spiced and perfectly balanced, Adas Polo is hearty, nourishing, and deeply satisfying.",
          "برنج باسماتی معطر با عدس، خرما، کشمش و پیاز کاراملی، همراه با مرغ کبابی لطیف. عدس پلو، ادویه‌زده و متعادل، غذایی پرمایه، مقوی و کاملاً سیرکننده است."
        ),
        tags: ["halal"],
      },
      {
        name: bi("* TUESDAY: Baghala Polo", "* سه‌شنبه: باقالی پلو"),
        desc: bi(
          "Aromatic Basmati rice and tender fava beans perfectly seasoned and flavored with fresh dill weed, served with our delicious tender lamb shank.",
          "برنج باسماتی معطر و باقالی لطیف که با شوید تازه به‌خوبی مزه‌دار و چاشنی‌زده شده، همراه با ماهیچه‌ی بره‌ی لطیف و خوشمزه‌ی ما."
        ),
        calories: "1180 cal.",
        tags: ["halal"],
      },
      {
        name: bi("WEDNESDAY: Khoresht Gheymeh Bademjan", "چهارشنبه: خورش قیمه بادمجان"),
        desc: bi(
          "Yellow split peas, sautéed onion, eggplant, and beef chunks cooked in tomato sauce with Persian spices and Basmati rice.",
          "لپه، پیاز سرخ‌شده، بادمجان و تکه‌های گوشت گاو پخته‌شده در سس گوجه‌فرنگی با ادویه‌های ایرانی و برنج باسماتی."
        ),
        calories: "870 cal.",
        tags: ["halal"],
      },
      {
        name: bi("THURSDAY: Zereshk Polo", "پنجشنبه: زرشک پلو"),
        desc: bi(
          "Aromatic Basmati rice perfectly seasoned and flavored with rich saffron, topped with sweet sautéed barberries, and served with our signature juicy baked chicken.",
          "برنج باسماتی معطر که به‌خوبی با زعفران اصیل مزه‌دار و چاشنی‌زده شده، با زرشک سرخ‌شده‌ی شیرین تزئین شده و همراه با مرغ کبابی آبدار امضادار ما سرو می‌شود."
        ),
        calories: "1100 cal.",
        tags: ["halal"],
      },
      {
        name: bi("* FRIDAY: Ghormeh Sabzi", "* جمعه: قورمه سبزی"),
        desc: bi(
          "A rich and flavorful Persian herb stew, simmered to perfection with fresh cilantro, parsley, red beans, and leeks, our special Persian seasoning and tender chunks of succulent beef, served with aromatic Basmati rice.",
          "خورش غنی و پرطعم ایرانی از سبزیجات، پخته‌شده تا بی‌نقص شود با گشنیز تازه، جعفری، لوبیا قرمز و تره‌فرنگی، ادویه‌ی مخصوص ایرانی ما و تکه‌های لطیف گوشت گاو، همراه با برنج باسماتی معطر."
        ),
        calories: "1010 cal.",
        tags: ["halal"],
      },
    ],
  },
  {
    category: bi("Entrées", "غذاهای اصلی"),
    note: bi(
      "All of the traditional Persian entrées are served with our creamy yogurt cucumber sauce, and half of our warm, freshly baked pita bread. All of the traditional Persian entrées are served with your choice of rice, salad, or half rice and half salad.",
      "همه‌ی غذاهای اصلی سنتی ایرانی همراه با سس ماست خیار خامه‌ای ما و نیمی از نان پیتای گرم و تازه‌ی ما سرو می‌شوند. همه‌ی غذاهای اصلی سنتی ایرانی همراه با انتخاب شما از برنج، سالاد یا نیمی برنج و نیمی سالاد سرو می‌شوند."
    ),
    items: [
      {
        name: bi("Ground Chicken Kabob", "کباب مرغ چرخ‌کرده"),
        desc: bi(
          "Savory and spicy chicken, ground with onion and Signature Moby Dick seasoning then grilled to a tender and juicy perfection.",
          "مرغ خوش‌طعم و تند، چرخ‌شده با پیاز و ادویه‌ی مخصوص امضادار موبی دیک و کبابی‌شده تا بی‌نقص و آبدار شود."
        ),
        calories: "700 cal.",
        tags: ["halal", "gf", "spicy"],
      },
      {
        name: bi("Kubideh Kabob", "کباب کوبیده"),
        desc: bi(
          "Fresh beef marinated in our Signature Moby Dick seasoning and ground with onion then slow grilled to a tender finish.",
          "گوشت گاو تازه با ادویه‌ی مخصوص امضادار ما مزه‌دار و با پیاز چرخ شده، سپس آرام روی آتش گریل می‌شود تا لطیف شود."
        ),
        calories: "390 cal.",
        tags: ["halal", "gf"],
      },
      {
        name: bi("Ground Lamb Kabob", "کباب بره چرخ‌کرده"),
        desc: bi(
          "Fresh ground lamb marinated in our Signature Moby Dick Seasoning and ground with onion then slow grilled to a tender finish.",
          "بره‌ی تازه‌ی چرخ‌کرده که با ادویه‌ی مخصوص امضادار موبی دیک مزه‌دار و با پیاز چرخ شده، سپس آرام کبابی‌شده تا لطیف شود."
        ),
        calories: "380 cal.",
        tags: ["halal", "gf", "spicy"],
      },
      {
        name: bi("* Barreh Kabob", "* کباب برّه"),
        desc: bi(
          "Tender, slow grilled pieces of lamb loin that have been marinated in our Signature Moby Dick seasoning and grilled to an exotically flavorful and juicy finish.",
          "تکه‌های لطیف راسته‌ی بره که آرام کبابی شده، با ادویه‌ی مخصوص امضادار موبی دیک مزه‌دار شده و کبابی‌شده تا طعمی خاص و آبدار پیدا کند."
        ),
        calories: "330 cal.",
        tags: ["halal", "gf"],
      },
      {
        name: bi("* Chenjeh Kabob", "* کباب چنجه"),
        desc: bi(
          "Succulent grilled beef kabob that has been marinated in our Signature Moby Dick seasoning and slowing grilled to be tender and rich in flavor.",
          "کباب گاو لذیذ که با ادویه‌ی مخصوص امضادار موبی دیک مزه‌دار شده و آرام کبابی شده تا لطیف و پرطعم شود."
        ),
        calories: "420 cal.",
        tags: ["halal", "gf"],
      },
      {
        name: bi("Salmon Kabob", "کباب ماهی سالمون"),
        desc: bi(
          "Fresh salmon cubed and marinated in our Signature Moby Dick seasoning and grilled to a light, juicy, and flavorful finish.",
          "ماهی سالمون تازه که خرد و با ادویه‌ی مخصوص امضادار ما مزه‌دار شده و کبابی‌شده تا سبک، آبدار و خوش‌طعم شود."
        ),
        calories: "410 cal.",
        tags: ["halal", "gf"],
      },
      {
        name: bi("Joojeh Kabob", "جوجه کباب"),
        desc: bi(
          "Grilled chicken breast kabob, marinated in our Signature Moby Dick seasoning then slowly grilled to a succulent and tender finish.",
          "کباب سینه مرغ که با ادویه‌ی مخصوص امضادار ما مزه‌دار شده، سپس آرام کبابی‌شده تا لطیف و آبدار شود."
        ),
        calories: "320 cal.",
        tags: ["halal", "gf"],
      },
      {
        name: bi("Moby Dick's Combo I", "کمبوی شماره ۱ موبی دیک"),
        desc: bi(
          "One fresh Kubideh beef kabob ground with onion and one succulent grilled Chenjeh tenderloin kabob that have both been marinated in our exotic Signature Moby Dick seasoning then slowly grilled to a juicy and tender finish.",
          "یک سیخ کباب کوبیده‌ی گاو تازه چرخ‌شده با پیاز و یک سیخ کباب چنجه‌ی لذیذ که هر دو با ادویه‌ی مخصوص و خاص امضادار موبی دیک مزه‌دار شده‌اند، سپس آرام کبابی‌شده تا آبدار و لطیف شوند."
        ),
        calories: "620 cal.",
        tags: ["halal", "gf"],
      },
      {
        name: bi("Moby Dick's Combo II", "کمبوی شماره ۲ موبی دیک"),
        desc: bi(
          "One fresh Kubideh beef kabob ground with onion and one Joojeh grilled chicken breast kabob that have both been marinated in our Signature Moby Dick seasoning then slowly grilled to a succulent and tender finish.",
          "یک سیخ کباب کوبیده‌ی گاو تازه چرخ‌شده با پیاز و یک سیخ کباب جوجه که هر دو با ادویه‌ی مخصوص امضادار موبی دیک مزه‌دار شده‌اند، سپس آرام کبابی‌شده تا لطیف و آبدار شوند."
        ),
        calories: "510 cal.",
        tags: ["halal", "gf"],
      },
      {
        name: bi("Moby Dick's Combo III", "کمبوی شماره ۳ موبی دیک"),
        desc: bi(
          "One fresh Kubideh beef kabob ground with onion and one tender lamb kabob. Both have been marinated in our exotic Signature Moby Dick seasoning then slow grilled to a tender finish.",
          "یک سیخ کباب کوبیده‌ی گاو تازه چرخ‌شده با پیاز و یک سیخ کباب بره‌ی لطیف. هر دو با ادویه‌ی مخصوص و خاص امضادار موبی دیک مزه‌دار شده‌اند، سپس آرام کبابی‌شده تا لطیف شوند."
        ),
        calories: "530 cal.",
        tags: ["halal", "gf"],
      },
      {
        name: bi("Moby Dick's Super Combo", "سوپر کمبوی موبی دیک"),
        desc: bi(
          "A combination of one succulent Chenjeh grilled tenderloin kabob and one Joojeh grilled chicken breast kabob OR a combination of one tender lamb kabob and one Joojeh grilled chicken breast kabob. Each kabob has been marinated in our Signature Moby Dick seasoning then slowly grilled to a succulent and tender finish.",
          "ترکیبی از یک سیخ کباب چنجه‌ی لذیذ و یک سیخ کباب جوجه، یا ترکیبی از یک سیخ کباب بره‌ی لطیف و یک سیخ کباب جوجه. هر سیخ با ادویه‌ی مخصوص امضادار موبی دیک مزه‌دار شده، سپس آرام کبابی‌شده تا لطیف و آبدار شود."
        ),
        calories: "650–740 cal. (Barreh | Chenjeh)",
        tags: ["halal", "gf"],
      },
      {
        name: bi("Moby's Gyro", "ژیروی موبی"),
        desc: bi(
          "Our succulent Gyro meat is to die for. Generously sliced, marinated and seasoned gyro beef, with fresh lettuce, tomato, onion, and feta cheese crumbles all blanketed in a warm freshly baked pita, served with a side of creamy yogurt cucumber sauce.",
          "گوشت ژیروی لذیذ ما را باید امتحان کنید. گوشت گاو ورقه‌شده و به‌خوبی مزه‌دار شده، همراه با کاهو تازه، گوجه‌فرنگی، پیاز و پنیر فتا، همه در نان پیتای تازه‌ی گرم پیچیده شده و با سس ماست خیار سرو می‌شود."
        ),
        calories: "760 cal.",
        tags: ["halal", "gf"],
      },
      {
        name: bi("Chicken Wings (Bone-in Chicken)", "بال مرغ (با استخوان)"),
        desc: bi(
          "Bone-in Chicken Wings, expertly marinated in Moby's secret spices and flame-kissed for irresistible flavor in every bite.",
          "بال‌های مرغ با استخوان، به‌خوبی مزه‌دار شده با ادویه‌ی مخصوص موبی و کبابی‌شده روی آتش برای طعمی فراموش‌نشدنی در هر گاز."
        ),
        calories: "430 cal.",
        tags: [],
      },
    ],
  },
  {
    category: bi("Veggie Sandwiches & Entrées", "ساندویچ و غذای اصلی گیاهی"),
    note: bi(
      "Moby Dick's fresh vegetarian sandwiches and entrées are served with half a freshly baked pita bread and a side of creamy yogurt.",
      "ساندویچ‌ها و غذاهای اصلی گیاهی تازه‌ی موبی دیک همراه با نیمی از نان پیتای تازه و یک ظرف کوچک ماست خامه‌ای سرو می‌شوند."
    ),
    items: [
      {
        name: bi("Falafel Sandwich", "ساندویچ فلافل"),
        desc: bi(
          "Perfectly seasoned veggie patties made from chickpeas and fava beans ground with onion, sesame seed, fresh cilantro, minced garlic, and sea salt, then fried to a crisp but light and fluffy texture inside, with a side of zesty tahini sauce.",
          "پتی‌های گیاهی خوش‌طعم از نخود و باقلا چرخ‌شده با پیاز، کنجد، گشنیز تازه، سیر و نمک دریایی، سرخ‌شده تا بیرون ترد و داخل سبک و کرکی شود، همراه با سس طحینی تند."
        ),
        calories: "1200 cal.",
        tags: [],
      },
      {
        name: bi("Veggie Kabob With Rice", "کباب سبزیجات با برنج"),
        desc: bi(
          "Fresh seasonal vegetables infused with the rich tastes of an open-fire grill and served over our traditional aromatic Basmati rice.",
          "سبزیجات تازه‌ی فصل که با طعم غنی گریل روی آتش باز آغشته شده و روی برنج باسماتی معطر سنتی ما سرو می‌شود."
        ),
        calories: "730 cal.",
        tags: ["gf"],
      },
      {
        name: bi("Falafel Entrée", "غذای اصلی فلافل"),
        desc: bi(
          "Perfectly seasoned bite-sized veggie patties made from chickpeas and fava beans ground with onion, sesame seed, fresh cilantro, minced garlic, and sea salt, then fried to a crisp but light and fluffy texture inside, with a side of zesty tahini sauce, basmati rice and a small salad.",
          "پتی‌های گیاهی کوچک و خوش‌طعم از نخود و باقلا چرخ‌شده با پیاز، کنجد، گشنیز تازه، سیر و نمک دریایی، سرخ‌شده تا بیرون ترد و داخل سبک شود، همراه با سس طحینی تند، برنج باسماتی و یک سالاد کوچک."
        ),
        calories: "1280 cal.",
        tags: [],
      },
      {
        name: bi("Kookoo Sabzi Sandwich", "ساندویچ کوکو سبزی"),
        desc: bi(
          "Fresh greens, herbs, and eggs frittata with pickled cucumber, mixed parsley, onions, and tomato, served with side of garlic sauce.",
          "سبزیجات تازه، گیاهان معطر و تخم‌مرغ همراه با خیارشور، جعفری خردشده، پیاز و گوجه‌فرنگی، سرو شده با سس سیر."
        ),
        calories: "650 cal.",
        tags: ["veg"],
      },
      {
        name: bi("Kookoo Sabzi", "کوکو سبزی"),
        desc: bi(
          "Fresh greens, herbs, and eggs frittata served with choice of rice, salad or ½ rice + ½ salad, and come with ½ pita bread & yogurt cucumber sauce.",
          "سبزیجات تازه، گیاهان معطر و تخم‌مرغ، همراه با انتخاب شما از برنج، سالاد یا نیمی برنج و نیمی سالاد، به همراه نیمی نان پیتا و سس ماست خیار."
        ),
        calories: "540–740 cal.",
        tags: ["veg"],
      },
    ],
  },
  {
    category: bi("Side Orders", "سفارش‌های جانبی"),
    items: [
      {
        name: bi("Must-o-Kheyar", "ماست و خیار"),
        desc: bi(
          "Creamy yogurt mixed with finely chopped crisp cucumbers, dried mint, and Persian herbs to compliment any of our delicious dishes.",
          "ماست خامه‌ای مخلوط‌شده با خیار تازه‌ی خردشده، نعنای خشک و سبزیجات معطر ایرانی، مکمل بی‌نظیر هر یک از غذاهای خوشمزه‌ی ما."
        ),
        calories: "50–100 cal. (Small | Large)",
        tags: ["gf"],
      },
      {
        name: bi("Seer Torshi", "ترشی سیر"),
        desc: bi(
          "Garlic cloves marinated & pickled in vinegar and traditional Persian spices to create a tender and sweet clove that melts in your mouth and takes your taste buds on an adventure.",
          "حبه‌های سیر که در سرکه و ادویه‌های سنتی ایرانی خوابانده و ترشی شده‌اند تا حبه‌ای لطیف و شیرین به دست آید که در دهان آب می‌شود و ذائقه‌تان را به ماجراجویی می‌برد."
        ),
        calories: "70–130 cal. (Small | Large)",
        tags: ["gf"],
      },
      {
        name: bi("Torshi", "ترشی مخلوط"),
        desc: bi(
          "A medley of finely diced vegetables marinated & pickled in vinegar and traditional Persian spices to act as a delicious side and the perfect palette cleanser.",
          "ترکیبی از سبزیجات ریزخردشده که در سرکه و ادویه‌های سنتی ایرانی خوابانده شده‌اند تا مکملی خوشمزه و دهان‌شوی بی‌نظیر باشند."
        ),
        calories: "30–60 cal. (Small | Large)",
        tags: ["gf"],
      },
      {
        name: bi("Bread", "نان"),
        desc: bi("Moby Dick's famous freshly baked whole pita bread.", "نان پیتای تازه و کامل معروف موبی دیک."),
        calories: "200 cal.",
        tags: [],
      },
      {
        name: bi("Moby Dick's Signature Kubideh Kabob (Skewer)", "سیخ کباب کوبیده‌ی امضادار موبی دیک"),
        calories: "190 cal.",
        tags: ["halal", "gf"],
      },
      {
        name: bi("Moby Dick's Signature Chenjeh Kabob (Skewer)", "سیخ کباب چنجه‌ی امضادار موبی دیک"),
        calories: "420 cal.",
        tags: ["halal", "gf"],
      },
      {
        name: bi("Moby Dick's Signature Lamb Kabob (Skewer)", "سیخ کباب بره‌ی امضادار موبی دیک"),
        calories: "330 cal.",
        tags: ["halal", "gf"],
      },
      {
        name: bi("Moby Dick's Signature Joojeh Kabob (Skewer)", "سیخ کباب جوجه‌ی امضادار موبی دیک"),
        calories: "320 cal.",
        tags: ["halal", "gf"],
      },
      {
        name: bi("Moby Dick's Signature Ground Chicken Kabob (Skewer)", "سیخ کباب مرغ چرخ‌کرده‌ی امضادار موبی دیک"),
        calories: "350 cal.",
        tags: ["halal", "gf", "spicy"],
      },
      {
        name: bi("Moby Dick's Signature Ground Lamb Kabob (Skewer)", "سیخ کباب بره‌ی چرخ‌کرده‌ی امضادار موبی دیک"),
        calories: "190 cal.",
        tags: ["halal", "gf", "spicy"],
      },
      {
        name: bi("Moby Dick's Signature Salmon Kabob (Skewer)", "سیخ کباب سالمون امضادار موبی دیک"),
        calories: "410 cal.",
        tags: ["gf"],
      },
      {
        name: bi("Veggie Kabob", "کباب سبزیجات"),
        calories: "150 cal.",
        tags: ["gf"],
      },
      {
        name: bi("Sabzi", "سبزی خوردن"),
        calories: "90 cal.",
        tags: ["gf"],
      },
      {
        name: bi("Chutney", "چاتنی"),
        calories: "25 cal.",
        tags: ["gf"],
      },
      {
        name: bi("Rice", "برنج"),
        calories: "270–500 cal. (Small | Large)",
        tags: ["gf"],
      },
    ],
  },
  {
    category: bi("Desserts", "دسرها"),
    items: [
      {
        name: bi("Baklava", "باقلوا"),
        desc: bi(
          "Our homemade Baklava begins with a light and flaky filo crust, carefully layered and filled with syrup sweetened nuts then baked to perfection.",
          "باقلوای خانگی ما با یک لایه‌ی نازک و ترد خمیر فیلو شروع می‌شود، با آجیل‌های خیس‌خورده در شربت لایه‌لایه چیده و پخته می‌شود تا کامل شود."
        ),
        calories: "330 cal.",
        tags: [],
      },
      {
        name: bi("Saffron Ice Cream", "بستنی زعفرانی"),
        desc: bi(
          "This golden creamy dessert has an exotically rich and unique taste, made with aromatic saffron and rosewater, our saffron ice cream will change your concept of what ice cream is.",
          "این دسر طلایی و خامه‌ای طعمی غنی و منحصربه‌فرد دارد، با زعفران معطر و گلاب تهیه شده؛ بستنی زعفرانی ما مفهوم بستنی را برایتان دگرگون می‌کند."
        ),
        calories: "330 cal.",
        tags: [],
      },
      {
        name: bi("Moby Cookie", "کوکی موبی"),
        desc: bi(
          "Crisp cookie that melts in your mouth the moment it hits your tongue.",
          "کوکی تردی که همان لحظه که به زبان می‌رسد در دهان آب می‌شود."
        ),
        calories: "370 cal.",
        tags: [],
      },
    ],
  },
  {
    category: bi("Beverages", "نوشیدنی‌ها"),
    items: [
      {
        name: bi("Homemade Doogh", "دوغ خانگی"),
        desc: bi(
          "This yogurt-based drink is a Moby Dick's signature. Made with our own homemade, fresh and creamy yogurt, and a hint of mint, it is the perfect finish to any of our dishes.",
          "این نوشیدنی ماستی، امضای موبی دیک است. تهیه‌شده با ماست تازه و خامه‌ای خودمان و کمی نعنا، بهترین همراه برای هر یک از غذاهای ماست."
        ),
        calories: "160 cal.",
        tags: ["gf"],
      },
      {
        name: bi("Bottled Doogh", "دوغ بطری"),
        desc: bi(
          "A refreshing carbonated or regular yogurt-based drink that provides the perfect finish to any of our Signature dishes. (can be ordered with or without mint flavoring)",
          "نوشیدنی گازدار یا ساده‌ی ماستی که بهترین پایان را برای هر یک از غذاهای امضادار ما فراهم می‌کند (با یا بدون طعم نعنا قابل سفارش است)."
        ),
        calories: "170 cal.",
        tags: ["gf"],
      },
      {
        name: bi("Beverages", "نوشیدنی‌ها"),
        desc: bi(
          "Sodas 0–230 cal. · Juices 0–290 cal. · Spring Water 0 cal. · Persian Brewed Hot Tea 0 cal. · Persian Brewed Iced Tea",
          "نوشابه ۰ تا ۲۳۰ کالری · آبمیوه ۰ تا ۲۹۰ کالری · آب معدنی ۰ کالری · چای دم‌کرده‌ی ایرانی گرم ۰ کالری · چای دم‌کرده‌ی ایرانی سرد"
        ),
        tags: [],
      },
      {
        name: bi("Organic Pomegranate Juice", "آب‌انار ارگانیک"),
        desc: bi(
          "Have a refreshing taste of Moby Dick's pomegranate juice. It's 100% organic juice, no sugar, and all flavor.",
          "طعم دلپذیر آب‌انار ارگانیک موبی دیک را تجربه کنید. صد در صد آبمیوه‌ی ارگانیک، بدون شکر و بدون هیچ طعم افزوده‌ای."
        ),
        calories: "54 cal.",
        tags: ["gf"],
      },
    ],
  },
  {
    category: bi("Family Platters", "پلاترهای خانوادگی"),
    note: bi(
      "Family Platters are served with your choice of aromatic basmati rice or house salad, OR half rice and half salad, as well as our freshly baked pita bread and creamy yogurt cucumber sauce. Family Platters also come with your choice of appetizers or desserts. Appetizer choices: Kashk Bademjan, Dolmeh, Hummus. Dessert choice: Baklava.",
      "پلاترهای خانوادگی همراه با انتخاب شما از برنج باسماتی معطر یا سالاد خانگی، یا نیمی برنج و نیمی سالاد، به همراه نان پیتای تازه‌ی ما و سس ماست خیار خامه‌ای سرو می‌شوند. پلاترهای خانوادگی همچنین همراه با انتخاب شما از پیش‌غذا یا دسر ارائه می‌شوند. انتخاب پیش‌غذا: کشک بادمجان، دلمه، حمص. انتخاب دسر: باقلوا."
    ),
    items: [
      {
        name: bi("Platter #1 (Serves 3 to 4)", "پلاتر شماره ۱ (برای ۳ تا ۴ نفر)"),
        desc: bi(
          "3 delicious skewers of ground meat kabob (beef or chicken), 1 skewer of tender chicken breast, 1 skewer of perfectly seasoned beef or lamb with a combination of two of our signature appetizers or desserts.",
          "سه سیخ کباب گوشت چرخ‌کرده (گاو یا مرغ)، یک سیخ سینه مرغ لطیف، یک سیخ کباب گاو یا بره‌ی به‌خوبی مزه‌دار شده، همراه با انتخاب دو مورد از پیش‌غذاها یا دسرهای امضادار ما."
        ),
        calories: "3480–3570 cal. (Barreh | Chenjeh)",
        tags: ["gf"],
      },
      {
        name: bi("Platter #2 (Serves 5 to 6)", "پلاتر شماره ۲ (برای ۵ تا ۶ نفر)"),
        desc: bi(
          "5 delicious skewers of ground meat kabob (beef or chicken), 2 skewers of tender chicken breast, 2 skewers of perfectly seasoned beef or lamb with a combination of three of our signature appetizers or desserts.",
          "پنج سیخ کباب گوشت چرخ‌کرده (گاو یا مرغ)، دو سیخ سینه مرغ لطیف، دو سیخ کباب گاو یا بره‌ی به‌خوبی مزه‌دار شده، همراه با انتخاب سه مورد از پیش‌غذاها یا دسرهای امضادار ما."
        ),
        calories: "5250–5430 cal. (Barreh | Chenjeh)",
        tags: ["gf"],
      },
      {
        name: bi("Chicken Wing Platter (Serves 5 to 6)", "پلاتر بال مرغ (برای ۵ تا ۶ نفر)"),
        desc: bi(
          "40 pieces of bone-in chicken wings marinated in house seasoning and served with garlic sauce.",
          "چهل عدد بال مرغ با استخوان، مزه‌دار شده با ادویه‌ی خانگی و سرو شده با سس سیر."
        ),
        calories: "2100 cal.",
        tags: [],
      },
    ],
  },
  {
    category: bi("Soups", "سوپ‌ها"),
    note: bi("Note: Check for availability.", "توجه: موجودی را بررسی کنید."),
    items: [
      {
        name: bi("Barley Soup", "سوپ جو"),
        desc: bi("Creamy barley soup with slow-cooked vegetables.", "سوپ جوی خامه‌ای با سبزیجات آرام‌پز شده."),
        calories: "100 cal.",
        tags: [],
      },
      {
        name: bi("Ab-Doogh-Kheyar", "آب‌دوغ خیار"),
        desc: bi(
          "A classic Persian cold soup with a tangy and refreshing taste. It's traditionally enjoyed in the summer time, offering a cooling and light experience.",
          "سوپ سرد سنتی ایرانی با طعمی تند و تازه‌کننده. این سوپ به‌طور سنتی در تابستان صرف می‌شود و تجربه‌ای خنک و سبک ارائه می‌دهد."
        ),
        tags: [],
      },
    ],
  },
];
