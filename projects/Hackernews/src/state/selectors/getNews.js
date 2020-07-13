const getVariants = state => {
    const data = state?.news?.columns?.data;
    return { 
        news: data,
        hasNews: data !== undefined
    }
};

export default getVariants;