import shape01 from "../assets/card-shapes/01.svg";
import shape02 from "../assets/card-shapes/02.svg";
import shape03 from "../assets/card-shapes/03.svg";
import shape04 from "../assets/card-shapes/04.svg";
import shape05 from "../assets/card-shapes/05.svg";
import shape06 from "../assets/card-shapes/06.svg";
import shape07 from "../assets/card-shapes/07.svg";
import shape08 from "../assets/card-shapes/08.svg";
import shape09 from "../assets/card-shapes/09.svg";
import shape10 from "../assets/card-shapes/10.svg";
import shape11 from "../assets/card-shapes/11.svg";
import shape12 from "../assets/card-shapes/12.svg";

const ProductData = [
  {
    identifier: "All",
    products: [
      {
        id: "BOWLETT1",
        card_shape: shape02,
        moto: "SUBTLE, SWEET, VELVETY.",
        description: "Where crispy leaves mingle and make more mmmagic.",
        img: "https://bowery.co/wp-content/uploads/2023/03/Baby-Butter-4oz-Front-3D-4-2023-3-e1688643737753-816x1024.png",
        label: "Baby Butter",
        type: "lettuces",
        reviews: [
          {
            level: 4,
            user: "GreenEater",
            title: "Nice and Tender",
            comment:
              "Baby Butter lettuce is always a delight to eat. It's tender, with a mild flavor that goes well in salads or as a wrap. I appreciate the freshness of Bowery's produce. Definitely recommend it!",
          },
          {
            level: 3,
            user: "FreshFanatic",
            title: "Decent Quality",
            comment:
              "The Baby Butter lettuce from Bowery is decent. It's fresh and has a good texture, but I've had better. It's a good option if you're in a pinch and need lettuce for a salad, but it's not exceptional.",
          },
        ],
      },
      {
        id: "BOWLETT2",
        card_shape: shape04,
        moto: "SUBTLE, SWEET, VELVETY.",
        description: "Where crispy leaves mingle and make more mmmagic.",
        img: "https://bowery.co/wp-content/uploads/2023/03/Baby-Romaine-4oz-Front-3D-4-2023-e1688643961427-816x1024.png",
        label: "Baby Romaine",
        type: "lettuces",
        reviews: [
          {
            level: 4,
            user: "SaladQueen",
            title: "Great for Caesar Salads",
            comment:
              "Baby Romaine is my go-to for Caesar salads, and Bowery's version does not disappoint. The leaves are crisp and have a nice crunch. They hold up well with dressing and other toppings. Overall, a solid choice!",
          },
          {
            level: 2,
            user: "HealthyEater123",
            title: "Disappointed",
            comment:
              "I had high hopes for Bowery's Baby Romaine, but unfortunately, it didn't meet my expectations. The leaves were wilted and lacked flavor. I wouldn't purchase it again.",
          },
        ],
      },
      {
        id: "BOWLETT3",
        card_shape: shape05,
        moto: "SUBTLE, SWEET, VELVETY.",
        description: "Where crispy leaves mingle and make more mmmagic.",
        img: "https://bowery.co/wp-content/uploads/2023/03/Crispy-Leaf-4oz-Front-3D-4-2023-1-e1688644354993-816x1024.png",
        label: "Crispy Leaf",
        type: "lettuces",
        reviews: [
          {
            level: 5,
            user: "SaladSavvy",
            title: "Delicious and Spicy!",
            comment:
              "I absolutely love Bowery's Crispy Leaf lettuce. It adds a delightful kick to salads with its subtle spiciness. The leaves are fresh and crunchy, making every bite enjoyable. Definitely a staple in my kitchen!",
          },
          {
            level: 4,
            user: "OrganicEats",
            title: "Fresh and Flavorful",
            comment:
              "Bowery's Crispy Leaf lettuce is a great addition to any salad. It's fresh, flavorful, and adds a nice crunch. I appreciate the quality",
          },
        ],
      },

      {
        id: "BOWMIXE1",
        card_shape: shape06,
        moto: "SUBTLE, SWEET, VELVETY.",
        description: "Where crispy leaves mingle and make more mmmagic.",
        img: "https://bowery.co/wp-content/uploads/2023/03/Mixed-Greens-4oz-Front-3D-4-2023-1-e1688644485458-816x1024.png",
        label: "Mixed Greens",
        type: "mixes",
        reviews: [
          {
            level: 5,
            user: "SaladKing",
            title: "Delicious and Spicy!",
            comment:
              "I absolutely love Bowery's Mixed Greens lettuce. It adds a delightful kick to salads with its subtle spiciness. The leaves are fresh and crunchy, making every bite enjoyable. Definitely a staple in my kitchen!",
          },
          {
            level: 4,
            user: "OrganicEats",
            title: "Fresh and Flavorful",
            comment:
              "Bowery's Mixed Greens lettuce is a great addition to any salad. It's fresh, flavorful, and adds a nice crunch. I appreciate the quality",
          },
        ],
      },
      {
        id: "BOWMIXE2",
        card_shape: shape07,
        moto: "SUBTLE, SWEET, VELVETY.",
        description: "Where crispy leaves mingle and make more mmmagic.",
        img: "https://bowery.co/wp-content/uploads/2023/03/Spring-Mix-4oz-Front-3D-4-2023-1-e1688644673934-816x1024.png",
        label: "Spring Mix",
        type: "mixes",
        reviews: [
          {
            level: 4,
            user: "SaladQueen",
            title: "Great for Caesar Salads",
            comment:
              "Spring Mix is my go-to for Caesar salads, and Bowery's version does not disappoint. The leaves are crisp and have a nice crunch. They hold up well with dressing and other toppings. Overall, a solid choice!",
          },
          {
            level: 2,
            user: "HealthyEater123",
            title: "Disappointed",
            comment:
              "I had high hopes for Bowery's Spring Mix, but unfortunately, it didn't meet my expectations. The leaves were wilted and lacked flavor. I wouldn't purchase it again.",
          },
        ],
      },

      {
        id: "BOWDLG1",
        card_shape: shape03,
        moto: "SUBTLE, SWEET, VELVETY.",
        description: "Where crispy leaves mingle and make more mmmagic.",
        img: "https://bowery.co/wp-content/uploads/2023/03/Baby-Kale-4oz-Front-3D-4-2023-e1688643831609-816x1024.png",
        label: "Baby Kale",
        type: "dark leafy greens",
        reviews: [
          {
            level: 5,
            user: "HealthyHippie",
            title: "Fantastic!",
            comment:
              "Bowery's Baby Kale is fantastic! It's fresh, flavorful, and packed with nutrients. I love adding it to smoothies or sautéing it with garlic and olive oil. Highly recommend!",
          },
          {
            level: 4,
            user: "GreenGuru",
            title: "Great Addition to Any Dish",
            comment:
              "Baby Kale from Bowery is a great addition to any dish. It's versatile and nutritious. I often use it in salads, soups, or as a topping for pizza. It adds a nice touch of green to every meal.",
          },
        ],
      },
      {
        id: "BOWDLG2",
        card_shape: shape05,
        moto: "SUBTLE, SWEET, VELVETY.",
        description: "Where crispy leaves mingle and make more mmmagic.",
        img: "https://bowery.co/wp-content/uploads/2023/08/Spinach-4oz-Front-3D-4-2023-4000x4000-c38c18a-e1693321235934-817x1024.png",
        label: "Spinach",
        type: "dark leafy greens",
        reviews: [
          {
            level: 4,
            user: "IronChef",
            title: "Nutrient Powerhouse",
            comment:
              "Bowery's Spinach is a nutrient powerhouse! It's fresh, vibrant, and perfect for adding to smoothies or incorporating into meals. I love how versatile it is!",
          },
          {
            level: 3,
            user: "HealthEnthusiast",
            title: "Good, but Not Great",
            comment:
              "Bowery's Spinach is good, but not great. It's fresh and has a nice flavor, but I've had spinach from other brands that seemed more vibrant and flavorful. It's still a decent option, especially for convenience.",
          },
        ],
      },

      {
        id: "BOWHER1",
        card_shape: shape08,
        moto: "SUBTLE, SWEET, VELVETY.",
        description: "Where crispy leaves mingle and make more mmmagic.",
        img: "https://bowery.co/wp-content/uploads/2023/03/Basil-Front-3D-4-2023-2-e1688650795379-805x1024.png",
        label: "Basil",
        type: "herbs",
        reviews: [
          {
            level: 5,
            user: "PestoLover",
            title: "Best Basil Ever!",
            comment:
              "Bowery's Basil is the best I've ever had! It's so fresh and aromatic, perfect for making homemade pesto or adding to pasta dishes. I love the convenience of having it delivered straight to my door.",
          },
          {
            level: 4,
            user: "ItalianCuisineFan",
            title: "Authentic Flavor",
            comment:
              "Bowery's Basil has an authentic flavor that elevates any dish. Whether it's Caprese salad or homemade marinara sauce, this basil adds a fresh, aromatic touch. Highly recommend!",
          },
        ],
      },
      {
        id: "BOWHER2",
        card_shape: shape08,
        moto: "SUBTLE, SWEET, VELVETY.",
        description: "Where crispy leaves mingle and make more mmmagic.",
        img: "https://bowery.co/wp-content/uploads/2024/01/Cilantro-Front-3D-4-2023-2790x3780-c7368d2-756x1024.png",
        label: "Cilantro",
        type: "herbs",
        reviews: [
          {
            level: 3,
            user: "TacoEnthusiast",
            title: "Decent Flavor",
            comment:
              "Bowery's Cilantro has a decent flavor, but it's not as vibrant as I'd like. It's still a good option for adding freshness to dishes like tacos or guacamole.",
          },
          {
            level: 4,
            user: "MexicanCuisineLover",
            title: "Adds Authenticity to Mexican Dishes",
            comment:
              "Bowery's Cilantro adds authenticity to my Mexican dishes. It's fresh and aromatic, just like the cilantro you'd find at a local market. I appreciate the convenience of having it delivered.",
          },
        ],
      },
      {
        id: "BOWHER3",
        card_shape: shape08,
        moto: "SUBTLE, SWEET, VELVETY.",
        description: "Where crispy leaves mingle and make more mmmagic.",
        img: "https://bowery.co/wp-content/uploads/2024/01/Parsley-Front-3D-4-2023-2970x3780-6a374b3-1-805x1024.png",
        label: "Parsley",
        type: "herbs",
        reviews: [
          {
            level: 4,
            user: "GarnishMaster",
            title: "Perfect for Garnishing",
            comment:
              "Bowery's Parsley is perfect for garnishing dishes. It's fresh and vibrant, adding a pop of color and flavor to any meal. I love using it as a finishing touch on soups, salads, and pasta dishes.",
          },
          {
            level: 5,
            user: "HerbAficionado",
            title: "Versatile Herb",
            comment:
              "Bowery's Parsley is a versatile herb that I use in many of my recipes. It's fresh, flavorful, and adds a nice brightness to dishes. Whether it's tabbouleh or grilled fish, this parsley always shines!",
          },
        ],
      },

      {
        id: "BOWBER1",
        card_shape: shape09,
        moto: "SUBTLE, SWEET, VELVETY.",
        description: "Where crispy leaves mingle and make more mmmagic.",
        img: "https://bowery.co/wp-content/uploads/2023/03/strawberries-1-1024x531-2.webp",
        label: "Berries",
        type: "berries",
        reviews: [
          {
            level: 5,
            user: "BerryEnthusiast",
            title: "Sweet and Juicy",
            comment:
              "Bowery's Berries are sweet and juicy, bursting with flavor! They're perfect for snacking, adding to yogurt, or topping off desserts. I love the freshness and quality of these berries.",
          },
          {
            level: 4,
            user: "SmoothieFanatic",
            title: "Great for Smoothies",
            comment:
              "Bowery's Berries are great for making smoothies. They blend well and add natural sweetness to any recipe. I appreciate having them on hand for my daily smoothie fix.",
          },
        ],
      },

      {
        id: "BOWSLK1",
        card_shape: shape01,
        moto: "SUBTLE, SWEET, VELVETY.",
        description: "Where crispy leaves mingle and make more mmmagic.",
        img: "https://bowery.co/wp-content/uploads/2023/03/Avocado-Ranch-FRONT-3D-4-2023-1-e1688643630644-816x1024.png",
        label: "Avocado Ranch",
        type: "salad kits",
        reviews: [
          {
            level: 4,
            user: "SaladLover",
            title: "Tasty and Convenient",
            comment:
              "Bowery's Avocado Ranch salad kit is tasty and convenient. It's perfect for a quick and healthy meal option. I love the creamy dressing and fresh ingredients.",
          },
          {
            level: 3,
            user: "OnTheGoEater",
            title: "Convenient but Lacking Flavor",
            comment:
              "Bowery's Avocado Ranch salad kit is convenient for busy days, but I found the flavors to be lacking. The dressing could use more seasoning, and the greens weren't as fresh as I expected.",
          },
        ],
      },
      {
        id: "BOWSLK2",
        card_shape: shape10,
        moto: "SUBTLE, SWEET, VELVETY.",
        description: "Where crispy leaves mingle and make more mmmagic.",
        img: "https://bowery.co/wp-content/uploads/2023/03/Balsamic-FRONT-3D-4-2023-e1688644067870-816x1024.png",
        label: "Balsamic",
        type: "salad kits",
        reviews: [
          {
            level: 5,
            user: "SaladConnoisseur",
            title: "Flavorful and Satisfying",
            comment:
              "Bowery's Balsamic salad kit is flavorful and satisfying. The balsamic dressing adds a nice tanginess to the greens, and the toppings provide a good crunch. Perfect for a quick and healthy meal.",
          },
          {
            level: 4,
            user: "HealthyEater",
            title: "Great for Work Lunches",
            comment:
              "Bowery's Balsamic salad kit is great for work lunches. It's convenient, healthy, and keeps me satisfied until dinner. I appreciate the quality ingredients and delicious flavors.",
          },
        ],
      },
      {
        id: "BOWSLK3",
        card_shape: shape11,
        moto: "SUBTLE, SWEET, VELVETY.",
        description: "Where crispy leaves mingle and make more mmmagic.",
        img: "https://bowery.co/wp-content/uploads/2023/03/Zesty-Caesar-FRONT-3D-4-2023-1-e1688644747586-816x1024.png",
        label: "Zesty Caesar",
        type: "salad kits",
        reviews: [
          {
            level: 3,
            user: "CaesarFan",
            title: "Decent Option",
            comment:
              "Bowery's Zesty Caesar salad kit is a decent option for a quick meal. The flavors are okay, but I've had better Caesar salads. It's convenient when I don't have time to prepare lunch from scratch.",
          },
          {
            level: 4,
            user: "BusyProfessional",
            title: "Convenient and Tasty",
            comment:
              "Bowery's Zesty Caesar salad kit is convenient and tasty. It's perfect for busy days when I need a quick and satisfying meal. I enjoy the zesty dressing and fresh ingredients.",
          },
        ],
      },

      {
        id: "BOWFSC1",
        card_shape: shape04,
        moto: "SUBTLE, SWEET, VELVETY.",
        description: "Where crispy leaves mingle and make more mmmagic.",
        img: "https://bowery.co/wp-content/uploads/2023/08/Bok-Choy-No-Parking-Lot-FRONT-3D-5-2023-4000x4000-c38c18a-e1693334140432-817x1024.png",
        label: "Bok Choy",
        type: "Farmer's Selection",
        reviews: [
          {
            level: 4,
            user: "AsianCuisineFan",
            title: "Great Addition to Stir-Fries",
            comment:
              "Bowery's Bok Choy is a great addition to stir-fries. It's fresh, crunchy, and adds a nice texture to the dish. I appreciate the quality and convenience of having it delivered.",
          },
          {
            level: 5,
            user: "VegetarianChef",
            title: "Versatile Vegetable",
            comment:
              "Bowery's Bok Choy is a versatile vegetable that I use in many of my recipes. Whether it's stir-fries, soups, or salads, it always adds a delicious crunch. I love the freshness and taste!",
          },
        ],
      },
      {
        id: "BOWFSC2",
        card_shape: shape12,
        moto: "SUBTLE, SWEET, VELVETY.",
        description: "Where crispy leaves mingle and make more mmmagic.",
        img: "https://bowery.co/wp-content/uploads/2023/03/mustard-frills-1-816x1024.png",
        label: "Mustard Frills",
        type: "Farmer's Selection",
        reviews: [
          {
            level: 5,
            user: "GourmetCook",
            title: "Unique Flavor",
            comment:
              "Bowery's Mustard Frills have a unique flavor that adds a gourmet touch to dishes. Whether it's salads, sandwiches, or garnishes, these mustard frills elevate every meal. Highly recommend!",
          },
          {
            level: 4,
            user: "FoodieExplorer",
            title: "Delicious and Fresh",
            comment:
              "Bowery's Mustard Frills are delicious and fresh, perfect for adding a burst of flavor to any dish. I love experimenting with different ways to incorporate them into my meals. Great quality!",
          },
        ],
      },
    ],
  },
  {
    identifier: "Lettuces",
    products: [
      {
        id: "BOWLETT1",
        card_shape: shape02,
        moto: "SUBTLE, SWEET, VELVETY.",
        description: "Where crispy leaves mingle and make more mmmagic.",
        img: "https://bowery.co/wp-content/uploads/2023/03/Baby-Butter-4oz-Front-3D-4-2023-3-e1688643737753-816x1024.png",
        label: "Baby Butter",
        type: "lettuces",
        reviews: [
          {
            level: 4,
            user: "GreenEater",
            title: "Nice and Tender",
            comment:
              "Baby Butter lettuce is always a delight to eat. It's tender, with a mild flavor that goes well in salads or as a wrap. I appreciate the freshness of Bowery's produce. Definitely recommend it!",
          },
          {
            level: 3,
            user: "FreshFanatic",
            title: "Decent Quality",
            comment:
              "The Baby Butter lettuce from Bowery is decent. It's fresh and has a good texture, but I've had better. It's a good option if you're in a pinch and need lettuce for a salad, but it's not exceptional.",
          },
        ],
      },
      {
        id: "BOWLETT2",
        card_shape: shape04,
        moto: "SUBTLE, SWEET, VELVETY.",
        description: "Where crispy leaves mingle and make more mmmagic.",
        img: "https://bowery.co/wp-content/uploads/2023/03/Baby-Romaine-4oz-Front-3D-4-2023-e1688643961427-816x1024.png",
        label: "Baby Romaine",
        type: "lettuces",
        reviews: [
          {
            level: 4,
            user: "SaladQueen",
            title: "Great for Caesar Salads",
            comment:
              "Baby Romaine is my go-to for Caesar salads, and Bowery's version does not disappoint. The leaves are crisp and have a nice crunch. They hold up well with dressing and other toppings. Overall, a solid choice!",
          },
          {
            level: 2,
            user: "HealthyEater123",
            title: "Disappointed",
            comment:
              "I had high hopes for Bowery's Baby Romaine, but unfortunately, it didn't meet my expectations. The leaves were wilted and lacked flavor. I wouldn't purchase it again.",
          },
        ],
      },
      {
        id: "BOWLETT3",
        card_shape: shape05,
        moto: "SUBTLE, SWEET, VELVETY.",
        description: "Where crispy leaves mingle and make more mmmagic.",
        img: "https://bowery.co/wp-content/uploads/2023/03/Crispy-Leaf-4oz-Front-3D-4-2023-1-e1688644354993-816x1024.png",
        label: "Crispy Leaf",
        type: "lettuces",
        reviews: [
          {
            level: 5,
            user: "SaladSavvy",
            title: "Delicious and Spicy!",
            comment:
              "I absolutely love Bowery's Crispy Leaf lettuce. It adds a delightful kick to salads with its subtle spiciness. The leaves are fresh and crunchy, making every bite enjoyable. Definitely a staple in my kitchen!",
          },
          {
            level: 4,
            user: "OrganicEats",
            title: "Fresh and Flavorful",
            comment:
              "Bowery's Crispy Leaf lettuce is a great addition to any salad. It's fresh, flavorful, and adds a nice crunch. I appreciate the quality",
          },
        ],
      },
    ],
  },
  {
    identifier: "Mixes",
    products: [
      {
        id: "BOWMIXE1",
        card_shape: shape06,
        moto: "SUBTLE, SWEET, VELVETY.",
        description: "Where crispy leaves mingle and make more mmmagic.",
        img: "https://bowery.co/wp-content/uploads/2023/03/Mixed-Greens-4oz-Front-3D-4-2023-1-e1688644485458-816x1024.png",
        label: "Mixed Greens",
        type: "mixes",
        reviews: [
          {
            level: 5,
            user: "SaladKing",
            title: "Delicious and Spicy!",
            comment:
              "I absolutely love Bowery's Mixed Greens lettuce. It adds a delightful kick to salads with its subtle spiciness. The leaves are fresh and crunchy, making every bite enjoyable. Definitely a staple in my kitchen!",
          },
          {
            level: 4,
            user: "OrganicEats",
            title: "Fresh and Flavorful",
            comment:
              "Bowery's Mixed Greens lettuce is a great addition to any salad. It's fresh, flavorful, and adds a nice crunch. I appreciate the quality",
          },
        ],
      },
      {
        id: "BOWMIXE2",
        card_shape: shape07,
        moto: "SUBTLE, SWEET, VELVETY.",
        description: "Where crispy leaves mingle and make more mmmagic.",
        img: "https://bowery.co/wp-content/uploads/2023/03/Spring-Mix-4oz-Front-3D-4-2023-1-e1688644673934-816x1024.png",
        label: "Spring Mix",
        type: "mixes",
        reviews: [
          {
            level: 4,
            user: "SaladQueen",
            title: "Great for Caesar Salads",
            comment:
              "Spring Mix is my go-to for Caesar salads, and Bowery's version does not disappoint. The leaves are crisp and have a nice crunch. They hold up well with dressing and other toppings. Overall, a solid choice!",
          },
          {
            level: 2,
            user: "HealthyEater123",
            title: "Disappointed",
            comment:
              "I had high hopes for Bowery's Spring Mix, but unfortunately, it didn't meet my expectations. The leaves were wilted and lacked flavor. I wouldn't purchase it again.",
          },
        ],
      },
    ],
  },
  {
    identifier: "Dark Leafy Greens",
    products: [
      {
        id: "BOWDLG1",
        card_shape: shape03,
        moto: "SUBTLE, SWEET, VELVETY.",
        description: "Where crispy leaves mingle and make more mmmagic.",
        img: "https://bowery.co/wp-content/uploads/2023/03/Baby-Kale-4oz-Front-3D-4-2023-e1688643831609-816x1024.png",
        label: "Baby Kale",
        type: "dark leafy greens",
        reviews: [
          {
            level: 5,
            user: "HealthyHippie",
            title: "Fantastic!",
            comment:
              "Bowery's Baby Kale is fantastic! It's fresh, flavorful, and packed with nutrients. I love adding it to smoothies or sautéing it with garlic and olive oil. Highly recommend!",
          },
          {
            level: 4,
            user: "GreenGuru",
            title: "Great Addition to Any Dish",
            comment:
              "Baby Kale from Bowery is a great addition to any dish. It's versatile and nutritious. I often use it in salads, soups, or as a topping for pizza. It adds a nice touch of green to every meal.",
          },
        ],
      },
      {
        id: "BOWDLG2",
        card_shape: shape05,
        moto: "SUBTLE, SWEET, VELVETY.",
        description: "Where crispy leaves mingle and make more mmmagic.",
        img: "https://bowery.co/wp-content/uploads/2023/08/Spinach-4oz-Front-3D-4-2023-4000x4000-c38c18a-e1693321235934-817x1024.png",
        label: "Spinach",
        type: "dark leafy greens",
        reviews: [
          {
            level: 4,
            user: "IronChef",
            title: "Nutrient Powerhouse",
            comment:
              "Bowery's Spinach is a nutrient powerhouse! It's fresh, vibrant, and perfect for adding to smoothies or incorporating into meals. I love how versatile it is!",
          },
          {
            level: 3,
            user: "HealthEnthusiast",
            title: "Good, but Not Great",
            comment:
              "Bowery's Spinach is good, but not great. It's fresh and has a nice flavor, but I've had spinach from other brands that seemed more vibrant and flavorful. It's still a decent option, especially for convenience.",
          },
        ],
      },
    ],
  },
  {
    identifier: "Herbs",
    products: [
      {
        id: "BOWHER1",
        card_shape: shape08,
        moto: "SUBTLE, SWEET, VELVETY.",
        description: "Where crispy leaves mingle and make more mmmagic.",
        img: "https://bowery.co/wp-content/uploads/2023/03/Basil-Front-3D-4-2023-2-e1688650795379-805x1024.png",
        label: "Basil",
        type: "herbs",
        reviews: [
          {
            level: 5,
            user: "PestoLover",
            title: "Best Basil Ever!",
            comment:
              "Bowery's Basil is the best I've ever had! It's so fresh and aromatic, perfect for making homemade pesto or adding to pasta dishes. I love the convenience of having it delivered straight to my door.",
          },
          {
            level: 4,
            user: "ItalianCuisineFan",
            title: "Authentic Flavor",
            comment:
              "Bowery's Basil has an authentic flavor that elevates any dish. Whether it's Caprese salad or homemade marinara sauce, this basil adds a fresh, aromatic touch. Highly recommend!",
          },
        ],
      },
      {
        id: "BOWHER2",
        card_shape: shape08,
        moto: "SUBTLE, SWEET, VELVETY.",
        description: "Where crispy leaves mingle and make more mmmagic.",
        img: "https://bowery.co/wp-content/uploads/2024/01/Cilantro-Front-3D-4-2023-2790x3780-c7368d2-756x1024.png",
        label: "Cilantro",
        type: "herbs",
        reviews: [
          {
            level: 3,
            user: "TacoEnthusiast",
            title: "Decent Flavor",
            comment:
              "Bowery's Cilantro has a decent flavor, but it's not as vibrant as I'd like. It's still a good option for adding freshness to dishes like tacos or guacamole.",
          },
          {
            level: 4,
            user: "MexicanCuisineLover",
            title: "Adds Authenticity to Mexican Dishes",
            comment:
              "Bowery's Cilantro adds authenticity to my Mexican dishes. It's fresh and aromatic, just like the cilantro you'd find at a local market. I appreciate the convenience of having it delivered.",
          },
        ],
      },
      {
        id: "BOWHER3",
        card_shape: shape08,
        moto: "SUBTLE, SWEET, VELVETY.",
        description: "Where crispy leaves mingle and make more mmmagic.",
        img: "https://bowery.co/wp-content/uploads/2024/01/Parsley-Front-3D-4-2023-2970x3780-6a374b3-1-805x1024.png",
        label: "Parsley",
        type: "herbs",
        reviews: [
          {
            level: 4,
            user: "GarnishMaster",
            title: "Perfect for Garnishing",
            comment:
              "Bowery's Parsley is perfect for garnishing dishes. It's fresh and vibrant, adding a pop of color and flavor to any meal. I love using it as a finishing touch on soups, salads, and pasta dishes.",
          },
          {
            level: 5,
            user: "HerbAficionado",
            title: "Versatile Herb",
            comment:
              "Bowery's Parsley is a versatile herb that I use in many of my recipes. It's fresh, flavorful, and adds a nice brightness to dishes. Whether it's tabbouleh or grilled fish, this parsley always shines!",
          },
        ],
      },
    ],
  },
  {
    identifier: "Berries",
    products: [
      {
        id: "BOWBER1",
        card_shape: shape09,
        moto: "SUBTLE, SWEET, VELVETY.",
        description: "Where crispy leaves mingle and make more mmmagic.",
        img: "https://bowery.co/wp-content/uploads/2023/03/strawberries-1-1024x531-2.webp",
        label: "Berries",
        type: "berries",
        reviews: [
          {
            level: 5,
            user: "BerryEnthusiast",
            title: "Sweet and Juicy",
            comment:
              "Bowery's Berries are sweet and juicy, bursting with flavor! They're perfect for snacking, adding to yogurt, or topping off desserts. I love the freshness and quality of these berries.",
          },
          {
            level: 4,
            user: "SmoothieFanatic",
            title: "Great for Smoothies",
            comment:
              "Bowery's Berries are great for making smoothies. They blend well and add natural sweetness to any recipe. I appreciate having them on hand for my daily smoothie fix.",
          },
        ],
      },
    ],
  },
  {
    identifier: "Salad Kits",
    products: [
      {
        id: "BOWSLK1",
        card_shape: shape01,
        moto: "SUBTLE, SWEET, VELVETY.",
        description: "Where crispy leaves mingle and make more mmmagic.",
        img: "https://bowery.co/wp-content/uploads/2023/03/Avocado-Ranch-FRONT-3D-4-2023-1-e1688643630644-816x1024.png",
        label: "Avocado Ranch",
        type: "salad kits",
        reviews: [
          {
            level: 4,
            user: "SaladLover",
            title: "Tasty and Convenient",
            comment:
              "Bowery's Avocado Ranch salad kit is tasty and convenient. It's perfect for a quick and healthy meal option. I love the creamy dressing and fresh ingredients.",
          },
          {
            level: 3,
            user: "OnTheGoEater",
            title: "Convenient but Lacking Flavor",
            comment:
              "Bowery's Avocado Ranch salad kit is convenient for busy days, but I found the flavors to be lacking. The dressing could use more seasoning, and the greens weren't as fresh as I expected.",
          },
        ],
      },
      {
        id: "BOWSLK2",
        card_shape: shape10,
        moto: "SUBTLE, SWEET, VELVETY.",
        description: "Where crispy leaves mingle and make more mmmagic.",
        img: "https://bowery.co/wp-content/uploads/2023/03/Balsamic-FRONT-3D-4-2023-e1688644067870-816x1024.png",
        label: "Balsamic",
        type: "salad kits",
        reviews: [
          {
            level: 5,
            user: "SaladConnoisseur",
            title: "Flavorful and Satisfying",
            comment:
              "Bowery's Balsamic salad kit is flavorful and satisfying. The balsamic dressing adds a nice tanginess to the greens, and the toppings provide a good crunch. Perfect for a quick and healthy meal.",
          },
          {
            level: 4,
            user: "HealthyEater",
            title: "Great for Work Lunches",
            comment:
              "Bowery's Balsamic salad kit is great for work lunches. It's convenient, healthy, and keeps me satisfied until dinner. I appreciate the quality ingredients and delicious flavors.",
          },
        ],
      },
      {
        id: "BOWSLK3",
        card_shape: shape11,
        moto: "SUBTLE, SWEET, VELVETY.",
        description: "Where crispy leaves mingle and make more mmmagic.",
        img: "https://bowery.co/wp-content/uploads/2023/03/Zesty-Caesar-FRONT-3D-4-2023-1-e1688644747586-816x1024.png",
        label: "Zesty Caesar",
        type: "salad kits",
        reviews: [
          {
            level: 3,
            user: "CaesarFan",
            title: "Decent Option",
            comment:
              "Bowery's Zesty Caesar salad kit is a decent option for a quick meal. The flavors are okay, but I've had better Caesar salads. It's convenient when I don't have time to prepare lunch from scratch.",
          },
          {
            level: 4,
            user: "BusyProfessional",
            title: "Convenient and Tasty",
            comment:
              "Bowery's Zesty Caesar salad kit is convenient and tasty. It's perfect for busy days when I need a quick and satisfying meal. I enjoy the zesty dressing and fresh ingredients.",
          },
        ],
      },
    ],
  },
  {
    identifier: "Farmer's Selection",
    products: [
      {
        id: "BOWFSC1",
        card_shape: shape04,
        moto: "SUBTLE, SWEET, VELVETY.",
        description: "Where crispy leaves mingle and make more mmmagic.",
        img: "https://bowery.co/wp-content/uploads/2023/08/Bok-Choy-No-Parking-Lot-FRONT-3D-5-2023-4000x4000-c38c18a-e1693334140432-817x1024.png",
        label: "Bok Choy",
        type: "Farmer's Selection",
        reviews: [
          {
            level: 4,
            user: "AsianCuisineFan",
            title: "Great Addition to Stir-Fries",
            comment:
              "Bowery's Bok Choy is a great addition to stir-fries. It's fresh, crunchy, and adds a nice texture to the dish. I appreciate the quality and convenience of having it delivered.",
          },
          {
            level: 5,
            user: "VegetarianChef",
            title: "Versatile Vegetable",
            comment:
              "Bowery's Bok Choy is a versatile vegetable that I use in many of my recipes. Whether it's stir-fries, soups, or salads, it always adds a delicious crunch. I love the freshness and taste!",
          },
        ],
      },
      {
        id: "BOWFSC2",
        card_shape: shape12,
        moto: "SUBTLE, SWEET, VELVETY.",
        description: "Where crispy leaves mingle and make more mmmagic.",
        img: "https://bowery.co/wp-content/uploads/2023/03/mustard-frills-1-816x1024.png",
        label: "Mustard Frills",
        type: "Farmer's Selection",
        reviews: [
          {
            level: 5,
            user: "GourmetCook",
            title: "Unique Flavor",
            comment:
              "Bowery's Mustard Frills have a unique flavor that adds a gourmet touch to dishes. Whether it's salads, sandwiches, or garnishes, these mustard frills elevate every meal. Highly recommend!",
          },
          {
            level: 4,
            user: "FoodieExplorer",
            title: "Delicious and Fresh",
            comment:
              "Bowery's Mustard Frills are delicious and fresh, perfect for adding a burst of flavor to any dish. I love experimenting with different ways to incorporate them into my meals. Great quality!",
          },
        ],
      },
    ],
  },
];

export { ProductData };
