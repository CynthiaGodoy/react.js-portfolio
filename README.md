# React.js Portfolio

## Description
A single portfolio page showcasing a developers work using **create-react-app** that is deployed using `gh-pages`.

## Deployed URL
[Cynthia Godoy's React.js Portfolio](https://cynthiagodoy.github.io/react.js-portfolio/)

## Installation

1. To install react packages: [Getting Started with React App](https://create-react-app.dev/docs/getting-started/)
```
npx create-react-app react.js-portfolio
```

2. To install [react router](https://www.npmjs.com/package/react-router)
```
npm install react-router-dom
```

3. To install [react icons](https://www.npmjs.com/package/react-icons)
```
npm install react-icons
```

4. To install [react hash router](https://www.npmjs.com/package/react-router-hash-link)
```
npm install --save react-router-hash-link
```

5. [Create React App Docs on GitHub Pages](https://create-react-app.dev/docs/deployment/#github-pages). **Note**: `gh-pages` requires a seperate build that can be deployed. To reupload any changes to gh-pages, first remove `.cache>gh-pages` inside the node modules. Then you can npm run deploy again.

## Usage
Inside the directory, react can run several commands:

`npm start` starts the development server

`npm test` starts the test mode

`npm run build` bundles the app into static file for production

`npm eject` will remove the tool and copies build dependencies, configuration files and scripts into the app directory. If you do this you can't go back!

## Items Completed

✅ The `Navbar` navigates to sections of the portfolio with the current section highlighted and appears on multiple pages.

✅ The `About Me` section includes a photo of the developer. The `Resume` button contains a downloadable resume and a list of developers proficiencies.

✅ The `Skills` section includes knowledge & education.

✅ The `Portfolio Front End` section includes a CSS grid with hover effect of Front End work.

✅ The `Portfolio Back End` section includes a React Carousel with Back End and CLI's.

✅ The `Contact` section contains a contact form with fields for name, email address, and a message. **Note:** This is currently hooked up to EmailJS and is working correctly.

✅ The `Footer` section contains the icon links to the developer's GitHub, Linkedin, and a profile to a third platform.

# Items Used

[JQuery](https://forum.jquery.com/portal/en/community/topic/passing-two-functions-with-click) for `active` buttons. Multiple onClick's on one className

[UseState/UseEffect](https://react.dev/reference/react/useEffect) for portfolio filter, onClick arrows, activeSlide, hamburger with onClick & closeMenu

[Css](https://css-tricks.com/solving-sticky-hover-states-with-media-hover-hover/) Keyframe Animations on Hero Page Background, Hover:Hover features when in mobile

[Props](https://legacy.reactjs.org/docs/components-and-props.html)


## npm packages used

[react-reveal/Fade](https://www.react-reveal.com/examples/common/Fade) while scrolling.

[react-router-dom](https://www.npmjs.com/package/react-router-dom)

[react-scroll](https://www.npmjs.com/package/react-scroll) for active Navbar Links with page scroll

[react-toastify](https://www.npmjs.com/package/react-toastify)

[react-typing-effect](https://www.npmjs.com/package/react-typing-effect)

[react-slick](https://www.npmjs.com/package/react-slick) for Carousel

[react-framer-motion](https://www.npmjs.com/package/framer-motion) for animation 

[react-icons](https://react-icons.github.io/react-icons/)

## Screenshot
![](src/assets/Screenshot.PNG)
![](src/assets/Screenshot2.PNG)
![](src/assets/Screenshot3.PNG)
