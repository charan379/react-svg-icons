# react-svg-icons
This is a component library package for react based applications.

Preview icons before you use them in your application at:
[Storybook](https://charan379.github.io/react-svg-icons/)


## Installation

This project is currenlty published at NPM with package name ``@charan379/react-svg-icons``, so you can install it from NPM repository.

```bash
npm install @charan379/react-svg-icons
```

## Usage 
To import all Icon components.
```bash
import * from "@charan379/react-svg-icons"
```
To import specific icons.

```bash
import { <ICON_COMPONENT_NAME1> ,<ICON_COMPONENT_NAME2> } from "@charan379/react-svg-icons"
```

### Example 

```bash
import { WhatsappSvg ,EmailSvg } from "@charan379/react-svg-icons"
```

### To render icon: 

```bash
<ICON_COMPONENT_NAME 
    iconProp1 = {"value"}
    iconProp2 = {"value"}
/>
```

### Example

```bash
<WhatsappSvg
  aroundHandsetColor="#40c351"
  handsetColor="#fff"
  innerBorderColor="#fff"
  outerBorderColor="#cfd8dc"
  size={55}
/>
```

### Example React Code

```bash
import React from 'react'
import { WhatsappSvg } from "@charan379/react-svg-icons";

const Home = () => {
  return (
    <>
      <div>
        {/* Link to whatsapp */}
        <a href='https://link-to-whatsapp' target='_blank'>
          {/* Render Whatsapp Icon */}
          <WhatsappSvg
            aroundHandsetColor="#40c351"
            handsetColor="#fff"
            innerBorderColor="#fff"
            outerBorderColor="#cfd8dc"
            size={55}
          />
        </a>
      </div>
    </>
  )
}

export default Home;
```

## Storybook

Test / Play with icons before you use them in your application at:
[Storybook](https://charan379.github.io/react-svg-icons/)

## Authors

- [@charan379](https://www.github.com/charan379)

## License

[![AGPL License](https://img.shields.io/badge/LICENSE-GNU%20AGPLv3-brightgreen)](https://www.gnu.org/licenses/agpl-3.0.en.html)