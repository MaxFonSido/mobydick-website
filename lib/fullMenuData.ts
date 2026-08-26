// Raw menu content captured from mobyskabob.com screenshots (English only, as
// provided). Not yet wired into any page — holding it here for when the
// "View Full Menu" page gets built. Categories seen in the site's nav dropdown
// but not yet captured: Entrees, Desserts, Soups, Veggies, Beverages,
// Side Orders, Family Platters.
//
// Dietary tag legend from the source site: V = Vegetarian, GF = Gluten Free,
// H = Halal, spicy = contains a chili/spicy icon.

export interface FullMenuItem {
  name: string;
  desc: string;
  calories?: string;
  tags: Array<"V" | "GF" | "H" | "spicy">;
}

export interface FullMenuCategory {
  category: string;
  note?: string;
  items: FullMenuItem[];
}

export const fullMenuData: FullMenuCategory[] = [
  {
    category: "Appetizers",
    items: [
      {
        name: "Kashk Bademjan",
        desc: "Fresh eggplant sautéed and whipped with fresh garlic, traditional Persian herbs, a hint of salt and pepper, and garnished with caramelized onion and creamy yogurt.",
        calories: "600 cal.",
        tags: ["V", "GF"],
      },
      {
        name: "Must-o-Mooseer",
        desc: "Creamy yogurt mixed with minced shallots and traditional Persian herbs, and a dash of salt. Served with our fresh out of the oven pita bread.",
        calories: "100 cal.",
        tags: ["V", "GF"],
      },
      {
        name: "Hummus",
        desc: "A rich and delicious combination of mashed chickpeas, zesty tahini sauce, garlic and a touch of lemon juice all made from scratch. Served with a pita bread (adds 400 cal.) *Gluten Free without bread.",
        calories: "430 cal.",
        tags: ["V", "GF"],
      },
      {
        name: "Spicy Hummus",
        desc: "Creamy mashed chickpeas blended with tahini, garlic, and fresh lemon juice, finished with a bold spicy kick. Served with pita bread. *Gluten Free without bread.",
        calories: "70 cal.",
        tags: ["V", "GF", "spicy"],
      },
      {
        name: "Dolmeh",
        desc: "Zesty fresh grape leaves stuffed with perfectly seasoned rice and hearty veggies then steamed to a light and tender finish.",
        calories: "250 cal.",
        tags: ["V"],
      },
      {
        name: "Falafel",
        desc: "Bite-sized and perfectly seasoned veggie patties made from chickpeas and fava beans ground with onion, sesame seed, fresh cilantro, minced garlic, and sea salt, then fried to a crisp but light and fluffy texture inside, with a side of zesty tahini sauce.",
        calories: "690 cal.",
        tags: ["V"],
      },
      {
        name: "Chicken Wings (Bone-in Chicken)",
        desc: "Bone-in Chicken Wings, expertly marinated in Moby's secret spices and flame-kissed for irresistible flavor in every bite.",
        calories: "430 cal.",
        tags: [],
      },
      {
        name: "Kookoo Sabzi",
        desc: "Fresh greens, herbs, and eggs frittata.",
        calories: "240 cal.",
        tags: ["V"],
      },
    ],
  },
  {
    category: "Salads",
    items: [
      {
        name: "Moby Dick's House Salad",
        desc: "Garden fresh greens and lettuce, succulent tomato, crisp cucumber, onion, rich feta cheese crumbles, Kalamata olives and juicy pepperoncini served with Moby Dick's delicious House Lemon Vinaigrette Dressing.",
        calories: "90–170 cal. (Small | Large)",
        tags: ["GF"],
      },
      {
        name: "Shirazi Salad",
        desc: "A colorful and light mix of crisp chopped cucumber, tomato, and onion with fresh Persian herbs tossed in Moby Dick's flavorful House Lemon Vinaigrette Dressing.",
        calories: "100–300 cal.",
        tags: [],
      },
      {
        name: "Mediterranean Salad",
        desc: "Garden fresh greens and lettuce, succulent tomatoes, sweet and juicy raisins, onion, rich feta cheese crumbles, crisp walnuts and fresh parsley served with Pomegranate Vinaigrette dressing.",
        calories: "470 cal.",
        tags: ["GF"],
      },
      {
        name: "Dressing",
        desc: "Ranch Dressing, Italian Dressing, House Dressing, Pomegranate Dressing.",
        tags: ["GF"],
      },
    ],
  },
  {
    category: "Sandwiches",
    note: "All sandwiches are served on our warm, fresh-baked house pita bread with fresh lettuce, tomato, onion, and feta cheese with creamy yogurt cucumber sauce on the side.",
    items: [
      {
        name: "Moby's Kubideh",
        desc: "No one does Kubideh kabobs like we do. Top cuts of beef, ground with onion, seasoned to perfection with our signature Moby Dick's seasoning and grilled to a tender and juicy finish.",
        calories: "760 cal.",
        tags: ["H"],
      },
      {
        name: "Moby's Joojeh Kabob",
        desc: "Our famous Joojeh kabob set the standard. Fresh Chicken breast perfectly marinated for hours in our signature Moby Dick's house blend seasoning and slowly fire grilled to a tender and moist finish.",
        calories: "890 cal.",
        tags: ["H"],
      },
      {
        name: "Moby's Gyro",
        desc: "Our succulent Gyro meat is to die for. Generously sliced, marinated and seasoned gyro beef, with fresh lettuce, tomato, and feta cheese crumbles all blanketed in a warm freshly baked pita, served with a side of creamy yogurt cucumber sauce.",
        calories: "1330 cal.",
        tags: ["H"],
      },
      {
        name: "Ground Chicken Kabob",
        desc: "Spicy Ground Chicken Kabob done right. Savory and spicy chicken, ground with onion and Moby Dick's signature house seasoning and grilled to perfection.",
        calories: "740 cal.",
        tags: ["H", "spicy"],
      },
      {
        name: "Ground Lamb Kabob",
        desc: "Fresh lamb, ground with onion and Moby Dick's signature house seasoning and grilled to perfection.",
        calories: "750 cal.",
        tags: ["H", "spicy"],
      },
    ],
  },
  {
    category: "Lunch Specials",
    note: "All Lunch Specials are served with our creamy yogurt cucumber and a piece of our warm freshly baked bread.",
    items: [
      {
        name: "MONDAY: Adas Polo",
        desc: "Fragrant basmati rice with lentils, dates, raisins, and caramelized onions, served with tender baked chicken. Warmly spiced and perfectly balanced, Adas Polo is hearty, nourishing, and deeply satisfying.",
        tags: ["H"],
      },
      {
        name: "* TUESDAY: Baghala Polo",
        desc: "Aromatic Basmati rice and tender fava beans perfectly seasoned and flavored with fresh dill weed, served with our delicious tender lamb shank.",
        calories: "1180 cal.",
        tags: ["H"],
      },
      {
        name: "WEDNESDAY: Khoresht Gheymeh Bademjan",
        desc: "Yellow split peas, sautéed onion, eggplant, and beef chunks cooked in tomato sauce with Persian spices and Basmati rice.",
        calories: "870 cal.",
        tags: ["H"],
      },
      {
        name: "THURSDAY: Zereshk Polo",
        desc: "Aromatic Basmati rice perfectly seasoned and flavored with rich saffron, topped with sweet sautéed barberries, and served with our signature juicy baked chicken.",
        calories: "1100 cal.",
        tags: ["H"],
      },
      {
        name: "* FRIDAY: Ghormeh Sabzi",
        desc: "A rich and flavorful Persian herb stew, simmered to perfection with fresh cilantro, parsley, red beans, and leeks, our special Persian seasoning and tender chunks of succulent beef, served with aromatic Basmati rice.",
        calories: "1010 cal.",
        tags: ["H"],
      },
    ],
  },
];
