const getVariants = state => {
    const creativeList = state?.variants?.variants?.body?.creative_list;
    const result = creativeList?.map((item) => item.working_data)
    const frame = result?.[0]?.frames || {};
    return { 
        ...frame?.first?.content
    }
};

export default getVariants;