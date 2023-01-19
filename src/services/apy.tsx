const API_URL = "https://apy.willz.repl.co";

export async function getAllLaunches() {
  try {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getLaunchByFlightNumber(flightNumber) {
  try {
    const response = await fetch(`${API_URL}/launches/${flightNumber}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}