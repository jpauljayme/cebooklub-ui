import React, {useState} from 'react'
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
// import { MantineLogo } from '@mantine/ds';
import { Container, Group, Burger } from '@mantine/core';

type Props = {}

const links = [
    { link: '/home', label: 'Home' },
    { link: '/books', label: 'Books' },
    { link: '/about', label: 'About Us' },
    { link: '/community', label: 'Community' },
  ];

const Header = (props: Props) => {

    const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        {/* <MantineLogo size={28} /> */}
        <h1>Cebooklub</h1>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}

export default Header;