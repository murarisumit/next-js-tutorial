import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function Tasks() {
    return (
        <Layout>
            <Head>
                <title>Tasks list</title>
            </Head>
            <h1>Tasks list</h1>
            <h2>
                <Link href="/">← Back to home</Link>
            </h2>
        </Layout>
    );

}