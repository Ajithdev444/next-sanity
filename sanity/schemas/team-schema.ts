const team = {
    name:"team",
    title: "Team",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Job",
            type: "string",
        },
        {
            name: "number",
            title: "Number",
            type: "number",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source : "name"},
        },
        {
            name: "location",
            title: "Location",
            type: "string",
        },
        {
            name: "department",
            title: "Department",
            type: "string",
        },
        {
            name: "qualifications",
            title: "Qualifications",
            type: "array",
            of: [{ type: "block"}]
        },
        {
            name: "aboutthejob",
            title: "Aboutthejob",
            type: "array",
            of: [{ type: "block"}]
        },
        {
            name: "responsibilities",
            title: "Responsibilities",
            type: "array",
            of: [{ type: "block"}]
        },
    ]

}
export default team