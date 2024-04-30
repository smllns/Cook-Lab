// INFORMATION DOCUMENT FOR STORING TEXTS AND THEIR SETTINGS

import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export const recipeText = {
  heading: 'Simple and Tasty Recipes',
  headingSize: { base: 'xl', sm: 'xl', md: 'xl', lg: '2xl' },
  fontSize: { base: '14px', sm: '14px', md: '14px', lg: '16px' },
  text: 'Explore a variety of easy and flavorful recipes to elevate your culinary experience. Find inspiration for every mealtime!',
};

export const chefText = {
  heading: 'Everyone can be a chef in their own kitchen',
  headingSize: { base: 'xl', sm: 'xl', md: 'xl', lg: '2xl' },
  fontSize: { base: '14px', sm: '14px', md: '16px', lg: '16px' },
  marB: { base: '12px', sm: '12px', md: '20px', lg: '100px', xl: '24px' },
  text: "Discover the ultimate roadmap to becoming a professional chef with our comprehensive guide! Whether you're an aspiring chef or a seasoned cook, this guide is your key to unleashing your culinary potential!",
};

export const instText = {
  heading: 'Check out #bestrecipes on Instagram',
  headingSize: { base: 'xl', sm: 'xl', md: 'xl', lg: '2xl' },
  fontSize: { base: '14px', sm: '14px', md: '16px', lg: '16px' },
  text: 'Embark on a journey of culinary inspiration as you explore these captivating food Instagram posts. Share the joy of cooking and discovery with others, one delicious post at a time.',
};

export const recipesPopularText = {
  heading: 'Try this delicious recipes to make your day',
  headingSize: { base: 'xl', sm: 'xl', md: 'xl', lg: 'xl' },
  fontSize: { base: '14px', sm: '14px', md: '14px', lg: '16px' },
  minW: { md: '285px' },
  marB: { base: '24px', sm: '24px', md: '0' },
  maxW: '620px',
  maxWi: '507px',
  mr: { base: '', md: '20px' },
  text: 'Explore popular recipes designed to ignite your passion for cooking. Elevate your culinary skills with tried-and-true recipes that promise to impress every palate.',
};

export const newsletterText = {
  heading: 'Deliciousness to your inbox',
  headingSize: { base: 'xl', sm: 'xl', md: 'xl', lg: '2xl' },
  fontSize: { base: '14px', sm: '14px', md: '14px', lg: '16px' },
  minW: { lg: '610px' },
  zIndex: '2',
  text: 'Subscribe now for the latest recipes, cooking tips, and food inspiration, tailored just for you.',
};

export const favoritesText = {
  heading: 'Favorite Recipes ',
  headingSize: { base: 'xl', sm: 'xl', md: 'xl', lg: '2xl' },
  fontSize: { base: '14px', sm: '14px', md: '14px', lg: '16px' },
  text: 'Your favorite recipes right here 🩵',
};
export const recipesSmallText = {
  heading: 'Check out this delicious recipes',
  headingSize: { base: 'xl', sm: 'xl', md: 'xl', lg: 'xl' },
};

export const headingTexts = {
  Breakfast:
    'Start your day off right with our collection of delicious breakfast recipes! From fluffy pancakes to hearty omelettes, we have everything you need to fuel your morning.',
  Vegan:
    'Embark on a journey of plant-based culinary delights with our extensive selection of vegan dishes! From vibrant salads to hearty vegan mains, discover the beauty and diversity of vegan cuisine.',
  Main: 'Elevate your dining experience with our mouth-watering main course recipes! Whether you’re craving a succulent steak, a flavorful curry, or a comforting pasta dish, we have a recipe for every occasion.',
  Dessert:
    'Satisfy your sweet tooth and indulge in our decadent collection of desserts! From rich chocolate cakes to creamy cheesecakes, treat yourself to a delightful dessert experience that will leave you craving for more.',
  Snack:
    'Treat yourself to quick and tasty snack ideas perfect for any occasion! From crunchy chips to savory dips, our selection of snacks will keep your cravings at bay and your taste buds satisfied.',
  Drink:
    'Quench your thirst and stay refreshed with our collection of refreshing drinks! From fruity smoothies to classic cocktails, discover a wide range of beverages that will keep you cool and hydrated.',
};

export const loginText = {
  heading: 'Log in to your account',
  headingSize: { base: 'xl', sm: 'xl', md: 'xl', lg: 'xl' },
  fontSize: { base: '16px', sm: '16px', md: '16px', lg: '16px' },
  marB: '12px',
  text: 'Welcome back! Please enter your details.',
};
export const forgotText = {
  heading: 'Forgot you password?',
  headingSize: { base: 'xl', sm: 'xl', md: 'xl', lg: 'xl' },
  fontSize: { base: '16px', sm: '16px', md: '16px', lg: '16px' },
  marB: '12px',
  text: 'Please enter your details.',
};
export const signUpText = {
  heading: 'Create Account',
  headingSize: { base: 'xl', sm: 'xl', md: 'xl', lg: 'xl' },
  fontSize: { base: '16px', sm: '16px', md: '16px', lg: '16px' },
  marB: '12px',
  text: 'Hello! Please enter your details.',
};

export const aboutUsText = {
  headingOne: 'Why did I choose to make a recipe app?',
  headingTwo: 'What technologies and tools did I use to build the project?',
  headingThree:
    'How do I envision users interacting with and benefiting from the app?',
  textOne:
    ' I decided to create a recipe app because it provided an excellent platform to showcase a wide range of my skills. From creating a visually appealing and responsive interface to seamlessly integrating APIs and databases, and even implementing user authentication, the recipe app offered a perfect canvas to demonstrate my proficiency in various aspects of web development. Moreover, with the growing interest in culinary exploration and the abundance of available recipes, I saw an opportunity to develop a valuable resource that not only serves as a source of inspiration for cooking enthusiasts but also highlights my capabilities as a developer.',
  textTwo:
    'I employed an array of powerful technologies and tools to craft this project. Leveraging the flexibility and efficiency of React alongside custom CSS, I ensured a seamless and visually appealing user experience. Integrating the Chakra UI component library provided a solid foundation for building responsive and accessible interfaces. Firebase database facilitated seamless data management, while the Spoonacular API empowered the app with a vast repository of culinary knowledge and inspiration.',
  textThree:
    'Users will interact with the recipe app by discovering a wide range of culinary creations, exploring detailed recipes, and engaging with various cooking inspirations. They will benefit from the app by gaining access to a diverse collection of recipes, ranging from everyday meals to special occasions. With features like categories, ingredient lists, step-by-step instructions, and nutritional information, users can confidently experiment with new dishes and elevate their cooking skills. Additionally, the app allows users to save their favorite recipes so they can always prepare their most favorite meals. Overall, the recipe app serves as a comprehensive platform for culinary exploration, education, and enjoyment.',
};

export const chefGuideText = {
  headingOne: 'How did you start out in the food industry?',
  headingTwo: 'What do you like most about your job?',
  headingThree: 'Do you cook at home on your days off?',
  headingFour:
    'What would your advice be to young people looking to get their foot in the door?',
  headingFive:
    'What is the biggest misconception that people have about being a professional chef?',
  textOne: `My journey in the food industry began with a passion for cooking. I started by gaining hands-on experience in kitchens, attending culinary school, and working under talented chefs. I've since worked in various roles, continuously learning and adapting to new trends and techniques. Ultimately, my journey has been driven by a love for creating memorable dining experiences.`,
  textTwo: `What I love most about my job as a chef is the opportunity to be creative and innovative every day. I enjoy the challenge of experimenting with different ingredients, flavors, and cooking techniques to create dishes that delight and inspire my customers. Additionally, I appreciate the satisfaction of seeing people enjoy the food I've prepared and the sense of community that comes from sharing meals together. Overall, the ability to bring joy and satisfaction to others through food is incredibly rewarding.`,
  textThree: `Yes, I do cook at home on my days off. Cooking is not just my profession but also my passion, so I enjoy experimenting with new recipes and techniques in my own kitchen. It's a relaxing and enjoyable way for me to unwind and explore different flavors and cuisines in a more casual setting. Plus, cooking at home allows me to spend quality time with family and friends while sharing delicious meals together.`,
  textFour: `My advice to young people looking to get their foot in the door of the food industry would be to gain as much hands-on experience as possible. This could involve working in various roles within the industry, such as internships, apprenticeships, or entry-level positions in restaurants, catering companies, or food businesses. Additionally, pursuing formal culinary education or training programs can provide valuable skills and knowledge. Networking with professionals in the industry, staying up-to-date with current food trends, and showcasing creativity and passion for food through personal projects or social media can also help make a positive impression and open doors to opportunities. Ultimately, perseverance, dedication, and a willingness to learn and grow are essential qualities for success in the culinary world.`,
  textFive: `The biggest misconception about being a professional chef is that it's all about glamour and creativity. While those aspects are certainly part of the job, the reality is that being a chef requires immense dedication, long hours, and a relentless focus on consistency and quality. It's a demanding profession that requires not only culinary skill but also strong leadership, organization, and adaptability.`,
  citation: `"Perseverance, dedication, and a willingness to learn and grow are essential qualities for success in the culinary world."`,
};

export const socialMediaLinks = [
  {
    href: 'https://www.linkedin.com/in/smllns/',
    icon: FaLinkedin,
    mb: '48px',
  },
  {
    href: 'https://github.com/smllns',
    icon: FaGithub,
    pb: '48px',
  },
  {
    href: 'https://www.instagram.com/smllns/',
    icon: FaInstagram,
  },
];

export const aboutUsHeaderText = {
  heading: 'About Us',
  name: 'Mariia Smolianskaia 👨🏻‍🍳',
  date: 'April 2024',
  text: 'CookLab: cooking recipes pet-project',
};

export const chefGuideHeaderText = {
  heading: 'Full Guide to Becoming a Professional Chef',
  name: 'ChatGPT 👨🏻‍🍳',
  date: '11 March 2024',
  text: 'Unlock the Secrets: A Comprehensive Guide to Mastering the Art of Professional Cooking',
};
