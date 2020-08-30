import { getChartDataByCountry } from '../utils/charts';

export const getLiveCountryList = currentCase => state => getChartDataByCountry(state.live.list, currentCase);
