"use strict";

var bcrypt = require('bcryptjs');

var data = {
  users: [{
    name: "manpreet singh",
    email: "admin@example.com",
    password: bcrypt.hashSync('red321!#'),
    isAdmin: true
  }, {
    name: "ompreet singh",
    email: "user@example.com",
    password: bcrypt.hashSync('red321!#'),
    isAdmin: false
  }],
  products: [{
    "url": "https://raw.githubusercontent.com/mannywebdev/perfumesite/main/PerfumePics/giorgio%20armani%20code%20absolu.jpg",
    "brand": "Giorgio Armani",
    "title": "Armani Code Absolu Giorgio Armani for men",
    "description": "Discover the daringly seductive new fragrance, Armani Code Absolu. The Tonka Bean base, iconic to Armani Code, is enhanced by sensual Rum Accord and Vanilla notes to create an unforgettable warm and spicy experience. Code Absolu evokes the bold, masculine confidence in every man to seize any moment.",
    "origprice": 3400,
    "decantprice": {
      "2ml": 210,
      "5ml": 370,
      "10ml": 650,
      "30ml": 1700,
      "Retail": 6050
    },
    "gender": "men",
    "notes": {
      "Topnotes": ["Apple", "Green Mandarin"],
      "Middlenotes": ["Orange Blossom", "Nutmeg", "Carrot Seeds"],
      "Basenotes": ["Suede", "Tonka Bean", "Vanilla"]
    },
    "launch": 2019,
    "concentration": "Eau de Parfum",
    "rating": 0,
    "numReviews": 0,
    "stockcount": 10
  }, {
    "url": "https://raw.githubusercontent.com/mannywebdev/perfumesite/main/PerfumePics/ajmal%20wisal%20dahab.jpg",
    "brand": "Ajmal",
    "title": "Wisal Dhahab Ajmal for women and men",
    "description": "Wisal and Wisal Dahab by Ajmal Eau de Parfum 50 ml new in sealed box USA seller. ... Wisal is an inviting fragrance that features fresh modern notes, blended for mature and dynamic women who are trendy yet traditional at heart.",
    "origprice": 3400,
    "decantprice": {
      "2ml": 150,
      "5ml": 250,
      "10ml": 490,
      "30ml": 1350,
      "Retail": 2350
    },
    "gender": "unisex",
    "notes": {
      "Topnotes": ["Apple", "Pear", "Peach"],
      "Middlenotes": ["Rose", "Jasmine", "Geranium"],
      "Basenotes": ["Sandalwood", "Patchouli", "Musk"]
    },
    "launch": 2015,
    "concentration": "Eau de Parfum",
    "rating": 0,
    "numReviews": 0,
    "stockcount": 0
  }, {
    "url": "https://raw.githubusercontent.com/mannywebdev/perfumesite/main/PerfumePics/versace%20eau%20fraiche.jpg",
    "brand": "Versace",
    "title": "Versace Man Eau Fraiche Versace for men",
    "description": "The scent is a fresh and aquatic version of the original, therefore making it subtle and fresh as well as invigorating. Featuring notes of white lemon, rosewood, carambola, tarragon, cedar leaves, clary sage, musk, amber and sycamore wood, this fragrance flaunts a Mediterranean quality with some woody notes.",
    "origprice": 3400,
    "decantprice": {
      "2ml": 120,
      "5ml": 230,
      "10ml": 380,
      "30ml": 1050,
      "Retail": 3150
    },
    "gender": "men",
    "notes": {
      "Topnotes": ["Bergamot", "Lemon", "Carambola"],
      "Middlenotes": ["Tarragon", "Cedar", "Pepper"],
      "Basenotes": ["Musk", "Woodsy Notes", "Saffron"]
    },
    "launch": 2006,
    "concentration": "Eau de toilette",
    "rating": 0,
    "numReviews": 0,
    "stockcount": 10
  }, {
    "url": "https://raw.githubusercontent.com/mannywebdev/perfumesite/main/PerfumePics/ormonde%20jayne%20man.jpg",
    "brand": "Ormonde Jayne",
    "title": "Ormonde Man Ormonde Jayne for men",
    "description": "Ormonde Man is a beautiful woody, peppery scent. It starts out strong and then in the dry down it becomes a woody scent rounded off by cardamom. It is smooth and complex.",
    "origprice": 3400,
    "decantprice": {
      "2ml": 230,
      "5ml": 430,
      "10ml": 770,
      "30ml": 2300,
      "Retail": 9500
    },
    "gender": "men",
    "notes": {
      "Topnotes": ["Pink Pepper", "Cardamom", "Bergamot"],
      "Middlenotes": ["Agarwood", "Black Hemlock"],
      "Basenotes": ["Cedar", "Sandalwood", "Vetiver"]
    },
    "launch": 2004,
    "concentration": "Eau de Parfum",
    "rating": 0,
    "numReviews": 0,
    "stockcount": 10
  }, {
    "url": "https://raw.githubusercontent.com/mannywebdev/perfumesite/main/PerfumePics/ormonde%20jayne%20tolu.jpg",
    "brand": "Ormonde Jayne",
    "title": "Tolu Ormonde Jayne for women and men",
    "description": "Tolu is an exotic fragrance based on Peruvian tolu resin, from a precious variety of tree in South America. Laced with frankincense and amber and a heady mix of floral and herbal top notes, Tolu takes the wearer on a sensual oriental journey.",
    "origprice": 3400,
    "decantprice": {
      "2ml": 180,
      "5ml": 380,
      "10ml": 670,
      "30ml": 1900,
      "Retail": 9500
    },
    "gender": "unisex",
    "notes": {
      "Topnotes": ["Juniper", "Orange Blossom", "Clary Sage"],
      "Middlenotes": ["Orchid", "Rose", "Lily-of-the-valley"],
      "Basenotes": ["Tolu Balsam", "Tonka Bean", "Amber"]
    },
    "launch": 2002,
    "concentration": "Eau de Parfum",
    "rating": 0,
    "numReviews": 0,
    "stockcount": 10
  }, {
    "url": "https://raw.githubusercontent.com/mannywebdev/perfumesite/main/PerfumePics/prada%20l%20homme%20intense.jpg",
    "brand": "Prada",
    "title": "Prada L'Homme Intense Prada for men",
    "description": "L'Homme Prada reveals a new intense facet, breaking the traditional codes of perfumery. L'Homme Prada Intense is a modern Ambery Woody Oriental which unexpectedly opens on a vibrant Patchouli resonating with the heart of its feminine counterpart. Tonka beans and Sandalwood confer smoothness to its Amber accord.",
    "origprice": 3400,
    "decantprice": {
      "2ml": 180,
      "5ml": 380,
      "10ml": 670,
      "30ml": 1900,
      "Retail": 3250
    },
    "gender": "men",
    "notes": {
      "Topnotes": ["Iris"],
      "Middlenotes": ["Patchouli", "Amber"],
      "Basenotes": ["Leather", "Tonka Bean", "Sandalwood"]
    },
    "launch": 2017,
    "concentration": "Eau de Parfum",
    "rating": 0,
    "numReviews": 0,
    "stockcount": 10
  }, {
    "url": "https://raw.githubusercontent.com/mannywebdev/perfumesite/main/PerfumePics/versace%20pour%20homme.jpeg",
    "brand": "Versace",
    "title": "Versace Pour Homme Versace for men",
    "description": "The heart of Versace Pour Homme is characterized by the mineral-floral aroma, almost tactile, of Clary Sage and Blue Hyacinth. Amber and Musk deliver deep and sensual base notes, the essence of pure masculinity.",
    "origprice": 3400,
    "decantprice": {
      "2ml": 180,
      "5ml": 380,
      "10ml": 670,
      "30ml": 1900,
      "Retail": 2720
    },
    "gender": "men",
    "notes": {
      "Topnotes": ["Lemon", "Neroli", "Bergamot"],
      "Middlenotes": ["Hyacinth", "Clary Sage", "Cedar"],
      "Basenotes": ["Tonka Bean", "Musk", "Amber"]
    },
    "launch": 2008,
    "concentration": "Eau de toilette",
    "rating": 0,
    "numReviews": 0,
    "stockcount": 10
  }, {
    "url": "https://raw.githubusercontent.com/mannywebdev/perfumesite/main/PerfumePics/bentley%20intense.jpg",
    "brand": "Bentley",
    "title": "Bentley for Men Intense Bentley for men",
    "description": "Bentley for Men Intense by Bentley is a Oriental Spicy fragrance for men. ... The nose behind this fragrance is Nathalie Lorson. Top notes are bergamot, black pepper and bay leaf; middle notes are clary sage, african geranium, cinnamon, rum and woody notes; base notes are leather, benzoin, incense, cedar and patchouli.",
    "origprice": 3400,
    "decantprice": {
      "2ml": 180,
      "5ml": 380,
      "10ml": 670,
      "30ml": 1900,
      "Retail": 2720
    },
    "gender": "men",
    "notes": {
      "Topnotes": ["Bergamot", "Black Pepper", "Bay Leaf"],
      "Middlenotes": ["Rum", "Woody Notes", "Cinnamon"],
      "Basenotes": ["Incense", "Leather", "Benzoin"]
    },
    "launch": 2013,
    "concentration": "Eau de Parfum",
    "rating": 0,
    "numReviews": 0,
    "stockcount": 10
  }, {
    "url": "https://raw.githubusercontent.com/mannywebdev/perfumesite/main/PerfumePics/bvlgari%20aqva%20atlantiqve.jpg",
    "brand": "Bvlgari",
    "title": "Aqva Pour Homme Atlantiqve Bvlgari for men",
    "description": "Aqva Pour Homme Atlantiqve is a refreshing and energetic aquatic fragrance inspired by the strength of the Atlantic Ocean. Jacques Cavallier developed the sea amber note which is supposed to evoke the depths of the ocean, located in the heart of the composition.",
    "origprice": 3400,
    "decantprice": {
      "2ml": 180,
      "5ml": 380,
      "10ml": 670,
      "30ml": 1900,
      "Retail": 2720
    },
    "gender": "men",
    "notes": {
      "Topnotes": ["Water Notes", "Calabrian Bergamot", "Sicilian Lemon"],
      "Middlenotes": ["Sea Notes", "Ambergris", "Apple"],
      "Basenotes": ["Benzoin", "Vetiver", "Sandalwood"]
    },
    "launch": 2017,
    "concentration": "Eau de toilette",
    "rating": 0,
    "numReviews": 0,
    "stockcount": 10
  }, {
    "url": "https://raw.githubusercontent.com/mannywebdev/perfumesite/main/PerfumePics/prada%20l'homme.jpg",
    "brand": "Prada",
    "title": "Prada L'Homme Colonge Prada for men",
    "description": "L'homme Prada Cologne by Prada, Described as clean and sweet, L'homme Prada is a fragrance fit for the office or for a night on the town. With top notes of citrusy neroli and spicy pepper, this fragrance develops a clean, powdery tone with middle note of iris, amber, violet and geranium.",
    "origprice": 3400,
    "decantprice": {
      "2ml": 180,
      "5ml": 380,
      "10ml": 670,
      "30ml": 1900,
      "Retail": 2720
    },
    "gender": "men",
    "notes": {
      "Topnotes": ["Neroli", "Black Pepper", "Cardamon"],
      "Middlenotes": ["Iris", "Violet", "Geranium"],
      "Basenotes": ["Amber", "Cedar", "Patchouli"]
    },
    "launch": 2016,
    "concentration": " Eau de Parfum",
    "rating": 0,
    "numReviews": 0,
    "stockcount": 10
  }, {
    "url": "https://raw.githubusercontent.com/mannywebdev/perfumesite/main/PerfumePics/prada%20amber%20intense.jpg",
    "brand": "Prada",
    "title": "Prada Amber Pour Homme Intense Prada for men",
    "description": "Prada's characteristic fusion of classic and contemporary style comes together in this uncompromising addition to their family of amber fragrances. Peeling back the layers of leather and barbershop soap present in the original Prada Amber, a pared-back roster of exceptional-quality raw ingredients brings forward sensual intonations of patchouli and rich, warm vanilla. The base consists of spicy myrrh and a citrus twist of bergamot.",
    "origprice": 3400,
    "decantprice": {
      "2ml": 180,
      "5ml": 380,
      "10ml": 670,
      "30ml": 1900,
      "Retail": 2720
    },
    "gender": "men",
    "notes": {
      "Topnotes": ["Patchouli", "Amber", "Vanille"],
      "Middlenotes": ["Musk", "Tonka Bean", "Orange Blossom"],
      "Basenotes": ["Myrrh", "Saffron", "Leather"]
    },
    "launch": 2006,
    "concentration": "Eau de Parfum",
    "rating": 0,
    "numReviews": 0,
    "stockcount": 10
  }, {
    "url": "https://raw.githubusercontent.com/mannywebdev/perfumesite/main/PerfumePics/prada%20amber%20pour%20homme.jpg",
    "brand": "Prada",
    "title": "Prada Amber Pour Homme (Prada Man) Prada for men",
    "description": "With top notes that evoke a natural, classic cologne - a rich blend of fresh mandarin, bergamot, and cardamom that melds into the sensual mid notes of patchouli, tonka bean, and vanilla; and finishes with the clean, leathery notes of vetiver, neroli, orange blossom, saffron, and suede, Amber Pour Homme is a fragrance .",
    "origprice": 3400,
    "decantprice": {
      "2ml": 180,
      "5ml": 380,
      "10ml": 670,
      "30ml": 1900,
      "Retail": 2720
    },
    "gender": "men",
    "notes": {
      "Topnotes": ["Neroli", "Cardamom", "Bergamot"],
      "Middlenotes": ["Myrrh", "Musk", "Orange Blossom"],
      "Basenotes": ["Saffron", "Labdanum", "Leather"]
    },
    "launch": 2006,
    "concentration": "Eau de toilette",
    "rating": 0,
    "numReviews": 0,
    "stockcount": 10
  }]
};
module.exports = data;