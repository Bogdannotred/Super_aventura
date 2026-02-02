import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: 't3jgdmda',
    dataset: 'production',
    useCdn: false, // Turn off CDN for fresh updates
    apiVersion: '2023-05-03',
})
