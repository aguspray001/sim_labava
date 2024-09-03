import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";
   
  export default function ButtonController({buttonName, children, buttonColor}) {
    return (
      <Menu className="border-transparent">
        <MenuHandler>
          <Button className={buttonColor}>{buttonName}</Button>
        </MenuHandler>
        <MenuList>
          {children}
        </MenuList>
      </Menu>
    );
  }