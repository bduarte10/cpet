const API_URL = 'https://api.bolsamaisbrasil.com.br';

export async function getCourses() {
  const data = await fetch(`${API_URL}/courses/get?level=10&school=295`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });

  return data;
}

export const getCourseById = async (id: number) => {
  const data = await fetch(`${API_URL}/scholarships/get?school=295&level=10&course=${id}&unit=7902&uid=2332
  `)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });

  return data;
};
