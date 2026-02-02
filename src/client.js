import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: 't3jgdmda',
    dataset: 'production',
    useCdn: true, // Enable CDN for faster responses
    apiVersion: '2023-05-03',
})
