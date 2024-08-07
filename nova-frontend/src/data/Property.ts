import { Property } from "../interfaces/Property";

export const properties: Property[] = [
    {
      id: 1,
      images: ["/property1.jpg","/property11.jpg", "/property12.jpg", "/property13.jpg", "/property14.jpg", "/property15.jpg"],
      title: "Home in Merrick Way",
      description: "Enchanting three bedroom, three bath home with spacious one bedroom...",
      bedrooms: 3,
      bathrooms: 3,
      area: 4300,
      price: "$540,000",
      isFeatured: true,
      tag: "Hot",
      location: "Merrick Way",
      type: "buy",
      features: ["2 Stories", "Home Theater", "Lawn", "Marble Floors"],
      additionalDetails: [
        "Bedroom Features: Main Floor Master Bedroom, Walk-In Closet",
        "Dining Area: Breakfast Counter/Bar, Living/Dining Combo",
        "Doors & Windows: Bay Window",
        "Entry Location: Mid Level",
        "Exterior Construction: Wood",
        "Fireplace Fuel: Pellet Stove",
        "Fireplace Location: Living Room",
        "Floors: Raised Foundation, Vinyl Tile, Wall-to-Wall Carpet, Wood"
      ],
      agent: "John Doe"
    },
    {
      id: 7,
      images: ["/property7.jpg", "/property22.jpg"],
      title: "Two room in Apartment Flat in Paynesville",
      description: "Enchanting two bedroom, one and half bath home with spacious one bedroom...",
      bedrooms: 2,
      bathrooms: 1.5,
      area: 3300,
      price: "$240,000",
      isFeatured: true,
      tag: "Hot",
      location: "Paynesville",
      type: "buy",
      features: ["Balcony", "Fitness Center", "Swimming Pool", "Concierge Service"],
      additionalDetails: [
        "Bedroom Features: Walk-In Closet",
        "Dining Area: Living/Dining Combo",
        "Doors & Windows: Sliding Glass Door",
        "Entry Location: Main Level",
        "Exterior Construction: Concrete",
        "Fireplace Location: None",
        "Floors: Ceramic Tile, Carpet"
      ],
      agent: "John Brown"
    },
    {
      id: 2,
      images: ["/property2.jpg", "/property22.jpg"],
      title: "Villa in Coral Gables",
      description: "Enjoy serenity of Deering Bay whole day from this spectacular...",
      bedrooms: 4,
      bathrooms: 3.5,
      area: 3500,
      price: "$825,000",
      isFeatured: true,
      tag: "Featured",
      location: "Coral Gables",
      type: "rent",
      features: ["Gated Community", "Private Pool", "Garden", "Outdoor Kitchen"],
      additionalDetails: [
        "Bedroom Features: All Bedrooms Up",
        "Dining Area: Formal Dining Room",
        "Doors & Windows: French Doors",
        "Entry Location: Ground Level",
        "Exterior Construction: Stucco",
        "Fireplace Fuel: Gas",
        "Fireplace Location: Family Room",
        "Floors: Hardwood, Tile"
      ],
      agent: "John Doe"
    },
    {
      id: 3,
      images: ["/property3.jpg", "/property41.jpg", "/property42.jpg", "/property43.jpg", "/property44.jpg", "/property45.jpg", "/property46.jpg"],
      title: "Villa on Hollywood Boulevard",
      description: "The very best waterfront location in Harbor Islands complete with...",
      bedrooms: 4,
      bathrooms: 4,
      area: 4530,
      price: "$740,000",
      isFeatured: true,
      tag: "Trendy",
      location: "Hollywood Boulevard",
      type: "lease",
      features: ["Waterfront", "Dock", "Patio", "Outdoor Shower"],
      additionalDetails: [
        "Bedroom Features: Master Suite, Walk-In Closet",
        "Dining Area: Breakfast Area, Dining/Kitchen Combo",
        "Doors & Windows: Picture Window",
        "Entry Location: Main Level",
        "Exterior Construction: Brick",
        "Fireplace Fuel: Wood",
        "Fireplace Location: Family Room",
        "Floors: Tile, Carpet"
      ],
      agent: "John Brown"
    },
    {
      id: 4,
      images: ["/property4.jpg", "/property52.jpg"],
      title: "House in Beverly Hill",
      description: "In the Elite neighborhood",
      bedrooms: 3,
      bathrooms: 3.5,
      area: 3530,
      price: "$640,000",
      isFeatured: true,
      tag: "Lease",
      location: "Beverly Hill",
      type: "buy",
      features: ["Garage", "Home Office", "Deck", "Fire Pit"],
      additionalDetails: [
        "Bedroom Features: Master Bedroom, Walk-In Closet",
        "Dining Area: Dining Room",
        "Doors & Windows: Double Pane Windows",
        "Entry Location: Foyer",
        "Exterior Construction: Stucco",
        "Fireplace Fuel: Gas",
        "Fireplace Location: Living Room",
        "Floors: Hardwood, Carpet"
      ],
      agent: "John Doe"
    },
    {
      id: 5,
      images: ["/property5.jpg", "/property72.jpg"],
      title: "Land for Sale in Miami",
      description: "Spacious land available for sale in prime location in Miami.",
      area: 15000,
      price: "$1,200,000",
      isFeatured: false,
      tag: "For Lease",
      location: "Miami",
      type: "lease",
      features: ["Fenced", "Flat Terrain", "Utilities Available"],
      additionalDetails: [
        "Land Use: Residential",
        "Topography: Level",
        "Access: Paved Road",
        "Utilities: Electricity Available, Water Available"
      ],
      agent: "John Paul"
    },
    {
      id: 6,
      images: ["/property6.jpeg", "/property62.jpg", "/property63.jpg"],
      title: "Store for Rent in Downtown",
      description: "Modern store space available for rent in the heart of downtown.",
      bathrooms: 1,
      area: 2000,
      price: "$5,000/month",
      isFeatured: false,
      tag: "For Rent",
      location: "Downtown",
      type: "rent",
      features: ["Display Windows", "High Foot Traffic Area", "Security System"],
      additionalDetails: [
        "Building Features: Single Story, High Ceilings",
        "Access: Main Road",
        "Utilities: Electricity, Water",
        "Restroom: Private"
      ],
      agent: "John Paul"
    }
];
