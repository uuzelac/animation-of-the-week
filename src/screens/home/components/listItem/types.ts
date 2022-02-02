import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface ListItemProps {
  id: string;
  onPress: () => void;
  iconDefinition: IconDefinition;
  iconColor: string;
  title: string;
}
