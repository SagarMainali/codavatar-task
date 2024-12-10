export default {
    control: () => ({
        height: '44px',
        borderWidth: '1px',
        borderColor: '#D7DADC',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px',
        cursor: 'pointer',
        padding: '6px'
    }),
    option: (baseStyles) => ({
        ...baseStyles,
        cursor: 'pointer',
        fontSize: '14px'
    }),
    placeholder: (baseStyles) => ({
        ...baseStyles,
        color: '#9B9B9B'
    }),
    dropdownIndicator: (baseStyles) => ({
        ...baseStyles,
        color: '#9B9B9B',
        svg: {
            width: '16px',
            height: '16px',
        },
    }),
    indicatorSeparator: (baseStyles) => ({
        ...baseStyles,
        display: 'none',
    }),
    clearIndicator: (baseStyles) => ({
        ...baseStyles,
        color: '#9B9B9B',
        svg: {
            width: '16px',
            height: '16px',
        }
    }),
    noOptionsMessage: (baseStyles) => ({
        ...baseStyles,
        fontSize: '14px',
        color: '#848687'
    })
}