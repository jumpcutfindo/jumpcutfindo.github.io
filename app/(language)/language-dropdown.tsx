import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

interface LanguageDropdownProps {
  menuButtonIcon: IconDefinition;
  menuItems: {
    icon: IconDefinition;
    title: string;
    href: string;
  }[];
  menuFooter?: React.ReactNode;
}

function LanguageDropdown({
  menuButtonIcon,
  menuItems,
  menuFooter,
}: LanguageDropdownProps) {
  return (
    <Menu>
      <MenuButton className="h-8 w-8 rounded-full hover:bg-white/5">
        <FontAwesomeIcon icon={menuButtonIcon} />
      </MenuButton>
      <MenuItems
        anchor="bottom end"
        className="bg-language-background flex flex-col p-2 w-48 rounded-lg shadow-lg outline outline-language-foreground/40 outline-1"
      >
        {menuItems.map(({ icon, title, href }) => (
          <MenuItem key={title}>
            <a className="block rounded-lg p-2 hover:bg-white/5" href={href}>
              <FontAwesomeIcon icon={icon} />
              <span className="ms-2">{title}</span>
            </a>
          </MenuItem>
        ))}
        {menuFooter}
      </MenuItems>
    </Menu>
  );
}

export { LanguageDropdown };
