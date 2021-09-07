import React from 'react';
import classNames from 'classnames';
import { Card, CardProps } from '@teambit/base-ui.surfaces.card';
import { Icon } from '@teambit/design.elements.icon';
import { H4 } from '@teambit/design.ui.heading';
import { Paragraph } from '@teambit/base-ui.text.paragraph';
import { NativeNavLink } from '@teambit/base-ui.routing.native-nav-link';
import { Image } from '@teambit/community.ui.images.image';
const staticPrefix = 'brands';

import styles from './use-case-card.module.scss';

export type UseCaseCardProps = {
  /**
   * an image to be rendered in the card.
   */
  image?: string;
  /**
   * a title for the card
   */
  title?: string;
  /**
   * a text for the card
   */
  text?: string;
  /**
   * internal link to more each use cases
   */
  href: string;
} & CardProps;

export function UseCaseCard({
  image,
  elevation = 'none',
  title,
  text,
  children,
  className,
  href,
  ...rest
}: UseCaseCardProps) {
  return (
    <NativeNavLink href={href} className={classNames(styles.link, className)}>
      <Card
        {...rest}
        elevation={elevation}
        className={classNames(styles.useCaseCard, className)}
      >
        {image && (
          <Image
            src={image}
            alt="world"
            className={classNames(styles.image, className)}
          />
        )}
        <div className={styles.textBox}>
          <H4 size="sm" className={classNames(styles.title, className)}>
            {title} <Icon of="arrow_right" className={styles.arrowIcon} />
          </H4>
          <Paragraph element="p" className={classNames(styles.text, className)}>
            {text}
          </Paragraph>
          {children}
        </div>
      </Card>
    </NativeNavLink>
  );
}
