const getDateString = (date: Date) =>
{
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
}

export default {
    getDateString,
}