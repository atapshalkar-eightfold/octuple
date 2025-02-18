import React from 'react';
import { ListProps } from '../List';
import {
  MenuItemButtonProps,
  MenuItemCustomProps,
  MenuItemLinkProps,
  MenuItemSubHeaderProps,
  DropdownMenuItemProps,
} from './MenuItem/MenuItem.types';
import { ButtonProps } from '../Button';

export enum MenuVariant {
  disruptive = 'disruptive',
  primary = 'primary',
  neutral = 'neutral',
}

export enum MenuSize {
  large = 'large',
  medium = 'medium',
  small = 'small',
}

export type MenuItemTypes =
  | MenuItemLinkProps
  | MenuItemButtonProps
  | MenuItemSubHeaderProps
  | MenuItemCustomProps
  | DropdownMenuItemProps;

export interface MenuProps
  extends Omit<
    ListProps<MenuItemTypes>,
    'renderItem' | 'role' | 'itemRole' | 'footer'
  > {
  /**
   * Props for the cancel button
   */
  cancelButtonProps?: ButtonProps;
  /**
   * Props for the ok button
   */
  okButtonProps?: ButtonProps;
  /**
   * Callback when cancel button is clicked
   */
  onCancel?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * On change callback when menu item is clicked
   * @param value
   */
  onChange?: (value: any) => void;
  /**
   * Callback when ok button is clicked
   */
  onOk?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * The menu aria role.
   * @default 'menu'
   */
  role?: string;
  /**
   * Size of the menu
   * @default MenuSize.Medium
   */
  size?: MenuSize;
  /**
   * SubHeader of the menu
   */
  subHeader?: string;
  /**
   * Variant of the menu item
   * @default MenuVariant.neutral
   */
  variant?: MenuVariant;
}

export interface DropdownMenuProps extends MenuProps {}
