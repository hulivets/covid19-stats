import { getWorldChartData } from '../utils/charts';

export const getWorldList = currentCase => state => getWorldChartData(state.world.list, currentCase);
