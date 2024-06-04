import { Button, ButtonProps } from '@mantine/core';
import { IconBrandX } from '@tabler/icons-react';

export function TwitterButton(
  props: ButtonProps & React.ComponentPropsWithoutRef<'button'>
) {
  return (
    <Button
      leftSection={<IconBrandX stroke={2} />}
      variant="default"
      {...props}
    />
  );
}
