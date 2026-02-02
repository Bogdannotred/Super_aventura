export default {
    name: 'eveniment',
    title: 'Eveniment',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Titlu',
            type: 'string',
        },
        {
            name: 'date',
            title: 'Data',
            type: 'datetime',
        },
        {
            name: 'description',
            title: 'Descriere',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Imagine',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'details',
            title: 'Detalii Complete',
            type: 'array',
            of: [{ type: 'block' }]
        },
        // --- English Fields ---
        {
            name: 'title_en',
            title: 'Titlu (Engleză)',
            type: 'string',
        },
        {
            name: 'description_en',
            title: 'Descriere (Engleză)',
            type: 'text',
        },
        {
            name: 'details_en',
            title: 'Detalii Complete (Engleză)',
            type: 'array',
            of: [{ type: 'block' }]
        }
    ],
}
