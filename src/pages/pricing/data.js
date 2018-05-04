export const data = {
    tiers: {
        growth: {
            pricing: [
                {
                    range: [1, 50],
                    pricing: 299
                },
                {
                    range: [51, 125],
                    pricing: 269
                },
            ],
            features: [
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
                            text: '10 suburbs in your LPMA Growth Model'
                        },
                        {
                            range: [1000, 9999],
                            text: 'Unlimited number of suburbs in your LPMA Growth Model'
                        }
                    ]
                },
                {
                    title: 'benchmark',
                    variants: [
                        {
                            range: [51, 9999],
                            text: 'Benchmark your growth'
                        },
                    ]
                },
            ]
        }
    }
}