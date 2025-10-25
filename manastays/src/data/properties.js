// src/data/properties.js
export const properties = [
  {
    id: "nivaant-igatpuri",
    title: "Nivaant Villa",
    city: "Igatpuri",
    state: "Maharashtra",
    location: "Igatpuri, India",
    address:
      "Gat No. 151, Plot 9, 10, 11, Venkatesh Nagar Grand Garden Resorts, Igatpuri, Maharashtra, India, 422403",
    guests: 14,
    beds: 3,
    baths: 3,
    price: 12999,
    weekdayNote: "Weekday",
    rating: 4.8,
    exclusive: true,
    checkin: "1:00 PM",
    checkout: "11:00 AM",
    amenities: [
      "Private Parking",
      "Sofa",
      "Microwave",
      "WiFi",
      "Refrigerator",
      "Garden",
      "Balcony",
      "Mountain View"
    ],
    nearby: ["Scenic View", "Restaurants"],
    rules: ["Family Friendly"],
    photos: [
      "https://images.unsplash.com/photo-1600585154340-1e22b60d9093?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop"
    ],
    description:
      "Welcome to Nivaant by StayAtlas, a tranquil getaway near the majestic Kalsubai Peak in the Western Ghats. Designed by architect Manjunath Shenoy, this serene villa beautifully blends modern design with nature’s calm.",
    map: {
      // Use a place or lat/lng embed (placeholder below)
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30287.258!2d73.54!3d19.70!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3AIgatpuri!5e0!3m2!1sen!2sin!4v1700000000000",
      dirUrl: "https://maps.google.com/?q=Igatpuri"
    },
    faqs: [
      { q: "Is parking available at the villa?", a: "Yes, private parking is available for guests." },
      { q: "Is the villa suitable for one-day picnics?", a: "Day use is available on request and subject to availability." },
      { q: "Can I host events or parties at the villa?", a: "Small gatherings are permitted with prior approval." }
    ]
  },
  {
    id: "hillside-coorg",
    title: "Hillside Bungalow",
    city: "Coorg",
    state: "Karnataka",
    location: "Coorg, Karnataka",
    address: "Coffee Estate Road, Coorg, Karnataka, India",
    guests: 8,
    beds: 4,
    baths: 3,
    price: 15000,
    rating: 4.6,
    exclusive: false,
    checkin: "2:00 PM",
    checkout: "11:00 AM",
    amenities: ["WiFi", "Air Conditioner", "Kitchen", "Swimming Pool"],
    nearby: ["Scenic View", "Restaurants", "Airport"],
    rules: ["Family Friendly"],
    photos: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505691723518-36a5ac3b2a59?q=80&w=1200&auto=format&fit=crop"
    ],
    description:
      "Spacious bungalow with lush coffee-estate surroundings and an infinity pool.",
    map: {
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.0!2d75.73!3d12.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sCoorg!5e0!3m2!1sen!2sin!4v1700000000001",
      dirUrl: "https://maps.google.com/?q=Coorg"
    },
    faqs: [
      { q: "Do you have a separate room for driver or house help?", a: "Yes, a staff room can be arranged on request." },
      { q: "Is parking available at the villa?", a: "Yes, on-site parking is available." }
    ]
  },
  {
    id: "serene-lonavala",
    title: "Serene Cottage",
    city: "Lonavala",
    state: "Maharashtra",
    location: "Lonavala, Maharashtra",
    address: "Near Bushi Dam Road, Lonavala, Maharashtra",
    guests: 4,
    beds: 2,
    baths: 1,
    price: 8500,
    rating: 4.5,
    exclusive: false,
    checkin: "1:00 PM",
    checkout: "10:00 AM",
    amenities: ["WiFi", "Kitchen", "Private Parking"],
    nearby: ["Scenic View", "Restaurants"],
    rules: ["Pet Friendly"],
    photos: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f1?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Cosy cottage tucked among the Lonavala greens; perfect weekend escape."
  },
  {
    id: "lakeside-udaipur",
    title: "Lakeside Retreat",
    city: "Udaipur",
    state: "Rajasthan",
    location: "Udaipur, Rajasthan",
    address: "Lake Pichola Road, Udaipur, Rajasthan",
    guests: 10,
    beds: 5,
    baths: 4,
    price: 18500,
    rating: 4.9,
    exclusive: true,
    checkin: "2:00 PM",
    checkout: "11:00 AM",
    amenities: ["WiFi", "Air Conditioner", "Kitchen", "Private Parking", "Swimming Pool"],
    nearby: ["Scenic View", "Restaurants"],
    rules: [],
    photos: [
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Premium lakeside villa with regal interiors and curated experiences."
  }
];
