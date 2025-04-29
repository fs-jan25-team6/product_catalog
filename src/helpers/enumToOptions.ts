import { Option as DropdownOption } from '../components/Dropdown';

export function enumToDropdownOptions<T extends Record<string, string>>(
  enumObj: T,
): DropdownOption[] {
  return Object.values(enumObj).map(value => ({
    value,
    label: value,
  }));
}
