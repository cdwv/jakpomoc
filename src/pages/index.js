import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { Button, Header, Card, Paragraph, Image } from 'flotiq-components-react';
import Layout from '../layouts/layout';
import ContactImage from '../assets/Rectangle 36.png';

/**
 * Content of index page
 */
const IndexPage = () => {
    const data = useStaticQuery(query);
    return (
        <Layout>
            <Helmet>
                <title>Jak można pomóc?</title>
                <link rel="stylesheet" href="https://flotiq-form-generator-styles.s3.amazonaws.com/flotiq-form-default.css"/>
                <script src="https://fs3yzb3nh3.execute-api.us-east-1.amazonaws.com/prod-aws/flotiq-forms/jak_pomoc_zgloszenia-5TbWyRprh" async></script>
            </Helmet>
            <div className="mx-2 md:mx-20">
            <Header text="Jak można pomóc?" alignment="center" />
            <Paragraph text={data.allJakPomoc.nodes[0].main_info} additionalClasses={['md:flex', 'justify-between', 'main_info']} />
            </div>
            <div className="flex bg-light mx-20 p-20">
                <div className="basis-1/2">
                    <Header text="Każda pomoc się liczy" level={2} />
                    <Paragraph text={data.allJakPomoc.nodes[0].help_info} />
                </div>
                <div className="basis-1/2">
                    <Paragraph text="*wplaty na potrzeby CPU nalezy dokonywac na konta:" />
                    <div className="bg-white">
                        <Paragraph text={data.allJakPomoc.nodes[0].account_numbers} />
                    </div>
                </div>
            </div>
            <Header text="Chcesz pomóc w inny sposób?" level={2} alignment="center" />
            {data.allJakPomocSekcje.nodes.map((section) => (
                <Card horizontal>
                    <Card.Body>
                        <Header text={section.nazwa} level={4} />
                        <div>
                        {section.organizacje.map(org => (
                            <div>
                                <Header text={org.nazwa} level={5} />
                                <Paragraph text={org.opis} />
                                <Button onClick={() => window.open(org.link)} label="Przejdź na witrynę fundacji" />
                            </div>
                        ))}
                        </div>
                    </Card.Body>
                    <Card.Img src={section.obrazek[0].localFile.publicURL}/>
                </Card>
            ))}
            <div>
                <Paragraph text="Oprócz powyższych form wsparcia, wiele można znaleźć np na stronie:" />
                <a href="https://pomagamukrainie.gov.pl" target="_blank"><Paragraph text="pomagamukrainie.gov.pl/" /></a>
                <Paragraph text="Jeśli szukasz czegoś wiecej, klikaj powyżej." />
                <Paragraph text="Pomagaj!" />
            </div>
            <div className="flex">
                <div className="basis-1/2">
                    <Header level={2} text="Chcesz dołączyć do nas?" />
                    <Paragraph text="Zgołoś swój projekt!" />
                </div>
                <div className="basis-1/2 flex">
                    <div className="basis-1/2">
                        <flotiq-form />
                    </div>
                    <div className="basis-1/2">
                        <Image src={ContactImage} />
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
