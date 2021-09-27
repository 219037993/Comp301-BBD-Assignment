export const touchButtonHandler = async (onPressFunction) => {

    setTimeout(() => { onPressFunction(); }, 350, this);
};

export const fetchDataHandler = (url, options={}) => {

    return fetch(url, options).then(response => response.json());
};

export const getDArray = (array, comparisonKey) => {

    const DArray = array
            .map(e => e[comparisonKey])
            .map((e, i, final) => final.indexOf(e) === i && i)
            .filter(e => array[e]).map(e => array[e]);

    return DArray;
};