/* =====================================================
   CATEGORY TAXONOMY
   Single source of truth for the five product categories.
   "value" must match the product.category strings below.
===================================================== */

const categories = [
    {
        value: "Mattress",
        label: "Mattress",
        blurb: "Full-support natural latex, built to last a decade or more.",
        image: "images/matterss.jpg"
    },
    {
        value: "Pillow",
        label: "Pillows",
        blurb: "Contoured latex that keeps its shape, night after night.",
        image: "images/pilowish.jpg"
    },
    {
        value: "Topper",
        label: "Mattress Topper",
        blurb: "Add a natural latex layer to any bed you already own.",
        image: "images/topwish.jpg"
    },
    {
        value: "Accessory",
        label: "Accessories",
        blurb: "Cushions and small comforts to round out your setup.",
        image: "images/pillow cover.jpeg"
    }
];


/* =====================================================
   SUBCATEGORY TAXONOMY
   "parent" must match a category "value" above.
   "label" is shortened for Mattress/Topper (shown nested
   under a visible parent), and kept full for Pillow
   Collections and Accessories (need the extra word for
   clarity on their own).
===================================================== */

const subcategories = [

    // Mattress
    { value: "Premium Mattress", label: "Premium", parent: "Mattress" },
    { value: "Standard Mattress", label: "Standard", parent: "Mattress" },
    { value: "Kids Mattress", label: "Kids", parent: "Mattress" },

    // Pillow
    { value: "Everyday Collection", label: "Everyday Collection", parent: "Pillow" },
    { value: "Supporting Collection", label: "Supporting Collection", parent: "Pillow" },
    { value: "Contour Collection", label: "Contour Collection", parent: "Pillow" },
    { value: "Massage Collection", label: "Massage Collection", parent: "Pillow" },
    { value: "Travel Collection", label: "Travel Collection", parent: "Pillow" },
    { value: "Kids Collection", label: "Kids Collection", parent: "Pillow" },

    // Topper
    { value: "Premium Mattress Topper", label: "Premium", parent: "Topper" },
    { value: "Standard Mattress Topper", label: "Standard", parent: "Topper" },
    { value: "Portable Mattress Topper", label: "Portable", parent: "Topper" },

    // Accessory
    { value: "Mattress Accessories", label: "Mattress Accessories", parent: "Accessory" },
    { value: "Pillow Accessories", label: "Pillow Accessories", parent: "Accessory" },
    { value: "Topper Accessories", label: "Topper Accessories", parent: "Accessory" },
    { value: "Cushions", label: "Cushions", parent: "Accessory" }

];


/* =====================================================
   PRODUCT DATABASE
===================================================== */

const products = [

    {
        id: 1,
        name: "LAZOVA HalfNest",
        category: "Pillow",
        subcategory: "Everyday Collection",
        price: 17500,
        material: "Natural Latex",
        size: "Medium",
        firmness: "Medium",
        rating: 5,
        reviews: 38,
        image: "image/product1_1.jpg",
        images: [
            "image/product1_2.jpg",
            "image/product1_3.jpg",
            "image/product1_1.jpg",
            "image/product1_4.jpg"
        ],
        features: [
            "Balanced medium support that works for back and side sleepers alike",
            "Natural latex core keeps its shape night after night, unlike foam that flattens",
            "Breathable open-cell structure so you sleep cool, not overheated",
            "A true everyday pillow — no learning curve, no adjustment period"
        ]
    },


    {
        id: 2,
        name: "LAZOVA ReForm 2 inch",
        category: "Accessory",
        subcategory: "Cushions",
        price: 14500,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Firm",
        rating: 5,
        reviews: 42,
        image: "image/product2.png",
        images: [
            "image/product2.png",
            "image/product2-2.png",
            "image/product2-3.png",
            "image/product2-4.png"
        ],
        features: [
            "Firm 2-inch latex pad reshapes seating without adding bulk",
            "Holds its density under daily use — won't compress flat like synthetic foam",
            "Slim profile fits chairs, benches and car seats without looking bulky",
            "Natural latex resists dust mites, ideal for shared or family seating"
        ]
    },

    {
        id: 3,
        name: "LAZOVA CloudSoft Cushions 2.5 inch",
        category: "Accessory",
        subcategory: "Cushions",
        price: 269500,
        material: "Natural Latex",
        size: "Queen",
        firmness: "Medium",
        rating: 5,
        reviews: 75,
        image: "image/product3_3.jpg",
        images: [
            "image/product3_2.jpg",
            "image/product3_1.jpg",
            "image/product3_3.jpg",
            "image/product3_4.jpg"
        ],
        features: [
            "Medium-density latex cushions the body without feeling stiff",
            "CloudSoft comfort suited for everyday lounging or extra seating support",
            "Naturally resistant to mould and dust mites, even in humid weather",
            "Retains its loft far longer than standard foam cushions"
        ]
    },

    {
        id: 4,
        name: "LAZOVA CloudSoft Cushions 4 inch",
        category: "Accessory",
        subcategory: "Cushions",
        price: 36000,
        material: "Natural Latex",
        size: "Queen",
        firmness: "Soft",
        rating: 5,
        reviews: 31,
        image: "image/product4.png",
        images: [
            "image/product4.png",
            "image/product4-2.png",
            "image/product4-3.png",
            "image/product4-4.png"
        ],
        features: [
            "Extra 4-inch depth gives a noticeably plusher sink-in feel",
            "Soft firmness ideal for relaxed lounging rather than firm support",
            "Same CloudSoft natural latex comfort, just more of it",
            "Breathable core stays fresh even with extended daily use"
        ]
    },

    {
        id: 5,
        name: "LAZOVA GentleFlow",
        category: "Pillow",
        subcategory: "Contour Collection",
        price: 24000,
        material: "Natural Latex",
        size: "Medium",
        firmness: "Firm",
        rating: 5,
        reviews: 42,
        image: "image/product5_1.jpg",
        images: [
            "image/product5_2.jpg",
            "image/product5_3.jpg",
            "image/product5_1.jpg",
            "image/product5_4.jpg"
        ],
        popular: true,
        features: [
            "Contoured shape cradles the neck for proper spinal alignment",
            "Firm support prevents the head sinking too deep during the night",
            "Designed for side and back sleepers who wake up with neck stiffness",
            "GentleFlow's ergonomic curve reduces pressure points around the shoulders"
        ]
    },

    {
        id: 6,
        name: "LAZOVA BabyNest",
        category: "Pillow",
        subcategory: "Kids Collection",
        price: 10300,
        material: "Natural Latex",
        size: "Medium",
        firmness: "Soft",
        rating: 5,
        reviews: 19,
        image: "image/product6_1.jpg",
        images: [
            "image/product6_2.jpg",
            "image/product6_3.jpg",
            "image/product6_1.jpg",
            "image/product6_4.jpg"
        ],
        features: [
            "Extra-soft latex designed specifically for a child's developing neck and spine",
            "Naturally hypoallergenic and free from harsh chemical treatments",
            "Lightweight and breathable, reducing the risk of overheating at night",
            "Sized for kids — never bulky or oversized like adult pillows"
        ]
    },

    {
        id: 7,
        name: "LAZOVA TravelEase",
        category: "Pillow",
        subcategory: "Travel Collection",
        price: 14500,
        material: "Natural Latex",
        size: "Medium",
        firmness: "Firm",
        rating: 5,
        reviews: 27,
        image: "image/product7_1.jpg",
        images: [
            "image/product7_2.jpg",
            "image/product7_3.jpg",
            "image/product7_1.jpg",
            "image/product7_4.jpg"
        ],
        features: [
            "Compact, firm support that holds its shape inside a suitcase or car seat",
            "Keeps the neck supported during long flights, drives or bus journeys",
            "Quick to air out and refresh after travel — no lingering odours",
            "Durable latex core that won't flatten after repeated packing and travel"
        ]
    },

    {
        id: 8,
        name: "LAZOVA Ergo Cushions 2 inch",
        category: "Accessory",
        subcategory: "Cushions",
        price: 42000,
        material: "Natural Latex",
        size: "King",
        firmness: "Medium",
        rating: 5,
        reviews: 44,
        image: "image/product8.png",
        images: [
            "image/product8.png",
            "image/product8-2.png",
            "image/product8-3.png",
            "image/product8-4.png"
        ],
        popular: true,
        features: [
            "Ergonomically shaped to reduce pressure on hips and lower back while seated",
            "Medium firmness balances cushioning with real support, not just softness",
            "Generous King-size coverage for wider chairs, sofas or floor seating",
            "Natural latex construction that won't develop permanent dents over time"
        ]
    },

    {
        id: 9,
        name: "LAZOVA TravelArc",
        category: "Pillow",
        subcategory: "Travel Collection",
        price: 10500,
        material: "Natural Latex",
        size: "Medium",
        firmness: "Soft",
        rating: 5,
        reviews: 32,
        image: "image/product9_1.jpg",
        images: [
            "image/product9_2.jpg",
            "image/product9_3.jpg",
            "image/product9_1.jpg",
            "image/product9_4.jpg"
        ],
        features: [
            "Soft, curved design cradles the neck during naps on the go",
            "Compact enough to clip onto a bag or carry-on without adding bulk",
            "Gentle support ideal for shorter trips where a firm pillow feels excessive",
            "Breathable latex keeps things fresh even in warm travel conditions"
        ]
    },

    {
        id: 10,
        name: "LAZOVA Ergo Cushions 4 inch",
        category: "Accessory",
        subcategory: "Cushions",
        price: 360000,
        material: "Natural Latex",
        size: "King",
        firmness: "Firm",
        rating: 5,
        reviews: 63,
        image: "image/product10.png",
        images: [
            "image/product10.png",
            "image/product10-2.png",
            "image/product10-3.png",
            "image/product10-4.png"
        ],
        features: [
            "Firm 4-inch depth gives substantial, long-lasting seat support",
            "Ergo shaping distributes weight evenly to reduce pressure points",
            "Built for King-size seating where extra coverage matters",
            "Dense natural latex holds firm under regular daily use, unlike standard foam"
        ]
    },

    {
        id: 11,
        name: "Luxury Latex Mattress",
        category: "Mattress",
        subcategory: "Premium Mattress",
        price: 315000,
        material: "Organic Latex",
        size: "King",
        firmness: "Medium",
        rating: 5,
        reviews: 49,
        image: "image/product11.png",
        images: [
            "image/product11.png",
            "image/product11-2.png",
            "image/product11-3.png",
            "image/product11-4.png"
        ],
        popular: true,
        features: [
            "Certified organic latex core, not just natural — grown and processed to a higher standard",
            "Medium firmness balances pressure relief with proper spinal support for most sleepers",
            "Full King size accommodates couples without either partner feeling crowded",
            "Engineered to outlast a typical foam mattress by a decade or more"
        ]
    },

    {
        id: 12,
        name: "LAZOVA ReForm 4 inch",
        category: "Accessory",
        subcategory: "Cushions",
        price: 13500,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Soft",
        rating: 4,
        reviews: 17,
        image: "image/product12.png",
        images: [
            "image/product12.png",
            "image/product12-2.png",
            "image/product12-3.png",
            "image/product12-4.png"
        ],
        features: [
            "Extra cushioning depth for a noticeably softer seated feel",
            "ReForm shape adapts to the body without losing its underlying support",
            "Standard size fits most everyday chairs and seating without fuss",
            "Soft natural latex that stays cool, unlike synthetic foam cushions"
        ]
    },

    {
        id: 13,
        name: "LAZOVA Bambino",
        category: "Pillow",
        subcategory: "Massage Collection",
        price: 18000,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Firm",
        rating: 4,
        reviews: 34,
        image: "image/product13_2.jpg",
        images: [
            "image/product13_2.jpg",
            "image/product13_3.jpg",
            "image/product13_1.jpg",
            "image/product13_4.jpg"
        ],
        features: [
            "Firm latex core designed to support targeted pressure-point relief",
            "Compact Bambino shape fits naturally under the neck or lower back",
            "Holds its density through repeated daily use, unlike foam massage cushions",
            "Natural latex surface stays breathable during extended use"
        ]
    },

    {
        id: 14,
        name: "LAZOVA PebbleRest",
        category: "Pillow",
        subcategory: "Massage Collection",
        price: 15000,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Soft",
        rating: 5,
        reviews: 18,
        image: "image/product14_1.jpg",
        images: [
            "image/product14_2.jpg",
            "image/product14_3.jpg",
            "image/product14_1.jpg",
            "image/product14_4.jpg"
        ],
        features: [
            "Soft, rounded PebbleRest shape gently supports the neck and shoulders",
            "Ideal for those who find firmer massage pillows too intense",
            "Compact size makes it easy to reposition wherever support is needed",
            "Naturally resists dust mites, unlike standard fabric-filled cushions"
        ]
    },

    {
        id: 15,
        name: "LAZOVA KidComfort",
        category: "Pillow",
        subcategory: "Kids Collection",
        price: 11000,
        material: "Natural Latex",
        size: "Medium",
        firmness: "Soft",
        rating: 5,
        reviews: 40,
        image: "image/product15_1.jpg",
        images: [
            "image/product15_2.jpg",
            "image/product15_3.jpg",
            "image/product15_1.jpg",
            "image/product15_4.jpg"
        ],
        features: [
            "Soft-medium support suited to growing necks without being too flat",
            "Naturally hypoallergenic, a safer choice for a child's sensitive skin",
            "Breathable latex helps regulate temperature through the night",
            "Sized appropriately for kids, avoiding the bulk of adult pillows"
        ]
    },

    {
        id: 16,
        name: "LAZOVA RoyalRest",
        category: "Pillow",
        subcategory: "Everyday Collection",
        price: 19500,
        material: "Natural Latex",
        size: "Queen",
        firmness: "Soft",
        rating: 4,
        reviews: 24,
        image: "image/product16_1.jpg",
        images: [
            "image/product16_2.jpg",
            "image/product16_3.jpg",
            "image/product16_1.jpg",
            "image/product16_4.jpg"
        ],
        features: [
            "Generous Queen size gives extra room to settle into a comfortable position",
            "Soft loft suits sleepers who prefer a plush, sink-in feel",
            "Retains its shape night after night, unlike synthetic foam alternatives",
            "A relaxed, everyday comfort pillow with no firmness learning curve"
        ]
    },

    {
        id: 17,
        name: "LAZOVA Align",
        category: "Pillow",
        subcategory: "Massage Collection",
        price: 13500,
        material: "Natural Latex",
        size: "King",
        firmness: "Soft",
        rating: 5,
        reviews: 34,
        image: "image/product17_2.jpg",
        images: [
            "image/product17_1.jpg",
            "image/product17_3.jpg",
            "image/product17_2.jpg",
            "image/product17_4.jpg"
        ],
        features: [
            "Designed to gently guide the neck and spine into natural alignment",
            "Soft King-size profile suits sleepers who want support without pressure",
            "Helps ease tension built up from long hours at a desk or screen",
            "Natural latex responsiveness adapts as you shift position through the night"
        ]
    },

    {
        id: 18,
        name: "LAZOVA OrthoNest",
        category: "Pillow",
        subcategory: "Massage Collection",
        price: 13500,
        material: "Natural Latex",
        size: "King",
        firmness: "Soft",
        rating: 5,
        reviews: 36,
        image: "image/product18_1.jpg",
        images: [
            "image/product18_2.jpg",
            "image/product18_3.jpg",
            "image/product18_1.jpg",
            "image/product18_4.jpg"
        ],
        features: [
            "Orthopaedic-inspired shape supports the neck's natural curve",
            "Soft King-size comfort suited to those recovering from neck strain",
            "Reduces tossing and turning by cushioning pressure points evenly",
            "Long-lasting latex support that resists flattening, unlike memory foam"
        ]
    },

    {
        id: 19,
        name: "LAZOVA DonutSupport",
        category: "Pillow",
        subcategory: "Travel Collection",
        price: 8500,
        material: "Natural Latex",
        size: "Medium",
        firmness: "Firm",
        rating: 4,
        reviews: 44,
        image: "image/product19_2.jpg",
        images: [
            "image/product19_2.jpg",
            "image/product19_3.jpg",
            "image/product19_1.jpg",
            "image/product19_4.jpg"
        ],
        features: [
            "Donut-shaped design keeps the neck cradled without collapsing sideways",
            "Firm support holds its shape through hours of travel",
            "Compact enough to pack without taking up valuable luggage space",
            "A practical, budget-friendly option for frequent short trips"
        ]
    },

    {
        id: 20,
        name: "LAZOVA VentraRoll",
        category: "Pillow",
        subcategory: "Supporting Collection",
        price: 8500,
        material: "Natural Latex",
        size: "King",
        firmness: "Firm",
        rating: 4,
        reviews: 38,
        image: "image/product20_1.jpg",
        images: [
            "image/product20_2.jpg",
            "image/product20_3.jpg",
            "image/product20_1.jpg",
            "image/product20_4.jpg"
        ],
        features: [
            "Firm roll shape provides targeted support under the knees or lower back",
            "King-length roll suits taller frames or wider support needs",
            "Holds its cylindrical shape under sustained pressure, unlike stuffed rolls",
            "A simple, affordable way to relieve pressure during sleep or rest"
        ]
    },

    {
        id: 21,
        name: "LAZOVA HeadRest",
        category: "Pillow",
        subcategory: "Travel Collection",
        price: 5500,
        material: "Natural Latex",
        size: "Medium",
        firmness: "Medium",
        rating: 5,
        reviews: 42,
        image: "image/product21_1.jpg",
        images: [
            "image/product21_2.jpg",
            "image/product21_3.jpg",
            "image/product21_1.jpg",
            "image/product21_4.jpg"
        ],
        popular: true,
        features: [
            "Balanced medium firmness suited to quick naps and short journeys",
            "Most affordable entry point into natural latex comfort",
            "Compact and lightweight, easy to carry in a bag or car",
            "Simple, no-fuss head support without a steep price tag"
        ]
    },

    {
        id: 22,
        name: "LAZOVA Spinal Cushion",
        category: "Accessory",
        subcategory: "Cushions",
        price: 5500,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Soft",
        rating: 5,
        reviews: 0,
        image: "image/product22_2.jpg",
        images: [
            "image/product22_1.jpg",
            "image/product22_3.jpg",
            "image/product22_2.jpg",
            "image/product22_4.jpg"
        ],
        features: [
            "Soft cushioning designed to ease pressure along the lower spine",
            "An affordable way to add lumbar-friendly support to any chair",
            "Compact Standard size fits most office and home seating",
            "Natural latex won't flatten as quickly as synthetic foam inserts"
        ]
    },

    {
        id: 23,
        name: "LAZOVA GrandRest",
        category: "Pillow",
        subcategory: "Everyday Collection",
        price: 25500,
        material: "Natural Latex",
        size: "King",
        firmness: "Soft",
        rating: 4,
        reviews: 26,
        image: "image/product23_1.jpg",
        images: [
            "image/product23_2.jpg",
            "image/product23_3.jpg",
            "image/product23_1.jpg",
            "image/product23_4.jpg"
        ],
        features: [
            "Full King size gives generous room for restless sleepers",
            "Soft loft delivers a plush feel without sacrificing support",
            "Premium everyday comfort built to outlast synthetic pillows for years",
            "Naturally breathable, staying cool even through warmer nights"
        ]
    },

    {
        id: 24,
        name: "LAZOVA BreathFlow",
        category: "Pillow",
        subcategory: "Contour Collection",
        price: 10500,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Firm",
        rating: 4,
        reviews: 22,
        image: "image/product24_1.jpg",
        images: [
            "image/product24_1.jpg",
            "image/product24_3.jpg",
            "image/product24_2.jpg",
            "image/product24_4.jpg"
        ],
        features: [
            "Contoured shape encourages proper neck alignment while you sleep",
            "Firm support prevents excessive sinking for back and side sleepers",
            "Open-cell latex structure promotes airflow to reduce night sweats",
            "An accessible entry point into the Contour Collection's ergonomic design"
        ]
    },

    {
        id: 25,
        name: "LAZOVA CompactRest",
        category: "Pillow",
        subcategory: "Everyday Collection",
        price: 17800,
        material: "Natural Latex",
        size: "Medium",
        firmness: "Soft",
        rating: 5,
        reviews: 30,
        image: "image/product25_2.jpg",
        images: [
            "image/product25_1.jpg",
            "image/product25_3.jpg",
            "image/product25_2.jpg",
            "image/product25_4.jpg"
        ],
        features: [
            "Compact medium profile suits sleepers who prefer a lower loft",
            "Soft comfort without the bulk of a full-size pillow",
            "Fits neatly into smaller beds or as a secondary support pillow",
            "Natural latex keeps its shape far longer than a compact foam pillow would"
        ]
    },

    {
        id: 26,
        name: "LAZOVA MaxiFlow",
        category: "Pillow",
        subcategory: "Contour Collection",
        price: 11800,
        material: "Natural Latex",
        size: "King",
        firmness: "Medium",
        rating: 5,
        reviews: 16,
        image: "image/product26_2.jpg",
        images: [
            "image/product26_1.jpg",
            "image/product26_3.jpg",
            "image/product26_2.jpg",
            "image/product26_4.jpg"
        ],
        features: [
            "Extra-wide King contour supports the full width of the shoulders",
            "Medium firmness balances structure with a comfortable sink-in feel",
            "Ergonomic curve reduces pressure points across a larger sleeping area",
            "Built to hold its contour shape through nightly repositioning"
        ]
    },

    {
        id: 27,
        name: "LAZOVA TeenFlow",
        category: "Pillow",
        subcategory: "Contour Collection",
        price: 11800,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Firm",
        rating: 4,
        reviews: 24,
        image: "image/product27_2.jpg",
        images: [
            "image/product27_2.jpg",
            "image/product27_3.jpg",
            "image/product27_1.jpg",
            "image/product27_4.jpg"
        ],
        features: [
            "Firm contour support sized for growing teens and smaller frames",
            "Encourages healthy neck posture during key growth years",
            "Standard size avoids the bulk of adult-sized contour pillows",
            "Durable natural latex built to handle years of daily use"
        ]
    },

    {
        id: 28,
        name: "LAZOVA RollEase",
        category: "Pillow",
        subcategory: "Supporting Collection",
        price: 9800,
        material: "Natural Latex",
        size: "Medium",
        firmness: "Medium",
        rating: 5,
        reviews: 28,
        image: "image/product28_2.jpg",
        images: [
            "image/product28_1.jpg",
            "image/product28_3.jpg",
            "image/product28_2.jpg",
            "image/product28_4.jpg"
        ],
        features: [
            "Medium-firm roll eases pressure under the knees, ankles or lower back",
            "Versatile enough to use while sleeping, reading or resting",
            "Holds its round shape instead of flattening like a stuffed roll",
            "A practical, everyday support accessory at an accessible price"
        ]
    },

    {
        id: 29,
        name: "LAZOVA EuroNest",
        category: "Pillow",
        subcategory: "Everyday Collection",
        price: 17000,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Firm",
        rating: 5,
        reviews: 20,
        image: "image/product29_2.jpg",
        images: [
            "image/product29_1.jpg",
            "image/product29_3.jpg",
            "image/product29_2.jpg",
            "image/product29_4.jpg"
        ],
        features: [
            "European-style firm support for sleepers who prefer a sturdier loft",
            "Standard sizing fits most bed frames and pillowcases without adjustment",
            "Holds its structure night after night, unlike softer synthetic pillows",
            "A dependable, no-frills everyday pillow built on natural latex comfort"
        ]
    },

    {
        id: 30,
        name: "LAZOVA ClassicRest",
        category: "Pillow",
        subcategory: "Everyday Collection",
        price: 17000,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Soft",
        rating: 5,
        reviews: 32,
        image: "image/product30_1.jpg",
        images: [
            "image/product30_2.jpg",
            "image/product30_3.jpg",
            "image/product30_1.jpg",
            "image/product30_4.jpg"
        ],
        features: [
            "Classic soft comfort for sleepers who prefer a gentler loft",
            "Standard size makes it an easy, familiar fit for any bedroom",
            "Reliable, everyday support without the flattening common in synthetic pillows",
            "A straightforward first step into natural latex sleep comfort"
        ]
    },

    {
        id: 31,
        name: "LAZOVA ComfortNest",
        category: "Pillow",
        subcategory: "Everyday Collection",
        price: 16800,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Soft",
        rating: 4,
        reviews: 22,
        image: "image/product31_2.jpg",
        images: [
            "image/product31_3.jpg",
            "image/product31_2.jpg",
            "image/product31_1.jpg",
            "image/product31_4.jpg"
        ],
        features: [
            "Soft, cushioned feel designed purely for relaxed, easy comfort",
            "Standard size suits most sleeping positions without extra adjustment",
            "Naturally breathable, helping avoid the overheating common with soft foam",
            "A comfortable, accessible everyday pillow backed by natural latex durability"
        ]
    },

    {
        id: 32,
        name: "LAZOVA GentlePebble",
        category: "Pillow",
        subcategory: "Massage Collection",
        price: 12800,
        material: "Natural Latex",
        size: "Medium",
        firmness: "Soft",
        rating: 5,
        reviews: 26,
        image: "image/product32_1.jpg",
        images: [
            "image/product32_2.jpg",
            "image/product32_3.jpg",
            "image/product32_1.jpg",
            "image/product32_4.jpg"
        ],
        features: [
            "Gentle, rounded shape offers light pressure relief without intensity",
            "Soft firmness suited to sensitive areas like the neck or lower back",
            "Compact enough to reposition easily during rest or sleep",
            "A softer alternative within the Massage Collection for gentler support"
        ]
    },

    {
        id: 33,
        name: "LAZOVA ClassicFlow",
        category: "Pillow",
        subcategory: "Contour Collection",
        price: 11800,
        material: "Natural Latex",
        size: "Medium",
        firmness: "Soft",
        rating: 5,
        reviews: 26,
        image: "image/product33_2.jpg",
        images: [
            "image/product33_1.jpg",
            "image/product33_3.jpg",
            "image/product33_2.jpg",
            "image/product33_4.jpg"
        ],
        features: [
            "Soft contour shape eases into the neck without feeling rigid",
            "Medium size suits sleepers new to contoured pillow support",
            "Encourages better alignment while still feeling plush and familiar",
            "An approachable entry point into ergonomic, contoured sleep support"
        ]
    },

    {
        id: 34,
        name: "LAZOVA PureRest",
        category: "Pillow",
        subcategory: "Everyday Collection",
        price: 11800,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Soft",
        rating: 5,
        reviews: 20,
        image: "image/product34_1.jpg",
        images: [
            "image/product34_2.jpg",
            "image/product34_3.jpg",
            "image/product34_1.jpg",
            "image/product34_4.jpg"
        ],
        features: [
            "Simple, soft comfort built on 100% natural latex, nothing else",
            "Standard size fits seamlessly into any existing bedding setup",
            "An affordable way to experience genuine latex comfort daily",
            "Naturally resistant to dust mites and mould, unlike synthetic fillings"
        ]
    },

    {
        id: 35,
        name: "LAZOVA RoyalComfort",
        category: "Pillow",
        subcategory: "Everyday Collection",
        price: 17900,
        material: "Natural Latex",
        size: "Queen",
        firmness: "Soft",
        rating: 5,
        reviews: 28,
        image: "image/product35_2.jpg",
        images: [
            "image/product35_1.jpg",
            "image/product35_3.jpg",
            "image/product35_2.jpg",
            "image/product35_4.jpg"
        ],
        features: [
            "Queen-size loft offers generous room to settle in comfortably",
            "Soft support ideal for sleepers who prioritise a plush feel",
            "A step up in size from Standard, without stepping up in firmness",
            "Retains its shape and softness far longer than synthetic alternatives"
        ]
    },

    {
        id: 36,
        name: "LAZOVA BalanceRest",
        category: "Pillow",
        subcategory: "Kids Collection",
        price: 9900,
        material: "Natural Latex",
        size: "Medium",
        firmness: "Soft",
        rating: 5,
        reviews: 36,
        image: "image/product36_1.jpg",
        images: [
            "image/product36_2.jpg",
            "image/product36_3.jpg",
            "image/product36_1.jpg",
            "image/product36_4.jpg"
        ],
        features: [
            "Soft, balanced support suited to a child's growing neck",
            "Naturally hypoallergenic, a considerate choice for young sleepers",
            "Breathable latex helps keep kids cool through the night",
            "An affordable way to introduce quality latex sleep support early"
        ]
    },

    {
        id: 37,
        name: "LAZOVA BadyFresh",
        category: "Pillow",
        subcategory: "Kids Collection",
        price: 23400,
        material: "Natural Latex",
        size: "Medium",
        firmness: "Soft",
        rating: 5,
        reviews: 42,
        image: "image/product37_1.jpg",
        images: [
            "image/product37_2.jpg",
            "image/product37_3.jpg",
            "image/product37_1.jpg",
            "image/product37_4.jpg"
        ],
        features: [
            "Premium kids' pillow with extra attention to freshness and hygiene",
            "Soft, supportive comfort designed specifically for younger sleepers",
            "Naturally resistant to dust mites, mould and common allergens",
            "A higher-tier option within the Kids Collection for extra peace of mind"
        ]
    },

    {
        id: 38,
        name: "LAZOVA CoreRoll",
        category: "Pillow",
        subcategory: "Supporting Collection",
        price: 23400,
        material: "Natural Latex",
        size: "Queen",
        firmness: "Firm",
        rating: 5,
        reviews: 38,
        image: "image/product38_1.jpg",
        images: [
            "image/product38_2.jpg",
            "image/product38_3.jpg",
            "image/product38_1.jpg",
            "image/product38_4.jpg"
        ],
        features: [
            "Firm, substantial roll built for consistent core and lower-back support",
            "Queen-length sizing suits larger frames or wider support needs",
            "Holds firm under sustained pressure, ideal for extended use",
            "A premium option within the Supporting Collection for serious back support"
        ]
    },

    {
        id: 39,
        name: "LAZOVA AeroRoll",
        category: "Pillow",
        subcategory: "Supporting Collection",
        price: 19700,
        material: "Natural Latex",
        size: "Medium",
        firmness: "Soft",
        rating: 5,
        reviews: 20,
        image: "image/product39_1.jpg",
        images: [
            "image/product39_2.jpg",
            "image/product39_3.jpg",
            "image/product39_1.jpg",
            "image/product39_4.jpg"
        ],
        features: [
            "Soft roll support designed for gentler pressure relief",
            "Lightweight, breathable build keeps things cool during extended use",
            "Medium sizing suits everyday support needs without bulk",
            "A comfortable, softer alternative within the Supporting Collection"
        ]
    },
    
    {
        id: 40,
        name: "LAZOVA Ergo Cushions 4 inch",
        category: "Accessory",
        subcategory: "Cushions",
        price: 360000,
        material: "Natural Latex",
        size: "King",
        firmness: "Firm",
        rating: 5,
        reviews: 63,
        image: "image/product40.png",
        images: [
            "image/product40.png",
            "image/product40-2.png",
            "image/product40-3.png",
            "image/product40-4.png"
        ],
        features: [
            "Firm 4-inch depth gives substantial, long-lasting seat support",
            "Ergo shaping distributes weight evenly to reduce pressure points",
            "Built for King-size seating where extra coverage matters",
            "Dense natural latex holds firm under regular daily use, unlike standard foam"
        ]
    },

    {
        id: 41,
        name: "LAZOVA AirRest",
        category: "Pillow",
        subcategory: "Massage Collection",
        price: 15400,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Soft",
        rating: 5,
        reviews: 28,
        image: "image/product41_1.jpg",
        images: [
            "image/product41_2.jpg",
            "image/product41_3.jpg",
            "image/product41_1.jpg",
            "image/product41_4.jpg"
        ],
        features: [
            "Soft, airy support ideal for gentle, everyday pressure relief",
            "Standard size fits naturally under the neck or shoulders",
            "Breathable latex structure avoids the heat build-up of foam massage pillows",
            "A comfortable, approachable option within the Massage Collection"
        ]
    },

    {
        id: 42,
        name: "Cushion Coming Soon",
        category: "Accessory",
        subcategory: "Cushions",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Soft",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-cushion1.jpg",
        images: [
            "image/placeholder-cushion1.jpg"
        ]
    },

    {
        id: 43,
        name: "Cushion Coming Soon",
        category: "Accessory",
        subcategory: "Cushions",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Soft",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-cushion2.jpg",
        images: [
            "image/placeholder-cushion2.jpg"
        ]
    },

    {
        id: 44,
        name: "Premium Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Premium Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-premium.jpg",
        images: [
            "image/placeholder-mattress-premium.jpg"
        ]
    },

    {
        id: 45,
        name: "Premium Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Premium Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-premium.jpg",
        images: [
            "image/placeholder-mattress-premium.jpg"
        ]
    },

    {
        id: 46,
        name: "Premium Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Premium Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-premium.jpg",
        images: [
            "image/placeholder-mattress-premium.jpg"
        ]
    },

    {
        id: 47,
        name: "Premium Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Premium Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-premium.jpg",
        images: [
            "image/placeholder-mattress-premium.jpg"
        ]
    },

    {
        id: 48,
        name: "Premium Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Premium Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-premium.jpg",
        images: [
            "image/placeholder-mattress-premium.jpg"
        ]
    },

    {
        id: 49,
        name: "Premium Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Premium Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-premium.jpg",
        images: [
            "image/placeholder-mattress-premium.jpg"
        ]
    },

    {
        id: 50,
        name: "Premium Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Premium Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-premium.jpg",
        images: [
            "image/placeholder-mattress-premium.jpg"
        ]
    },

    {
        id: 51,
        name: "Premium Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Premium Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-premium.jpg",
        images: [
            "image/placeholder-mattress-premium.jpg"
        ]
    },

    {
        id: 52,
        name: "Premium Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Premium Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-premium.jpg",
        images: [
            "image/placeholder-mattress-premium.jpg"
        ]
    },

    {
        id: 53,
        name: "Premium Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Premium Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-premium.jpg",
        images: [
            "image/placeholder-mattress-premium.jpg"
        ]
    },

    {
        id: 54,
        name: "Premium Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Premium Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-premium.jpg",
        images: [
            "image/placeholder-mattress-premium.jpg"
        ]
    },

    {
        id: 55,
        name: "Premium Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Premium Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-premium.jpg",
        images: [
            "image/placeholder-mattress-premium.jpg"
        ]
    },

    {
        id: 56,
        name: "Premium Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Premium Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-premium.jpg",
        images: [
            "image/placeholder-mattress-premium.jpg"
        ]
    },

    {
        id: 57,
        name: "Premium Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Premium Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-premium.jpg",
        images: [
            "image/placeholder-mattress-premium.jpg"
        ]
    },

    {
        id: 58,
        name: "Premium Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Premium Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-premium.jpg",
        images: [
            "image/placeholder-mattress-premium.jpg"
        ]
    },

    {
        id: 59,
        name: "Premium Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Premium Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-premium.jpg",
        images: [
            "image/placeholder-mattress-premium.jpg"
        ]
    },

    {
        id: 60,
        name: "Premium Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Premium Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-premium.jpg",
        images: [
            "image/placeholder-mattress-premium.jpg"
        ]
    },

    {
        id: 61,
        name: "Premium Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Premium Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-premium.jpg",
        images: [
            "image/placeholder-mattress-premium.jpg"
        ]
    },

    {
        id: 62,
        name: "Standard Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Standard Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-standard.jpg",
        images: [
            "image/placeholder-mattress-standard.jpg"
        ]
    },

    {
        id: 63,
        name: "Standard Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Standard Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-standard.jpg",
        images: [
            "image/placeholder-mattress-standard.jpg"
        ]
    },

    {
        id: 64,
        name: "Standard Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Standard Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-standard.jpg",
        images: [
            "image/placeholder-mattress-standard.jpg"
        ]
    },

    {
        id: 65,
        name: "Standard Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Standard Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-standard.jpg",
        images: [
            "image/placeholder-mattress-standard.jpg"
        ]
    },

    {
        id: 66,
        name: "Standard Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Standard Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-standard.jpg",
        images: [
            "image/placeholder-mattress-standard.jpg"
        ]
    },

    {
        id: 67,
        name: "Standard Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Standard Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-standard.jpg",
        images: [
            "image/placeholder-mattress-standard.jpg"
        ]
    },

    {
        id: 68,
        name: "Standard Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Standard Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-standard.jpg",
        images: [
            "image/placeholder-mattress-standard.jpg"
        ]
    },

    {
        id: 69,
        name: "Standard Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Standard Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-standard.jpg",
        images: [
            "image/placeholder-mattress-standard.jpg"
        ]
    },

    {
        id: 70,
        name: "Standard Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Standard Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-standard.jpg",
        images: [
            "image/placeholder-mattress-standard.jpg"
        ]
    },

    {
        id: 71,
        name: "Standard Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Standard Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-standard.jpg",
        images: [
            "image/placeholder-mattress-standard.jpg"
        ]
    },

    {
        id: 72,
        name: "Standard Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Standard Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-standard.jpg",
        images: [
            "image/placeholder-mattress-standard.jpg"
        ]
    },

    {
        id: 73,
        name: "Standard Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Standard Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-standard.jpg",
        images: [
            "image/placeholder-mattress-standard.jpg"
        ]
    },

    {
        id: 74,
        name: "Kids Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Kids Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-kids.jpg",
        images: [
            "image/placeholder-mattress-kids.jpg"
        ]
    },

    {
        id: 75,
        name: "Kids Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Kids Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-kids.jpg",
        images: [
            "image/placeholder-mattress-kids.jpg"
        ]
    },

    {
        id: 76,
        name: "Kids Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Kids Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-kids.jpg",
        images: [
            "image/placeholder-mattress-kids.jpg"
        ]
    },

    {
        id: 77,
        name: "Kids Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Kids Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-kids.jpg",
        images: [
            "image/placeholder-mattress-kids.jpg"
        ]
    },

    {
        id: 78,
        name: "Kids Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Kids Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-kids.jpg",
        images: [
            "image/placeholder-mattress-kids.jpg"
        ]
    },

    {
        id: 79,
        name: "Kids Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Kids Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-kids.jpg",
        images: [
            "image/placeholder-mattress-kids.jpg"
        ]
    },

    {
        id: 80,
        name: "Kids Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Kids Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-kids.jpg",
        images: [
            "image/placeholder-mattress-kids.jpg"
        ]
    },

    {
        id: 81,
        name: "Kids Mattress Coming Soon",
        category: "Mattress",
        subcategory: "Kids Mattress",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-kids.jpg",
        images: [
            "image/placeholder-mattress-kids.jpg"
        ]
    },

    {
        id: 82,
        name: "Premium Topper Coming Soon",
        category: "Topper",
        subcategory: "Premium Mattress Topper",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-topper-premium.jpg",
        images: [
            "image/placeholder-topper-premium.jpg"
        ],
        popular: true
    },

    {
        id: 83,
        name: "Premium Topper Coming Soon",
        category: "Topper",
        subcategory: "Premium Mattress Topper",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-topper-premium.jpg",
        images: [
            "image/placeholder-topper-premium.jpg"
        ]
    },

    {
        id: 84,
        name: "Premium Topper Coming Soon",
        category: "Topper",
        subcategory: "Premium Mattress Topper",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-topper-premium.jpg",
        images: [
            "image/placeholder-topper-premium.jpg"
        ]
    },

    {
        id: 85,
        name: "Premium Topper Coming Soon",
        category: "Topper",
        subcategory: "Premium Mattress Topper",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-topper-premium.jpg",
        images: [
            "image/placeholder-topper-premium.jpg"
        ]
    },

    {
        id: 86,
        name: "Premium Topper Coming Soon",
        category: "Topper",
        subcategory: "Premium Mattress Topper",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-topper-premium.jpg",
        images: [
            "image/placeholder-topper-premium.jpg"
        ]
    },

    {
        id: 87,
        name: "Premium Topper Coming Soon",
        category: "Topper",
        subcategory: "Premium Mattress Topper",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-topper-premium.jpg",
        images: [
            "image/placeholder-topper-premium.jpg"
        ]
    },

    {
        id: 88,
        name: "Premium Topper Coming Soon",
        category: "Topper",
        subcategory: "Premium Mattress Topper",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-topper-premium.jpg",
        images: [
            "image/placeholder-topper-premium.jpg"
        ]
    },

    {
        id: 89,
        name: "Premium Topper Coming Soon",
        category: "Topper",
        subcategory: "Premium Mattress Topper",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-topper-premium.jpg",
        images: [
            "image/placeholder-topper-premium.jpg"
        ]
    },

    {
        id: 90,
        name: "Premium Topper Coming Soon",
        category: "Topper",
        subcategory: "Premium Mattress Topper",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-topper-premium.jpg",
        images: [
            "image/placeholder-topper-premium.jpg"
        ]
    },

    {
        id: 91,
        name: "Premium Topper Coming Soon",
        category: "Topper",
        subcategory: "Premium Mattress Topper",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-topper-premium.jpg",
        images: [
            "image/placeholder-topper-premium.jpg"
        ]
    },

    {
        id: 92,
        name: "Standard Topper Coming Soon",
        category: "Topper",
        subcategory: "Standard Mattress Topper",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-topper-standard.jpg",
        images: [
            "image/placeholder-topper-standard.jpg"
        ]
    },

    {
        id: 93,
        name: "Standard Topper Coming Soon",
        category: "Topper",
        subcategory: "Standard Mattress Topper",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-topper-standard.jpg",
        images: [
            "image/placeholder-topper-standard.jpg"
        ]
    },

    {
        id: 94,
        name: "Standard Topper Coming Soon",
        category: "Topper",
        subcategory: "Standard Mattress Topper",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-topper-standard.jpg",
        images: [
            "image/placeholder-topper-standard.jpg"
        ]
    },

    {
        id: 95,
        name: "Standard Topper Coming Soon",
        category: "Topper",
        subcategory: "Standard Mattress Topper",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-topper-standard.jpg",
        images: [
            "image/placeholder-topper-standard.jpg"
        ]
    },

    {
        id: 96,
        name: "Standard Topper Coming Soon",
        category: "Topper",
        subcategory: "Standard Mattress Topper",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-topper-standard.jpg",
        images: [
            "image/placeholder-topper-standard.jpg"
        ]
    },

    {
        id: 97,
        name: "Standard Topper Coming Soon",
        category: "Topper",
        subcategory: "Standard Mattress Topper",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-topper-standard.jpg",
        images: [
            "image/placeholder-topper-standard.jpg"
        ]
    },

    {
        id: 98,
        name: "Standard Topper Coming Soon",
        category: "Topper",
        subcategory: "Standard Mattress Topper",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-topper-standard.jpg",
        images: [
            "image/placeholder-topper-standard.jpg"
        ]
    },

    {
        id: 99,
        name: "Standard Topper Coming Soon",
        category: "Topper",
        subcategory: "Standard Mattress Topper",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-topper-standard.jpg",
        images: [
            "image/placeholder-topper-standard.jpg"
        ]
    },

    {
        id: 100,
        name: "Standard Topper Coming Soon",
        category: "Topper",
        subcategory: "Standard Mattress Topper",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-topper-standard.jpg",
        images: [
            "image/placeholder-topper-standard.jpg"
        ]
    },

    {
        id: 101,
        name: "Standard Topper Coming Soon",
        category: "Topper",
        subcategory: "Standard Mattress Topper",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-topper-standard.jpg",
        images: [
            "image/placeholder-topper-standard.jpg"
        ]
    },

    {
        id: 102,
        name: "Standard Topper Coming Soon",
        category: "Topper",
        subcategory: "Standard Mattress Topper",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-topper-standard.jpg",
        images: [
            "image/placeholder-topper-standard.jpg"
        ]
    },

    {
        id: 103,
        name: "Standard Topper Coming Soon",
        category: "Topper",
        subcategory: "Standard Mattress Topper",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-topper-standard.jpg",
        images: [
            "image/placeholder-topper-standard.jpg"
        ]
    },

    {
        id: 104,
        name: "Portable Topper Coming Soon",
        category: "Topper",
        subcategory: "Portable Mattress Topper",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-topper-portable.jpg",
        images: [
            "image/placeholder-topper-portable.jpg"
        ]
    },

    {
        id: 105,
        name: "Portable Topper Coming Soon",
        category: "Topper",
        subcategory: "Portable Mattress Topper",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-topper-portable.jpg",
        images: [
            "image/placeholder-topper-portable.jpg"
        ]
    },

    {
        id: 106,
        name: "Portable Topper Coming Soon",
        category: "Topper",
        subcategory: "Portable Mattress Topper",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-topper-portable.jpg",
        images: [
            "image/placeholder-topper-portable.jpg"
        ]
    },

    {
        id: 107,
        name: "Portable Topper Coming Soon",
        category: "Topper",
        subcategory: "Portable Mattress Topper",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-topper-portable.jpg",
        images: [
            "image/placeholder-topper-portable.jpg"
        ]
    },

    {
        id: 108,
        name: "Portable Topper Coming Soon",
        category: "Topper",
        subcategory: "Portable Mattress Topper",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-topper-portable.jpg",
        images: [
            "image/placeholder-topper-portable.jpg"
        ]
    },

    {
        id: 109,
        name: "Portable Topper Coming Soon",
        category: "Topper",
        subcategory: "Portable Mattress Topper",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-topper-portable.jpg",
        images: [
            "image/placeholder-topper-portable.jpg"
        ]
    },

    {
        id: 110,
        name: "Portable Topper Coming Soon",
        category: "Topper",
        subcategory: "Portable Mattress Topper",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-topper-portable.jpg",
        images: [
            "image/placeholder-topper-portable.jpg"
        ]
    },

    {
        id: 111,
        name: "Portable Topper Coming Soon",
        category: "Topper",
        subcategory: "Portable Mattress Topper",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-topper-portable.jpg",
        images: [
            "image/placeholder-topper-portable.jpg"
        ]
    },

    {
        id: 112,
        name: "Portable Topper Coming Soon",
        category: "Topper",
        subcategory: "Portable Mattress Topper",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-topper-portable.jpg",
        images: [
            "image/placeholder-topper-portable.jpg"
        ]
    },

    {
        id: 113,
        name: "Portable Topper Coming Soon",
        category: "Topper",
        subcategory: "Portable Mattress Topper",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-topper-portable.jpg",
        images: [
            "image/placeholder-topper-portable.jpg"
        ]
    },

    {
        id: 114,
        name: "Portable Topper Coming Soon",
        category: "Topper",
        subcategory: "Portable Mattress Topper",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-topper-portable.jpg",
        images: [
            "image/placeholder-topper-portable.jpg"
        ]
    },

    {
        id: 115,
        name: "Portable Topper Coming Soon",
        category: "Topper",
        subcategory: "Portable Mattress Topper",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-topper-portable.jpg",
        images: [
            "image/placeholder-topper-portable.jpg"
        ]
    },

    {
        id: 116,
        name: "Accessory Coming Soon",
        category: "Accessory",
        subcategory: "Mattress Accessories",
        price: 0,
        material: "Natural Latex",
        size: "Standard",
        firmness: "Medium",
        rating: 0,
        reviews: 0,
        image: "image/placeholder-mattress-accessories.jpg",
        images: [
            "image/placeholder-mattress-accessories.jpg"
        ],
        popular: true
    }

];


/* Helper: consistent LKR formatting site-wide, e.g. "Rs. 89,999" */
function formatPrice(amount) {
    return "Rs. " + Math.round(amount).toLocaleString("en-US");
}


/* Helper: product count for a given category value */
function countInCategory(value) {
    return products.filter(p => p.category === value).length;
}

/* Helper: look up a single product by id (URL param comes in as a string) */
function getProductById(id) {
    return products.find(p => p.id === Number(id));
}

/* Helper: category metadata for a product */
function getCategoryMeta(value) {
    return categories.find(c => c.value === value);
}

/* Helper: all subcategories belonging to a main category, in defined order */
function getSubcategoriesFor(categoryValue) {
    return subcategories.filter(s => s.parent === categoryValue);
}

/* Helper: subcategory metadata by value */
function getSubcategoryMeta(value) {
    return subcategories.find(s => s.value === value);
}

/* Helper: product count for a given subcategory value (0 for "coming soon") */
function countInSubcategory(value) {
    return products.filter(p => p.subcategory === value).length;
}

/* Helper: up to `limit` other products, preferring the same subcategory
   first, then the same main category, then falling back to top-rated
   products site-wide so a product page never runs out of suggestions */
function getRelatedProducts(product, limit = 4) {

    const sameSubcategory = products.filter(p =>
        p.subcategory === product.subcategory && p.id !== product.id
    );

    const sameCategory = products.filter(p =>
        p.category === product.category &&
        p.id !== product.id &&
        !sameSubcategory.includes(p)
    );

    const combined = [...sameSubcategory, ...sameCategory];

    if (combined.length >= limit) {
        return combined.slice(0, limit);
    }

    const filler = products
        .filter(p => p.id !== product.id && !combined.includes(p))
        .sort((a, b) => b.reviews - a.reviews);

    return [...combined, ...filler].slice(0, limit);

}

/* Helper: a readable description. Use product.description if it's been
   written by hand; otherwise generate one from the product's own attributes
   so every item in a 33+ item catalog gets a sensible page with zero manual work. */
function getProductDescription(product) {

    if (product.description) {
        return product.description;
    }

    const materialLower = product.material.toLowerCase();

    return `Crafted from ${materialLower}, this ${product.category.toLowerCase()} `
        + `is finished in a ${product.firmness.toLowerCase()} feel and sized for `
        + `${product.size.toLowerCase()} use. Naturally breathable and hypoallergenic, `
        + `built to hold its shape for years of everyday comfort.`;

}

/* Helper: spec list. Use product.specs if hand-written, otherwise build
   one from the structured fields every product already has. */
function getProductSpecs(product) {

    if (product.specs) {
        return product.specs;
    }

    return [
        `Material: ${product.material}`,
        `Size: ${product.size}`,
        `Firmness: ${getComfortLabel(product)}`,
        "Anti-Allergy & Breathable Structure",
        "10-Year Warranty",
        "Eco-Friendly Materials"
    ];

}

/* Helper: "Why choose this product" bullet points, shown as their own
   section on product.html, separate from Specifications. Use
   product.features if hand-written (3-5 short phrases work best);
   otherwise fall back to sensible points built from the product's own
   attributes, same pattern as getProductDescription/getProductSpecs. */
function getProductFeatures(product) {

    if (product.features) {
        return product.features;
    }

    return [
        `Premium ${product.material}, not synthetic filler`,
        `${product.firmness} feel, tuned for ${product.size.toLowerCase()} comfort`,
        "Naturally hypoallergenic & dust-mite resistant",
        "Breathable structure that stays cool through the night",
        "Holds its shape for years — no sagging or flattening"
    ];

}


/* =====================================================
   LAZOVA COMFORT SCALE (density-based firmness)
   -----------------------------------------------------
   Instead of only labelling products Soft / Medium / Firm,
   each product's foam density (kg/m³) places it on a
   continuous Soft ━━●━━ Firm scale.

   1) Fill in the density for each product in PRODUCT_DENSITY
      below (replace null with the real number, e.g. 45.2).
      You can also put `density: 45.2` directly inside a
      product entry — that takes priority over this table.
   2) COMFORT_SCALE.min / .max are the ends of the scale.
      softBelow / firmFrom are the cut-offs for the text label
      (below softBelow = Soft, from firmFrom up = Firm, between
      = Medium). They are currently equal thirds of the range —
      change them if your own grading differs.

   Products with no density yet keep their old Soft/Medium/Firm
   label and simply don't show a scale position.
===================================================== */

const COMFORT_SCALE = {
    min: 28.77,
    max: 63.49,
    softBelow: 40.34,
    firmFrom: 51.91
};

const PRODUCT_DENSITY = {
    1: 52.08,   // LAZOVA HalfNest
    2: null,   // LAZOVA ReForm 2 inch
    3: null,   // LAZOVA CloudSoft Cushions 2 inch
    4: null,   // LAZOVA CloudSoft Cushions 4 inch
    5: 44.22,   // LAZOVA GentleFlow
    6: 52.12,   // LAZOVA BabyNest
    7: 28.77,   // LAZOVA TravelEase
    8: null,   // LAZOVA Ergo Cushions 2 inch
    9: 35.71,   // LAZOVA TravelArc
    10: null,   // LAZOVA Ergo Cushions 4 inch
    11: null,   // Luxury Latex Mattress
    12: null,   // LAZOVA ReForm 4 inch
    13: 39.12,   // LAZOVA Bambino
    14: 41.5,   // LAZOVA PebbleRest
    15: 41.67,   // LAZOVA KidComfort
    16: 35.62,   // LAZOVA RoyalRest
    17: 45.09,   // LAZOVA Align
    18: 37.54,   // LAZOVA OrthoNest
    19: 47.24,   // LAZOVA DonutSupport
    20: 48.05,   // LAZOVA VentraRoll
    21: 41.96,   // LAZOVA HeadRest
    22: 49.68,   // LAZOVA Spinal Cushion
    23: 39.58,   // LAZOVA GrandRest
    24: 43.4,   // LAZOVA BreathFlow
    25: 39.22,   // LAZOVA CompactRest
    26: 38.69,   // LAZOVA MaxiFlow
    27: 44.06,   // LAZOVA TeenFlow
    28: 58.33,   // LAZOVA RollEase
    29: 49.9,   // LAZOVA EuroNest
    30: 38.89,   // LAZOVA ClassicRest
    31: 45.0,   // LAZOVA ComfortNest
    32: 60.92,   // LAZOVA GentlePebble
    33: 37.5,   // LAZOVA ClassicFlow
    34: 36.67,   // LAZOVA PureRest
    35: 37.71,   // LAZOVA RoyalComfort
    36: 63.49,   // LAZOVA BalanceRest
    37: 50.99,   // LAZOVA BadyFresh
    38: 40.49,   // LAZOVA CoreRoll
    39: 47.47,   // LAZOVA AeroRoll
    40: null,   // LAZOVA Ergo Cushions 4 inch
    41: 48.26,   // LAZOVA AirRest
};

/* Helper: density in kg/m³, or null if not entered yet */
function getProductDensity(product) {

    if (typeof product.density === "number") {
        return product.density;
    }

    const value = PRODUCT_DENSITY[product.id];
    return typeof value === "number" ? value : null;

}

/* Helper: true once at least one product has a density value */
function hasDensityData() {
    return products.some(p => getProductDensity(p) !== null);
}

/* Helper: 0-100 position along the Soft-Firm scale (null if no density) */
function getComfortPosition(product) {

    const density = getProductDensity(product);
    if (density === null) return null;

    const pct = (density - COMFORT_SCALE.min) / (COMFORT_SCALE.max - COMFORT_SCALE.min) * 100;
    return Math.min(100, Math.max(0, pct));

}

/* Helper: Soft / Medium / Firm text derived from density,
   falling back to the product's own firmness field */
function getComfortLabel(product) {

    const density = getProductDensity(product);
    if (density === null) return product.firmness;

    if (density < COMFORT_SCALE.softBelow) return "Soft";
    if (density >= COMFORT_SCALE.firmFrom) return "Firm";
    return "Medium";

}
