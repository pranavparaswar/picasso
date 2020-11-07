import React, { FC, ReactNode } from 'react';
import Navbar from '../Navbar';
import Layout from './Layout';

interface Props {
    children: ReactNode
}

const Page: FC<Props> = ({ children }) => {
    return (
        <Layout>
            <Navbar />
            {children}
        </Layout>
    )
}

export default Page;