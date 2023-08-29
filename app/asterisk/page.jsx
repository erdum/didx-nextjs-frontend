import BreadCrumb from '../layout-components/breadCrumb'
import { StandardPage, Paragraph, SubHeading, Table, Anchor } from '../layout-components/standardPage'

export const metadata = {
	'title': 'Asterisk Configuration | DIDX'
}

const headings = ["*IP Addresses", "*DNS"]

const values = [
  ["162.243.32.115", "sip4.didx.net"],
  ["142.93.9.107", "sip10.didx.net"],
  ["159.203.27.198", "ca.didx.net"],
  ["188.166.168.173", "eu2.didx.net"],
  ["46.101.80.13", "eu3.didx.net"],
  ["198.199.87.53", "us1.didx.net"],
  ["162.243.107.173", "us2.didx.net"]
]

export default function Page() {
	return (
		<>
			<BreadCrumb title={metadata.title} />
			<StandardPage>
				<section className="w-full">
					<Paragraph>
						DIDX provides simple call forwarding Service, does not offer SIP or IAX2 accounts (PEERS) to register on our network.
					</Paragraph>
					<Paragraph>
						Which means that you must allow DIDX to send you calls on your asterisk server from our IP Addresses.
					</Paragraph>

					<SubHeading>
						Our IP Addresses:
					</SubHeading>
					<Table headings={headings} values={values}/>

					<Paragraph>
						You should be able to receive calls from DIDX over sip or iax2
					</Paragraph>
					<Paragraph>
						Asterisk Sample Configurations
					</Paragraph>

					<div className="p-2 bg-neutral-100 text-neutral-600 border border-neutral-400 rounded-md mb-16">
						Sample sip.conf<br />
						Sample extensions.conf<br />
						Sample iax.conf
					</div>

					<Paragraph>
						SIP.Conf Sample File Location: /etc/asterisk/sip.conf
					</Paragraph>

					<Paragraph>
						Since the call is going to you over GENERAL Context, you will need to add the following lines to make your asterisk work with DIDX properly. Otherwise you will face errors and will think that DID is not working.
					</Paragraph>

					<Paragraph>
						We will explain below why you need to add each particular line.
					</Paragraph>

					<div className="p-2 bg-neutral-100 text-neutral-600 border border-neutral-400 rounded-md mb-16">
						[general]<br />
						context=default ; This is very important, as this is where the call from DIDX will land to. If the context does not exist in your extensions.conf the call will not come to your asterisk, and will return “404 not found” to DIDX, very common error at our end.
						<br />
						<br />

						port=5060 ; The port where DIDX sends the call to. For sending calls on a different port.
						<br />
						<br />
						
						bindaddr=X.X.X.X ; Please bind to your main IP address that you are using.
						<br />
						<br />
						
						srvlookup=yes ; Enable DNS SRV lookups on outbound calls
						<br />
						<br />
						
						dtmfmode=rfc2833 ; If you need DTMF and you do not have this line, there may be errors in getting DTMF from DIDX.
						<br />
						<br />
						
						relaxdtmf=no
						<br />
						<br />
						
						disallow=all ; Disallow all codecs<br />
						allow=ulaw ; Required for DTMF<br />
						allow=alaw ; Required for DTMF
						<br />
						<br />
						
						allow=g729<br />
						allow=gsm
						<br />
						<br />
						
						maxexpirey=30<br />
						defaultexpirey=180<br />
						canreinvite=yes<br />
						nat=0<br />
						UserAgent= Asterisk<br />
						echocancel=yes<br />
						echocancelwhenbridge=yes<br />
						<br />
						<br />
						
						[1000] ;A Sip User – Nothing to do with DIDX<br />
						type=friend<br />
						username=12126559343
					</div>


					<Paragraph>
						Notice that there is no registration information of ours on your server, because we do not require you to register any users / peers on our network. We use standard SIP and IAX2 forwarding.
					</Paragraph>

					<div className="p-2 bg-neutral-100 text-neutral-600 border border-neutral-400 rounded-md mb-16">
						IAX.conf /etc/asterisk/iax.conf
						<br />
						<br />

						[general]<br />
						bindport=4569<br />
						bindaddr=0.0.0.0 ; Your server ip address<br />
						jitterbuffer = yes<br />
						disallow=all<br />
						allow=alaw<br />
						allow=ulaw<br />
						dtmfmode = rfc2833 ; To get DTMF Properly from DIDX<br />
						context=Default ; This is where your call will land to if you do not<br />
						send it to a user IE<br />
						[asterisk@yourdomain.com/1111111111](mailto:asterisk@yourdomain.com/1111111111)
						<br />
						<br />

						allow=all ; Codec which you want to use for DIDX
						<br />
						<br />

						[guest]<br />
						Context=default ;Where you want the calls to go into from DIDX if u send it to [guest:guest@domain.com/12126555763] (mailto:guest:guest@domain.com/12126555763)
						<br />
						<br />

						Disallow= all<br />
						Allow= ulaw;Codec on which calls will come to your asterisk server<br />
						dtmfmode= rfc2833 ; To get DTMF Properly from DIDX
					</div>

					<Paragraph>
						Notice that there is no registration information of ours on your server, because we do not require you to register any users / peers on our network, we use standard SIP and IAX2 forwarding and the calls are going to land on your guest user, or you can land them to any other user of your own.
					</Paragraph>

					<div className="p-2 bg-neutral-100 text-neutral-600 border border-neutral-400 rounded-md mb-16">
						Extensions.conf /etc/asterisk/extensions.conf
						<br />
						<br />

						Extensions.conf has to know where the call you are getting from has to go to.
					</div>

					<Paragraph>
						We are going to assume that you are using context didx where you want to send your calls to
					</Paragraph>

					<div className="p-2 bg-neutral-100 text-neutral-600 border border-neutral-400 rounded-md mb-16">
						[didx]<br />
						exten = _X.,1,Dial(SIP/123456@fwd.pulver.com)<br />
						exten = _X.,2,Hangup
					</div>

					<Paragraph>
						This will send all the calls to the freeworlddialup account number 123456
					</Paragraph>

					<Paragraph>
						This is just a SAMPLE for you to go ahead and configure it properly.
					</Paragraph>

					<Paragraph>
						Trouble Shooting your problems of call not coming to your asterisk
					</Paragraph>

					<Paragraph>
						Most of the time we get request that the call is not going though, or voice is not coming on the did, this is why we give 2 FREE did’s so that before you attempt to buy anything, you can check the setup at your and our end, this helps us trouble shoot the problem.
					</Paragraph>

					<Paragraph>
						Whenever you have a problem with any did number, you should first use the free did to test the same problem, because the problem can be at providers end also, but the free did’s are toughly tested before we give them to you.
					</Paragraph>

					<Paragraph>
						Playing a MP3 file from your server:<br />
						Playing a MP3 file from your server will help you easily detect some of the errors, simply enter this code in your extensions.conf default contact defined in your general sip.conf section.
					</Paragraph>

					<div className="p-2 bg-neutral-100 text-neutral-600 border border-neutral-400 rounded-md mb-16">
						exten = radio,1,Answer<br />
						exten = radio,2,MP3Player(https://www.didx.net/jesus.mp3)
					</div>

					<Paragraph>
						then send the call from didx to your server to radio@yourdomain.com or radio@yourip
					</Paragraph>

					<Paragraph>
						This will play a song on the phone, and will show that the call is going through fine to your asterisk.
					</Paragraph>

					<Paragraph>
						Support<br />
						We recommend you to visit <Anchor href="/about-us">About us</Anchor>, <Anchor href="https://voip-info.org">VOIP information</Anchor>
					</Paragraph>

					<Paragraph>
						If you are still having problems, We suggest you contact an asterisk consultant, or best would be to contact www.Digium.com
					</Paragraph>
				</section>
			</StandardPage>
		</>
	)
}
