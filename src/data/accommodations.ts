
export interface Accommodation {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  currency: string;
  location: string;
  amenities: string[];
  description: string;
}

export const sampleAccommodations: Accommodation[] = [
  {
    id: 1,
    name: "Luxury Beachfront Resort",
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 256,
    price: 7988,
    currency: "₹",
    location: "Auro Beach, 0.2km from beach",
    amenities: ["Free WiFi", "Pool", "Spa", "Restaurant", "Beach Access", "Gym"],
    description: "A stunning beachfront resort offering world-class amenities and breathtaking ocean views. Perfect for a luxurious getaway with family or friends."
  },
  {
    id: 2,
    name: "Serenity Beach Hotel",
    image: "/placeholder.svg",
    rating: 4.5,
    reviews: 189,
    price: 4277,
    currency: "₹",
    location: "Serenity Beach, 1.1km from center",
    amenities: ["Free WiFi", "Pool", "Restaurant", "Room Service", "Garden View"],
    description: "A peaceful retreat surrounded by lush gardens, offering comfortable accommodations and excellent service in a tranquil setting."
  },
  {
    id: 3,
    name: "Coastal Paradise Villa",
    image: "/placeholder.svg",
    rating: 4.6,
    reviews: 324,
    price: 6076,
    currency: "₹",
    location: "Kottak Beach, 0.8km from attractions",
    amenities: ["Free WiFi", "Private Pool", "Kitchen", "Balcony", "Parking"],
    description: "Spacious villa with private amenities, perfect for groups or families seeking privacy and comfort near the beautiful coastline."
  },
  {
    id: 4,
    name: "Heritage Puducherry Hotel",
    image: "/placeholder.svg",
    rating: 4.3,
    reviews: 142,
    price: 4512,
    currency: "₹",
    location: "Puducherry Center, 0.5km from French Quarter",
    amenities: ["Free WiFi", "Restaurant", "Heritage Architecture", "Room Service"],
    description: "Experience the charm of colonial architecture with modern comforts in the heart of the French Quarter."
  },
  {
    id: 5,
    name: "Modern City Suites",
    image: "/placeholder.svg",
    rating: 4.4,
    reviews: 198,
    price: 6173,
    currency: "₹",
    location: "City Center, 2.3km from beach",
    amenities: ["Free WiFi", "Fitness Center", "Business Center", "Laundry"],
    description: "Contemporary suites in the heart of the city, ideal for business travelers and those who prefer urban convenience."
  },
  {
    id: 6,
    name: "Budget Comfort Inn",
    image: "/placeholder.svg",
    rating: 4.1,
    reviews: 87,
    price: 5963,
    currency: "₹",
    location: "Villianur, 3.2km from main attractions",
    amenities: ["Free WiFi", "Air Conditioning", "Daily Cleaning", "Reception"],
    description: "Clean and comfortable accommodations at an affordable price, perfect for budget-conscious travelers."
  },
  {
    id: 7,
    name: "Boutique Garden Resort",
    image: "/placeholder.svg",
    rating: 4.7,
    reviews: 213,
    price: 7957,
    currency: "₹",
    location: "Ariyankuppam, 1.8km from beach",
    amenities: ["Free WiFi", "Garden View", "Spa", "Restaurant", "Pool", "Yoga Classes"],
    description: "An intimate boutique resort set in beautiful gardens, offering personalized service and wellness amenities."
  }
];

export const getAccommodationById = (id: number): Accommodation | undefined => {
  return sampleAccommodations.find(acc => acc.id === id);
};
