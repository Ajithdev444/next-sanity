const gallery = {
    name: "gallery",
    title: "Gallery",
    type: "document",
    fields: [
        {
            name : "name",
            title: "Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options : {
                source : "name",
                maxLength : 96,
            },
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot : true},
            fields : [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string",
                }
            ]
        },
        {
            name : "description",
            title: "Description",
            type: "string",
        }
    ]

}
export default gallery