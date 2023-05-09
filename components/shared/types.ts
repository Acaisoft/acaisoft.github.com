export type MenuItemLink = { label: string; href: string };

export type MenuItem =
  | MenuItemLink
  | { label: string; children: MenuItemLink[] };
