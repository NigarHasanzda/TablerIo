"use client";
import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#f8fafc] font-sans py-12 px-4">

      <div className="flex items-center gap-2 mb-8">
        <div className="bg-[#066FD1] p-[7px] rounded-lg shadow-sm">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 8l-4 4l4 4M17 8l4 4l-4 4M14 4l-4 16" />
          </svg>
        </div>
        <span className="text-[22px] font-bold tracking-tight text-[#1d273b] leading-none">tabler</span>
      </div>

      <div className="w-full max-w-[850px] bg-white rounded-lg border border-[#e6e8e9] shadow-[0_2px_4px_rgba(0,0,0,0.04)] p-12">
        <div className="text-[#1d273b] space-y-6">
          
          <p className="text-[15px] leading-[1.6]">
            We (the folks at Tabler) run a website hosting platform called <a href="#" className="text-[#066FD1] hover:underline">tabler.io</a> and would love for you to use it. Tabler.io's basic service is free, and we offer paid upgrades for advanced features. Our service is designed to give you as much control and ownership over what goes on your website as possible. However, be responsible in what you publish. In particular, make sure that none of the prohibited items (like spam, viruses, or serious threats of violence) appear in your content.
          </p>

          <hr className="my-10 border-[#e6e8e9]" />

          <p className="text-[15px] leading-[1.6]">
            The following terms and conditions govern all use of the tabler.io website and all content, services, and products available at or through the website. Our Services are offered subject to your acceptance without modification of all of the terms and conditions contained herein and all other operating rules, policies (including, without limitation, <a href="#" className="text-[#066FD1] hover:underline">Tabler's Privacy Policy</a> and procedures that may be published from time to time by Tabler (collectively, the "Agreement"). You agree that we may automatically upgrade our Services, and these terms will apply to any upgrades.
          </p>

          <p className="text-[15px] leading-[1.6]">
            Please read this Agreement carefully before accessing or using our Services. By accessing or using any part of our services, you agree to become bound by the terms and conditions of this agreement. If you do not agree to all the terms and conditions of this agreement, then you may not access or use any of our services. If these terms and conditions are considered an offer by Tabler, acceptance is expressly limited to these terms.
          </p>

          <p className="text-[15px] leading-[1.6]">
            Our Services are not directed to users younger than 16, and access and use of our Services is only offered to users 16 years of age or older. If you are under 16 years old, please do not register to use our Services. Any person who registers as a user or provides their personal information to our Services represents that they are 16 years of age or older. Use of our Services requires a tabler.io account. You agree to provide us with complete and accurate information when you register for an account. You will be solely responsible and liable for any activity that occurs under your username. You are responsible for keeping your password secure.
          </p>

          <div className="space-y-8 pt-4">
            {/* Section 1 */}
            <section>
              <h2 className="text-[17px] font-bold mb-4">1. tabler.io.</h2>
              <ul className="list-disc pl-6 space-y-4 text-[15px] leading-[1.6]">
                <li>
                  <span className="font-bold">Responsibility of Contributors.</span> If you post material to tabler.io, post links on tabler.io, or otherwise make (or allow any third party to make) material available (any such material, "Content"), you are entirely responsible for the content of, and any harm resulting from, that Content or your conduct. That is the case regardless of what form the Content takes, which includes, but is not limited to text, photo, video, audio, or code. By using tabler.io, you represent and warrant that your Content and conduct do not violate these terms. By submitting Content to Tabler for inclusion on your account, you grant Tabler a world-wide, royalty-free, and non-exclusive license to reproduce, modify, adapt and publish the Content solely for the purpose of displaying, distributing, and promoting your changelog. If you delete Content, Tabler will use reasonable efforts to remove it from tabler.io, but you acknowledge that caching or references to the Content may not be made immediately unavailable. Without limiting any of those representations or warranties, Tabler has the right (though not the obligation) to, in Tabler's sole discretion, (i) reclaim your username or website's URL due to prolonged inactivity, (ii) refuse or remove any content that, in Tabler's reasonable opinion, violates any tabler policy or is in any way harmful or objectionable, or (iii) terminate or deny access to and use of Tabler.io to any individual or entity for any reason. Tabler will have no obligation to provide a refund of any amounts previously paid.
                </li>
                <li>
                  <span className="font-bold">HTTPS.</span> We offer free HTTPS on all tabler.io accounts by default.
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-[17px] font-bold mb-4">2. Responsibility of Visitors.</h2>
              <p className="text-[15px] leading-[1.6]">
                Tabler has not reviewed, and cannot review, all of the material, including computer software, posted to our Services, and cannot therefore be responsible for that material's content, use or effects. By operating our Services, Tabler does not represent or imply that it endorses the material there posted, or that it believes such material to be accurate, useful, or non-harmful. You are responsible for taking precautions as necessary to protect yourself and your computer systems from viruses, worms, Trojan horses, and other harmful or destructive content. Our Services may contain content that is offensive, indecent, or otherwise objectionable, as well as content containing technical inaccuracies, typographical mistakes, and other errors. Our Services may also contain material that violates the privacy or publicity rights, or infringes the intellectual property and other proprietary rights, of third parties, or the downloading, copying or use of which is subject to additional terms and conditions, stated or unstated. Tabler disclaims any responsibility for any harm resulting from the use by visitors of our Services, or from any downloading by those visitors of content there posted.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-[17px] font-bold mb-4">3. Content Posted on Other Websites.</h2>
              <p className="text-[15px] leading-[1.6]">
                We have not reviewed, and cannot review, all of the material, including computer software, made available through the websites and webpages to which Tabler links, and that link to Tabler. Tabler does not have any control over those non-tabler websites, and is not responsible for their contents or their use. By linking to a non-tabler website, Tabler does not represent or imply that it endorses such website. You are responsible for taking precautions as necessary to protect yourself and your computer systems from viruses, worms, Trojan horses, and other harmful or destructive content. Tabler disclaims any responsibility for any harm resulting from your use of non-tabler websites and webpages.
              </p>
            </section>

            {/* Section 5  */}
            <section>
              <h2 className="text-[17px] font-bold mb-4">5. Copyright Infringement and DMCA Policy.</h2>
              <p className="text-[15px] leading-[1.6]">
                As Tabler asks others to respect its intellectual property rights, it respects the intellectual property rights of others. If you believe that material located on or linked to by tabler.io violates your copyright, you are encouraged to notify Tabler in accordance with Tabler's Digital Millennium Copyright Act ("DMCA") Policy. Tabler will respond to all such notices, including as required or appropriate by removing the infringing material or disabling all links to the infringing material. Tabler will terminate a visitor's access to and use of the Website if, under appropriate circumstances, the visitor is determined to be a repeat infringer of the copyrights or other intellectual property rights of Tabler or others. In the case of such termination, Tabler will have no obligation to provide a refund of any amounts previously paid to Tabler.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-[17px] font-bold mb-4">6. Intellectual Property.</h2>
              <p className="text-[15px] leading-[1.6]">
                This Agreement does not transfer from Tabler to you any Tabler or third party intellectual property, and all right, title, and interest in and to such property will remain (as between the parties) solely with Tabler. Tabler, tabler.io, the tabler.io logo, and all other trademarks, service marks, graphics and logos used in connection with tabler.io or our Services, are trademarks or registered trademarks of Tabler or Tabler's licensors. Other trademarks, service marks, graphics and logos used in connection with our Services may be the trademarks of other third parties. Your use of our Services grants you no right or license to reproduce or otherwise use any Tabler or third-party trademarks.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-[17px] font-bold mb-4">7. Changes.</h2>
              <p className="text-[15px] leading-[1.6]">
                We are constantly updating our Services, and that means sometimes we have to change the legal terms under which our Services are offered. If we make changes that are material, we will let you know by posting on our changelog, or by sending you an email or other communication before the changes take effect. The notice will designate a reasonable period of time after which the new terms will take effect.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-[17px] font-bold mb-4">8. Disclaimer of Warranties.</h2>
              <p className="text-[15px] leading-[1.6]">
                Our Services are provided "as is." Tabler and its suppliers and licensors hereby disclaim all warranties of any kind, express or implied, including, without limitation, the warranties of merchantability, fitness for a particular purpose and non-infringement. Neither Tabler nor its suppliers and licensors, makes any warranty that our Services will be error free or that access thereto will be continuous or uninterrupted.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-[17px] font-bold mb-4">9. License.</h2>
              <p className="text-[15px] leading-[1.6]">
                By using Tabler, You are acknowledging that You have read and have agreed to <a href="#" className="text-[#066FD1] hover:underline">Tabler's License</a>, so please read them carefully.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-[17px] font-bold mb-4">10. General Representation and Warranty.</h2>
              <p className="text-[15px] leading-[1.6]">
                You represent and warrant that (i) your use of our Services will be in strict accordance with the Tabler Privacy Policy, with this Agreement, and with all applicable laws and regulations (including without limitation any local laws or regulations in your country, state, city, or other governmental area, regarding online conduct and acceptable content, and including all applicable laws regarding the transmission of technical data exported from the United States or the country in which you reside) and (ii) your use of our Services will not infringe or misappropriate the intellectual property rights of any third party.
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-[17px] font-bold mb-4">12. Refund Policy.</h2>
              <p className="text-[15px] leading-[1.6]">
                Payments for Tabler are not refundable for any reason.
              </p>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-[17px] font-bold mb-4">13. Translation.</h2>
              <p className="text-[15px] leading-[1.6]">
                These Terms of Service were originally written in English (US). We may translate these terms into other languages. In the event of a conflict between a translated version of these terms and the English version, the English version will control.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;