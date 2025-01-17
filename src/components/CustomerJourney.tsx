import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
	{
		title: "Initial Consultation",
		description: "Discuss your travel needs and preferences with our aviation experts",
		icon: "🤝",
	},
	{
		title: "Aircraft Selection",
		description: "Choose from our curated fleet of premium private jets",
		icon: "✈️",
	},
	{
		title: "Customization",
		description: "Tailor every aspect of your journey to your requirements",
		icon: "⚙️",
	},
	{
		title: "Seamless Travel",
		description: "Experience luxury travel with white-glove service",
		icon: "🌟",
	},
];

export function CustomerJourney() {
	return (
		<div className="container mx-auto py-16">
			<h2 className="text-4xl font-bold text-center mb-12">Your Journey With Us</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{steps.map((step, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.2 }}
					>
						<Card className="relative overflow-hidden border-gold/20 hover:border-gold/40 transition-colors">
							<CardHeader>
								<div className="text-4xl mb-4">{step.icon}</div>
								<CardTitle>{step.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">{step.description}</p>
							</CardContent>
						</Card>
					</motion.div>
				))}
			</div>
		</div>
	);
}