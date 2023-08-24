import Image from 'next/image'
import BreadCrumb from '../layout-components/breadCrumb'
import { StandardPage, SubHeading, Paragraph } from '../layout-components/standardPage'
import image1 from '../../public/testimonial-page-banners/1.png'
import image2 from '../../public/testimonial-page-banners/2.png'
import image3 from '../../public/testimonial-page-banners/3.png'
import image4 from '../../public/testimonial-page-banners/4.png'
import image5 from '../../public/testimonial-page-banners/5.png'
import image6 from '../../public/testimonial-page-banners/6.png'
import image7 from '../../public/testimonial-page-banners/7.png'
import image8 from '../../public/testimonial-page-banners/8.png'
import image9 from '../../public/testimonial-page-banners/9.png'
import image10 from '../../public/testimonial-page-banners/10.png'
import image11 from '../../public/testimonial-page-banners/11.png'
import image12 from '../../public/testimonial-page-banners/12.png'
import image13 from '../../public/testimonial-page-banners/13.png'

export const metadata = {
	'title': 'DIDX Praises | DIDX'
}

export default function Page() {
	return (
		<>
			<BreadCrumb title={metadata.title} />
			<StandardPage>
				<section className="w-full xl:px-16">
					<SubHeading>
						Testimonial
					</SubHeading>
					<Paragraph>
						If you would like to send some kind words for this web page, Kindly record them on youtube.com and send the link to us to care@didx.net and we would be more than happy to put that on this web page.
					</Paragraph>
					<Paragraph>
						Thank you.
					</Paragraph>

					<section className="flex flex-col items-start gap-y-8 shadow-2xl rounded-2xl py-16 px-12 text-neutral-600 bg-stone-100 my-14">
						<p>
							Firstly, thank-you both for the speed and the cheerfulness that you responded to my shout-out for help on behalf of my panicked client. Suzanne, you were very much a “court of last resort” for me to call on, and I was so impressed that you took the time from your day to return my call and then work as hard as you did to help me find a solution. Ahsan Saleem, I was just as impressed with how fast you responded to the needs of a completely unknown customer with off the wall needs and still managed to deliver excellent service and superior pricing on essentially zero notice.
						</p>
						<p>
							Michel R. Vaillancourt,
						</p>
						<p>
							President of JKL-5 Groupe Inc.
						</p>
						<p>
							Montreal, Quebec, Canada
						</p>
					</section>

					<section className="flex flex-col items-start gap-y-8 shadow-2xl rounded-2xl py-16 px-12 text-neutral-600 bg-stone-100 my-14">
						<p>
							I like the setup of how easy DIDX is to get working and the versatility, flexibility, and pricing.
						</p>
						<p>
							Basil Stepanov,
						</p>
						<p>
							Smart Choice Communications.
						</p>
					</section>

					<section className="flex flex-col items-start gap-y-8 shadow-2xl rounded-2xl py-16 px-12 text-neutral-600 bg-stone-100 my-14">
						<p>
							Dear Suzanne,
						</p>
						<p>
							We want to express our sincere thanks to you for partnering with us on this year’s Inc. 5000 project. Thanks to your support and our efforts together, it has been a smashing success and we’ve had unprecedented participation! We deeply appreciate and value your partnership You have helped us reach a wide variety of privately-owned businesses among your members that make the Inc. 5000 list unique and valuable. We hope that the list continues to be as valuable to your members as they have been to the Inc 5000 this year and to the rest of the private enterprise community.
								<br />
								Again, thank you for partnering with Inc. to promote the Inc. 5,000. We look forward to partnering with you in future years!
						</p>
						<p>
							Sincerely,
						</p>
						<p>
							Chuck Winkler
						</p>
						<p>
							Inc. Magazine
						</p>
						<p>
							7 World Trade Center New York, NY 10007-2195
						</p>
					</section>

					<section className="flex flex-col items-start gap-y-8 shadow-2xl rounded-2xl py-16 px-12 text-neutral-600 bg-stone-100 my-14">
						<p>
							In a few words, the user can browse, order, pay, assign and activate DIDs without typing a key. Your APIs are great. You can see it working with the test account: … Thanks again for everything …
						</p>
						<p>
							Max Glucksmann, ComtelNetworks
						</p>
						<p>
							Miami Beach, FL
						</p>
					</section>

					<section className="flex flex-col items-start gap-y-8 shadow-2xl rounded-2xl py-16 px-12 text-neutral-600 bg-stone-100 my-14">
						<p>
							The DIDX podcast idea is wonderful! Thank you for interviewing some of Jaymie Scotto & Associates’ clients. You and Omar do a terrific job! You have a great voice, Suzanne. Karissa Campbell Jaymie Scotto & Associates New York City, New York.
						</p>
						<p>
							I just finished The World is Flat. While we were sleeping, the world changed. And your technology is in the forefront of it!
						</p>
						<p>
							Jon Felperin,
						</p>
						<p>
							El Salvador and USA business
						</p>
					</section>

					<section className="flex flex-col items-start gap-y-8 shadow-2xl rounded-2xl py-16 px-12 text-neutral-600 bg-stone-100 my-14">
						<p>
							Why do we recommend telecoms and carriers to sell DID on DIDX? …Thereâ€™s also another aspect of doing business that DIDX takes care of for you: marketing. You no longer need to seek out individual or corporate buyers, spend money on pay-per-click; you may still advertise if you choose to, but merely being listed on DIDX is your best exposure.
						</p>
						<p>
							Dmitry Vlasyuk, NXvoice Networks
						</p>
						<p>
							Moscow, Russia
						</p>
					</section>

					<section className="flex flex-col items-start gap-y-8 shadow-2xl rounded-2xl py-16 px-12 text-neutral-600 bg-stone-100 my-14">
						<p>
							This group includes my Florida friend and neighbor Suzanne Bowen and colleagues Muneeb Iqbal and Rehan Allahwala at DiDx aka Super Technologies who I am sure all are familiar. (very friendly & innovative team of professionals whom have won multiple innovation-related awards).
						</p>
						<p>
							Thomas Sullivan, TSGGlobal Tampa, Florida
						</p>
					</section>

					<section className="flex flex-col items-start gap-y-8 shadow-2xl rounded-2xl py-16 px-12 text-neutral-600 bg-stone-100 my-14">
						<p>
							Dear Suzanne, NXTCOMM is very excited to be working with you for NXTCOMM 2007… Thank you for reaching an agreement with NXTcomm to be a media sponsor for NXTcomm for the 2007 show in Chicago, Illinois. We look forward to seeing you at McCormick Place in June.
						</p>
						<p>
							Regards,
						</p>
						<p>
							Christine Hodges & Jackie Williams
						</p>
						<p>
							NXTcomm Marketing Team
						</p>
					</section>

					<section className="flex flex-wrap items-start justify-between text-sm text-neutral-600 font-semibold leading-7">
						<section className="w-full border my-4 xl:m-10 xl:w-3/12">
							<Image className="min-w-full aspect-video" src={image10} />
							<p className="m-6 text-center">
								Michael Robertson, CEO of Sipphone (the first IP communications company to join DIDX) and also Mp3, shares thoughts on the success of DIDX
							</p>
						</section>

						<section className="w-full border my-4 xl:m-10 xl:w-3/12">
							<Image className="min-w-full aspect-video" src={image4} />
							<p className="m-6 text-center">
								Humberto Correa, formerly CEO of FonicaPBX, and now with BBCOM CLEC as well as Alan Pesatty, business consultant, discuss in Spanish the benefits of telecoms using DIDX to buy and sell phone numbers.
							</p>
						</section>

						<section className="w-full border my-4 xl:m-10 xl:w-3/12">
							<Image className="min-w-full aspect-video" src={image5} />
							<p className="m-6 text-center">
								John Lodden, CEO of Michigan Networks, explains the advantages of selling DID on DIDX during a Cluecon conference.
							</p>
						</section>

						<section className="w-full border my-4 xl:m-10 xl:w-3/12">
							<Image className="min-w-full aspect-video" src={image3} />
							<p className="m-6 text-center">
								Douglas Kimani, DIDX member shares the need for DIDX among global service providers in English and Swahili.
							</p>
						</section>

						<section className="w-full border my-4 xl:m-10 xl:w-3/12">
							<Image className="min-w-full aspect-video" src={image13} />
							<p className="m-6 text-center">
								Worldworkz at Spring VON 2007
							</p>
						</section>

						<section className="w-full border my-4 xl:m-10 xl:w-3/12">
							<Image className="min-w-full aspect-video" src={image2} />
							<p className="m-6 text-center">
								Connectbynet at Spring VON 2007
							</p>
						</section>

						<section className="w-full border my-4 xl:m-10 xl:w-3/12">
							<Image className="min-w-full aspect-video" src={image7} />
							<p className="m-6 text-center">
								Rich Tehrani of TMC Internet Telephony
							</p>
						</section>

						<section className="w-full border my-4 xl:m-10 xl:w-3/12">
							<Image className="min-w-full aspect-video" src={image6} />
							<p className="m-6 text-center">
								DS2 Jose Lucini at NXTCOMM 2007
							</p>
						</section>

						<section className="w-full border my-4 xl:m-10 xl:w-3/12">
							<Image className="min-w-full aspect-video" src={image9} />
							<p className="m-6 text-center">
								Richard Koch, RNK Communications at Comptel 2007
							</p>
						</section>

						<section className="w-full border my-4 xl:m-10 xl:w-3/12">
							<Image className="min-w-full aspect-video" src={image11} />
							<p className="m-6 text-center">
								CallThePlanet’s CTO Steven Harrison at EXPOcomm 2008 in Mexico City
							</p>
						</section>

						<section className="w-full border my-4 xl:m-10 xl:w-3/12">
							<Image className="min-w-full aspect-video" src={image7} />
							<p className="m-6 text-center">
								Serge Kruppa of Peerant and Jessica Ruiz of DIDX at EXPOcomm 2008 in Mexico City
							</p>
						</section>

						<section className="w-full border my-4 xl:m-10 xl:w-3/12">
							<Image className="min-w-full aspect-video" src={image8} />
							<p className="m-6 text-center">
								Luis Alberto Moreno (DIDX Partner) of Bas Computers at EXPOcomm 2008 in Mexico City
							</p>
						</section>

						<section className="w-full border my-4 xl:m-10 xl:w-3/12">
							<Image className="min-w-full aspect-video" src={image1} />
							<p className="m-6 text-center">
								Alexandro Apan NeoCenter on Call Centers, DIDX, EXPOcomm
							</p>
						</section>
					</section>
				</section>
			</StandardPage>
		</>
	)
}
