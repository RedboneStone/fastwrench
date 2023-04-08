import add from 'lodash/add';

const a = (b) => {
    return b * b
};

const addSafe = (a, b) => {
    return add(a, b)
};

export { a, addSafe };
