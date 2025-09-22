import { servicesData } from './services-data'

export async function generateStaticParams() {
  return Object.keys(servicesData).map((serviceId) => ({
    id: serviceId,
  }))
}