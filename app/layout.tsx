


import './globals.css';
import Layout from '../components/Layout';

export const metadata = {
    title: 'Todo App',
    description: 'A simple Todo application',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
