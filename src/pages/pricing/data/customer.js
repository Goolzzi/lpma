export const customer = {
    heading: 'Growth Planning',
    subheading: 'Join the largest global network of property management leaders',
    description: `
        As an LPMA member you'll recieve access to things like the Foundry,
        discounts to our flagship PM events, and business plannnig basics
    `,
    pricing: [
        {
            range: [1, 50],
            monthly: 69,
        },
        {
            range: [51, 125],
            monthly: 99,
        },
        {
            range: [126, 249],
            monthly: 179
        },
        {
            range: [126, 249],
            monthly: 219
        },
    ],
    features: [
        {
            title: 'survey',
            variants: [
                {
                    range: [51, 9999],
                    text: 'Survey your current investors at key stages'
                },
            ]
        },
        {
            title: 'suburbs',
            variants: [
                {
                    range: [51, 249],
                    text: '5 suburbs in your LPMA Growth Model'
                },
                {
                    range: [250, 599],
                    text: '10 suburbs in your LPMA Growth Model'
                },
                {
                    range: [600, 999],
                    text: '25 suburbs in your LPMA Growth Model'
                },
                {
                    range: [1000, 9999],
                    text: 'Unlimited number of suburbs in your LPMA Growth Model'
                }
            ]
        },
    ]

}