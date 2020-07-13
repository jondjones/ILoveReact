import snakeToCamel from '../../utils/convertToCamelCase';

const getColumns = state => {
    const items = state?.columns?.columns?.body;
    const columns = items?.reduce(function(filtered, item) {
        if (item.is_hidden === false) {
           filtered.push(item.key_name);
        }
        return filtered;
      }, []);

    // as hidden implmentation from view
    // finding it hard to demo in a good way why to do the snake case to camel case
    // returning very simple prop conversation to hit the mark
    const test = items?.[0];

    if(test) {
        snakeToCamel(test);
    }
    
    return {
        columns
    }
};

export default getColumns;