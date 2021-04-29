# My Personal Page

## Dependencies

| Package               | Info                                                |
| --------------------- | --------------------------------------------------- |
| axios                 | https://www.npmjs.com/package/axios                 |
| react-easy-emoji      | https://www.npmjs.com/package/react-easy-emoji      |
| react-icons           | https://www.npmjs.com/package/react-icons           |
| react-lottie          | https://www.npmjs.com/package/react-lottie          |
| react-reveal          | https://www.npmjs.com/package/react-reveal          |
| reactstrap            | https://www.npmjs.com/package/reactstrap            |
| colorthief            | https://www.npmjs.com/package/colorthief            |
| bootstrap             | https://www.npmjs.com/package/bootstrap             |
| react-custom-scrollbar| https://www.npmjs.com/package/react-custom-scrollbar|

## Repo structure

```
/
├─ src/
│  ├─ assets/            # Assets
│  │  ├─ img/            # Jobs Logos
│  │  ├─ fonts/          # Fonts used in this project
│  │  ├─ lottie/         # Lottie animations
│  ├─ components/        # Components
|  |
|  │  ├─ styles/         # Component Styles 
|  |
|  │  ├─ containers/     # Main containers
|  |
|  |
|  |
|  |
|  │  ├─ data/           # Mockup data for the components
|  |
|  |
├─ App                   # Main render component
│
├─ index.js              # Main render functionality
├─ .gitignore            # List of files and folders not tracked by Git
├─ .eslintrc             # Linting preferences for JavasScript
├─ LICENSE               # License information for this project
├─ package.json          # Project manifest
└─ README.md             # This file
```
## License

The project uses a license of type [ISC](https://opensource.org/licenses/ISC)

## Author

[Alberto Ochoa](https://www.linkedin.com/in/alberto-ochoa-de-la-torre-340410171/)

## Additional Comments

- The **Colorthief** use it to extract the colors from an image to make the colors of the cards in the experience section dynamically change.
- Also use the **React Custom Scrollbars** to use the same dynamics so that the scrolls of the same section are dynamically changed.
- In the footer part I built it by consuming the github api to obtain my profile information from github, image, location among other things
- I built a component for **React Lottie** that renders animations downloaded from lottie's page.