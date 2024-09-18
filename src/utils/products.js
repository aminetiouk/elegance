/* Import Hair Products */
/* Product 1 */
import hairProduct01_img01 from '../Images/Hair/Barts-Hair-and-Body-Mist/01.jpg';
/* Product 2 */
import hairProduct02_img01 from '../Images/Hair/Bonding-Oil/01.jpg';
/* Product 3 */
import hairProduct03_img01 from '../Images/Hair/Cactus-Fruit-3-in-1/01.jpg';
/* Product 4 */
import hairProduct04_img01 from '../Images/Hair/COLOR-WOW-Dream-Coat/01.jpg';
/* Product 5 */
import hairProduct05_img01 from '../Images/Hair/Mini-Honey-Infused-Hair-Oil/01.jpg';
/* Product 6 */
import hairProduct06_img01 from '../Images/Hair/Mini-Leave-in-Molecular/01.jpg';

/* Import Fragrance Products */
/* Product 1 */
import fragranceProduct01_img01 from '../Images/Fragrance/Black-Opium-Eau-de-Parfum/01.jpg';
/* Product 2 */
import fragranceProduct02_img01 from '../Images/Fragrance/Brazilian-Crush-Cheirosa/01.jpg';
/* Product 3 */
import fragranceProduct03_img01 from '../Images/Fragrance/Burberry-Goddess-Eau-de-Parfum/01.jpg';
/* Product 4 */
import fragranceProduct04_img01 from '../Images/Fragrance/Donna-Born-In-Roma-Eau-de-Parfum/01.jpg';
/* Product 5 */
import fragranceProduct05_img01 from '../Images/Fragrance/Miss-Dior-Eau-de-Parfum/01.jpg';
/* Product 6 */
import fragranceProduct06_img01 from '../Images/Fragrance/VANILLA-28/01.jpg';
/* Product 7 */
import fragranceProduct07_img01 from '../Images/Fragrance/Vanilla-Skin-Eau-de-Parfum/01.jpg';

/* Import Makeup Products */
/* Product 1 */
import makeupProduct01_img01 from '../Images/Makeup/Charlotte-Tilbury/01.jpg';
/* Product 2 */
import makeupProduct02_img01 from '../Images/Makeup/Dew-Blush-Liquid-Cheek-Blush/01.jpg';
/* Product 3 */
import makeupProduct03_img01 from '../Images/Makeup/DIOR-Addict-Lip-Glow-Oil/01.jpg';
/* Product 4 */
import makeupProduct04_img01 from '../Images/Makeup/Easy-Bake-and-Snatch-Pressed-Talc/01.jpg';
/* Product 5 */
import makeupProduct05_img01 from '../Images/Makeup/Easy-Bake-Loose-Baking/01.jpg';
/* Product 6 */
import makeupProduct06_img01 from '../Images/Makeup/Easy-Blur-Natural-Airbrush/01.jpg';
/* Product 7 */
import makeupProduct07_img01 from '../Images/Makeup/Easy-Blur-Silicone/01.jpg';
/* Product 8 */
import makeupProduct08_img01 from '../Images/Makeup/FAUXFILTER-Under-Eye/01.jpg';
/* Product 9 */
import makeupProduct09_img01 from '../Images/Makeup/Lip-Sleeping-Mask/01.jpg';
/* Product 10 */
import makeupProduct010_img01 from '../Images/Makeup/Milk-Makeup-Hydro-Grip/01.jpg';

export const SliderData = [
  {
    id: 1,
    title: "Bart's Hair and Body Mist",
    desc: 'A refreshing mist for hair and body with a soft fragrance.',
    cover: hairProduct01_img01,
  },
  {
    id: 2,
    title: 'Bonding Oil',
    desc:
    'This oil strengthens and smooths your hair while protecting it.',
    cover: hairProduct02_img01,
  },
  {
    id: 3,
    title: 'Black Opium Eau de Parfum',
    desc: 'A seductive and iconic fragrance with hints of vanilla.',
    cover: fragranceProduct01_img01,
  },
  {
    id: 4,
    title: 'Charlotte Tilbury Lipstick',
    desc: 'A luxury lipstick that hydrates and provides bold color.',
    cover: makeupProduct01_img01,
  },
];

export const discoutProducts = [
  {
    id: '06',
    productName: 'Mini Leave-in Molecular',
    imgUrl: [
      hairProduct06_img01,
    ],
    category: 'hair',
    price: 130,
    discount: 5,
    shortDesc:
      'A leave-in treatment that strengthens and repairs damaged hair.',
    description:
      'The Mini Leave-in Molecular treatment strengthens and repairs damaged hair at the molecular level. This leave-in formula is perfect for those looking to restore health and shine to their hair.',
    reviews: [
      {
        rating: 4.5,
        text: 'Great leave-in treatment, my hair feels stronger!',
      },
      {
        rating: 4.7,
        text: 'Love how easy this is to use and the results are amazing.',
      },
    ],
    avgRating: 4.6,
  },

  {
    id: '13',
    productName: 'Burberry Goddess Eau de Parfum',
    imgUrl: [
      fragranceProduct03_img01,
    ],
    category: 'fragrance',
    price: 220,
    discount: 30,
    shortDesc:
      'A rich and luxurious fragrance with a blend of floral and woody notes.',
    description:
      'Burberry Goddess Eau de Parfum is rich and luxurious with a perfect blend of floral and woody notes. This fragrance exudes confidence and sophistication, ideal for the modern woman.',
    reviews: [
      {
        rating: 4.9,
        text: 'Such a luxurious fragrance! Makes me feel like royalty.',
      },
      {
        rating: 4.8,
        text: 'A must-have for special occasions. Absolutely love it!',
      },
    ],
    avgRating: 4.85,
  },
  {
    id: "05",
    productName: "Mini Honey Infused Hair Oil",
    imgUrl: [
      hairProduct05_img01,
    ],
    category: "hair",
    price: 140,
    discount: 10,
    shortDesc: "A lightweight, honey-infused hair oil that nourishes and adds shine.",
    description:
      "The Mini Honey Infused Hair Oil deeply nourishes and adds shine to your hair without weighing it down. Perfect for all hair types, this oil helps restore moisture and adds a glossy finish.",
    reviews: [
      {
        rating: 4.7,
        text: "My hair has never been so soft and shiny!",
      },
      {
        rating: 4.9,
        text: "A must-have for smooth and frizz-free hair.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "04",
    productName: "COLOR WOW Dream Coat",
    imgUrl: [
      hairProduct04_img01,
    ],
    category: "hair",
    price: 200,
    discount: 30,
    shortDesc: "A dream coat that protects hair from humidity and frizz.",
    description:
      "The COLOR WOW Dream Coat protects your hair from frizz and humidity, leaving it sleek, smooth, and shiny. Perfect for those living in humid climates, this product locks in moisture and keeps your hair flawless all day.",
    reviews: [
      {
        rating: 4.9,
        text: "Best anti-frizz product ever! Works like magic.",
      },
      {
        rating: 4.8,
        text: "Love how my hair stays smooth and shiny all day.",
      },
    ],
    avgRating: 4.85,
  },
  {
    id: '03',
    productName: 'Fenty Beauty Highlighter',
    imgUrl: [
      makeupProduct03_img01,
    ],
    category: 'makeup',
    price: 90,
    discount: 20,
    shortDesc: 'A shimmering highlighter for a glowing complexion.',
    description:
      "Fenty Beauty's Highlighter gives you a glowing complexion with a long-lasting shimmer. Perfect for highlighting cheekbones, brow bones, and more, this highlighter adds the perfect touch to your makeup routine.",
    reviews: [
      {
        rating: 4.9,
        text: 'Best highlighter ever! Gives me a gorgeous glow.',
      },
      {
        rating: 4.8,
        text: 'Long-lasting and adds the perfect shimmer to my makeup.',
      },
    ],
    avgRating: 4.85,
  },
  {
    id: '01',
    productName: 'Charlotte Tilbury',
    imgUrl: [
      makeupProduct01_img01,
    ],
    category: 'makeup',
    price: 95,
    discount: 10,
    shortDesc: 'A luxurious makeup range by Charlotte Tilbury.',
    description:
      'Charlotte Tilbury offers a range of luxurious makeup products, from lipsticks to eyeshadows, designed to give you a flawless look. Their products are known for long-lasting wear and high-quality ingredients.',
    reviews: [
      {
        rating: 4.9,
        text: 'I absolutely love the quality of Charlotte Tilbury products!',
      },
      {
        rating: 4.8,
        text: 'The lipstick colors are gorgeous and so long-lasting.',
      },
    ],
    avgRating: 4.85,
  },
];

export const products = [
  {
    id: '01',
    productName: 'Charlotte Tilbury',
    imgUrl: [
      makeupProduct01_img01,
    ],
    category: 'makeup',
    price: 95,
    discount: 10,
    shortDesc: 'A luxurious makeup range by Charlotte Tilbury.',
    description:
      'Charlotte Tilbury offers a range of luxurious makeup products, from lipsticks to eyeshadows, designed to give you a flawless look. Their products are known for long-lasting wear and high-quality ingredients.',
    reviews: [
      {
        rating: 4.9,
        text: 'I absolutely love the quality of Charlotte Tilbury products!',
      },
      {
        rating: 4.8,
        text: 'The lipstick colors are gorgeous and so long-lasting.',
      },
    ],
    avgRating: 4.85,
  },
  {
    id: '02',
    productName: 'Drunk Elephant D-Bronzi Anti-Pollution',
    imgUrl: [
      makeupProduct02_img01,
    ],
    category: 'makeup',
    price: 80,
    discount: 12,
    shortDesc: 'A bronzing serum that protects your skin from pollution.',
    description:
      'Drunk Elephant D-Bronzi Anti-Pollution serum gives you a bronzed glow while protecting your skin from environmental damage. This lightweight serum can be worn alone or mixed with foundation.',
    reviews: [
      {
        rating: 4.7,
        text: 'Love the glow this gives me without feeling heavy.',
      },
      {
        rating: 4.6,
        text: 'A great bronzing serum that also protects my skin!',
      },
    ],
    avgRating: 4.65,
  },
  {
    id: '03',
    productName: 'Fenty Beauty Highlighter',
    imgUrl: [
      makeupProduct03_img01,
    ],
    category: 'makeup',
    price: 90,
    discount: 20,
    shortDesc: 'A shimmering highlighter for a glowing complexion.',
    description:
      "Fenty Beauty's Highlighter gives you a glowing complexion with a long-lasting shimmer. Perfect for highlighting cheekbones, brow bones, and more, this highlighter adds the perfect touch to your makeup routine.",
    reviews: [
      {
        rating: 4.9,
        text: 'Best highlighter ever! Gives me a gorgeous glow.',
      },
      {
        rating: 4.8,
        text: 'Long-lasting and adds the perfect shimmer to my makeup.',
      },
    ],
    avgRating: 4.85,
  },
  {
    id: '04',
    productName: 'Easy Bake and Snatch Pressed Talc',
    imgUrl: [
      makeupProduct04_img01,
    ],
    category: 'makeup',
    price: 60,
    discount: 15,
    shortDesc: 'A pressed talc for a flawless finish.',
    description:
      'Easy Bake and Snatch Pressed Talc provides a smooth, flawless finish with a lightweight formula. Perfect for setting makeup and controlling shine throughout the day.',
    reviews: [
      {
        rating: 4.7,
        text: 'Gives a smooth, flawless finish and controls shine perfectly.',
      },
      {
        rating: 4.6,
        text: 'Great pressed talc for everyday use. Love the texture!',
      },
    ],
    avgRating: 4.65,
  },
  {
    id: '05',
    productName: 'Easy Bake Loose Baking',
    imgUrl: [
      makeupProduct05_img01,
    ],
    category: 'makeup',
    price: 55,
    discount: 10,
    shortDesc: 'A loose powder for flawless baking and setting.',
    description:
      'Easy Bake Loose Baking powder is perfect for setting makeup and creating a flawless, airbrushed look. The finely milled powder ensures a smooth finish and long-lasting wear.',
    reviews: [
      {
        rating: 4.8,
        text: 'Excellent for baking and setting. Gives a flawless finish.',
      },
      {
        rating: 4.7,
        text: 'The loose powder is very lightweight and blends well.',
      },
    ],
    avgRating: 4.75,
  },
  {
    id: '06',
    productName: 'Easy Blur Natural Airbrush',
    imgUrl: [
      makeupProduct06_img01,
    ],
    category: 'makeup',
    price: 70,
    discount: 15,
    shortDesc: 'A natural airbrush primer for a smooth complexion.',
    description:
      'Easy Blur Natural Airbrush primer smooths and blurs imperfections for a flawless complexion. Ideal for prepping your skin for makeup and ensuring long-lasting results.',
    reviews: [
      {
        rating: 4.8,
        text: 'This primer creates a smooth base and blurs imperfections beautifully.',
      },
      {
        rating: 4.7,
        text: 'A great primer for a natural, airbrushed finish.',
      },
    ],
    avgRating: 4.75,
  },
  {
    id: '07',
    productName: 'Easy Blur Silicone',
    imgUrl: [
      makeupProduct07_img01,
    ],
    category: 'makeup',
    price: 65,
    discount: 12,
    shortDesc: 'A silicone-based primer for a smooth, flawless finish.',
    description:
      'Easy Blur Silicone primer provides a smooth, flawless base for makeup application. The silicone formula helps to fill in fine lines and create an even surface.',
    reviews: [
      {
        rating: 4.7,
        text: 'Smooths out my skin and makes my makeup last all day.',
      },
      {
        rating: 4.6,
        text: 'Great for a flawless finish and filling in pores.',
      },
    ],
    avgRating: 4.65,
  },
  {
    id: '08',
    productName: 'FAUXFILTER Under Eye',
    imgUrl: [
      makeupProduct08_img01,
    ],
    category: 'makeup',
    price: 50,
    discount: 18,
    shortDesc: 'A hydrating under-eye concealer for a fresh look.',
    description:
      'FAUXFILTER Under Eye concealer provides hydration and coverage for a fresh, well-rested look. Perfect for brightening the under-eye area and reducing dark circles.',
    reviews: [
      {
        rating: 4.8,
        text: 'Hydrating and provides great coverage for dark circles.',
      },
      {
        rating: 4.7,
        text: 'Love this concealer! Brightens my eyes and stays put.',
      },
    ],
    avgRating: 4.75,
  },
  {
    id: '09',
    productName: 'Lip Sleeping Mask',
    imgUrl: [
      makeupProduct09_img01,
    ],
    category: 'makeup',
    price: 40,
    discount: 20,
    shortDesc: 'A nourishing lip mask for smooth, hydrated lips.',
    description:
      'Lip Sleeping Mask deeply nourishes and hydrates your lips overnight. Wake up with soft, smooth lips ready for your day.',
    reviews: [
      {
        rating: 4.9,
        text: 'My lips have never felt so soft and hydrated!',
      },
      {
        rating: 4.8,
        text: 'Great for keeping my lips smooth and healthy overnight.',
      },
    ],
    avgRating: 4.85,
  },
  {
    id: '10',
    productName: 'Milk Makeup Hydro Grip',
    imgUrl: [
      makeupProduct010_img01,
    ],
    category: 'makeup',
    price: 75,
    discount: 15,
    shortDesc: 'A hydrating primer that grips makeup for all-day wear.',
    description:
      'Milk Makeup Hydro Grip primer provides hydration while ensuring your makeup stays in place all day. The grip technology helps to lock in your foundation and other makeup products.',
    reviews: [
      {
        rating: 4.8,
        text: 'This primer is fantastic for keeping my makeup in place all day.',
      },
      {
        rating: 4.7,
        text: 'Hydrating and grips makeup well. Great addition to my routine.',
      },
    ],
    avgRating: 4.75,
  },

  {
    id: '11',
    productName: 'Black Opium Eau de Parfum',
    imgUrl: [
      fragranceProduct01_img01,
    ],
    category: 'fragrance',
    price: 180,
    discount: 25,
    shortDesc:
      'A bold and captivating fragrance with notes of black coffee and vanilla.',
    description:
      'The Black Opium Eau de Parfum is bold, addictive, and captivating with notes of black coffee, vanilla, and white flowers. Perfect for evening wear, this fragrance leaves a lasting impression.',
    reviews: [
      {
        rating: 4.8,
        text: 'Such a captivating and unique fragrance. Love it!',
      },
      {
        rating: 4.9,
        text: 'The best fragrance I have ever used. Lasts all day!',
      },
    ],
    avgRating: 4.85,
  },
  {
    id: '12',
    productName: 'Brazilian Crush Cheirosa',
    imgUrl: [
      fragranceProduct02_img01,
    ],
    category: 'fragrance',
    price: 170,
    discount: 20,
    shortDesc: 'A warm and spicy body mist inspired by the beaches of Brazil.',
    description:
      'Brazilian Crush Cheirosa is a warm and spicy body mist that transports you to the sun-kissed beaches of Brazil. With notes of pistachio, salted caramel, and vanilla, it’s perfect for everyday use.',
    reviews: [
      {
        rating: 4.7,
        text: 'This scent is so warm and inviting, love wearing it daily!',
      },
      {
        rating: 4.6,
        text: 'One of my favorite scents, lasts long and feels tropical!',
      },
    ],
    avgRating: 4.65,
  },
  {
    id: '13',
    productName: 'Burberry Goddess Eau de Parfum',
    imgUrl: [
      fragranceProduct03_img01,
    ],
    category: 'fragrance',
    price: 220,
    discount: 30,
    shortDesc:
      'A rich and luxurious fragrance with a blend of floral and woody notes.',
    description:
      'Burberry Goddess Eau de Parfum is rich and luxurious with a perfect blend of floral and woody notes. This fragrance exudes confidence and sophistication, ideal for the modern woman.',
    reviews: [
      {
        rating: 4.9,
        text: 'Such a luxurious fragrance! Makes me feel like royalty.',
      },
      {
        rating: 4.8,
        text: 'A must-have for special occasions. Absolutely love it!',
      },
    ],
    avgRating: 4.85,
  },
  {
    id: '14',
    productName: 'Donna Born In Roma Eau de Parfum',
    imgUrl: [
      fragranceProduct04_img01,
    ],
    category: 'fragrance',
    price: 200,
    discount: 20,
    shortDesc:
      'A modern floral fragrance with a blend of rich and sensual notes.',
    description:
      'Donna Born In Roma Eau de Parfum combines modern floral elements with rich, sensual notes. A perfect fragrance for a contemporary and confident woman.',
    reviews: [
      {
        rating: 4.7,
        text: 'A beautiful blend of floral and rich notes. Truly unique!',
      },
      {
        rating: 4.6,
        text: 'I love this fragrance! It’s perfect for any occasion.',
      },
    ],
    avgRating: 4.65,
  },
  {
    id: '15',
    productName: 'Miss Dior Eau de Parfum',
    imgUrl: [
      fragranceProduct05_img01,
    ],
    category: 'fragrance',
    price: 210,
    discount: 25,
    shortDesc:
      'A classic and elegant fragrance with a blend of floral and fruity notes.',
    description:
      'Miss Dior Eau de Parfum is classic and elegant, featuring a blend of floral and fruity notes that create a timeless and sophisticated scent.',
    reviews: [
      {
        rating: 4.8,
        text: 'An elegant fragrance that’s perfect for any event.',
      },
      {
        rating: 4.7,
        text: "Love the blend of floral and fruity notes. It's wonderful!",
      },
    ],
    avgRating: 4.75,
  },
  {
    id: '16',
    productName: 'VANILLA 28',
    imgUrl: [
      fragranceProduct06_img01,
    ],
    category: 'fragrance',
    price: 190,
    discount: 15,
    shortDesc:
      'A warm and inviting vanilla fragrance with a hint of sweetness.',
    description:
      'VANILLA 28 is a warm, inviting fragrance featuring vanilla and a hint of sweetness. Perfect for those who love a cozy, sweet scent.',
    reviews: [
      {
        rating: 4.9,
        text: 'This vanilla scent is amazing! Warm and sweet, just how I like it.',
      },
      {
        rating: 4.8,
        text: 'My go-to fragrance for a comforting and sweet aroma.',
      },
    ],
    avgRating: 4.85,
  },
  {
    id: '17',
    productName: 'Vanilla Skin Eau de Parfum',
    imgUrl: [
      fragranceProduct07_img01,
    ],
    category: 'fragrance',
    price: 195,
    discount: 10,
    shortDesc: 'A soft and sensual vanilla fragrance with a touch of warmth.',
    description:
      'Vanilla Skin Eau de Parfum is a soft and sensual fragrance with warm vanilla notes. Ideal for a subtle yet inviting scent.',
    reviews: [
      {
        rating: 4.7,
        text: 'Such a gentle and warm fragrance. Perfect for daily wear.',
      },
      {
        rating: 4.6,
        text: 'Love the soft vanilla notes. It’s a very comforting scent.',
      },
    ],
    avgRating: 4.65,
  },

  {
    id: '18',
    productName: 'Barts Hair and Body Mist',
    imgUrl: [
      hairProduct01_img01,
    ],
    category: 'hair',
    price: 150,
    discount: 20,
    shortDesc:
      'A refreshing mist for both hair and body that hydrates and leaves a soft fragrance.',
    description:
      'This body and hair mist is perfect for those who love a subtle yet lasting fragrance. It hydrates your hair and skin while providing a refreshing scent. With a convenient spray bottle, it’s easy to use anywhere, anytime.',
    reviews: [
      {
        rating: 4.8,
        text: 'Great product! Leaves my hair smelling amazing all day.',
      },
      {
        rating: 4.7,
        text: 'A must-have for fresh hair on the go. Love the fragrance!',
      },
    ],
    avgRating: 4.75,
  },
  {
    id: '19',
    productName: 'Bonding Oil',
    imgUrl: [
      hairProduct02_img01,
    ],
    category: 'hair',
    price: 120,
    discount: 15,
    shortDesc:
      'Strengthen and restore your hair with this ultra-light bonding oil.',
    description:
      'This lightweight bonding oil strengthens and restores damaged hair, leaving it soft, shiny, and frizz-free. Ideal for daily use and suitable for all hair types, it’s your go-to for a silky finish.',
    reviews: [
      {
        rating: 4.6,
        text: 'My hair feels so soft and smooth after using this product.',
      },
      {
        rating: 4.9,
        text: 'Excellent oil for damaged hair. The shine is unbeatable!',
      },
    ],
    avgRating: 4.75,
  },
  {
    id: '20',
    productName: 'Cactus Fruit 3-in-1',
    imgUrl: [
      hairProduct03_img01,
    ],
    category: 'hair',
    price: 180,
    discount: 25,
    shortDesc:
      'A versatile 3-in-1 treatment that nourishes and revitalizes your hair.',
    description:
      'The Cactus Fruit 3-in-1 treatment nourishes, revitalizes, and protects your hair, giving it a healthy shine and a natural bounce. Perfect for daily use, this treatment works wonders on dry and damaged hair.',
    reviews: [
      {
        rating: 4.7,
        text: 'Love the versatility and how it makes my hair feel.',
      },
      {
        rating: 4.8,
        text: 'Amazing product! My hair has never felt this healthy.',
      },
    ],
    avgRating: 4.75,
  },
  {
    id: '21',
    productName: 'COLOR WOW Dream Coat',
    imgUrl: [
      hairProduct04_img01,
    ],
    category: 'hair',
    price: 200,
    discount: 30,
    shortDesc: 'A dream coat that protects hair from humidity and frizz.',
    description:
      'The COLOR WOW Dream Coat protects your hair from frizz and humidity, leaving it sleek, smooth, and shiny. Perfect for those living in humid climates, this product locks in moisture and keeps your hair flawless all day.',
    reviews: [
      {
        rating: 4.9,
        text: 'Best anti-frizz product ever! Works like magic.',
      },
      {
        rating: 4.8,
        text: 'Love how my hair stays smooth and shiny all day.',
      },
    ],
    avgRating: 4.85,
  },
  {
    id: '22',
    productName: 'Mini Honey Infused Hair Oil',
    imgUrl: [
      hairProduct05_img01,
    ],
    category: 'hair',
    price: 140,
    discount: 10,
    shortDesc:
      'A lightweight, honey-infused hair oil that nourishes and adds shine.',
    description:
      'The Mini Honey Infused Hair Oil deeply nourishes and adds shine to your hair without weighing it down. Perfect for all hair types, this oil helps restore moisture and adds a glossy finish.',
    reviews: [
      {
        rating: 4.7,
        text: 'My hair has never been so soft and shiny!',
      },
      {
        rating: 4.9,
        text: 'A must-have for smooth and frizz-free hair.',
      },
    ],
    avgRating: 4.8,
  },
  {
    id: '23',
    productName: 'Mini Leave-in Molecular',
    imgUrl: [
      hairProduct06_img01,
    ],
    category: 'hair',
    price: 130,
    discount: 5,
    shortDesc:
      'A leave-in treatment that strengthens and repairs damaged hair.',
    description:
      'The Mini Leave-in Molecular treatment strengthens and repairs damaged hair at the molecular level. This leave-in formula is perfect for those looking to restore health and shine to their hair.',
    reviews: [
      {
        rating: 4.5,
        text: 'Great leave-in treatment, my hair feels stronger!',
      },
      {
        rating: 4.7,
        text: 'Love how easy this is to use and the results are amazing.',
      },
    ],
    avgRating: 4.6,
  },
];
