const idGenerator = function(type) {
    return function* (initial) {
        let id = initial;
        while (true) {
            yield type ? `${type}_${++id}` : ++id;
        }
    };
};


export default idGenerator