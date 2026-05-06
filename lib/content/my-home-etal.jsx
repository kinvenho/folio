import { GlyphWord } from "@/components/ui/GlyphWord";

export const content = {
    title: "MyHomeEtal",
    paragraphs: [
        <>A daring project, with a lot to offer and even more to figure out. <GlyphWord href="https://myhomeetal.com" target="_blank">MyHomeEtal</GlyphWord> is a Lagos-based ecommerce store with a clear ambition — compete with the experience platforms like <GlyphWord href="https://amazon.com" target="_blank">Amazon</GlyphWord> have spent years perfecting. Familiar enough to trust, distinct enough to remember. That tension is where the interesting design work lives.</>,
        <>I led product design alongside <GlyphWord>oluwafemidesign</GlyphWord>, who laid the foundations while I built upward from them. Just over two months, three major deliverables: the website, a mobile app, and an admin portal. This case study focuses on the website, specifically the four sections where the most meaningful design decisions were made.</>,
        `Ecommerce in the Nigerian market carries its own behaviours and expectations. Trust is harder to establish, decision making is more deliberate, and tolerance for friction is low. MyHomeEtal needed a design that respected that reality. Not just something that looked good, but something that actively moved users toward a decision at every scroll.`,
    ],
    sections: [
        {
            heading: "Landing Page.",
            body: `Almost a week of iterations and user feedback to land on something worth shipping. The goal: make a first time visitor feel like they are in the right place, immediately.\n\nNavigation was the first thing to get right. The platform had a wide range of features but we pushed back on surfacing all of them. Visible complexity costs the user something. We consolidated everything into eight anchor points: categories, deals, referrals, search, account, help, cart, and a country selector. Below the nav, three always-in-motion banners serving as ad space for promotions. The motion was intentional, pulling attention and creating a faster path to decision making. Additional banners placed further down re-engage users who scroll too far without clicking. In ecommerce, scrolling that goes on too long is a problem.\n\nFor product previews, varying image dimensions across vendors was a real challenge. Rather than designing around inconsistency we put together an internal document outlining image property guidelines across the site. Small decision, big impact on cohesion.`,
        },
        {
            heading: "Product Search.",
            body: `This one was fun. The question was how much control to give users without overwhelming them. Taking inspiration from Jumia we landed on three primary filters: sort, discount, and price. Products displayed in cards with vertical and horizontal layouts. Minimal, intentional, with more filters scoped for a future phase.`,
        },
        {
            heading: "Product Page.",
            body: `Where users make their final call, and where most platforms get in their own way. We combined image selectors, breadcrumbs, product stats, a CTA, and a location selector, leaning heavily into spacing and button placement on desktop.\n\nThe feedback was that it felt clear at a moment most ecommerce sites introduce confusion. When a user is on the verge of committing, the design should be getting quieter, not louder.`,
        },
        {
            heading: "Checkout.",
            body: `Linear and clean: product page > checkout > user info form > payment wall > order complete. Delivery details functioned as a stamp, clicking to change opened a modal connected to the address book, a feature we shipped letting users store multiple addresses cleanly. The checkout felt lighter than it was. The complexity was still there, we just stopped making the user feel it.`,
        },
        {
            heading: "Honourable Mentions.",
            body: [
                <>Referral program, wallet, order tracking, my shop, my deals. Each designed with the same thinking: simplify rather than amplify.</>,
                <><GlyphWord href="https://myhomeetal.com" target="_blank">MyHomeetal</GlyphWord> shipped cleaner and faster than most projects I have worked on. Working with <GlyphWord>oluwafemidesign</GlyphWord> meant the foundations were solid before I touched them. Client feedback created friction at times but the design direction stayed consistent throughout. The biggest lesson was restraint. Every section had a version that did more. In almost every case, the version that did less performed better.</>,
            ],
        },
    ],
};
