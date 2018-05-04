export const membership = {
    heading: 'LPMA Membership',
    subheading: 'Join the largest global network of property management leaders ',
    description: `
        As an LPMA member you’ll receive access to things like the Foundry, 
        discounts to our flagship PM events, and business planning basics.
    `,
    pricing: [
        {
            range: [1, 9999],
            monthly: 99
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