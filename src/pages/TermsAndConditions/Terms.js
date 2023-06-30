import { Stack, Box } from '@mui/system';
import Style from './Terms.module.css';
import React, { useState, useEffect } from 'react';
import Pic from '../../images/Pics/pic1.png'
import Status from '../../images/Pngs/hat-stock 1.png'
import { Skeleton } from '@mui/material';
// import { getTerms , isSuccessfulRequest } from '../../helpers/apiService';
// import DOMPurify from 'dompurify';

export default function Terms(props) {

    const [isLoading, setIsLoading] = useState(true);
    // const [terms , setTerms] = useState(null) ;

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        // async function fetchData (){
        //     const {statusCode , data} = await getTerms() ;
        //     setIsLoading(false) ;
        //     if(isSuccessfulRequest(statusCode)){
        //         setTerms(DOMPurify.sanitize(data)) ;
        //     }
        // }
        // fetchData() ;
    }, []);


    return (
        <>
            <Stack className={Style.terms}>
                <Box className={Style.sec1}>
                    <h1 className={Style.terms_title}>Terms and Conditions</h1>
                    <p className={Style.prag1}>© Etlas all rights reserved 2022</p>
                </Box>
            </Stack>
            <Stack className={Style.sec2}>
                <Box className={Style.sec2_component}>
                    {isLoading ?
                        <>
                            <Skeleton variant='rectangle' animation='circle' className={Style.sec2_skelton} />
                        </>
                        :
                        <>
                            <Box className={Style.prag2} >
                                <p>Welcome to Etlas!</p>
                                <br /><br />
                                <p>These terms and conditions outline the rules and regulations for the use of Etlas's Website, located at https://etlas-scu.github.io/website/.</p>
                                <br /><br />
                                <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Etlas if you do not agree to take all of the terms and conditions stated on this page.</p>
                            </Box>
                        </>}
                    <Box className={Style.images}>
                        <img src={Pic} alt='terms_img' className={Style.terms_img} />
                        <img src={Status} alt='terms_status' className={Style.terms_status} />
                    </Box>
                </Box>
                <Box className={Style.sec3}>
                    {isLoading ?
                        <>
                            <Skeleton variant='rectangle' animation='circle' className={Style.sec3_skelton} />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                        </>
                        :
                        <>
                            <Box className={Style.prag3}>
                                <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of eg. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>
                                <br /><br />

                                <h3>Cookies</h3>
                                <br />

                                <p>We employ the use of cookies. By accessing Etlas, you agreed to use cookies in agreement with the Etlas's Privacy Policy.</p>
                                <br /><br />
                                <p>Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>
                                <br /><br />

                                <h3>Licence</h3>
                                <br />
                                <p>Unless otherwise stated, Etlas and/or its licensors own the intellectual property rights for all material on Etlas. All intellectual property rights are reserved. You may access this from Etlas for your own personal use subjected to restrictions set in these terms and conditions.</p>
                                <br /><br />

                                <p>You must not:</p>
                                <br />
                                <ul>
                                    <li>Republish material from Etlas</li>
                                    <li>Sell, rent or sub-license material from Etlas</li>
                                    <li>Reproduce, duplicate or copy material from Etlas</li>
                                    <li>Redistribute content from Etlas</li>
                                </ul>
                                <br />

                                <p>This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the Free Terms and Conditions Generator.</p>
                                <br /><br />
                                <p>   Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Etlas does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Etlas,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Etlas shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p>
                                <br /><br />
                                <p>Etlas reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</p>
                                <br /><br />

                                <p>You warrant and represent that:</p>
                                <br />
                                <ul>
                                    <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
                                    <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</li>
                                    <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</li>
                                    <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
                                </ul>
                                <br />

                                <p>You hereby grant Etlas a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</p>
                                <br /><br />

                                <h3>Hyperlinking to our Content</h3>
                                <br />
                                <p>The following organizations may link to our Website without prior written approval:</p>
                                <br />
                                <ul>
                                    <li>Government agencies;</li>
                                    <li>Search engines;</li>
                                    <li>News organizations;</li>
                                    <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
                                    <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
                                </ul>
                                <br />

                                <p>These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.</p>
                                <br /><br />
                                <p>We may consider and approve other link requests from the following types of organizations:</p>
                                <br />
                                <ul>
                                    <li>commonly-known consumer and/or business information sources;</li>
                                    <li>dot.com community sites;</li>
                                    <li>associations or other groups representing charities;</li>
                                    <li>online directory distributors;</li>
                                    <li>internet portals;</li>
                                    <li>accounting, law and consulting firms; and</li>
                                    <li>educational institutions and trade associations.</li>
                                </ul>
                                <br />

                                <p>We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Etlas; and (d) the link is in the context of general resource information.</p>
                                <br /><br />
                                <p>These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.</p>
                                <br /><br />
                                <p>If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Etlas. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.</p>
                                <br /><br />
                                
                                <p>Approved organizations may hyperlink to our Website as follows:</p>
                                <br />
                                <ul>
                                    <li>By use of our corporate name; or</li>
                                    <li>By use of the uniform resource locator being linked to; or</li>
                                    <li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site.</li>
                                </ul>
                                <br />
                                <p>No use of Etlas's logo or other artwork will be allowed for linking absent a trademark license agreement.</p>
                                <br /><br />

                                <h3>iFrames</h3>
                                <br />
                                <p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>
                                <br /><br />

                                <h3>Content Liability</h3>
                                <br />
                                <p>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>
                                <br /><br />

                                <h3>Reservation of Rights</h3>
                                <br />
                                <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>
                                <br /><br />

                                <h3>Removal of links from our website</h3>
                                <br />
                                <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>
                                <br /><br />
                                <p>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p>
                                <br /><br />

                                <h3>Disclaimer</h3>
                                <br />
                                <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
                                <br />
                                <ul>
                                    <li>limit or exclude our or your liability for death or personal injury;</li>
                                    <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                                    <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                                    <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
                                </ul>
                                <br />
                                <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>
                                <br /><br />
                                <p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
                                <br /><br />
                                <p>Generated using Terms and Conditions Generator</p>
                                <br /><br />
                            </Box>
                        </>
                    }
                </Box >
            </Stack >
        </>
    );
}
