import Capabilities10 from "@/components/homepage/Capabilities10";
import HeroSection2 from "@/components/homepage/HeroSection2";
import HomepageGallery from "@/components/homepage/ProductsShowcase";
import KovoShowcase2 from "@/components/homepage/KovoShowcase2";
import ServicesFlow from "@/components/homepage/ServicesFlow";
import StatsStrip from "@/components/homepage/StatsStrip";
import Stepper from "@/components/homepage/Stepper";
import ServicesFlow2 from "@/components/homepage/ServicesFlow2";
import ServicesFlow3 from "@/components/homepage/ServicesFlow3";
import ConstructionServices from "@/components/homepage/ConstructionServices";
import ConstructionServices_og from "@/components/homepage/ConstructionServices_og";
import SectionHeader from "@/components/homepage/Header";
import StatsStrip2 from "@/components/homepage/StatsStrip2";
import Divider1 from "@/components/UI/Divider1";
export const metadata = {
	title: "MATUSE — stavebníctvo & kovovýroba",
	description: "Zateplenie rodinných domov a zákazková kovovýroba.",
};

export default function HomePage() {
	return (
		<main id="homepage" className="bg-white text-slate-900">
			<HeroSection2 />
			{/* <StatsStrip2 /> */}

			<KovoShowcase2 />

			{/* <StatsStrip /> */}

			<Capabilities10 />
			<HomepageGallery />
			<Divider1 />
			<ServicesFlow3 />
			<ConstructionServices />
			{/*       <Stepper />
			<ServicesFlow /> */}
		</main>
	);
}

function testSect() {
	return (
		<section className="split-section bg-deev">
			{/* Inner Wrap */}
			<div className="inner-wrap ">
				{/* Side with header and text */}
				<div className="text-side ">
					<SectionHeader eyebrow="O nás" title="Poctivá kovovýroba na mieru" />
					<div className="content space-y-4">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quam
							quo perferendis suscipit illum tempore reiciendis quia labore
							sapiente, quis laborum porro excepturi facilis voluptates,
							possimus tempora ex praesentium voluptas.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quam
							quo perferendis suscipit illum tempore reiciendis quia labore
							sapiente, quis laborum porro excepturi facilis voluptates,
							possimus tempora ex praesentium voluptas.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quam
							quo perferendis suscipit illum tempore reiciendis quia labore
							sapiente, quis laborum porro excepturi facilis voluptates,
							possimus tempora ex praesentium voluptas.
						</p>
					</div>
				</div>
				{/* Side with image / custom stuff */}
				<div className="img-side ">
					<div className="h-128 border border-blue-500">Image</div>
				</div>
			</div>
		</section>
	);
}
