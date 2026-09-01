import { Icon } from '@iconify/react';

export const serviceIconMapper = {
  'streamline-block:travel-map': 'streamline-block:travel-map',
  'fontisto:hotel': 'fontisto:hotel',
  'griddy-icons:private-driver-filled':
    'griddy-icons:private-driver-filled',
  'lucide:car': 'lucide:car',
  'material-symbols-light:camera-rounded':
    'material-symbols-light:camera-rounded',
  'iconoir:healthcare': 'iconoir:healthcare',
  'carbon:ibm-watson-language-translator':
    'carbon:ibm-watson-language-translator',
  'mdi:local-airport': 'mdi:local-airport',
};

export const getServiceIcon = (iconName) => {
  const icon = serviceIconMapper[iconName];

  if (!icon) return null;

  return (
    <Icon
      icon={icon}
      width={40}
      height={40}
    />
  );
};