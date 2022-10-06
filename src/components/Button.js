import React from 'react';

export default function Button({href, text, style = 'primary'}) {
  return (
    <a target="_blank" href={href}>
      <button href={href} className={'button button--'+style}>{text} →</button>
    </a>
    )
}
