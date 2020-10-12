exports.getNext = async(event) => {
    const {
        count,
        step
    } = event
    return {
        step1: step,
        count1: count,
        nextIndex: count + step
    };
};
