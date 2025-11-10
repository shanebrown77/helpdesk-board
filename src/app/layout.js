import './globals.css';

export const metadata = {
  title: 'Helpdesk Ticket Board',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container">
        {children}
      </body>
    </html>
  );
}
