export const fetchCountries = async () => {
  const url = 'https://restcountries.com/v3.1/region/ame'
  const response =  await fetch(url)
  const result = await response.json()
  return result
}
