export const customer = {
    heading: 'Customer Excellence',
    subheading: 'The smartest way of tracking and understanding your team’s offering',
    description: `
        Learn from the people who know your service best, your clients.
        Utilise intelligent, trigger based client survey tools to make your offering the best it can be. 
    `,
    pricing: [
        {
            range: [1, 50],
            monthly: 75
        },
        {
            range: [51, 125],
            monthly: 99
        },
        {
            range: [126, 249],
            monthly: 249
        },
        {
            range: [250, 399],
            monthly: 349
        },
        {
            range: [400, 599],
            monthly: 499
        },
        {
            range: [600, 999],
            monthly: 799
        },
        {
            range: [1000, 2999],
            monthly: 999
        },
        {
            range: [3000, 9999],
            monthly: 1499
        },
    ],
    features: [
        {
            title: 'survey',
            variants: [
                {
                    range: [1, 9999],
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