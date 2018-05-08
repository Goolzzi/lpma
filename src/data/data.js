import { growth } from './growth'
import { customer } from './customer'
import { membership } from './membership'

export const data = {
    sliderRange: [1, 3000],
    sliderHeading: 'Choose your number of properties under management',
    plans: [
        membership: membership,
        growth: growth,
        customer: customer,
    ]
}