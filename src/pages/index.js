import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { Button, Header, Card, Image } from 'flotiq-components-react';
import Layout from '../layouts/layout';
import ContactImage from '../assets/Rectangle 36.png';

/**
 * Content of index page
 */
const IndexPage = () => {
    const data = useStaticQuery(query);
    const formSrc = 'https://fs3yzb3nh3.execute-api.us-east-1.amazonaws.com/'
        + 'prod-aws/flotiq-forms/jak_pomoc_zgloszenia-5TbWyRprh';
    return (
        <Layout>
            <Helmet>
                <title>Jak można pomóc?</title>
                <link
                    rel="stylesheet"
                    href="https://flotiq-form-generator-styles.s3.amazonaws.com/flotiq-form-default.css"
                />
                <script src={formSrc} async />
            </Helmet>
            <div className="mx-2 md:mx-auto my-2 md:my-10 max-w-7xl">
                <Header
                    text={(
                        <span>
                            Jak można
                            {' '}
                            <span className="underline decoration-primary decoration-4">pomóc</span>
                            ?
                        </span>
                    )}
                    alignment="center"
                    additionalClasses={['!font-medium', 'md:text-7xl']}
                />
                <div
                    dangerouslySetInnerHTML={{
                        __html: data.allJakPomoc.nodes[0].main_info
                            .replace(/style="padding: 1rem"/g, 'class="p-4 md:p-6"'),
                    }}
                    className="md:flex justify-between main_info p-2 md:p-10"
                />
            </div>
            <div className="md:flex bg-light p-2 md:p-10 mx-2 md:mx-auto my-2 md:my-10 max-w-7xl rounded-md">
                <div className="basis-full md:basis-1/2 p-4 md:p-6 flex flex-col justify-center">
                    <Header
                        text={(
                            <span>
                                <span className="underline decoration-primary decoration-4">Każda</span>
                                {' '}
                                pomoc się liczy
                            </span>
                        )}
                        level={2}
                        alignment="center"
                        additionalClasses={['!font-medium', 'md:text-6xl', 'mb-10', 'md:text-left']}
                    />
                    <div dangerouslySetInnerHTML={{ __html: data.allJakPomoc.nodes[0].help_info }} />
                </div>
                <div className="basis-full md:basis-1/2 p-4 md:p-6">
                    <p className="pb-2">*wpłaty na potrzeby CPU należy dokonywać na konta:</p>
                    <div className="bg-white rounded-md p-5 md:p-10 drop-shadow-lg">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: data.allJakPomoc.nodes[0].account_numbers.replace(/<p/g, '<p class="pb-4"'),
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="mx-2 md:mx-auto my-2 md:my-10 max-w-7xl">
                <Header
                    text="Chcesz pomóc w inny sposób?"
                    level={2}
                    alignment="center"
                    additionalClasses={['!font-medium', 'md:text-6xl']}
                />
            </div>
            <div className="mx-2 md:mx-auto my-2 md:my-10 max-w-7xl">
                {data.allJakPomocSekcje.nodes.map((section) => (
                    <Card horizontal key={section.nazwa} bordered={false} additionalClasses={['!bg-light', 'mb-5']}>
                        <Card.Body additionalClasses={['!p-0 !pb-3']}>
                            <Header
                                text={section.nazwa}
                                level={4}
                                additionalClasses={
                                    ['md:text-3xl', 'pl-10', 'pr-5', 'mb-10', 'border-b', 'border-light-700']
                                }
                            />
                            <div className="pl-10">
                                {section.organizacje.map((org) => (
                                    <div key={org.nazwa} className="pr-5">
                                        <Header
                                            text={org.nazwa}
                                            level={5}
                                            additionalClasses={['!font-medium', 'md:text-2xl']}
                                        />
                                        <p dangerouslySetInnerHTML={{ __html: org.opis }} />
                                        <a href={org.link} target="_blank" rel="noreferrer">
                                            <Button label="Przejdź na witrynę" additionalClasses={['mt-3', 'mb-5']} />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                        <Card.Img src={section.obrazek[0].localFile.publicURL} alt={section.nazwa} />
                    </Card>
                ))}
            </div>
            <div className="bg-light p-2 md:p-10 mx-2 md:mx-auto my-2 md:my-10 max-w-7xl rounded-md text-center">
                <p>Oprócz powyższych form wsparcia, wiele można znaleźć np na stronie:</p>
                <p className="text-lg font-bold">
                    <a href="https://pomagamukrainie.gov.pl" target="_blank" rel="noreferrer">
                        pomagamukrainie.gov.pl/
                    </a>
                </p>
                <p>Jeśli szukasz czegoś wiecej, klikaj powyżej.</p>
                <p className="mt-10">Pomagaj!</p>
            </div>
            <div className="flex mx-2 md:mx-auto my-2 md:my-10 max-w-7xl">
                <div className="basis-full md:basis-2/5 p-4 md:p-6 flex flex-col justify-center">
                    <Header
                        level={2}
                        text="Chcesz dołączyć do nas?"
                        alignment="center"
                        additionalClasses={['!font-medium', 'md:text-6xl', 'mb-10', 'md:text-left']}
                    />
                    <p>Zgłoś swój projekt!</p>
                </div>
                <div className="basis-full md:basis-3/5 flex bg-white drop-shadow-lg rounded-md">
                    <div className="basis-1/2 p-5">
                        <flotiq-form />
                    </div>
                    <div className="basis-1/2 text-right">
                        <Image url={ContactImage} additionalClasses={['float-right']} />
                    </div>
                </div>
            </div>
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
        allJakPomocSekcje {
            nodes {
                nazwa
                obrazek {
                    localFile {
                        publicURL
                    }
                }
                organizacje {
                    nazwa
                    opis
                    link
                }
            }
        }
    }
`;

export default IndexPage;
