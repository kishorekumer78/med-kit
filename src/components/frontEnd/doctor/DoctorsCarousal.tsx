'use client';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import { DoctorData } from './DoctorsList';
import DoctorCard from './DoctorCard';
import Autoplay from 'embla-carousel-autoplay';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel';
type Props = {
	doctorsData?: DoctorData[];
	inPerson?: boolean;
};

export default function DoctorsCarousal({ doctorsData = [], inPerson = true }: Props) {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 3 // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 2 // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1 // optional, default to 1.
		}
	};
	return (
		<>
			<>
				{/* <Carousel
				swipeable={false}
				draggable={false}
				showDots={true}
				responsive={responsive}
				// ssr={true} // means to render carousel on server-side.
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={2000}
				keyBoardControl={true}
				customTransition="all .5"
				transitionDuration={500}
				containerClass="carousel-container"
				removeArrowOnDeviceType={['tablet', 'mobile']}
				// deviceType={this.props.deviceType}
				dotListClass="custom-dot-list-style"
				itemClass="px-2"
			>
				{doctorsData.map((item, i) => (
					<DoctorCard key={i} inPerson={inPerson} doctor={item} />
				))}
			</Carousel> */}
			</>

			<>
				<div className="px-20 ">
					<Carousel
						opts={{
							align: 'center',
							// duration: 50,
							loop: true
						}}
						className=""
						plugins={[
							Autoplay({
								delay: 4000
							})
						]}
					>
						<CarouselContent>
							{doctorsData.map((item, i) => (
								<CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
									<div className="p-1">
										<DoctorCard inPerson={inPerson} doctor={item} />
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className="bg-teal-200 text-teal-700 hover:bg-teal-700 hover:text-teal-200" />
						<CarouselNext className="bg-teal-200 text-teal-700 hover:bg-teal-700 hover:text-teal-200" />
					</Carousel>
				</div>
			</>
		</>
	);
}
