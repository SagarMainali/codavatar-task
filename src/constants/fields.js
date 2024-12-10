const forAndId = Array.from({ length: 15 }, (_, index) => index + 1)

export default [
    {
        htmlFor: forAndId[0],
        label: 'Legal Name',
        type: 'text',
        id: forAndId[0],
        name: 'legalName',
        placeholder: 'Legal Name',
    },
    {
        htmlFor: forAndId[1],
        label: 'Doing business as',
        type: 'text',
        id: forAndId[1],
        name: 'doingBusinessAs',
        placeholder: 'Doing business as',
    },
    {
        htmlFor: forAndId[2],
        label: 'Company Registration Number',
        type: 'text',
        id: forAndId[2],
        name: 'companyRegistrationNumber',
        placeholder: 'Company Registration Number',
    },
    {
        htmlFor: forAndId[3],
        label: 'Random Registration Number',
        type: 'text',
        id: forAndId[3],
        name: 'randomRegistrationNumber',
        placeholder: 'Random Registration Number',
    },
    {
        htmlFor: forAndId[4],
        label: 'Website URL',
        type: 'text',
        id: forAndId[4],
        name: 'websiteURL',
        placeholder: 'Website URL',
    },
    {
        htmlFor: forAndId[5],
        label: 'Industry Name',
        type: 'text',
        id: forAndId[5],
        name: 'industryName',
        placeholder: 'Industry Name',
    },
    {
        htmlFor: forAndId[6],
        label: 'One Random Dropdown?',
        type: 'select',
        id: forAndId[6],
        name: 'dd1',
        placeholder: 'Options nai options',
    },
    {
        htmlFor: forAndId[7],
        label: 'Which dropdown would you like to select?',
        type: 'select',
        id: forAndId[7],
        name: 'dd2',
        placeholder: 'More Options',
    },
    {
        htmlFor: forAndId[8],
        label: 'Another Random Dropdown Appears',
        type: 'select',
        id: forAndId[8],
        name: 'dd3',
        placeholder: 'Return of the options',
    },
    {
        htmlFor: forAndId[9],
        label: 'Account Usage Intent',
        type: 'select',
        id: forAndId[9],
        name: 'accountUsageIntent',
        placeholder: 'Account Usage Intent',
    },
    {
        htmlFor: forAndId[10],
        label: 'Random count per month',
        type: 'text',
        id: forAndId[10],
        name: 'randomCountPerMonth',
        placeholder: 'Put the value get the answer',
    },
    {
        htmlFor: forAndId[11],
        label: 'Expected total visits in this page',
        type: 'text',
        id: forAndId[11],
        name: 'expectedTotalVisits',
        placeholder: 'In Number',
    },
    {
        htmlFor: forAndId[12],
        label: 'Purpose of using fake form',
        type: 'textarea',
        id: forAndId[12],
        name: 'purposeOfUsingFakeForm',
        placeholder: 'Purpose of using fake form',
    },
    {
        htmlFor: forAndId[13],
        label: 'Ek description toh banta hai',
        type: 'textarea',
        id: forAndId[13],
        name: 'productDescription',
        placeholder: 'Product Description',
    },
    {
        htmlFor: forAndId[14],
        label: 'Contact email',
        type: 'email',
        id: forAndId[14],
        name: 'email',
        placeholder: 'Contact email',
    }
]