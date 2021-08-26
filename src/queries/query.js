const getCards = async (pageNumber) => {
  const url = new URL("https://jsonplaceholder.typicode.com/posts");

  const params = { _start: pageNumber, _limit: 10 };
  url.search = new URLSearchParams(params).toString();

  console.log(url);

  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getCards;
