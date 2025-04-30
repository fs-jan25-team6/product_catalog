import React from 'react';
import './HomePage.scss';
import { NavLink } from 'react-router-dom';
import { ResponsiveImage } from '../../atoms/ResponsiveImage/ResponsiveImage';
import { Icon } from '../../../assets/icons/Icon/Icon';
import { ArrowIcon } from '../../../assets/icons/arrow-icon';

const newModels = [
  {
    "id": "apple-iphone-11-128gb-black",
    "namespaceId": "apple-iphone-11",
    "name": "Apple iPhone 11 128GB Black",
    "capacityAvailable": ["64GB", "128GB", "256GB"],
    "capacity": "128GB",
    "priceRegular": 1100,
    "priceDiscount": 1050,
    "colorsAvailable": ["black", "green", "yellow", "white", "purple", "red"],
    "color": "black",
    "images": [
      "img/phones/apple-iphone-11/black/00.webp",
      "img/phones/apple-iphone-11/black/01.webp",
      "img/phones/apple-iphone-11/black/02.webp",
      "img/phones/apple-iphone-11/black/03.webp",
      "img/phones/apple-iphone-11/black/04.webp"
    ],
    "description": [
      {
        "title": "And then there was Pro",
        "text": [
          "A transformative triple-camera system that adds tons of capability without complexity.",
          "An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro."
        ]
      },
      {
        "title": "Camera",
        "text": [
          "Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it."
        ]
      },
      {
        "title": "Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.",
        "text": [
          "iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with."
        ]
      }
    ],
    "screen": "6.1' IPS",
    "resolution": "1792x828",
    "processor": "Apple A13 Bionic",
    "ram": "4GB",
    "camera": "12 Mp + 12 Mp + 12MP",
    "zoom": "Digital, 5x",
    "cell": ["GPRS", "EDGE", "WCDMA", "UMTS", "HSPA", "LTE"]
  },

  {
    "id": "apple-iphone-11-128gb-green",
    "namespaceId": "apple-iphone-11",
    "name": "Apple iPhone 11 128GB Green",
    "capacityAvailable": ["64GB", "128GB", "256GB"],
    "capacity": "128GB",
    "priceRegular": 1100,
    "priceDiscount": 1050,
    "colorsAvailable": ["black", "green", "yellow", "white", "purple", "red"],
    "color": "green",
    "images": [
      "img/phones/apple-iphone-11/green/00.webp",
      "img/phones/apple-iphone-11/green/01.webp",
      "img/phones/apple-iphone-11/green/02.webp",
      "img/phones/apple-iphone-11/green/03.webp",
      "img/phones/apple-iphone-11/green/04.webp"
    ],
    "description": [
      {
        "title": "And then there was Pro",
        "text": [
          "A transformative triple-camera system that adds tons of capability without complexity.",
          "An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro."
        ]
      },
      {
        "title": "Camera",
        "text": [
          "Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it."
        ]
      },
      {
        "title": "Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.",
        "text": [
          "iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with."
        ]
      }
    ],
    "screen": "6.1' IPS",
    "resolution": "1792x828",
    "processor": "Apple A13 Bionic",
    "ram": "4GB",
    "camera": "12 Mp + 12 Mp + 12MP",
    "zoom": "Digital, 5x",
    "cell": ["GPRS", "EDGE", "WCDMA", "UMTS", "HSPA", "LTE"]
  },

  {
    "id": "apple-iphone-11-128gb-purple",
    "namespaceId": "apple-iphone-11",
    "name": "Apple iPhone 11 128GB Purple",
    "capacityAvailable": ["64GB", "128GB", "256GB"],
    "capacity": "128GB",
    "priceRegular": 1100,
    "priceDiscount": 1050,
    "colorsAvailable": ["black", "green", "yellow", "white", "purple", "red"],
    "color": "purple",
    "images": [
      "img/phones/apple-iphone-11/purple/00.webp",
      "img/phones/apple-iphone-11/purple/01.webp",
      "img/phones/apple-iphone-11/purple/02.webp",
      "img/phones/apple-iphone-11/purple/03.webp",
      "img/phones/apple-iphone-11/purple/04.webp"
    ],
    "description": [
      {
        "title": "And then there was Pro",
        "text": [
          "A transformative triple-camera system that adds tons of capability without complexity.",
          "An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro."
        ]
      },
      {
        "title": "Camera",
        "text": [
          "Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it."
        ]
      },
      {
        "title": "Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.",
        "text": [
          "iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with."
        ]
      }
    ],
    "screen": "6.1' IPS",
    "resolution": "1792x828",
    "processor": "Apple A13 Bionic",
    "ram": "4GB",
    "camera": "12 Mp + 12 Mp + 12MP",
    "zoom": "Digital, 5x",
    "cell": ["GPRS", "EDGE", "WCDMA", "UMTS", "HSPA", "LTE"]
  },

  {
    "id": "apple-iphone-11-128gb-red",
    "namespaceId": "apple-iphone-11",
    "name": "Apple iPhone 11 128GB Red",
    "capacityAvailable": ["64GB", "128GB", "256GB"],
    "capacity": "128GB",
    "priceRegular": 1100,
    "priceDiscount": 1050,
    "colorsAvailable": ["black", "green", "yellow", "white", "purple", "red"],
    "color": "red",
    "images": [
      "img/phones/apple-iphone-11/red/00.webp",
      "img/phones/apple-iphone-11/red/01.webp",
      "img/phones/apple-iphone-11/red/02.webp",
      "img/phones/apple-iphone-11/red/03.webp",
      "img/phones/apple-iphone-11/red/04.webp"
    ],
    "description": [
      {
        "title": "And then there was Pro",
        "text": [
          "A transformative triple-camera system that adds tons of capability without complexity.",
          "An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro."
        ]
      },
      {
        "title": "Camera",
        "text": [
          "Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it."
        ]
      },
      {
        "title": "Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.",
        "text": [
          "iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with."
        ]
      }
    ],
    "screen": "6.1' IPS",
    "resolution": "1792x828",
    "processor": "Apple A13 Bionic",
    "ram": "4GB",
    "camera": "12 Mp + 12 Mp + 12MP",
    "zoom": "Digital, 5x",
    "cell": ["GPRS", "EDGE", "WCDMA", "UMTS", "HSPA", "LTE"]
  },

  {
    "id": "apple-iphone-11-128gb-white",
    "namespaceId": "apple-iphone-11",
    "name": "Apple iPhone 11 128GB White",
    "capacityAvailable": ["64GB", "128GB", "256GB"],
    "capacity": "128GB",
    "priceRegular": 1100,
    "priceDiscount": 1050,
    "colorsAvailable": ["black", "green", "yellow", "white", "purple", "red"],
    "color": "white",
    "images": [
      "img/phones/apple-iphone-11/white/00.webp",
      "img/phones/apple-iphone-11/white/01.webp",
      "img/phones/apple-iphone-11/white/02.webp",
      "img/phones/apple-iphone-11/white/03.webp",
      "img/phones/apple-iphone-11/white/04.webp"
    ],
    "description": [
      {
        "title": "And then there was Pro",
        "text": [
          "A transformative triple-camera system that adds tons of capability without complexity.",
          "An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro."
        ]
      },
      {
        "title": "Camera",
        "text": [
          "Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it."
        ]
      },
      {
        "title": "Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.",
        "text": [
          "iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with."
        ]
      }
    ],
    "screen": "6.1' IPS",
    "resolution": "1792x828",
    "processor": "Apple A13 Bionic",
    "ram": "4GB",
    "camera": "12 Mp + 12 Mp + 12MP",
    "zoom": "Digital, 5x",
    "cell": ["GPRS", "EDGE", "WCDMA", "UMTS", "HSPA", "LTE"]
  },

  {
    "id": "apple-iphone-11-128gb-yellow",
    "namespaceId": "apple-iphone-11",
    "name": "Apple iPhone 11 128GB Yellow",
    "capacityAvailable": ["64GB", "128GB", "256GB"],
    "capacity": "128GB",
    "priceRegular": 1100,
    "priceDiscount": 1050,
    "colorsAvailable": ["black", "green", "yellow", "white", "purple", "red"],
    "color": "yellow",
    "images": [
      "img/phones/apple-iphone-11/yellow/00.webp",
      "img/phones/apple-iphone-11/yellow/01.webp",
      "img/phones/apple-iphone-11/yellow/02.webp",
      "img/phones/apple-iphone-11/yellow/03.webp",
      "img/phones/apple-iphone-11/yellow/04.webp"
    ],
    "description": [
      {
        "title": "And then there was Pro",
        "text": [
          "A transformative triple-camera system that adds tons of capability without complexity.",
          "An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro."
        ]
      },
      {
        "title": "Camera",
        "text": [
          "Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it."
        ]
      },
      {
        "title": "Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.",
        "text": [
          "iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with."
        ]
      }
    ],
    "screen": "6.1' IPS",
    "resolution": "1792x828",
    "processor": "Apple A13 Bionic",
    "ram": "4GB",
    "camera": "12 Mp + 12 Mp + 12MP",
    "zoom": "Digital, 5x",
    "cell": ["GPRS", "EDGE", "WCDMA", "UMTS", "HSPA", "LTE"]
  },

  {
    "id": "apple-iphone-11-256gb-black",
    "namespaceId": "apple-iphone-11",
    "name": "Apple iPhone 11 256GB Black",
    "capacityAvailable": ["64GB", "128GB", "256GB"],
    "capacity": "256GB",
    "priceRegular": 1172,
    "priceDiscount": 1115,
    "colorsAvailable": ["black", "green", "yellow", "white", "purple", "red"],
    "color": "black",
    "images": [
      "img/phones/apple-iphone-11/black/00.webp",
      "img/phones/apple-iphone-11/black/01.webp",
      "img/phones/apple-iphone-11/black/02.webp",
      "img/phones/apple-iphone-11/black/03.webp",
      "img/phones/apple-iphone-11/black/04.webp"
    ],
    "description": [
      {
        "title": "And then there was Pro",
        "text": [
          "A transformative triple-camera system that adds tons of capability without complexity.",
          "An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro."
        ]
      },
      {
        "title": "Camera",
        "text": [
          "Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it."
        ]
      },
      {
        "title": "Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.",
        "text": [
          "iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with."
        ]
      }
    ],
    "screen": "6.1' IPS",
    "resolution": "1792x828",
    "processor": "Apple A13 Bionic",
    "ram": "4GB",
    "camera": "12 Mp + 12 Mp + 12MP",
    "zoom": "Digital, 5x",
    "cell": ["GPRS", "EDGE", "WCDMA", "UMTS", "HSPA", "LTE"]
  },
];

export const HomePage: React.FC = () => {
  return (
    <>
      <h2 className="home-page__title--bigger">
        Welcome to Nice Gadgets store!
      </h2>

      <div className="home-page__slider">
        <button className="slider-btn__left slider-btn__left--big">
          <Icon>
            <ArrowIcon />
          </Icon>
        </button>

        <div className="home-page__slider-content">
          <ResponsiveImage
            alt="Phone advertisement"
            desktopSrc="/img/baner-slider-desktop.png"
            tabletSrc="/img/baner-slider-tablet.png"
            mobileSrc="/img/baner-slider-mobile.png"
          />
          <div className="slider">
            <div className="slider__item"></div>
            <div className="slider__item"></div>
            <div className="slider__item"></div>
          </div>
        </div>

        <button className="slider-btn__right slider-btn__right--big">
          <Icon direction="right">
            <ArrowIcon />
          </Icon>
        </button>
      </div>

      <div className="home-page__recomendation">
        <h3 className="home-page__title home-page__title--recomendation home-page__title--recomendation--hide-br">
          Brand new <br /> models
        </h3>
        <div className="slider-btn">
          <button className="slider-btn__left">
            <Icon className="slider-btn__left--svg">
              <ArrowIcon />
            </Icon>
          </button>
          <button className="slider-btn__right">
            <Icon className="slider-btn__right--svg" direction="right">
              <ArrowIcon />
            </Icon>
          </button>
        </div>
      </div>
      <div className="home-page__recomendation-content">
        Component with phones wich you can slide
      </div>

      <h3 className="home-page__title">Shop by category</h3>
      <div className="categories-container">
        <div className="categories">
          <div className="categories__item">
            <ResponsiveImage
              alt="Phones category"
              desktopSrc="/img/category-phones-desktop.png"
              tabletSrc="/img/category-phones-tablet.png"
              mobileSrc="/img/category-phones-mobile.png"
            />
            <NavLink to="/phones" className="categories__title">
              Mobile phones
            </NavLink>
            <p className="categories__amount">95 models</p>
          </div>

          <div className="categories__item">
            <ResponsiveImage
              alt="Tablets category"
              desktopSrc="/img/category-tablets-desktop.png"
              tabletSrc="/img/category-tablets-tablet.png"
              mobileSrc="/img/category-tablets-mobile.png"
            />
            <NavLink to="/tablets" className="categories__title">
              Tablets
            </NavLink>
            <p className="categories__amount">24 models</p>
          </div>

          <div className="categories__item">
            <ResponsiveImage
              alt="Accessories category"
              desktopSrc="/img/category-accessories-desktop.png"
              tabletSrc="/img/category-accessories-tablet.png"
              mobileSrc="/img/category-accessories-mobile.png"
            />
            <NavLink to="/accessories" className="categories__title">
              Accessories
            </NavLink>
            <p className="categories__amount">100 models</p>
          </div>
        </div>
      </div>

      <div className="home-page__recomendation">
        <h3 className="home-page__title home-page__title--recomendation">
          Hot prices
        </h3>
        <div className="slider-btn">
          <button className="slider-btn__left">
            <Icon>
              <ArrowIcon />
            </Icon>
          </button>
          <button className="slider-btn__right">
            <Icon direction="right">
              <ArrowIcon />
            </Icon>
          </button>
        </div>
      </div>
      <div className="home-page__recomendation-content">
        Component with phones wich you can slide
      </div>
    </>
  );
};
