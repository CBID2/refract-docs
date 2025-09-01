import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Button from '@site/src/components/Button'; // Reuse the existing Button component

const ForkButton = ({ className, style, ...props }) => {
  return (
    <Button
      label="⧸ Fork on GitHub (TMP Project)" // Fork symbol + text
      link="https://github.com/CBID2/refract-docs"
      variant="primary" // Matches navbar GitHub link color
      size="sm" // Smaller size to fit navbar
      className={clsx('fork-button', className)} // Custom class for additional styling
      style={style}
      aria-label="Fork Refract on GitHub - Technical Mentorship Programme Project"
      {...props}
    />
  );
};

export default ForkButton;