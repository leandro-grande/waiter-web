import { ReactNode } from 'react';
import localFont from 'next/font/local';


const generalSans = localFont({
  src: [
    {
      path: '../assets//fonts/GeneralSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/GeneralSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/GeneralSans-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
});


import StyledComponentsRegistry from './registry';

export const metadata = {
  title: 'Waiter App',
  description: 'Waiter App for restaurant',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={generalSans.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
