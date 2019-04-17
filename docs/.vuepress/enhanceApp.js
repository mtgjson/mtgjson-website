import landcycle from './scripts/Landcycle';

export default async ({ Vue }) => {
  // Hydration class to parse linked data in JSON schemas
  Vue.prototype.$landcycle = landcycle;
};
