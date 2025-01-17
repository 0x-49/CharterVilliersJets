import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const caseStudies = [
	{
		title: "Corporate Travel Transformation",
		company: "Global Tech Corporation",
		challenge: "Needed efficient travel solution for executive team",
		solution: "Customized membership program with dedicated aircraft",
		results: "50% reduction in travel time, increased productivity",
	},
	{
		title: "Luxury Family Vacation",
		company: "Private Client",
		challenge: "Required seamless multi-destination trip with family",
		solution: "Personalized itinerary with luxury amenities",
		results: "Stress-free travel experience, memorable family moments",
	},
	{
		title: "Sports Team Transportation",
		company: "Professional Sports Team",
		challenge: "Complex logistics for team travel during season",
		solution: "Dedicated large-cabin aircraft with custom configuration",
		results: "Enhanced team performance, reduced travel fatigue",
	},
	{
		title: "Emergency Medical Transport",
		company: "Healthcare Provider",
		challenge: "Urgent medical equipment transportation needed",
		solution: "24/7 on-demand aircraft availability",
		results: "Critical timeline met, successful medical operation",
	}
];

export function CaseStudies() {
	return (
		<div className="container mx-auto py-16">
			<h2 className="text-4xl font-bold text-center mb-12">Success Stories</h2>
			<Carousel className="w-full max-w-5xl mx-auto">
				<CarouselContent>
					{caseStudies.map((study, index) => (
						<CarouselItem key={index}>
							<Card className="border-gold/20">
								<CardHeader>
									<CardTitle>{study.title}</CardTitle>
									<p className="text-gold">{study.company}</p>
								</CardHeader>
								<CardContent>
									<div className="space-y-4">
										<div>
											<h4 className="font-semibold">Challenge</h4>
											<p className="text-muted-foreground">{study.challenge}</p>
										</div>
										<div>
											<h4 className="font-semibold">Solution</h4>
											<p className="text-muted-foreground">{study.solution}</p>
										</div>
										<div>
											<h4 className="font-semibold">Results</h4>
											<p className="text-muted-foreground">{study.results}</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
}