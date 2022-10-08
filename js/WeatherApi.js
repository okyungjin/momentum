export default class WeatherApi {
  static API_END_POINT = 'https://api.openweathermap.org/data/2.5/weather';

  static API_KEY = 'ff620f61328437bb382b326fb9765fea';

  /**
   * @param coords { latitude: number, longitude: number }
   * @returns {locationName: string, weather: string, celsiusTemp: number} celsiusTemp - 섭씨 온도
   */
  static async getWeatherWithLocationNameByCoords(coords) {
    const { latitude, longitude } = coords;
    const url = `${this.API_END_POINT}?lat=${latitude}&lon=${longitude}&appid=${this.API_KEY}&units=metric`;
    const res = await fetch(url).then(res => res.json());

    const locationName = res.name;
    const weather = res.weather[0].main;
    const celsiusTemp = res.main.temp;

    return {
      locationName,
      weather,
      celsiusTemp,
    };
  }
}