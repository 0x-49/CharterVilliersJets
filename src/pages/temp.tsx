import React from "react";
import Image from "next/image";
import SEO from "@/components/SEO";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const structuredData = {
	"@context": "https://schema.org",
	"@type": "Organization",
	"name": "Villiers Jets",
	"url": "https://villiersjets.com",
	"logo": "https://villiersjets.com/images/LogoVilliers1.png",
	"description": "Experience unparalleled luxury with Villiers Jets. Private jet charters, empty leg flights, and premium aviation services tailored to discerning travelers.",
	"address": {
		"@type": "PostalAddress",
		"addressLocality": "London",
		"addressRegion": "London",
		"postalCode": "SW6 3PA",
		"addressCountry": "UK"
	},
	"contactPoint": {
		"@type": "ContactPoint",
		"telephone": "+44(0)20 8163 6578",
		"contactType": "customer service"
	}
};

export default function Home() {
	return (
		<>
			<SEO 
				title="Private Aviation Excellence | Charter & Empty Leg Flights"
				description="Experience unparalleled luxury with Villiers Jets. Private jet charters, empty leg flights, and premium aviation services tailored to discerning travelers."
				structuredData={structuredData}
			/>
			
			<main className="flex min-h-screen flex-col">
				{/* Rest of your existing code */}
			</main>
		</>
	);
}