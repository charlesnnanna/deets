'use client';

import { classNames } from '@/utils/utils';
import React from 'react';

interface PropTypes {
  label: string;
  color: string | undefined;
  type: 'button' | 'submit' | 'reset';
}

function Button(props: PropTypes) {
  const { label, color, type } = props;
  return (
    <button
      type={type}
      className={classNames(
        color
          ? `bg-${color}-600 hover:bg-${color}-700 focus:ring-${color}-500`
          : 'bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500',
        'w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 '
      )}
    >
      {label}
    </button>
  );
}

export default Button;
