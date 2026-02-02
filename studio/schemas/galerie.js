export default {
    name: 'galerie',
    title: 'Galerie',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Titlu',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Imagine',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
}
