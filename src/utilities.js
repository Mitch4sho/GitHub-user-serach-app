const getDate = (date) => {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const year = new Date(date).getFullYear();
    const month = months[new Date(date).getMonth()];
    const day = new Date(date).getDate();
    return [year, month, day];
};

export default getDate;