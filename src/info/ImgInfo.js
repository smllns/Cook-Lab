// INFORMATION DOCUMENT FOR STORING IMAGES AND THEIR SETTINGS

import pic1 from '../media/profile1.jpg';
import pic2 from '../media/profile2.jpg';
import pic3 from '../media/profile3.jpg';
import pic4 from '../media/profile4.jpg';
import pic5 from '../media/profile5.jpg';
import pic6 from '../media/profile6.jpg';

import foodPic1 from '../media/foodPic1.jpg';
import foodPic2 from '../media/foodPic2.jpg';
import foodPic3 from '../media/foodPic3.jpg';
import foodPic4 from '../media/foodPic4.jpg';
import foodPic5 from '../media/foodPic5.jpg';
import foodPic6 from '../media/foodPic6.jpg';

import tomato from '../media/tomato.png';
import meat from '../media/meat.png';
import onion from '../media/onion.png';
import salad from '../media/salad.png';

import vegetables from '../media/vegetables.png';
import saladBowl from '../media/saladBowl.png';
import rucola from '../media/rucola.png';

export const cardsData = [
  {
    background:
      'linear-gradient(180deg, rgba(112, 130, 70, 0) 0%, rgba(112, 130, 70, 0.1) 100%)',
    textShadow: '10px 15px 21px rgba(0, 0, 0, 0.25)',
    emoji: '🍙',
    heading: 'Breakfast',
  },
  {
    background:
      'linear-gradient(180deg, rgba(108, 198, 63, 0) 0%, rgba(108, 198, 63, 0.1) 100%)',
    textShadow: '10px 15px 21px rgba(50, 139, 50, 0.436)',
    emoji: '🥬',
    heading: 'Vegan',
  },
  {
    background:
      'linear-gradient(180deg, rgba(204, 38, 27, 0) 0%, rgba(204, 38, 27, 0.1) 100%)',
    textShadow: '10px 15px 21px rgba(204, 39, 27, 0.361)',
    emoji: '🥩',
    heading: 'Main',
  },
  {
    background:
      'linear-gradient(180deg, rgba(240, 158, 0, 0) 0%, rgba(240, 158, 0, 0.1) 100%)',
    textShadow: '10px 15px 21px rgba(240, 156, 0, 0.438)',
    emoji: '🍰',
    heading: 'Dessert',
  },
  {
    background:
      'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%)',
    textShadow: '10px 15px 21px rgba(0, 0, 0, 0.28)',
    emoji: '🥪',
    heading: 'Snack',
  },
  {
    background:
      'linear-gradient(180deg, rgba(240, 158, 0, 0) 0%, rgba(139, 69, 19, 0.1) 100%)',

    textShadow: '10px 15px 21px rgba(139, 69, 19, 0.3)',
    color: '#fff',
    emoji: '🧋',
    heading: 'Drink',
  },
];

export const instData = [
  {
    imgSrc: pic1,
    profileName: 'Sophia Anderson',
    place: 'Moscow, Russia',
    foodPic: foodPic1,
    username: 'TastyTreatEater',
    postDate: 'September 19',
    foodDescription:
      'Colorful and flavorful poke bowl, consisting of diced raw fish, rice, and various toppings.',
  },
  {
    imgSrc: pic2,
    profileName: 'John Smith',
    place: 'Paris, France',
    foodPic: foodPic2,
    username: 'FlavorFanatic',
    postDate: 'May 12',
    foodDescription:
      'I enjoy cooking because it allows me to express creativity, share delicious meals with others, and find joy in the process!',
  },
  {
    imgSrc: pic3,
    profileName: 'Olivia Johnson',
    place: 'Tokyo, Japan',
    foodPic: foodPic3,
    username: 'GourmetGuru',
    postDate: 'December 24',
    foodDescription:
      'There is something truly special about the simplicity and comfort of starting the day with a delicious meal.',
  },
  {
    imgSrc: pic4,
    profileName: 'Mick Johnson',
    place: 'Tbilisi, Georgia',
    foodPic: foodPic4,
    username: 'YummyYumChum',
    postDate: 'April 7',
    foodDescription:
      'Italian cuisine, renowned worldwide for its simplicity and rich flavors, celebrates fresh ingredients and traditional cooking methods.',
  },
  {
    imgSrc: pic5,
    profileName: 'Emily Brown',
    place: 'Cairo, Egypt',
    foodPic: foodPic5,
    username: 'CulinaryConnoisseur',
    postDate: 'October 22',
    foodDescription:
      'Pizza lovers rejoice in the cheesy, saucy delight of each slice, savoring the perfect blend of flavors and textures that only pizza can offer.',
  },
  {
    imgSrc: pic6,
    profileName: 'David Williams',
    place: 'Sofia, Bulgaria',
    foodPic: foodPic6,
    username: 'DeliciousDelightDevotee',
    postDate: 'March 9',
    foodDescription: 'The easiest breakfast ever!!! Love it so much!',
  },
];

export const imagesData = [
  {
    src: tomato,
    alt: 'tomato picture',
    dimensions: {
      base: {
        width: '50px',
        height: '50px',
        top: '10px',
        right: '240px',
      },
      sm: {
        width: '50px',
        height: '50px',
        top: '10px',
        right: '400px',
      },
      md: {
        width: '50px',
        height: '50px',
        top: '10px',
        right: '800px',
      },
      lg: {
        width: '70px',
        height: '70px',
        top: '450px',
        right: '630px',
      },
    },
  },
  {
    src: meat,
    alt: 'meat picture',
    dimensions: {
      base: { width: '80px', height: '80px', top: '190px', right: '280px' },
      sm: { width: '80px', height: '80px', top: '170px', right: '320px' },
      md: { width: '80px', height: '80px', top: '120px', right: '630px' },
      lg: { width: '100px', height: '100px', top: '100px', right: '500px' },
    },
  },
  {
    src: onion,
    alt: 'onion picture',
    dimensions: {
      base: { width: '50px', height: '50px', top: '45px', right: '40px' },
      sm: { width: '50px', height: '50px', top: '50px', right: '260px' },
      md: { width: '50px', height: '50px', top: '50px', right: '470px' },
      lg: { width: '70px', height: '70px', top: '130px', right: '170px' },
    },
  },
  {
    src: salad,
    alt: 'salad picture',
    dimensions: {
      base: { width: '60px', height: '60px', top: '190px', right: '90px' },
      sm: { width: '60px', height: '60px', top: '40px', right: '10px' },
      md: { width: '60px', height: '60px', top: '210px', right: '400px' },
      lg: { width: '100px', height: '100px', top: '160px', right: '20px' },
    },
  },
];

export const newsletterImagesData = [
  {
    src: vegetables,
    alt: 'vegetables picture',
    dimensions: {
      base: {
        width: '230px',
        height: '220px',
        top: '-12px',
        left: '-32px',
        rotate: '137deg',
      },
      sm: {
        width: '230px',
        height: '220px',
        top: '-12px',
        left: '-32px',
        rotate: '137deg',
      },
      md: {
        width: '310px',
        height: '300px',
        top: '116px',
        left: '0px',
        rotate: '0deg',
      },
      lg: {
        width: '410px',
        height: '400px',
        top: '25px',
        left: '0px',
        rotate: '0deg',
      },
    },
  },
  {
    src: saladBowl,
    alt: 'saladBowl picture',
    dimensions: {
      base: {
        width: '286px',
        height: '286px',
        top: '230px',
        right: '-50px',
        rotate: '0deg',
      },
      sm: {
        width: '286px',
        height: '286px',
        top: '218px',
        right: '-51px',
        rotate: '0deg',
      },
      md: {
        width: '256px',
        height: '256px',
        top: '250px',
        right: '-90px',
        rotate: '0deg',
      },
      lg: {
        width: '356px',
        height: '356px',
        top: '220px',
        right: '-110px',
        rotate: '0deg',
      },
    },
  },
  {
    src: rucola,
    alt: 'rucola picture',
    dimensions: {
      base: {
        width: '53px',
        height: '73px',
        top: '340px',
        left: '20px',
        rotate: '0deg',
      },
      sm: {
        width: '53px',
        height: '73px',
        top: '274px',
        left: '70px',
        rotate: '0deg',
      },
      md: {
        width: '57px',
        height: '81px',
        top: '208px',
        right: '245px',
        rotate: '0deg',
      },
      lg: {
        width: '67px',
        height: '91px',
        top: '210px',
        right: '270px',
        rotate: '0deg',
      },
    },
  },
];
