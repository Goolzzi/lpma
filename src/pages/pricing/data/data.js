import { growth } from './growth'
import { customer } from './customer'
import { membership } from './membership'

export const data = {
    sliderRange: [0, 3000],
    plans: [
        membership: membership,
        growth: growth,
        customer: customer,
    ]
}