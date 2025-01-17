import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

export function PriceComparison() {
	return (
		<div className="container mx-auto py-12">
			<h2 className="text-4xl font-bold text-center mb-8">
				Private Jet vs Commercial First Class
			</h2>
			<Table>
				<TableCaption>Comprehensive comparison of travel options</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Features</TableHead>
						<TableHead>Private Jet</TableHead>
						<TableHead>First Class</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell>Airport Experience</TableCell>
						<TableCell>
							<div className="flex items-center gap-2">
								<Check className="text-green-500" />
								<span>Private terminal, no queues</span>
							</div>
						</TableCell>
						<TableCell>
							<div className="flex items-center gap-2">
								<X className="text-red-500" />
								<span>Standard security lines</span>
							</div>
						</TableCell>
					</TableRow>
					{/* Add more rows for other comparisons */}
				</TableBody>
			</Table>
		</div>
	);
}