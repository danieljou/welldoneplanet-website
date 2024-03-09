/** @format */

import { serciceItem, serciceItem2 } from "./interfaces";
import { PiComputerTower, PiLaptop, PiDesktop } from "react-icons/pi";

import { images } from "./images";
import { BsPeople, BsPersonWorkspace, BsAward } from "react-icons/bs";

export const ServiceOneIcon = {
	"1": BsAward,
	"2": PiComputerTower,
	"3": PiLaptop,
	"4": PiDesktop,
	"5": BsPersonWorkspace,
	"6": BsPeople,
};

export const menuOption = {
	"1": "home",
	"2": "about",
	"3": "services",
	"4": "contact",
	"5": "blog",
};
export const services: serciceItem[] = [
	// {
	// 	Icon: BsAward,
	// 	title: "Rapport coût-efficacité",
	// 	details:
	// 		"Nous proposons des solutions informatiques abordables qui vous aident à réduire vos coûts et à améliorer vos résultats.",
	// },
	// {
	// 	Icon: PiComputerTower,
	// 	title: "Technologie innovante",
	// 	details:
	// 		"Nous restons constamment à l’affût des dernières évolutions technologiques, offrant ainsi des solutions innovantes qui vous positionnent en tête de la course concurrentielle.",
	// },
	// {
	// 	Icon: PiLaptop,
	// 	title: "Expertise sectorielle",
	// 	details:
	// 		"Notre expertise englobe divers secteurs, dont le commerce électronique, l’industrie manufacturière, la santé, le transport, la banque, les services financiers, les télécommunications, l’éducation, l’énergie, etc. ",
	// },
	// {
	// 	Icon: PiDesktop,
	// 	title: "Scalabilité",
	// 	details:
	// 		"Nos solutions sont modulables et peuvent évoluer avec votre entreprise, ce qui vous permet de tirer le meilleur parti de votre investissement.",
	// },
	// {
	// 	Icon: BsPersonWorkspace,
	// 	title: "La responsabilité",
	// 	details:
	// 		"Nous nous engageons à être une entreprise socialement responsable, en contribuant activement aux communautés où nous opérons et en agissant de manière éthique dans toutes nos activités.",
	// },
	// {
	// 	Icon: BsPeople,
	// 	title: "L'expérience client",
	// 	details:
	// 		"Notre priorité absolue est de créer une expérience exceptionnelle pour nos clients. Nous nous efforçons de comprendre leurs besoins et leurs attentes, en offrant un service personnalisé et en maintenant des relations étroites pour garantir leur satisfaction.",
	// },
];

export const oawn_services_images = {
	dev: images.image3,
	dev2: images.dev2,
	support_technique: images.support_technique,
	maintenance: images.maintenance,
	marketing: images.marketing,
	formation: images.formation,
	big_data: images.big_data,
	infographie: images.infographie,
	training: images.formation,
};
export const services2: serciceItem2[] = [
	{
		image: images.dev,
		title: "Développement Logiciel",
		description:
			"Notre équipe de développeurs chevronnés est hautement qualifiée pour concevoir et créer des logiciels sur mesure qui répondent précisément aux besoins de votre entreprise. Nous nous engageons à fournir des solutions logicielles fiables et évolutives qui optimiseront vos opérations et stimuleront votre croissance.",
	},
	{
		image: images.dev2,
		title: "Développement Web et Mobile",
		description:
			"Nous sommes passionnés par la création d'applications mobiles et web exceptionnelles qui offrent une expérience utilisateur fluide et mémorable. Notre équipe de développement combine une expertise technique solide avec une sensibilité esthétique pour créer des interfaces conviviales, des performances optimales et une compatibilité multiplateforme.",
	},
	{
		image: images.support_technique,
		title: "Consultation et support techniques",
		description:
			"Nous comprenons que la technologie peut parfois être complexe et déconcertante. C'est pourquoi notre équipe de consultants techniques chevronnés est là pour vous guider à chaque étape de votre projet.",
	},
	{
		image: images.maintenance,
		title: "Maintenance informatique",
		description:
			"La maintenance régulière de votre infrastructure informatique est essentielle pour garantir son bon fonctionnement et sa sécurité. Notre équipe de maintenance informatique est là pour vous offrir une tranquillité d'esprit.",
	},
	{
		image: images.marketing,
		title: "Marketing Digital",
		description:
			"Dans le monde numérique d'aujourd'hui, une présence en ligne solide et une stratégie de marketing efficace sont essentielles pour la croissance de votre entreprise. Notre équipe de spécialistes du marketing digital est là pour vous aider à atteindre vos objectifs en ligne.",
	},
	{
		image: images.infographie,
		title: "Infographie",
		description:
			"Une image vaut mille mots, et notre équipe de concepteurs graphiques talentueux est là pour transformer vos idées en designs visuellement captivants. Que vous ayez besoin de créer un logo percutant, des supports visuels attrayants, des illustrations uniques ou des infographies informatives, nous apporterons une touche créative à votre communication visuelle.",
	},
	{
		image: images.big_data,
		title: "IoT/IA et Big Data",
		description:
			"Nous vous aidons à exploiter les avantages de l'Internet des objets (IoT), de l'intelligence artificielle (IA) et du Big Data. Notre expertise dans ces domaines vous permet de collecter, d'analyser et d'exploiter efficacement les données pour prendre des décisions éclairées, optimiser vos processus et créer des produits et services innovants.",
	},
	{
		image: images.formation,
		title: "Formations informatiques",
		description:
			"Nous proposons des programmes de formation informatique personnalisés pour améliorer les compétences de vos employés. Nos formateurs expérimentés offrent des cours pratiques et adaptés à vos besoins spécifiques, vous permettant ainsi de rester à jour avec les dernières technologies et d'optimiser l'utilisation de vos ressources informatiques.",
	},
	// {
	// 	title: "Service client 24/7",
	// 	description:
	// 		"Notre équipe dévouée de support client est disponible 24/7 pour répondre à vos questions, résoudre les problèmes techniques et vous assurer une tranquillité d'esprit. Nous nous engageons à offrir un service client exceptionnel, car votre satisfaction est notre priorité absolue.",
	// },
];
