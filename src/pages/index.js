import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { Button, Header, Pagination, Paragraph } from 'flotiq-components-react';
import Layout from '../layouts/layout';

/**
 * Content of index page
 */
const IndexPage = () => {
    const data = useStaticQuery(query);
    return (
        <Layout>
            <Helmet>
                <title>Main page</title>
            </Helmet>

        </Layout>
    );
};


const query = graphql`
    query indexQuery {
        allJakPomoc {
            nodes {
                 account_numbers
                 help_info
                 main_info
            }
        }
    }
`;

export default IndexPage;
