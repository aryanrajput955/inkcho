'use client';

import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#f7f4ec] min-h-screen pt-40 md:pt-56 pb-32 px-6 sm:px-10 font-[var(--font-body)] text-[#1e1e1e]">
      <div className="max-w-4xl mx-auto">
        
        <motion.header 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#9a1b40] mb-4">PRIVACY POLICY</h1>
          <p className="text-black/50 font-bold uppercase tracking-widest text-sm">Last updated March 10, 2026</p>
        </motion.header>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-10 text-black/80 leading-relaxed font-medium"
        >
          <section className="space-y-4">
            <p>
              This Privacy Notice for Inkcho Designs Ltd (<strong>'we'</strong>, <strong>'us'</strong>, or <strong>'our'</strong>), describes how and why we might 
              access, collect, store, use, and/or share (<strong>'process'</strong>) your personal information when you use our 
              services (<strong>'Services'</strong>), including when you:
            </p>
            <ul className="list-disc pl-6 space-y-4 marker:text-[#9a1b40]">
              <li>Visit our website at <a href="https://www.inkchodesigns.com/" className="text-[#1e4389] underline underline-offset-4">https://www.inkchodesigns.com/</a> or any website of ours that links to this Privacy Notice</li>
              <li>Use Inkcho Designs Creative Studio. Inkcho Designs is a creative studio specializing in branding, visual identity, graphic design, Web design, motion graphics, and 3D and immersive reality creative work. The website serves as a portfolio and service platform where visitors can explore projects, learn about the studio’s capabilities, and submit inquiries for potential collaborations or client projects.</li>
              <li>Engage with us in other related ways, including any marketing or events</li>
            </ul>
            <p>
              <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy 
              rights and choices. We are responsible for making decisions about how your personal 
              information is processed. If you do not agree with our policies and practices, please do not use 
              our Services. If you still have any questions or concerns, please contact us at 
              <a href="mailto:hello@inkchodesigns.com" className="text-[#9a1b40] font-bold ml-1">hello@inkchodesigns.com</a>.
            </p>
          </section>

          <section className="space-y-6 pt-10 border-t border-black/5">
            <h2 className="text-2xl font-serif font-bold text-[#1e4389]">SUMMARY OF KEY POINTS</h2>
            <p className="text-sm italic opacity-70">This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.</p>
            
            <div className="space-y-4 text-sm">
              <p><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about personal information you disclose to us.</p>
              <p><strong>Do we process any sensitive personal information?</strong> Some of the information may be considered 'special' or 'sensitive' in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal information.</p>
              <p><strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.</p>
              <p><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about how we process your information.</p>
              <p><strong>In what situations and with which types of parties do we share personal information?</strong> We may share information in specific situations and with specific categories of third parties. Learn more about when and with whom we share your personal information.</p>
              <p><strong>How do we keep your information safe?</strong> We have adequate organisational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about how we keep your information safe.</p>
              <p><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about your privacy rights.</p>
              <p><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by visiting <a href="https://inkchodesigns.com/contact" className="underline">https://inkchodesigns.com/contact</a>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>
              <p>Want to learn more about what we do with any information we collect? Review the Privacy Notice in full.</p>
            </div>
          </section>

          <section className="space-y-4 pt-10 border-t border-black/5">
            <h2 className="text-2xl font-serif font-bold text-[#1e4389]">TABLE OF CONTENTS</h2>
            <ul className="space-y-2 text-[#1e4389] font-bold uppercase tracking-tight text-sm">
              <li>1. WHAT INFORMATION DO WE COLLECT?</li>
              <li>2. HOW DO WE PROCESS YOUR INFORMATION?</li>
              <li>3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</li>
              <li>4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
              <li>5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
              <li>6. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</li>
              <li>7. HOW LONG DO WE KEEP YOUR INFORMATION?</li>
              <li>8. HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
              <li>9. DO WE COLLECT INFORMATION FROM MINORS?</li>
              <li>10. WHAT ARE YOUR PRIVACY RIGHTS?</li>
              <li>11. CONTROLS FOR DO-NOT-TRACK FEATURES</li>
              <li>12. DO WE MAKE UPDATES TO THIS NOTICE?</li>
              <li>13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
              <li>14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</li>
            </ul>
          </section>

          <section className="space-y-12 pt-16">
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-[#1e4389]">1. WHAT INFORMATION DO WE COLLECT?</h2>
              <div className="space-y-4">
                <p className="font-bold underline text-[#9a1b40]">Personal information you disclose to us</p>
                <p><em>In Short: We collect personal information that you provide to us.</em></p>
                <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
                <p><strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
                <ul className="list-disc pl-10 space-y-2 marker:text-[#9a1b40]">
                  <li>names</li>
                  <li>phone numbers</li>
                  <li>email addresses</li>
                </ul>
                <p><strong>Sensitive Information.</strong> We do not process sensitive information.</p>
                <p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>
              </div>

              <div className="space-y-4 pt-6">
                <p className="font-bold underline text-[#9a1b40]">Information automatically collected</p>
                <p><em>In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</em></p>
                <p>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>
                <p>Like many businesses, we also collect information through cookies and similar technologies. You can find out more about this in our Cookie Notice: <a href="https://inkchodesigns.com/cookie-policy" className="underline">https://inkchodesigns.com/cookie-policy</a>.</p>
                <p>The information we collect includes:</p>
                <ul className="list-disc pl-10 space-y-4 marker:text-[#9a1b40]">
                  <li><strong>Log and Usage Data.</strong> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called 'crash dumps'), and hardware settings).</li>
                  <li><strong>Device Data.</strong> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.</li>
                  <li><strong>Location Data.</strong> We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-[#1e4389]">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
              <p><em>In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</em></p>
              <p>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
              <ul className="list-disc pl-10 space-y-4 marker:text-[#9a1b40]">
                <li><strong>To deliver and facilitate delivery of services to the user.</strong> We may process your information to provide you with the requested service.</li>
                <li><strong>To respond to user inquiries/offer support to users.</strong> We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</li>
                <li><strong>To send administrative information to you.</strong> We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.</li>
                <li><strong>To enable user-to-user communications.</strong> We may process your information if you choose to use any of our offerings that allow for communication with another user.</li>
                <li><strong>To request feedback.</strong> We may process your information when necessary to request feedback and to contact you about your use of our Services.</li>
                <li><strong>To send you marketing and promotional communications.</strong> We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see 'WHAT ARE YOUR PRIVACY RIGHTS?' below.</li>
                <li><strong>To deliver targeted advertising to you.</strong> We may process your information to develop and display personalised content and advertising tailored to your interests, location, and more. For more information see our Cookie Notice: <a href="https://inkchodesigns.com/cookie-policy" className="underline">https://inkchodesigns.com/cookie-policy</a>.</li>
                <li><strong>To protect our Services.</strong> We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.</li>
                <li><strong>To identify usage trends.</strong> We may process information about how you use our Services to better understand how they are being used so we can improve them.</li>
                <li><strong>To save or protect an individual's vital interest.</strong> We may process your information when necessary to save or protect an individual’s vital interest, such as to prevent harm.</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-[#1e4389]">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</h2>
              <p><em>In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e. legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfil our contractual obligations, to protect your rights, or to fulfil our legitimate business interests.</em></p>
              <p>The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</p>
              <ul className="list-disc pl-10 space-y-4 marker:text-[#9a1b40]">
                <li><strong>Consent.</strong> We may process your information if you have given us permission (i.e. consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Learn more about withdrawing your consent.</li>
                <li><strong>Performance of a Contract.</strong> We may process your personal information when we believe it is necessary to fulfil our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.</li>
                <li><strong>Legitimate Interests.</strong> We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example, we may process your personal information for some of the purposes described in order to:
                  <ul className="list-[circle] pl-10 mt-2 space-y-1">
                    <li>Send users information about special offers and discounts on our products and services</li>
                    <li>Develop and display personalised and relevant advertising content for our users</li>
                    <li>Analyse how our Services are used so we can improve them to engage and retain users</li>
                    <li>Diagnose problems and/or prevent fraudulent activities</li>
                    <li>Understand how our users use our products and services so we can improve user experience</li>
                  </ul>
                </li>
                <li><strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</li>
                <li><strong>Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-[#1e4389]">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
              <p><em>In Short: We may share information in specific situations described in this section and/or with the following categories of third parties.</em></p>
              <p><strong>Vendors, Consultants, and Other Third-Party Service Providers.</strong> We may share your data with third-party vendors, service providers, contractors, or agents (<strong>'third parties'</strong>) who perform services for us or on our behalf and require access to such information to do that work. We have contracts in place with our third parties, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organisation apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct.</p>
              <p>The categories of third parties we may share personal information with are as follows:</p>
              <ul className="list-disc pl-10 space-y-2 marker:text-[#9a1b40]">
                <li>Cloud Computing Services</li>
                <li>AI Platforms</li>
                <li>Data Analytics Services</li>
                <li>Communication & Collaboration Tools</li>
                <li>Data Storage Service Providers</li>
                <li>Website Hosting Service Providers</li>
                <li>Sales & Marketing Tools</li>
                <li>Payment Processors</li>
                <li>Order Fulfilment Service Providers</li>
              </ul>
              <p>We also may need to share your personal information in the following situations:</p>
              <ul className="list-disc pl-10 space-y-2 marker:text-[#9a1b40]">
                <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-[#1e4389]">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
              <p><em>In Short: We may use cookies and other tracking technologies to collect and store your information.</em></p>
              <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.</p>
              <p>We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites.</p>
              <p>Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice: <a href="https://inkchodesigns.com/cookie-policy" className="underline">https://inkchodesigns.com/cookie-policy</a>.</p>
              <p><strong>Google Analytics</strong></p>
              <p>We may share your information with Google Analytics to track and analyse the use of the Services. To opt out of being tracked by Google Analytics across the Services, visit <a href="https://tools.google.com/dlpage/gaoptout" className="underline">https://tools.google.com/dlpage/gaoptout</a>. For more information on the privacy practices of Google, please visit the Google Privacy & Terms page.</p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-[#1e4389]">6. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</h2>
              <p><em>In Short: We may transfer, store, and process your information in countries other than your own.</em></p>
              <p>Our servers are located in the United States and United Kingdom. Regardless of your location, please be aware that your information may be transferred to, stored by, and processed by us in our facilities and in the facilities of the third parties with whom we may share your personal information (see 'WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?' above), including facilities in the United States, and other countries.</p>
              <p>If you are a resident in the European Economic Area (EEA), United Kingdom (UK), or Switzerland, then these countries may not necessarily have data protection laws or other similar laws as comprehensive as those in your country. However, we will take all necessary measures to protect your personal information in accordance with this Privacy Notice and applicable law.</p>
              <p><strong>European Commission's Standard Contractual Clauses:</strong></p>
              <p>We have implemented measures to protect your personal information, including by using the European Commission's Standard Contractual Clauses for transfers of personal information between our group companies and between us and our third-party providers. These clauses require all recipients to protect all personal information that they process originating from the EEA or UK in accordance with European data protection laws and regulations. Our Standard Contractual Clauses can be provided upon request. We have implemented similar appropriate safeguards with our third-party service providers and partners and further details can be provided upon request.</p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-[#1e4389]">7. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
              <p><em>In Short: We keep your information for as long as necessary to fulfil the purposes outlined in this Privacy Notice unless otherwise required by law.</em></p>
              <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than 2 years.</p>
              <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-[#1e4389]">8. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
              <p><em>In Short: We aim to protect your personal information through a system of organisational and technical security measures.</em></p>
              <p>We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-[#1e4389]">9. DO WE COLLECT INFORMATION FROM MINORS?</h2>
              <p><em>In Short: We do not knowingly collect data from or market to children under 18 years of age.</em></p>
              <p>We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at <a href="mailto:hello@inkchodesigns.com" className="underline">hello@inkchodesigns.com</a>.</p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-[#1e4389]">10. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
              <p><em>In Short: In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Switzerland, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</em></p>
              <p>In some regions (like the EEA, UK, and Switzerland), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' below.</p>
              <p>We will consider and act upon any request in accordance with applicable data protection laws.</p>
              <p>If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your Member State data protection authority or UK data protection authority.</p>
              <p>If you are located in Switzerland, you may contact the Federal Data Protection and Information Commissioner.</p>
              <p><strong>Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' below.</p>
              <p>However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>
              <p><strong>Opting out of marketing and promotional communications:</strong> You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, replying 'STOP' or 'UNSUBSCRIBE' to the SMS messages that we send, or by contacting us using the details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.</p>
              <p><strong>Cookies and similar technologies:</strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. For further information, please see our Cookie Notice: <a href="https://inkchodesigns.com/cookie-policy" className="underline">https://inkchodesigns.com/cookie-policy</a>.</p>
              <p>If you have questions or comments about your privacy rights, you may email us at <a href="mailto:hello@inkchodesigns.com" className="underline">hello@inkchodesigns.com</a>.</p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-[#1e4389]">11. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
              <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (<strong>'DNT'</strong>) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.</p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-[#1e4389]">12. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
              <p><em>In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></p>
              <p>We may update this Privacy Notice from time to time. The updated version will be indicated by an updated 'Revised' date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.</p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-[#1e4389]">13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
              <p>If you have questions or comments about this notice, you may email us at <a href="mailto:hello@inkchodesigns.com" className="underline">hello@inkchodesigns.com</a> or contact us by post at:</p>
              <p className="font-bold">
                Inkcho Designs Ltd<br />
                61 Wincanton Road<br />
                Kingsmere Bicester<br />
                Bicester, Oxfordshire OX26 1EJ<br />
                United Kingdom
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-[#1e4389]">14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
              <p>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please visit: <a href="https://inkchodesigns.com/contact" className="underline">https://inkchodesigns.com/contact</a>.</p>
            </div>
          </section>

        </motion.div>
      </div>
    </div>
  );
}
